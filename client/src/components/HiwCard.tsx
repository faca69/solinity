import React, { ReactNode } from "react";

interface HiwCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const HiwCard: React.FC<HiwCardProps> = ({ icon, title, description }) => {
  return (
    <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-transparent shadow-emerald-800/40 shadow-inner transition-all duration-300 transform hover:-translate-y-2">
      <div className="flex items-center justify-center mb-6">{icon}</div>
      <h3 className="font-bold text-[27px] mb-4 text-center text-white">
        {title}
      </h3>
      <p className="font-normal text-xl text-gray-300 text-center">
        {description}
      </p>
    </div>
  );
};

export default HiwCard;
