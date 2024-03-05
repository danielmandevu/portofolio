"use client";
import React from 'react'
import Styles from '@/app/style.module.css';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image'
import NavLink from './NavLink';
import {motion} from 'framer-motion';


export default function Navbar() {
  const links = [
    {url:"/about",title:"About"},
    {url:"/projects",title:"Projects"},
    {url:"/contact",title:"Contact"},
    {url:"/flexbox",title:"Flex"},
  ];
  const [open,setOpen] = useState(false);

  const topBar = {
    opened:{rotate:45},
    closed:{rotate:0},
  }
  const centerBar = {
    opened:{opacity:0},
    closed:{opacity:1},
  }
  const lastBar = {
    opened:{rotate:-45},
    closed:{rotate:0},
  }
  const listVariants = {
    opened:{
      x:0,
      transition:{
        when:"beforeChildren",
        staggerChildren:0.3}
    },
    closed:{x:"100vh"}
  }
  const listItemVariants = {
    closed:{opacity:0,x:-10},
    opened:{opacity:1,x:0,}
  }
  return (
      <div className='h-full flex items-center justify-between'>
        <div className="logo"><Link href='/'>D<span>M</span></Link></div>
        <div className="hidden md:flex gap-4">
          {links.map((link)=>(
          <NavLink link={link} key={link.title}/>))}
          <Image
            src="/night-mode.png"
            alt=""
            height={24}
            width={24}
            className="bg-slate-400"

           />
        </div>
        
        {/* mobile device menu */}
        <div className="md:hidden">
          {/* Menu button */}
          <button className="h-6 w-8 flex flex-col justify-between z-50 relative" onClick={()=>setOpen(!open)}>
            <motion.div variants={topBar} animate={open ? "opened" : "closed"} className="h-1 w-8 bg-[#ff014f] rounded origin-left"></motion.div>
            <motion.div variants={centerBar} animate={open ? "opened" : "closed"} className="h-1 w-8 bg-[#ff014f] rounded" />
            <motion.div variants={lastBar}  animate={open ? "opened" : "closed"}className="h-1 w-8 bg-[#ff014f] rounded origin-left" />
          </button>
          {/* Menu List */}
          {open && (
          <motion.div variants={listVariants} initial={"closed"} animate={"opened"} className="w-screen h-screen absolute top-0 left-0 flex flex-col items-center bg-black text-white justify-center gap-8 text-2xl z-40">
            {
              links.map((link)=>(
                <motion.div variants={listItemVariants} key={link.url}>
                  <NavLink link={link} />
                </motion.div>
              ))
            }
          </motion.div>)}
        </div>
        
      </div>
  )
}
