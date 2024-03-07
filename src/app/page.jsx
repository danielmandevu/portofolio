"use client"
import Image from "next/image";
import Styles from '@/app/style.module.css'
import Link from "next/link";
import {motion} from 'framer-motion'
import projects from "./proj";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <motion.div
      className='h-full'
      initial={{x:"-120vh"}}
      animate={{x:"0%"}}
      transition={{duration:2}}
    >
      <section className="">
        <div className="xl:flex lg:flex md:flex justify-center items-center">
          <div className="text-content">
            <h3 className="text-[#ff104f]">I'm Daniel</h3>
            <p>I'm a <span className="text-[#ff104f]">Software Engineer</span> with a passion for building web application with great user experiences.</p>
            <p>Here's a bit more <Link className="text-[#ff104f]" href={'/about'}>about me</Link>.</p>
            {/* social links */}
          </div>
          <div className="photo-content ">
            <Image src='/daniel.png' alt="" width={300} height={300} className="object-contain" />
          </div>
        </div>
      </section>
      {/* projects section */}
      <section className="flex flex-col gap-6 text-black">
        <div className="self-center"><h3 className="text-slate-100">Here are some of my <span className='text-[#ff104f]'>Projects.</span></h3></div>
        <div className="max-w-md max-auto bg-white rounded-sm shadow-md overflow-hidden md:max-w-2xl">
          {
            projects.map((project)=>(
              <div key={project.id} className="md:flex border-b-2">
                <div className="md:shrink-0">
                  <Image src={project.img} alt="" width={500} height={500} className="h-48 w-full md:h-full md:w-48"/>
                </div>
                <div className="p-8 flex flex-col ">
                  <div className="uppercase tracking-wide font-semibold text-[#ff104f] text-center ">{project.title}</div>
                  <div className="mt-2 ">{project.desc}</div>
                  <button className="self-center pt-4 "><Link className="border-2 rounded-sm p-2" href={project.img}>git Repos</Link></button>
                </div>
              </div>
            ))
          }

        </div>
      </section>
    </motion.div>
  );
}