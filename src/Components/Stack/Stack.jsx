import { motion } from 'framer-motion';
import React from 'react';
import { FaBolt, FaPalette, FaUserShield } from 'react-icons/fa';

const cards = [
  {
    title: "One-Tap Auth",
    desc: "Secure, seamless sign-in for your NFTs or dApps.",
    color: "bg-orange-100",
    stickers: [FaUserShield],
  },
  {
    title: "Custom Skins",
    desc: "Style your NFT dashboard with colorful themes.",
    color: "bg-pink-100",
    stickers: [FaPalette],
  },
  {
    title: "Gas-Free Minting",
    desc: "Mint NFTs without paying a dime in fees.",
    color: "bg-lime-100",
    stickers: [FaBolt],
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const cardVariants = {
  hidden: (i) => ({
    x: "100%",
    rotate: 15 - i * 5,
    opacity: 0,
  }),
  show: (i) => ({
    x: 0,
    rotate: -2 + i * 2,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 12,
    },
  }),
};

export default function CardStack() {
  return (
    <section className="w-screen h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        className="relative h-[420px] w-[300px] flex items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        {cards.map((card, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            className={`absolute items-center w-72 h-96 rounded-2xl shadow-xl p-6 text-left text-[#1f2937] ${card.color}`}
            style={{ zIndex: cards.length - i, top: i * 10, right: i * -10 }}
          >
             <div>
                        <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                        <p className="text-sm">{card.desc}</p>
                      </div>
                      <div className="flex justify-center gap-3 text-[200px] opacity-80 mt-4">
                        {card.stickers.map((Icon, i) => (
                          <div
                            key={i}
                            className="relative hover:scale-110 transition-transform"
                          >
                            <Icon />
                          </div>
                        ))}
                      </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
