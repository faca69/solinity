"use client";

import {
  IconCheck,
  IconFeather,
  IconRocket,
  IconWorld,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

export function FeaturesSection() {
  const features = [
    {
      title: "Effortless Launch",
      description: "Create and launch  your Token presale with ease.",
      icon: <IconRocket size={90} />,
    },
    {
      title: "Early Bird",
      description: "By being first you will never miss the chance to opt in.",
      icon: <IconFeather size={90} />,
    },
    {
      title: "Mr Worldwide",
      description: "Your presale is shareable, publish it on your socials.",
      icon: <IconWorld size={90} />,
    },
    {
      title: "Ease Of Use",
      description:
        "Our platform is designed to be user-friendly and easy to navigate.",
      icon: <IconCheck size={90} />,
    },
  ];
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-[35px] sm:text-[65px] font-semibold pb-10  bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-gray-400 "
      >
        Solinity Features
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4   py-10  mx-auto"
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <div className="text-emerald-400">{feature.icon}</div>
            <h3 className="text-3xl font-semibold mt-4">{feature.title}</h3>
            <p className="text-xl text-gray-300 mt-2">{feature.description}</p>
          </div>
        ))}
      </motion.div>
    </>
  );
}
