// CORE
import Head from 'next/head';

// COMPONENTS
import Header from '@/components/UI/Header';

export default function Home() {
   return (
      <>
         <Head>
            <title>DREAM-MERCE</title>
            <meta name="description" content="From naisu people, for naisu peoples." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         {/* Testing */}
         <Header />
         <article className="w-full flex flex-col p-3">
            <h1 className="text-2xl font-bold">Happy Hacking</h1>
         </article>
      </>
   );
}
