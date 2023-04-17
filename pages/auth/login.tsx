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
   email: string;
   password: string;
};
const initialValues: InitialValues = {
   email: '',
   password: '',
};
const validationSchema = Yup.object({
   email: Yup.string().email('Invalid email').required('Email is required'),
   password: Yup.string()
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/, 'Invalid password')
      .required('Password is required'),
});

const LoginPage = () => {
   // ROUTER
   const router = useRouter();

   return (
      <>
         <Head>
            <title>Login | Dreammerce</title>
            <meta title="description" content="This is the Dreammerce login page" />
         </Head>

         <section className="h-screen relative cursor-default">
            {/* Background Image */}
            <div className="absolute inset-0">
               <Image
                  src="/images/background/login-bg.jpeg"
                  alt="login-bg"
                  fill
                  quality={100}
                  className="w-full h-full object-cover"
                  draggable={false}
               />
            </div>

            {/* Actual Page Content */}
            <section className="h-full w-full p-3 lg:p-0 relative z-[1] flex justify-center lg:justify-start items-center">
               <article className="w-full md:w-1/2 lg:w-[400px] lg:h-full py-3 px-8 lg:px-9 bg-white rounded-3xl lg:rounded-none flex flex-col justify-center gap-3 shadow-md">
                  <section className="w-full py-4 flex justify-center">
                     <m.span
                        whileTap={{ scale: 0.95 }}
                        onClick={() => router.push('/')}
                        className="text-2xl font-extrabold text-red-500 cursor-pointer"
                     >
                        LOGO HERE
                     </m.span>
                  </section>

                  <section className="w-full flex justify-center mb-3">
                     <div className="flex items-center gap-1 lg:gap-[6px] tracking-normal text-xl lg:text-2xl font-extrabold">
                        <span className="text-red-500">Login</span>
                        <span>to your Account.</span>
                     </div>
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
                        <span className="text-sm font-bold">Login with Google</span>
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
                        <span className="text-sm font-bold">Login with Apple</span>
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
                           setSubmitting(false);
                           setStatus('success');
                        }, 3000);
                     }}
                     validateOnMount
                  >
                     {({ handleSubmit, isValid, isSubmitting, status }) => (
                        <form onSubmit={handleSubmit} className="w-full flex flex-col">
                           <FormInputText
                              type="email"
                              name="email"
                              autoComplete="email"
                              placeholder="Email"
                              disabled={isSubmitting}
                           />
                           <FormInputText
                              type="password"
                              name="password"
                              autoComplete="current-password"
                              placeholder="Password"
                              disabled={isSubmitting}
                           />

                           <div className="w-full mt-2 flex justify-center">
                              <AnimatedButton
                                 type="submit"
                                 disabled={!isValid || isSubmitting}
                                 loading={isSubmitting}
                                 success={status === 'success'}
                                 loadingText="Logging in..."
                                 finishedText="Redirecting..."
                              >
                                 Login
                              </AnimatedButton>
                           </div>
                        </form>
                     )}
                  </Formik>

                  <section className="w-full py-3 flex justify-center gap-1 text-sm font-bold">
                     <span>Don't have an account?</span>
                     <m.span
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ filter: `brightness(120%)` }}
                        onClick={() => router.push('/auth/register')}
                        className="text-red-500 cursor-pointer"
                     >
                        Sign-in
                     </m.span>
                  </section>
               </article>
            </section>
         </section>
      </>
   );
};

export default LoginPage;
