import { motion } from "framer-motion";
import React, { ReactNode } from "react";

interface HiwCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
}

const HiwCard = ({ icon, title, description, index }: HiwCardProps) => {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-transparent shadow-emerald-800/40 shadow-inner "
    >
      <div className="flex items-center justify-center mb-6">{icon}</div>
      <h3 className="font-bold text-[27px] mb-4 text-center text-white">
        {title}
      </h3>
      <p className="font-normal text-xl text-gray-300 text-center">
        {description}
      </p>
    </motion.div>
  );
};

export default HiwCard;
