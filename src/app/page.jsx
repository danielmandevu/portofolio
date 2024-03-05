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
      className='h-full text-2xl'
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
      <section className="flex flex-col gap-6">
        <div className="self-center"><h3>Here are some of my <span className='text-[#ff104f]'>Projects.</span></h3></div>
        <div className="flex flex-col gap-6 border-2">
          {
            projects.map((project)=>(
              <div key={project.id}>
                <div className="">
                  <h4 className="hidden">{project.title}</h4>
                  <Image src={project.img} alt="" height={400} width={400} />
                </div>
              </div>
            ))
          }

        </div>
      </section>
    </motion.div>
  );
}

// <div className="h-full flex flex-col lg:flex-row justify-center">
//         {/* Text content */}
//         <div className="h-1/2 text-2xl gap-8  lg:h-full lg:w-1/2 items-center justify-center">
//           <h3 className="text-[rgb(27,35,68)]">I'm Daniel</h3>
//           <p className="text-xl">I'm a <span className="text-[#ff104f]">Software Engineer</span> with a passion for building web application with great user experiences.
//           <span>Here's a bit more <Link className="text-[#ff104f]" href={'/about'}>about me</Link>.</span></p>
//         </div>
//         {/* Image content  */}
//         <div className="relative h-1/2 lg:h-full lg:w-1/2">
//           <Image src='/daniel.png' alt="" fill className="object-contain" />
//         </div>
// </div>