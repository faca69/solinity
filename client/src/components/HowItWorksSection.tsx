"use client";

import {
  IconCircle1,
  IconCircle2,
  IconCircle3,
  IconCircle4,
} from "@tabler/icons-react";
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
        className="text-[42px] sm:text-[65px] font-semibold bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-gray-400 py-10 sm:py-20 "
      >
        How It Works
      </motion.h3>
      <div
        className="grid md:grid-cols-2 xl:grid-cols-4 gap-8  
      pb-16
      
      "
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <HiwCard
            icon={<IconCircle1 size={60} className="text-emerald-400" />}
            title="Create It"
            description="In the Create Presale page fill out your token's details, like its name, symbol, and presale address."
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
            description="Share your presale with your community. Our platform makes it easy to spread the word."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <HiwCard
            icon={<IconCircle4 size={60} className="text-emerald-600" />}
            title="Advertise"
            description="Always stay at the top. Reach a wider audience. Easily promote your presale to potential buyers."
          />
        </motion.div>
      </div>
    </>
  );
}