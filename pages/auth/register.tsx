// CORE
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

// COMPONENTS
import { m } from 'framer-motion';
import FormInputText from '@/components/UI/Form/FormInputText';
import AnimatedButton from '@/components/UI/Button/AnimatedButton';

// FORM
import { Formik } from 'formik';
import * as Yup from 'yup';

// FORM VALUES
type InitialValues = {
   fullName: string;
   username: string;
   phoneNumber: string;
   email: string;
   password: string;
};
const initialValues: InitialValues = {
   fullName: '',
   username: '',
   phoneNumber: '',
   email: '',
   password: '',
};
const validationSchema = Yup.object({
   fullName: Yup.string()
      .matches(/^[a-z ,.'-]+$/i, 'Invalid full name')
      .max(255, 'Max. 255 chars')
      .required('Full name is required'),
   username: Yup.string()
      .matches(/^[A-Za-z][A-Za-z0-9_]{6,40}$/, 'Min. 7, max. 40 chars, alphanumeric and "_"')
      .required('Username is required'),
   phoneNumber: Yup.string()
      .matches(/^(\+62|62)?[\s-]?0?8[1-9]{1}\d{1}[\s-]?\d{4}[\s-]?\d{2,5}$/, 'Invalid phone number')
      .required('Phone number is required'),
   email: Yup.string().email('Invalid email').required('Email is required'),
   password: Yup.string()
      .matches(
         /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/,
         'Min. 8, Max. 16, 1 uppercase, lowercase, number'
      )
      .required('Password is required'),
});

const RegisterPage = () => {
   // ROUTER
   const router = useRouter();

   return (
      <>
         <Head>
            <title>Create Account | Dreammerce</title>
            <meta
               name="description"
               content="This is Dreammerce register page for creating new accounts."
            />
         </Head>

         <section className="w-full h-screen cursor-default">
            {/* Image Wrapper */}
            <section className="absolute inset-0">
               <Image
                  src="/images/background/register-bg.jpeg"
                  alt="register-bg"
                  fill
                  quality={100}
                  className="w-full h-full object-cover"
                  draggable={false}
               />
            </section>

            {/* Actual Page Content */}
            <section className="w-full h-full relative z-[1] p-3 lg:p-0 flex flex-col justify-center items-center lg:items-end">
               <span
                  className="absolute top-3 left-3 text-red-500 text-xl lg:text-2xl font-extrabold cursor-pointer"
                  onClick={() => router.push('/')}
               >
                  LOGO HERE
               </span>

               <article className="w-full md:w-1/2 lg:w-[400px] lg:h-full my-auto lg:my-0 bg-white rounded-3xl lg:rounded-none py-3 px-8 lg:px-9 lg:py-5 flex flex-col justify-center items-center gap-2 shadow-md">
                  <section className="py-5 flex flex-col items-center gap-3 lg:gap-4">
                     <div
                        role="heading"
                        className="flex items-center gap-1 lg:gap-[6px] text-2xl lg:text-3xl font-extrabold"
                     >
                        <span>Create your</span>
                        <span className="text-red-500">Account</span>
                     </div>
                     <span className="lg:w-[85%] text-xs lg:text-sm font-bold text-center text-opacity-80">
                        Register now and start to manage your waste sustainably and responsibly.
                     </span>
                  </section>

                  <section className="w-full flex flex-col items-center gap-3">
                     {/* Google Login */}
                     <m.button
                        whileTap={{ scale: 0.95 }}
                        className="w-[85%] h-11 rounded-3xl border flex items-center justify-center gap-3 cursor-pointer lg:hover:bg-slate-100"
                     >
                        <img
                           src="/images/logo/google-logo.svg"
                           alt="google-icon"
                           className="h-4 w-4"
                        />
                        <span className="text-sm font-bold">Sign-in with Google</span>
                     </m.button>

                     {/* Apple Login */}
                     <m.button
                        whileTap={{ scale: 0.95 }}
                        className="w-[85%] h-11 rounded-3xl border flex items-center justify-center gap-3 cursor-pointer lg:hover:bg-slate-100"
                     >
                        <img
                           src="/images/logo/apple-logo.svg"
                           alt="google-icon"
                           className="h-4 aspect-square object-contain"
                        />
                        <span className="text-sm font-bold">Sign-in with Apple</span>
                     </m.button>
                  </section>

                  <section className="w-full my-2 flex justify-center items-center relative before:h-px before:flex-1 before:bg-gray-300 before:relative before:left-0 after:h-px after:flex-1 after:bg-gray-300 after:relative after:right-0">
                     <span className="px-2 text-sm text-red-500 font-bold">Or</span>
                  </section>

                  <Formik
                     initialValues={initialValues}
                     validationSchema={validationSchema}
                     onSubmit={(v, { setSubmitting, setStatus }) => {
                        setTimeout(() => {
                           console.log(v);
                           setSubmitting(false);
                           setStatus('success');
                        }, 3000);
                     }}
                     validateOnMount
                  >
                     {({ handleSubmit, isValid, isSubmitting, status }) => (
                        <form
                           className="w-full px-1 flex flex-col gap-[3px]"
                           onSubmit={handleSubmit}
                        >
                           <FormInputText
                              name="fullName"
                              placeholder="Full Name"
                              autoComplete="name"
                              disabled={isSubmitting}
                           />
                           <FormInputText
                              name="username"
                              placeholder="Username"
                              autoComplete="username"
                           />
                           <FormInputText
                              type="tel"
                              name="phoneNumber"
                              placeholder="Phone Number"
                              autoComplete="tel"
                              disabled={isSubmitting}
                           />
                           <FormInputText
                              type="email"
                              name="email"
                              placeholder="Email"
                              autoComplete="email"
                              disabled={isSubmitting}
                           />
                           <FormInputText
                              type="password"
                              name="password"
                              placeholder="Password"
                              autoComplete="new-password"
                              disabled={isSubmitting}
                           />

                           <section className="w-full mt-2">
                              <AnimatedButton
                                 type="submit"
                                 disabled={!isValid || isSubmitting}
                                 loading={isSubmitting}
                                 success={status === 'success'}
                                 loadingText="Creating account..."
                                 finishedText="Redirecting..."
                              >
                                 Register
                              </AnimatedButton>
                           </section>
                        </form>
                     )}
                  </Formik>

                  <section className="py-3 flex justify-center">
                     <div className="flex items-center gap-1 text-sm font-bold">
                        <span>Already have an account?</span>
                        <m.span
                           whileTap={{ scale: 0.95 }}
                           whileHover={{ filter: `brightness(120%)` }}
                           onClick={() => router.push('/auth/login')}
                           className="text-red-500 cursor-pointer"
                        >
                           Login
                        </m.span>
                     </div>
                  </section>
               </article>
            </section>
         </section>
      </>
   );
};

export default RegisterPage;
