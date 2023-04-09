// CORE
import { useState, useCallback } from 'react';

// COMPONENTS
import { motion } from 'framer-motion';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';

// FORMIK
import { FieldHookConfig, useField } from 'formik';

// TYPES
type OtherProps = {
   label?: string | undefined;
};
// We need to extend our custom type with React JSX.InstricElement type definition;
// https://dev.to/bnn1/custom-formik-components-with-typescript-and-chakra-ui-3f3c;
type FormInputTextProps = OtherProps & FieldHookConfig<string> & JSX.IntrinsicElements['input'];

const FormInputText = ({ label, type = 'text', ...props }: FormInputTextProps) => {
   // TYPE
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
            <motion.label
               htmlFor={props.name}
               whileTap={{ scale: 0.95 }}
               className="w-fit text-lg font-bold mb-[2px] cursor-pointer"
            >
               {label}
            </motion.label>
         )}

         <div className="w-full flex items-center relative">
            <input
               {...field}
               {...props}
               type={asPassword ? inputType : type}
               className={`w-full flex items-center p-2 bg-gray-50 placeholder:text-gray-400 placeholder:text-opacity-75 placeholder:font-semibold rounded-md border focus:outline-none ${
                  isError ? 'ring-1 ring-red-500' : ''
               } ${asPassword ? 'pr-9' : ''} disabled:cursor-default`}
            />

            {asPassword ? (
               <motion.span
                  whileTap={{ scale: 0.95 }}
                  onClick={togglePassword}
                  className="absolute z-[1] right-3 cursor-pointer"
               >
                  {inputType === 'password' ? (
                     <EyeIcon className="h-4 w-4 text-gray-600" />
                  ) : (
                     <EyeSlashIcon className="h-4 w-4 text-gray-600" />
                  )}
               </motion.span>
            ) : null}
         </div>
         {isError && <span className="ml-1 mt-1 text-xs text-red-500">{meta.error}</span>}
      </section>
   );
};

export default FormInputText;
