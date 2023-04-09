// CORE
import { useEffect } from 'react';

// COMPONENTS
import { AnimatePresence, motion, Variants } from 'framer-motion';

type ModalProps = {
   open: boolean;
   close: () => void;
   children: React.ReactNode;
   onMount?: () => void;
   onUnmount?: () => void;
   modalClassname?: string;
   modalBodyClassname?: string;
   bodyVariants?: Variants | undefined;
};

const modalVariants: Variants = {
   open: {
      opacity: 1,
   },
   close: {
      opacity: 0,
   },
};

const Modal = ({
   open,
   close,
   children,
   onMount,
   onUnmount,
   modalClassname = '',
   modalBodyClassname = '',
   bodyVariants,
}: ModalProps) => {
   return (
      <AnimatePresence>
         {open && (
            <motion.div
               variants={modalVariants}
               initial="close"
               animate="open"
               exit="close"
               className={`fixed inset-0 z-[9999] p-5 lg:p-10 bg-black bg-opacity-50 flex overflow-y-auto overscroll-contain ${modalClassname}`}
               onClick={close}
            >
               <ModalBody
                  onMount={onMount}
                  onUnmount={onUnmount}
                  modalBodyClassname={modalBodyClassname}
                  bodyVariants={bodyVariants}
               >
                  {children}
               </ModalBody>
            </motion.div>
         )}
      </AnimatePresence>
   );
};

type ModalBodyProps = Pick<
   ModalProps,
   'children' | 'onMount' | 'onUnmount' | 'modalBodyClassname' | 'bodyVariants'
>;

const baseModalBodyVariants: Variants = {
   open: {
      y: 0,
   },
   close: {
      y: '-50px',
   },
};

const ModalBody = ({
   children,
   onMount,
   onUnmount,
   modalBodyClassname,
   bodyVariants,
}: ModalBodyProps) => {
   useEffect(() => {
      if (onMount) {
         onMount();
      }

      return () => {
         if (onUnmount) {
            onUnmount();
         }
      };
   }, []);

   return (
      <motion.div
         variants={bodyVariants || baseModalBodyVariants}
         className={`m-auto ${modalBodyClassname}`}
         transition={{ bounce: 0 }}
      >
         {children}
      </motion.div>
   );
};

export default Modal;
