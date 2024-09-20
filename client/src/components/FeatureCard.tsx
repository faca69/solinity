import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
}

export default function FeatureCard({
  icon,
  title,
  description,
  index,
}: FeatureCardProps) {
  return (
    <motion.div
      key={index}
      className="flex flex-col items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <div className="text-emerald-400">{icon}</div>
      <h3 className="text-[27px] font-bold mt-4">{title}</h3>
      <p className="text-xl text-gray-300 mt-2">{description}</p>
    </motion.div>
  );
}
