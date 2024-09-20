import React from "react";

export default function Blobs() {
  return (
    <div>
      {/* create presale blob */}
      <div className="bg-emerald-700/70 h-[400px] w-[400px] blur-[400px] absolute top-[200px] left-[750px] -z-10"></div>

      {/* hero section blobs */}
      <div className="bg-emerald-700/70 h-[400px] w-[400px] blur-[300px] absolute top-[200px] left-[750px] -z-10  "></div>
      <div className="bg-emerald-700/70 h-[400px] w-[400px] blur-[300px] absolute top-[1200px] left-[250px] -z-10  "></div>
      <div className="bg-emerald-700/80 h-[400px] w-[400px] blur-[300px] absolute top-[2200px] left-[450px] -z-10 "></div>
      <div className="bg-emerald-700 h-[200px] w-[200px] blur-[300px] absolute top-[3100px] left-[950px] -z-10 "></div>

      {/* tokens page blob */}
      <div className="bg-emerald-700/80 h-[400px] w-[400px] blur-[400px] absolute top-[200px] left-[750px] -z-10  "></div>
    </div>
  );
}
