import { delay, useScroll, useTransform } from 'framer-motion'
import { motion } from "framer-motion";
import React from 'react'

const Wallet = () => {

    const { scrollY } = useScroll();
const y = useTransform(scrollY, [500, 1000], [0, -300]); // wallet scrolls up
 // 


  return (
         <motion.div style={{ y }} className="h-screen w-full flex items-center justify-center">
<div className="absolute z-0 w-full h-full">
        {/* 🔵 Animated Background Blobs */}
        <div
          className="absolute top-20 left-10 w-72 h-72 bg-[#c084fc] opacity-30 rounded-full mix-blend-multiply filter blur-2xl animate-[blob_8s_infinite]"
         
        ></div>
        <div
          className="absolute top-40 right-10 w-72 h-72 bg-[#67e8f9] opacity-30 rounded-full mix-blend-multiply filter blur-2xl animate-[blob_8s_infinite]"
          
        ></div>
        <div
          className="absolute bottom-10 left-32 w-72 h-72 bg-[#f9a8d4] opacity-30 rounded-full mix-blend-multiply filter blur-2xl animate-[blob_8s_infinite]"
          
        ></div>
      </div>
    <div >
      {/* 💳 Wallet Mockup */}
      <motion.div
        initial={{ rotate: -2, y: 0 }}
        animate={{ rotate: 2, y: -10 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 3,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.03,
          rotate: 0,
          transition: { duration: 0.4 },
        }}
        className="z-10 lg:w-[320px] lg:h-[520px] w-[320px] h-[500px] rounded-[32px] bg-white shadow-2xl overflow-hidden border border-gray-200"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <span className="font-semibold text-gray-800">Drift</span>
          <button className="text-sm bg-gray-100 px-2 py-1 rounded-full">Ethereum</button>
          <div className="w-6 h-6 bg-gray-200 rounded-full" />
        </div>

        {/* Balance */}
        <div className="p-6 text-center">
          <p className="text-sm text-gray-500">Total Balance</p>
          <h1 className="text-3xl font-bold text-gray-800">$4,728.15</h1>
        </div>

        {/* Actions */}
        <div className="flex justify-around mb-4 px-4">
          {["Send", "Receive", "Swap", "Bridge"].map((label) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                {label[0]}
              </div>
              <span className="text-xs text-gray-700">{label}</span>
            </div>
          ))}
        </div>

        {/* Token List */}
        <div className="px-4 space-y-3 pb-6">
          {[
            { name: "Ethereum", symbol: "ETH", amount: "1.28", usd: "$4,128" },
            { name: "USDC", symbol: "USDC", amount: "300", usd: "$300" },
            { name: "DRIFT", symbol: "DRFT", amount: "12,000", usd: "$300" },
          ].map((token) => (
            <div
              key={token.symbol}
              className="flex justify-between items-center p-3 bg-gray-50 rounded-xl"
            >
              <div>
                <p className="font-medium">{token.symbol}</p>
                <p className="text-sm text-gray-500">{token.name}</p>
              </div>
              <div className="text-right">
                <p className="font-medium">{token.amount}</p>
                <p className="text-sm text-gray-500">{token.usd}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>

        </motion.div>
 
  )
}

export default Wallet