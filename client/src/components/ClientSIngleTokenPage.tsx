"use client";

import Spinner from "./Spinner";
import { useQuery } from "@tanstack/react-query";
import { Token } from "@/common/token.interface";
import Image from "next/image";
import ReactCountdown from "react-countdown";
import SingleTokenCountdownRenderer from "./SingleTokenCountdownRenderer";
import TokenNotFoundPage from "@/app/tokens/[id]/not-found";
import { useToast } from "@/hooks/use-toast";
import { IconBrandTelegram, IconBrandX } from "@tabler/icons-react";
import { Globe } from "lucide-react";
import Link from "next/link";

interface Props {
  params: {
    id: string;
  };
}

export default function ClientSIngleTokenPage({ params: { id } }: Props) {
  const { toast } = useToast();

  const { data, isLoading } = useQuery<Token>({
    queryKey: ["token", id],
    queryFn: async () => {
      const response = await fetch(
        `https://solinity.onrender.com/api/tokens/${id}`
      );

      const data = await response.json();
      return data;
    },
  });

  if (isLoading) return <Spinner />;
  if (!data) return <TokenNotFoundPage />;
  return (
    <div className="min-h-screen flex flex-col text-white px-10 ">
      <div className="">
        <header className="text-center ">
          <h1
            className={`text-4xl sm:text-6xl font-bold mb-4 bg-gradient-to-b ${
              data.isAdvertised
                ? "from-yellow-300 to-yellow-500 "
                : "from-emerald-300 to-emerald-700 "
            } bg-clip-text text-transparent pt-11`}
          >
            {data?.name}
          </h1>
          <h2 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent pb-12">
            ${data?.symbol}
          </h2>
        </header>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="">
            <Image
              src={data?.image}
              alt={data?.name}
              width={500}
              height={500}
              className=" rounded-2xl mx-auto h-[250px] w-[250px]"
              priority
            />
          </div>

          <div className=" ">
            <div className="flex justify-center ">
              <div className="bg-transparent h-[250px] w-[250px] sm:h-[500px] sm:w-[500px] rounded-full flex items-center justify-center border-[20px] border-emerald-500">
                <ReactCountdown
                  date={data?.releaseDate}
                  renderer={SingleTokenCountdownRenderer}
                  className="text-4xl font-bold text-emerald-400"
                >
                  <p>Released</p>
                </ReactCountdown>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className=" pt-24 font-bold text-3xl sm:text-5xl">
            Solana Address
          </p>
          <p
            className=" py-3 font-semibold text-xl sm:text-3xl text-emerald-400 cursor-pointer"
            onClick={async () => {
              await navigator.clipboard.writeText(data.solanaAddress);
              toast({
                description: "Copied to Clipboard",
              });
            }}
          >
            {data.solanaAddress}
          </p>
          <p className=" pt-10 font-bold text-3xl sm:text-5xl">Description</p>
          <p className="py-3 font-semibold text-xl sm:text-3xl text-emerald-400">
            {data.description}
          </p>

          <p className=" pt-10 font-bold text-3xl sm:text-5xl">Use Of Funds</p>
          <p className="py-3 font-semibold text-xl sm:text-3xl text-emerald-400">
            {data.useOfFunds}
          </p>

          <p className=" pt-10 font-bold text-3xl sm:text-5xl">Total Supply</p>
          <p className="py-3 font-semibold text-xl sm:text-3xl text-emerald-400">
            {data.totalSupply}
          </p>

          {data.supplyBurned !== 0 && (
            <>
              <p className=" pt-10 font-bold text-3xl sm:text-5xl">
                Supply To Be Burned
              </p>
              <p className="py-3 font-semibold text-xl sm:text-3xl text-emerald-400">
                {data.supplyBurned}
              </p>
            </>
          )}

          <p className=" pt-10 font-bold text-3xl sm:text-5xl">
            Revoke Mint Authority
          </p>
          <p className="py-3 font-semibold text-xl sm:text-3xl text-emerald-400">
            {data.supplyBurned ? "Yes" : "No"}
          </p>

          {(data.twitter || data.telegram || data.website) && (
            <>
              <p className=" pt-10 font-bold text-3xl sm:text-5xl">Socials</p>
              <div className="flex flex-wrap justify-center py-4 gap-10 ">
                {data.twitter && (
                  <Link href={data.twitter}>
                    <IconBrandX size={80} className="text-emerald-400" />
                  </Link>
                )}
                {data.telegram ? (
                  <Link href={data.telegram}>
                    <IconBrandTelegram size={80} className="text-emerald-400" />
                  </Link>
                ) : null}
                {data.website ? (
                  <Link href={data.website}>
                    <Globe size={80} className="text-emerald-400" />
                  </Link>
                ) : null}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
