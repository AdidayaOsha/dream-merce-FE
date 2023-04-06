// CORE
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';

// STYLES
import '@/styles/globals.css';

// COMPONENTS
import { Toaster } from 'react-hot-toast';

// FONTS
const inter = Inter({
   subsets: ['latin'],
   variable: '--font-inter',
});

export default function App({ Component, pageProps }: AppProps) {
   return (
      <main className={`${inter.variable} font-sans w-full flex flex-col`}>
         <Component {...pageProps} />
         <Toaster />
      </main>
   );
}
