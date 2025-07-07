import React from 'react';
import { FaSnowflake } from 'react-icons/fa';
import { motion, useScroll, useTransform } from 'framer-motion';

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
        <h2 className='text-[#1c1e31] flex text-xl italic p-3 pt-30 lg:pt-20 px-5 items-center justify-center'>
          The crypto wallet that'll take you places
        </h2>
        <h1 className='flex text-6xl md:text-7xl lg:text-8xl font-semibold text-[#111733] font-merienda px-2 items-center justify-center'>
          Your
          <span>
            <FaSnowflake className='px-5 text-accent' size={100} />
          </span>
          trusted
        </h1>
        <br />
        <h1 className='flex text-6xl md:text-7xl lg:text-8xl font-semibold text-[#111733] font-merienda px-2 items-center justify-center'>
          companion
        </h1>
      </motion.div>
    </section>
  );
};

export default Hero;
