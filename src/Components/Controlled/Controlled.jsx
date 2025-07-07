import React from 'react'
import { FaSnowflake } from 'react-icons/fa';
import { motion, useScroll, useTransform } from "framer-motion";

const Controlled = () => {
const { scrollY } = useScroll();
const scale = useTransform(scrollY, [2600, 2800], [0.8, 1]);
const opacity = useTransform(scrollY, [2600, 2800], [0, 1]);



  return (
    <motion.div
  style={{ scale, opacity }}
  className="sticky top-0 z-0 h-screen -mt-[20vh] w-full flex items-center justify-center">
      <motion.div
      >
      <h1 className='flex text-4xl md:text-6xl lg:text-6xl font-semibold text-[#f2f4fd] font-merienda px-2 items-center justify-center'>
        Controlled by you</h1>
        <br />
        <span>
          <h1 className='flex text-4xl md:text-6xl lg:text-6xl font-semibold text-[#f2f4fd] font-merienda px-2 items-center justify-center'>
            Secured <FaSnowflake className='px-5 text-accent' size={100}/> by us</h1>
        </span>
            </motion.div>
    </motion.div>
  )
}

export default Controlled;