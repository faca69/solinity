"use client";

import { IconCircle1, IconCircle2, IconCircle3 } from "@tabler/icons-react";
import { motion } from "framer-motion";
import HiwCard from "./HiwCard";

export default function HowItWorksSection() {
  return (
    <>
      <motion.h3
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-[35px] sm:text-[65px] font-semibold pb-10  bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-gray-400"
      >
        How It Works
      </motion.h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-28 px-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <HiwCard
            icon={<IconCircle1 size={60} className="text-emerald-400" />}
            title="Create It"
            description="Go to the Create Presale page and fill out your token's details, like its name, symbol, and presale address."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <HiwCard
            icon={<IconCircle2 size={60} className="text-emerald-500" />}
            title="Launch It"
            description="Submit the form to launch your token. We'll handle the rest and make it available to buyers."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <HiwCard
            icon={<IconCircle3 size={60} className="text-emerald-600" />}
            title="Share It"
            description="Once your presale is live, share it with your community. Our platform makes it easy to spread the word."
          />
        </motion.div>
      </div>
    </>
  );
}
