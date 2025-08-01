import React from 'react'
import { FaEdge, FaSnowflake } from 'react-icons/fa';
import { motion, useScroll, useTransform } from "framer-motion";

const Download = () => {

  return (
    <section className='relative h-screen w-full overflow-hidden'>
      <motion.div
      >
      <h2 className='text-[#1c1e31] flex sm:text-md text-xl italic p-3 pt-20 px-5 items-center justify-center'>Trusted by over 15 million people</h2>
      <h1 className='flex text-4xl md:text-6xl lg:text-7xl font-semibold text-[#111733] font-merienda px-2 items-center justify-center'>
        Download
        <span>
          <FaSnowflake className='px-5 text-accent' size={100}/>
            </span>
            Drift</h1>
            <br />
            <h1 className='flex text-4xl md:text-6xl lg:text-7xl font-semibold text-[#111733] font-merienda px-2 items-center justify-center'>
              to get started
            </h1>
            <div className='pt-10 pb-5 flex items-center justify-center'>
            <motion.button
          className='flex items-center justify-center cursor-pointer sm:w-[200px] sm:h-[70px] md:w-[300px] md:h-[100px] font-merienda bg-white rounded-full'>
            <FaEdge size={70} className='text-accent' /><p className='px-3'>Download for Edge</p>
          </motion.button>
          </div>
          <p className='flex items-center justify-center'>Also available on other browsers and devices <br/>
          </p>
          <a className='flex items-center justify-center cursor-pointer underline'>Discover more</a>
            </motion.div>
    </section>
  )
}

export default Download