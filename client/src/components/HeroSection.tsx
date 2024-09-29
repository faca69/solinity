"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="py-24 sm:py-40">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="bg-clip-text text-transparent bg-gradient-to-b from-emerald-300 to-emerald-700 font-bold 
        text-6xl sm:text-9xl md:text-[140px] lg:text-[166px] xl:text-[200px] 
        py-4"
      >
        Solinity
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="font-semibold text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl
        bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-gray-300 pt-2 mb-10"
      >
        The ultimate presale platform for your tokens
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="flex  sm:flex-row gap-5 justify-center items-center "
      >
        <Link href="/tokens">
          <button className="bg-gradient-to-b from-emerald-300 to-emerald-700 rounded-lg  px-3 md:px-8 py-4 text-base md:text-xl font-semibold relative group transition duration-200 text-gray-100">
            Browse Tokens
          </button>
        </Link>

        <Link href="/create-presale">
          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-300 to-emerald-700 rounded-lg" />
            <div className=" py-[13px] bg-black rounded-[6px] px-3 md:px-8 text-base md:text-xl font-semibold relative group transition duration-200 text-gray-100 hover:bg-transparent">
              Create Presale
            </div>
          </button>
        </Link>
      </motion.div>
    </section>
  );
}
