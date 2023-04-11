import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronUpIcon } from '@heroicons/react/24/outline';

function onHover(n: number) {
   console.log(n);
}

function Header() {
   return (
      <motion.div
         initial={{ opacity: 0, scale: 0.5 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.7 }}
         className="container mx-auto flex items-center border-b-2 px-6 py-2 h-24"
      >
         <h1>DreamMerce</h1>
         <div className="grow">
            <motion.nav className="flex items-center justify-center md:gap-8">
               <div className="flex flex-row items-center">
                  <Link href="home" className="text-xs">
                     Product
                  </Link>
                  <ChevronUpIcon className="w-7 h-4" />
               </div>
               <div className="flex flex-row items-center">
                  <Link href="home" className="text-xs">
                     Solutions
                  </Link>
                  <ChevronUpIcon className="w-7 h-4" />
               </div>
               <div className="flex flex-row items-center">
                  <Link href="home" className="text-xs">
                     Developer
                  </Link>
                  <ChevronUpIcon className="w-7 h-4" />
               </div>
               <div className="flex flex-row items-center">
                  <Link href="home" className="text-xs">
                     Company
                  </Link>
                  <ChevronUpIcon className="w-7 h-4" />
               </div>
               <div className="flex flex-row items-center">
                  <Link href="home" className="text-xs">
                     Pricing
                  </Link>
                  <ChevronUpIcon className="w-7 h-4" />
               </div>
               <div className="flex flex-row items-center">
                  <Link href="home" className="text-xs">
                     About Us
                  </Link>
                  <ChevronUpIcon className="w-7 h-4" />
               </div>
            </motion.nav>
         </div>
         <div className="flex justify-center items-center gap-3">
            <Link href="/auth/login" className="mr-2 font-bold">
               Login
            </Link>
            <Link href="/auth/register" className="mr-2 font-bold bg-sky-100 py-2 px-4 rounded-3xl">
               Sign Up
            </Link>
         </div>
      </motion.div>
   );
}

export default Header;
