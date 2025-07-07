import React from 'react';
import { FaAppStore, FaSnowflake } from 'react-icons/fa';
import { motion, useScroll, useTransform } from 'framer-motion';
import { IoLogoGooglePlaystore } from 'react-icons/io5';

const Hero = ({ isMenuOpen }) => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 500], [1, 0.2]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.2]);

  return (
    <section className='relative h-screen w-full overflow-hidden'>
      {/* ✨ Soft dim overlay */}

      <motion.div
        style={{ scale, opacity }}
        className="relative z-10"
      >
        <h2 className='text-[#1c1e31] flex sm:text-md md:text-xl italic p-3 pt-30 lg:pt-20 px-5 items-center justify-center'>
          The crypto wallet that'll take you places
        </h2>
        <h1 className='flex text-4xl md:text-7xl lg:text-8xl font-semibold text-[#111733] font-merienda px-2 items-center justify-center'>
          Your
          <span>
            <FaSnowflake className='px-5 text-accent' size={100} />
          </span>
          trusted
        </h1>
        <br />
        <h1 className='flex text-4xl md:text-7xl lg:text-8xl font-semibold text-[#111733] font-merienda px-2 items-center justify-center'>
          companion
        </h1>
        <div className='md:hidden pt-10 pb-5 flex items-center justify-center'>
                    <motion.button
                  className='flex items-center justify-center cursor-pointer sm:w-[200px] sm:h-[70px] md:w-[300px] md:h-[100px] font-merienda bg-white rounded-full'>
                    <IoLogoGooglePlaystore size={60} className='text-accent pl-2' /><p className='px-3'>Download for Android</p>
                  </motion.button>
                  </div>
                  <p className='md:hidden flex items-center justify-center'>Also available on other browsers and devices <br/>
                  </p>
                  <a className='md:hidden flex items-center justify-center cursor-pointer underline'>Discover more</a>
      </motion.div>
    </section>
  );
};

export default Hero;
