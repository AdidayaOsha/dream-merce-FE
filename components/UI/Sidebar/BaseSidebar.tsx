// COMPONENTS
import { AnimatePresence, Variants, motion } from 'framer-motion';

// FRAMER-MOTION VARIANTS
const overlayVariants: Variants = {
   start: {
      opacity: 0,
   },
   animate: {
      opacity: 1,
   },
   exit: {
      opacity: 0,
      transition: {
         delay: 0.3,
      },
   },
};
const sidebarVariants: Variants = {
   open: { x: 0 },
   close: (isRight: boolean) => ({
      x: isRight ? '100%' : '-100%',
   }),
};

// TYPES
type BaseSidebarProps = {
   open: boolean;
   close: () => void;
   children: React.ReactNode;
   direction?: 'left' | 'right';
   overlayClassname?: string;
   sidebarClassname?: string;
};

const BaseSidebar = ({
   open,
   close,
   children,
   direction = 'left',
   overlayClassname = '',
   sidebarClassname = '',
}: BaseSidebarProps) => {
   // DIRECTION;
   const isRight = direction === 'right';

   return (
      <AnimatePresence custom={isRight} mode="wait">
         {open && (
            <>
               <motion.div
                  custom={isRight}
                  variants={overlayVariants}
                  initial="start"
                  animate="animate"
                  exit="exit"
                  onClick={close}
                  className={`fixed z-[9000] inset-0 bg-black bg-opacity-50 ${overlayClassname}`}
               ></motion.div>
               <motion.div
                  custom={isRight}
                  variants={sidebarVariants}
                  initial="close"
                  animate="open"
                  exit="close"
                  transition={{ bounce: 0 }}
                  onClick={(e) => e.stopPropagation()}
                  className={`w-3/4 md:w-1/2 lg:w-1/3 h-screen absolute z-[9001] bg-white ${
                     isRight ? 'right-0' : 'left-0'
                  } ${sidebarClassname}`}
               >
                  {children}
               </motion.div>
            </>
         )}
      </AnimatePresence>
   );
};

export default BaseSidebar;
