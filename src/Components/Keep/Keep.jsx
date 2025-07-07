import React from 'react'
import { FaSnowflake } from 'react-icons/fa';
import { motion, useScroll, useTransform } from "framer-motion";

const Keep = () => {
  // Scroll range: adjust based on Wallet section height
const { scrollY } = useScroll();
const scale = useTransform(scrollY, [600, 900], [0.8, 1]);
const opacity = useTransform(scrollY, [600, 900], [0, 1]);



  return (
    <motion.div
  style={{ scale, opacity }}
  className="sticky top-0 z-0 h-screen -mt-[50vh] w-full flex items-center justify-center"
>
      <motion.div className='z-0'
      >
      <h1 className='text-4xl md:text-6xl lg:text-6xl font-semibold text-[#f2f4fd] font-merienda px-2 items-center justify-center'>
        Keep everything</h1>
        <br />
        <span>
          <h1 className='flex text-4xl md:text-6xl lg:text-6xl font-semibold text-[#f2f4fd] font-merienda px-2 items-center justify-center'>
            in <FaSnowflake className='px-5 text-accent' size={100}/> one place</h1>
        </span>
            </motion.div>
    </motion.div>
  )
}

export default Keep;