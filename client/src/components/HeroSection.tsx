"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <>
      <div className="bg-emerald-700/70 h-[400px] w-[400px] blur-[300px] absolute top-[200px] left-[750px] -z-10  "></div>
      <div className="bg-emerald-700/70 h-[400px] w-[400px] blur-[300px] absolute top-[1200px] left-[250px] -z-10  "></div>
      <div className="bg-emerald-700/80 h-[400px] w-[400px] blur-[300px] absolute top-[2200px] left-[450px] -z-10 "></div>
      <div className="bg-emerald-700 h-[200px] w-[200px] blur-[300px] absolute top-[3100px] left-[950px] -z-10 "></div>

      <div className="py-24 sm:py-40">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-clip-text text-transparent bg-gradient-to-b from-emerald-300 to-emerald-700 font-bold 
          text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[200px] 
        py-4"
        >
          Solinity
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="font-semibold text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl
          bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-gray-300 pt-2 mb-10"
        >
          The ultimate presale platform for your tokens
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center"
        >
          <Link href="/tokens">
            <button className="bg-gradient-to-b from-emerald-300 to-emerald-700 rounded-lg px-8 py-4 text-xl font-semibold relative group transition duration-200 text-gray-100 ">
              Browse Tokens
            </button>
          </Link>

          <Link href="/create-presale">
            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-300 to-emerald-700 rounded-lg" />
              <div className="px-8 py-[13px] bg-black rounded-[6px] text-xl font-semibold relative group transition duration-200 text-gray-100 hover:bg-transparent">
                Create Presale
              </div>
            </button>
          </Link>
        </motion.div>
      </div>
    </>
  );
}
