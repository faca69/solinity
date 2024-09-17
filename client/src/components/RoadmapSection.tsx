"use client";
import { motion } from "framer-motion";
import { IconRocket, IconHandGrab, IconCoin } from "@tabler/icons-react";

export default function RoadmapSection() {
  return (
    <>
      <motion.h3
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-[35px] sm:text-[65px] font-semibold pb-20  bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-gray-400"
      >
        Solinity Roadmap
      </motion.h3>
      <div className="flex flex-col items-center w-full max-w-[950px] mx-auto space-y-12 pb-40">
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="self-start max-w-sm"
        >
          <IconRocket size={80} className="text-emerald-400 mb-4 mx-auto" />
          <h5 className="text-3xl font-semibold mb-2 ">Successful Launch</h5>
          <p className="text-gray-300 ">
            Our first milestone: a flawless launch that ignites our community
            and sets the stage for a revolutionary future.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="self-end max-w-sm"
        >
          <IconHandGrab size={80} className="text-emerald-400 mb-4 mx-auto " />
          <h5 className="text-3xl font-semibold mb-2 ">Investors & Sponsors</h5>
          <p className="text-gray-300 ">
            Forging alliances with visionary partners to accelerate our journey
            towards a decentralized tomorrow.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="self-start max-w-sm"
        >
          <IconCoin size={80} className="text-emerald-400 mx-auto " />
          <h5 className="text-3xl font-semibold mb-2 ">Token Launch</h5>
          <p className="text-gray-300 ">
            The pinnacle of our roadmap: unleashing our token to empower our
            community and reshape the digital landscape.
          </p>
        </motion.div>
      </div>
    </>
  );
}
