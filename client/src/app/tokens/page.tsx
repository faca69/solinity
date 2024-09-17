import TokensContainer from "@/components/TokensContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tokens",
};

export default function TokensPage() {
  return (
    <>
      <div className="bg-emerald-700/80 h-[400px] w-[400px] blur-[400px] absolute top-[200px] left-[750px] -z-10 "></div>
      <h1 className="text-6xl font-bold py-11 text-center ">
        Explore Presales
      </h1>
      <TokensContainer />
    </>
  );
}
