"use client"
import React from 'react'
import {motion,useScroll,useTransform} from 'framer-motion'
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link'

const Projects = () => {
  const projects = [
    {
      id: 1,
      color: "from-red-300 to-blue-300",
      title: "React Commerce",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      link: "https://lama.dev",
    },
    {
      id: 2,
      color: "from-blue-300 to-violet-300",
      title: "Next.js Medium Blog",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      link: "https://lama.dev",
    },
    {
      id: 3,
      color: "from-violet-300 to-purple-300",
      title: "Vanilla Book App",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      link: "https://lama.dev",
    },
    {
      id: 4,
      color: "from-purple-300 to-red-300",
      title: "Spotify Music App",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "https://lama.dev",
    },
  ];

  const containerRef = useRef();
  const {scrollYProgress} = useScroll({target:containerRef});
  const x = useTransform(scrollYProgress,[0,1],["0%","-80%"]);

  return (
    <motion.div
      className='h-full'
      initial={{x:"-120vh"}}
      animate={{x:"0%"}}
      transition={{duration:2}}
    >
      {/* project section */}
      <div className="flex justify-center bg-red-100 h-50">
        <div className="sm:flex gap-4 p-6 sm:flex-wrap xl:flex-col">
            {
              projects.map((project)=>(
                <div key={project.id} className="bg-white p-4 ">
                  <div className="flex justify-center">{project.title}</div>
                  <div>
                    <Image src={project.img} alt="" height={500} width={500} />
                  </div>
                  <div className="flex justify-center pl-4">{project.desc}</div>
                  <button className="border-black border-2 rounded p-2 flex item-center">
                    <Link href={project.link}>View Project</Link>
                  </button>
                </div>

              ))
            }
        </div>
      </div>
    </motion.div>
  )
}

export default Projects

{/* <motion.div ref={containerRef} className="h-[600vh] relative">
        <div className="h-[calc(100vh-6rem)] flex items-center justify-center text-6xl">My Works</div>
        <div className="flex">
        <motion.div style={{x}} className="top-0 sticky flex h-screen gap-4 items-center">
          <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300"/>
            {
              projects.map((project)=>(
                <div className={`w-screen h-screen flex items-center justify-center bg-gradient-to-r ${project.color} `} key={project.id}>
                  <div className=""><h>{project.title}</h></div>
                  <div className="relative">
                    <Image src={project.img} alt="" fill />
                  </div>
                </div>
              ))
            }
        </motion.div>
        </div>
      </motion.div> */}