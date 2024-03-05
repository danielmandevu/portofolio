"use client"
import React from 'react'
import {motion, AnimatePresence} from "framer-motion"
import Navbar from './Navbar'
import { usePathname } from 'next/navigation'
import Footer from './Footer'

export default function AnimationProvider({children}) {
    const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
        <div key={pathName} className="w-screen h-screen text-white px-4 sm:px-8 md:px-12 lg:px-20">
          <motion.div
            className="h-screen w-screen fixed bg-black z-40"
            animate={{height:"0vh"}}
            exit={{height:"120vh"}}
            transition={{duration:0.5, ease:"easeOut"}}
           />
           <motion.div
            className="fixed m-auto right-0 left-0 top-0 bottom-0 text-[#ff104f] text-6xl w-fit h-fit z-50"
            initial={{opacity:1}}
            animate={{opacity:0}}
            exit={{opacity:0}}
            transition={{duration:0.8, ease:"easeOut"}}
           >
            {pathName.substring(1)}
           </motion.div>
           <motion.div
            className="h-screen w-screen fixed bg-red rounded-t-[100px] bottom-0 z-30"
            initial={{height:"120vh"}}
            animate={{height:"0vh",transition:{delay:0.5}}}
            pathName
           />
          <div className="h-24">
           <Navbar />
          </div>
          <div className="h-[calc(100vh-6rem)] xl:px-28">
           {children}
          </div>
          
        </div>
    </AnimatePresence>
  )
}
