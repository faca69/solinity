"use client";
import { motion } from "framer-motion";
import { Rocket, Coins, HandCoins, Wallet } from "lucide-react";
import RoadmapCard from "./RoadmapCard";

export default function RoadmapSection() {
  const roadmapContent = [
    {
      icon: <Rocket size={80} className="text-emerald-400 mb-4 mx-auto" />,
      title: "Successful Launch",
      description:
        "Our first milestone: a flawless launch that ignites our community and sets the stage for a revolutionary future.",
    },

    {
      icon: <HandCoins size={80} className="text-emerald-400 mb-4 mx-auto" />,
      title: "Investors & Sponsors",
      description:
        "Forging alliances with visionary partners to accelerate our journey towards a decentralized tomorrow.",
    },

    {
      icon: <Coins size={80} className="text-emerald-400 mb-4 mx-auto" />,
      title: "Token Launch",
      description:
        "The pinnacle of our roadmap: unleashing our token to empower our community and reshape the digital landscape.",
    },

    {
      icon: <Wallet size={80} className="text-emerald-400 mb-4 mx-auto" />,
      title: "Giveaways",
      description:
        "We will be giving away Solana to our community as a token of appreciation for their support and to encourage more people to join our journey.",
    },
  ];
  return (
    <>
      <motion.h3
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-[42px] sm:text-[65px] font-semibold   bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-gray-400 py-10 sm:py-20 "
      >
        Roadmap
      </motion.h3>
      <div className="flex flex-col items-center w-full max-w-[950px] mx-auto space-y-12 pb-16 ">
        {roadmapContent.map((content, index) => (
          <RoadmapCard
            index={index}
            icon={content.icon}
            title={content.title}
            description={content.description}
          />
        ))}
      </div>
    </>
  );
}
