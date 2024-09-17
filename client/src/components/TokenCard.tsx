import { Token } from "@/common/token.interface";
import countdownRenderer from "./CountdownRenderer";
import ReactCountdown from "react-countdown";
import Image from "next/image";
interface TokenCardProps {
  token: Token;
}

export default function TokenCard({ token }: TokenCardProps) {
  return (
    <div
      className={`p-6 rounded-2xl bg-gradient-to-br from-gray-900/60 to-transparent duration-300 transform hover:-translate-y-1 flex flex-col h-full w-[280px] ${
        token.isAdvertised
          ? "border-2 border-yellow-400"
          : "shadow-emerald-800/40 shadow-inner"
      }`}
    >
      <div className="flex justify-center mb-3">
        <Image
          className="h-[200px] w-[200px] rounded-xl object-cover "
          src={token.image}
          alt={token.name}
          width={200}
          height={200}
          priority
        />
      </div>

      <div className="text-center flex-grow flex flex-col justify-between">
        <div>
          <p className="font-bold text-2xl text-white truncate px-2 mb-1">
            {token.name}
          </p>
          <p className="font-medium text-lg text-gray-300 py-2">
            ${token.symbol.toUpperCase()}
          </p>
        </div>
        <div className="py-2 px-4 rounded-lg font-semibold text-lg text-white bg-gradient-to-b from-emerald-400 to-emerald-700 hover:from-emerald-500 hover:to-emerald-800  transition-color duration-300">
          <ReactCountdown date={token.releaseDate} renderer={countdownRenderer}>
            <p>Released</p>
          </ReactCountdown>
        </div>
      </div>
    </div>
  );
}
