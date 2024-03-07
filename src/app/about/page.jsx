'use client'
import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div

    >
      <div className="sm:flex shadow-md">
        {/* form section */}
        <motion.div
         initial={{x:"-120vh"}}
         animate={{x:"0%"}}
         transition={{duration:2}}
         className="md:shrink-0 md:w-1/2 bg-black text-slate-100 p-10 flex flex-col gap-4 justify-center">
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl">Let's have a quick chat!</h3>
            <p className="text-sm">I'm open to new opportunities</p>
          </div>
          <form className="flex flex-col gap-4">
            <label>Name</label>
            <input className="h-8 border-b-2 focus:border-[#ff104f] bg-black focus:outline-0" type="text" name="name" />
            <label>Email</label>
            <input className="h-8 border-b-2 bg-black  focus:outline-0 focus:border-[#ff104f]" type="email" name="e-mail" />
            <label>Message</label>
            <textarea type="text" name="name" className="border-b-2 bg-black h-20 focus:outline-0 focus:border-[#ff104f]" />
            <div className="flex flex-col">
              <button className="border-2 rounded-sm p-3 self-center">Send Message</button>
            </div>
          </form>
        </motion.div>
        {/* About me section */}
        <motion.div 
         initial={{x:"120vh"}}
         animate={{x:"0%"}}
         transition={{duration:2}}
        className="bg-white text-black p-10 md:w-1/2">
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-bold">Here is abit about me.</h3>
            <h5>Software Engineer</h5>
            <p>
            I'm a full stack software engineer and I'm passionate about not only creating websites, 
            but working on solving complex problems of which require a great amount of logical & cognitive depth. 
            Continuously working towards improving my technical expertise to develop applications that contribute and harbour great user experience.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About