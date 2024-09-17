"use client";
import { motion } from "framer-motion";
import { Rocket, Coins, HandCoins } from "lucide-react";

export default function RoadmapSection() {
  return (
    <>
      <motion.h3
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-[42px] sm:text-[65px] font-semibold   bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-gray-400 py-10 sm:py-20 "
      >
        Solinity Roadmap
      </motion.h3>
      <div className="flex flex-col items-center w-full max-w-[950px] mx-auto space-y-12 pb-16 ">
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="self-start max-w-sm"
        >
          <Rocket size={80} className="text-emerald-400 mb-4 mx-auto" />
          <h5 className="text-[27px] font-semibold mb-2 ">Successful Launch</h5>
          <p className="text-gray-300 text-xl ">
            Our first milestone: a flawless launch that ignites our community
            and sets the stage for a revolutionary future.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="self-end max-w-sm"
        >
          <HandCoins size={80} className="text-emerald-400 mb-4 mx-auto " />
          <h5 className="text-[27px] font-semibold mb-2 ">
            Investors & Sponsors
          </h5>
          <p className="text-gray-300 text-xl ">
            Forging alliances with visionary partners to accelerate our journey
            towards a decentralized tomorrow.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="self-start max-w-sm"
        >
          <Coins size={80} className="text-emerald-400 mx-auto " />
          <h5 className="text-[27px] font-semibold mb-2 ">Token Launch</h5>
          <p className="text-gray-300 text-xl ">
            The pinnacle of our roadmap: unleashing our token to empower our
            community and reshape the digital landscape.
          </p>
        </motion.div>
      </div>
    </>
  );
}
