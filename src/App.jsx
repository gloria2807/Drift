import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Wallet from './Components/WalletMockup/Wallet';
import Keep from './Components/Keep/Keep';
import Features from './Components/Features/Features';
import Powerful from './Components/Powerful/Powerful';
import Nft from './Components/NFT/Nft';
import Controlled from './Components/Controlled/Controlled';
import Stack from './Components/Stack/Stack';
import Download from './Components/Download/Download';
import Footer from './Components/Footer/Footer';



  const App = () => {

    useEffect(() => {
      AOS.init({
        offset: 100,
        duration: 800,
        easing: 'ease-in-sine',
        delay: 100,
      });
      AOS.refresh();
    }, []);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

return (
  <div className="relative w-full h-full -bg-linear-0 from-[#4250ad] to-[#6fa5fc] overflow-x-hidden">
     {/* FiMenu and dropdown — TOP LAYER */}
      <div className="relative z-50">
        <Navbar isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      </div>

      {/* VEIL covering navbar background and hero */}
      {isMenuOpen && (
        <div className="absolute inset-0 bg-black/30 z-40 pointer-events-none transition-opacity duration-300" />
      )}

      {/* HERO and rest of NAVBAR go here */}
      <div className="relative z-30">
        <Hero />
        </div>

<div className="relative z-40">
  <Wallet />
</div>

<div className="relative z-0">
  <Keep />
</div>
 <Features />
 <Powerful />
 <Nft />
 <Controlled />
 <Stack />
 <Download />
 <Footer />
  </div>
);
  };


export default App;
