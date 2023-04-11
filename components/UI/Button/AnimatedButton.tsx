// COMPONENTS
import { AnimatePresence, Variants, motion } from 'framer-motion';

type AnimatedButtonProps = {
   type?: 'button' | 'reset' | 'submit' | undefined;
   disabled?: boolean | undefined;
   loading: boolean;
   success: boolean;
   children: string;
   onClick?: () => void | undefined;
   loadingText?: string | undefined;
   finishedText?: string | undefined;
   btnClassname?: string;
};

const loadingVariants: Variants = {
   start: { y: '100%' },
   animate: { y: 0 },
   exit: { y: '100%' },
};
const contentVariants: Variants = {
   start: (success) => ({ y: success ? '-100%' : 0 }),
   animate: { y: 0 },
   exit: { y: '-100%' },
};

const AnimatedButton = ({
   type = 'button',
   disabled,
   loading,
   success,
   children,
   onClick,
   loadingText,
   finishedText,
   btnClassname = '',
}: AnimatedButtonProps) => {
   return (
      <motion.button
         type={type}
         whileTap={{ scale: 0.95 }}
         whileHover={{ filter: `brightness(110%)` }}
         disabled={disabled}
         onClick={onClick}
         className={`w-full flex flex-col justify-center items-center border border-gray-300 rounded-3xl overflow-hidden text-base font-bold bg-red-400 disabled:bg-opacity-40 cursor-pointer disabled:pointer-events-none ${btnClassname}`}
      >
         <AnimatePresence mode="wait" custom={success}>
            {loading ? (
               <motion.div
                  key={'loading'}
                  variants={loadingVariants}
                  initial="start"
                  animate="animate"
                  exit="exit"
                  transition={{ bounce: 0 }}
                  className="w-full h-11 flex items-center justify-center gap-2 relative z-0"
               >
                  <svg
                     className="animate-spin h-4 w-4 text-black"
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                  >
                     <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                     ></circle>
                     <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                     ></path>
                  </svg>

                  {loadingText && <span>{loadingText}</span>}
               </motion.div>
            ) : (
               <motion.div
                  key={'content'}
                  custom={success}
                  variants={contentVariants}
                  initial="start"
                  animate="animate"
                  exit="exit"
                  transition={{ bounce: 0 }}
                  className="w-full h-11 flex items-center justify-center relative z-0"
               >
                  <span>{success && finishedText ? finishedText : children}</span>
               </motion.div>
            )}
         </AnimatePresence>
      </motion.button>
   );
};

export default AnimatedButton;
