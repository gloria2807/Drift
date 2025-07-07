import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BiChat } from 'react-icons/bi';
import { BsLightning } from 'react-icons/bs';
import { FaSnowflake, FaShieldAlt } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import { GiGlobe } from 'react-icons/gi';

const Navbar = ({ isOpen, setIsOpen }) => {
  const NavbarLinks = [
    { id: 1, icon: <FaShieldAlt />, name: 'Security', link: '#security' },
    {
      id: 2,
      icon: <BsLightning />,
      name: 'Learn',
      link: '#about',
      sub: 'Blog',
      sub1: 'Crypto101',
      sub2: 'Guides',
      sub3: 'Developers'
    },
    { id: 3, icon: <GiGlobe />, name: 'Explore', link: '#skills' },
    { id: 4, icon: <BiChat />, name: 'Support', link: '#projects' }
  ];

  return (
    <header className='relative top-0 left-0 w-full z-40 md:py-5 py-2 px-2'>
      <div className="mx-auto flex items-center justify-between px-4 py-2">
        <div className='flex items-center gap-3'>
          <FaSnowflake className='text-[#14151f]' size={30} />
          <p className='text-3xl'>
            <span className='font-exile italic text-[#14151f] font-semibold'>Drift</span>
          </p>
        </div>
        <div className='pl-25 lg:pl-220'>
          <button className='font-semibold text-[#14151f] font-poppins rounded-full px-7 py-3 bg-accent hover:bg-accent/40 hover:scale-95 hover:outline-none cursor-pointer'>
            Download
          </button>
        </div>
        <button
          className='cursor-pointer focus:outline-none z-50'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen
            ? <FiX className='w-12 h-12 p-3 text-black bg-white/80 rounded-full' />
            : <FiMenu className='w-12 h-12 p-3 text-black bg-white/80 rounded-full' />
          }
        </button>
      </div>

      {/* Dropdown menu */}
      <AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className="absolute right-10 top-20 z-50 bg-white shadow-lg rounded-2xl p-6 origin-top overflow-hidden"
    >
      {NavbarLinks.map((link) => (
        <ul className="py-3" key={link.id}>
          <a
            href={link.link}
            className="text-lg text-black"
            onClick={() => setIsOpen(false)}
          >
            <div className="cursor-pointer flex items-center gap-1 hover:text-gray-500">
              {link.icon}
              <span className="font-poppins italic text-black hover:text-gray-500">
                {link.name}
              </span>
            </div>
          </a>

          {link.id === 2 && (
            <ul className="gap-1 px-7 italic">
              <li className="hover:text-gray-500 cursor-pointer">{link.sub}</li>
              <li className="hover:text-gray-500 cursor-pointer">{link.sub1}</li>
              <li className="hover:text-gray-500 cursor-pointer">{link.sub2}</li>
              <li className="hover:text-gray-500 cursor-pointer">{link.sub3}</li>
            </ul>
          )}
        </ul>
      ))}
    </motion.div>
  )}
</AnimatePresence>

    </header>
  );
};

export default Navbar;
