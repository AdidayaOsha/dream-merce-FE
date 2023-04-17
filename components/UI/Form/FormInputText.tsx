// CORE
import { useState, useCallback } from 'react';

// COMPONENTS
import { m } from 'framer-motion';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';

// FORMIK
import { FieldHookConfig, useField } from 'formik';

// TYPES
type OtherProps = {
   label?: string | undefined;
};
// We need to extend our custom type with React JSX.IntrinsicElements type definition;
// https://dev.to/bnn1/custom-formik-components-with-typescript-and-chakra-ui-3f3c;
type FormInputTextProps = OtherProps & FieldHookConfig<string> & JSX.IntrinsicElements['input'];

const FormInputText = ({ label, type = 'text', ...props }: FormInputTextProps) => {
   // INPUT TYPE
   const asPassword = type === 'password';

   // PASSWORD
   const [inputType, setInputType] = useState('password');
   const togglePassword = useCallback(
      () => setInputType((curr) => (curr === 'password' ? 'text' : 'password')),
      []
   );

   // FORMIK
   const [field, meta] = useField(props);
   const isError = meta.touched && meta.error;

   return (
      <section className="flex flex-col">
         {label && (
            <m.label
               htmlFor={props.name}
               whileTap={{ scale: 0.95 }}
               className="w-fit text-lg font-bold mb-[2px] cursor-pointer"
            >
               {label}
            </m.label>
         )}

         <div className="h-16 flex flex-col">
            <div className="w-full flex items-center relative">
               <input
                  {...field}
                  {...props}
                  type={asPassword ? inputType : type}
                  className={`w-full flex items-center py-2 px-3 bg-gray-50 placeholder:text-gray-400 placeholder:text-opacity-70 placeholder:font-bold rounded-2xl border focus:outline-none ${
                     isError
                        ? 'ring-1 ring-red-400'
                        : 'hover:ring-1 hover:ring-offset-1 hover:ring-slate-300'
                  } ${
                     asPassword ? 'pr-9' : ''
                  } font-medium cursor-pointer disabled:cursor-default disabled:opacity-50 disabled:hover:ring-0`}
               />

               {asPassword ? (
                  <m.span
                     whileTap={{ scale: 0.95 }}
                     onClick={togglePassword}
                     className="absolute z-[1] right-3 cursor-pointer"
                  >
                     {inputType === 'password' ? (
                        <EyeIcon className="h-4 w-4 text-gray-600 hover:text-red-500 cursor-pointer transition" />
                     ) : (
                        <EyeSlashIcon className="h-4 w-4 text-gray-600 hover:text-red-500 cursor-pointer transition" />
                     )}
                  </m.span>
               ) : null}
            </div>
            {isError && (
               <span className="ml-2 mt-1 text-xs text-red-400 font-semibold">{meta.error}</span>
            )}
         </div>
      </section>
   );
};

export default FormInputText;
