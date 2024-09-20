import { ReactNode } from "react";
import { motion } from "framer-motion";

interface RoadmapCard {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
}

export default function RoadmapCard({
  icon,
  title,
  description,
  index,
}: RoadmapCard) {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
      className={`${index % 2 === 0 ? "self-start" : "self-end"}  max-w-sm`}
    >
      <div>{icon}</div>
      <h5 className="text-[27px] font-semibold mb-2 ">{title}</h5>
      <p className="text-gray-300 text-xl ">{description}</p>
    </motion.div>
  );
}
