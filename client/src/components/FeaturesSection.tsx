"use client";

import { Feather, Rocket, Globe, ThumbsUp } from "lucide-react";
import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";

export function FeaturesSection() {
  const features = [
    {
      title: "Effortless Launch",
      description: "Create and launch your Token presale with ease.",
      icon: <Rocket size={80} />,
    },
    {
      title: "Early Bird",
      description: "By being first you will never miss the chance to opt in.",
      icon: <Feather size={80} />,
    },
    {
      title: "Mr Worldwide",
      description: "Your presale is shareable, publish it on your socials.",
      icon: <Globe size={80} />,
    },
    {
      title: "Ease Of Use",
      description:
        "Solinity is designed to be user-friendly and easy to navigate.",
      icon: <ThumbsUp size={80} />,
    },
  ];

  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-[42px] sm:text-[65px] font-semibold  bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-gray-400 py-10 sm:py-20"
      >
        Features
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto gap-[55px] pb-16">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            index={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </>
  );
}
