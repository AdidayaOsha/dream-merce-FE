/*
██████╗░██████╗░███████╗░█████╗░███╗░░░███╗░░░░░░███╗░░░███╗███████╗██████╗░░█████╗░███████╗
██╔══██╗██╔══██╗██╔════╝██╔══██╗████╗░████║░░░░░░████╗░████║██╔════╝██╔══██╗██╔══██╗██╔════╝
██║░░██║██████╔╝█████╗░░███████║██╔████╔██║█████╗██╔████╔██║█████╗░░██████╔╝██║░░╚═╝█████╗░░
██║░░██║██╔══██╗██╔══╝░░██╔══██║██║╚██╔╝██║╚════╝██║╚██╔╝██║██╔══╝░░██╔══██╗██║░░██╗██╔══╝░░
██████╔╝██║░░██║███████╗██║░░██║██║░╚═╝░██║░░░░░░██║░╚═╝░██║███████╗██║░░██║╚█████╔╝███████╗
╚═════╝░╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝╚═╝░░░░░╚═╝░░░░░░╚═╝░░░░░╚═╝╚══════╝╚═╝░░╚═╝░╚════╝░╚══════╝
*/

// CORE
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';

// STYLES
import '@/styles/globals.css';

// COMPONENTS
/*
   - Here we wrap our entire app using <LazyMotion /> so we can reduce bundle size by using Framer's <m> component
   - instead of the normal <motion> component. With these we can use <m> anywhere in our app without having to
   - individually import <LazyMotion /> and paired it with <m> on the component that we wants.
   - https://www.framer.com/motion/lazy-motion/
*/
import { LazyMotion, domMax } from 'framer-motion';
import { Toaster } from 'react-hot-toast';

// FONTS
const inter = Inter({
   subsets: ['latin'],
   variable: '--font-inter',
});

export default function App({ Component, pageProps }: AppProps) {
   return (
      <LazyMotion features={domMax}>
         <main className={`${inter.variable} font-sans w-full flex flex-col`}>
            <Component {...pageProps} />
            <Toaster />
         </main>
      </LazyMotion>
   );
}
