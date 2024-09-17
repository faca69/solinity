"use client";

import TokenNotFoundPage from "@/app/tokens/[id]/not-found";
import Spinner from "./Spinner";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { Token } from "@/common/token.interface";
import { IconBrandTelegram, IconBrandX, IconWorld } from "@tabler/icons-react";
import Image from "next/image";
import ReactCountdown from "react-countdown";
import countdownRenderer from "@/components/CountdownRenderer";

interface Props {
  params: {
    id: string;
  };
}

export default function ClientSIngleTokenPage({ params: { id } }: Props) {
  const { data, isLoading } = useQuery<Token>({
    queryKey: ["token", id],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3000/api/tokens/${id}`);

      const data = await response.json();
      return data;
    },
  });

  if (isLoading) return <Spinner />;
  if (!data) return <TokenNotFoundPage />;
  return (
    <div className="min-h-screen  text-white px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-300 to-emerald-700 bg-clip-text text-transparent">
            {data?.name}
          </h1>
          <h2 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
            ${data?.symbol}
          </h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Image
              src={data?.image}
              alt={data?.name}
              width={500}
              height={500}
              className="w-full max-w-[500px] h-[500px] rounded-2xl mx-auto"
            />
            <div className="space-y-4">
              {[
                { label: "Description", value: data?.description },
                { label: "Total Supply", value: data?.totalSupply },
                {
                  label: "Revoke Mint Authority",
                  value: data?.revokeMintAuthority ? "Yes" : "No",
                },
                { label: "Supply Burned", value: data?.supplyBurned },
                { label: "Use of Funds", value: data?.useOfFunds },
              ].map(({ label, value }) => (
                <p key={label} className="text-lg">
                  <span className="font-semibold text-emerald-400">
                    {label}:
                  </span>{" "}
                  {value}
                </p>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <p className="text-lg mb-2">
                <span className="font-semibold text-emerald-400">
                  Solana Presale Address:
                </span>
              </p>
              <p className="text-sm sm:text-base break-all bg-gradient-to-r from-emerald-300 to-emerald-700 bg-clip-text text-transparent">
                {data?.solanaAddress}
              </p>
            </div>

            <div className="flex justify-center">
              <div className="bg-gray-800 h-48 w-48 rounded-full flex items-center justify-center border-4 border-emerald-500">
                <ReactCountdown
                  date={data?.releaseDate}
                  renderer={countdownRenderer}
                  className="text-2xl font-bold text-emerald-400"
                >
                  <p>Released</p>
                </ReactCountdown>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-center text-emerald-400">
                Socials
              </h3>
              <div className="flex justify-center gap-8">
                {data?.telegram && (
                  <Link
                    href={data.telegram}
                    target="_blank"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <IconBrandTelegram size={50} color="#35A67F" />
                  </Link>
                )}
                {data?.twitter && (
                  <Link
                    href={data.twitter}
                    target="_blank"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <IconBrandX size={50} color="#35A67F" />
                  </Link>
                )}
                {data?.website && (
                  <Link
                    href={data.website}
                    target="_blank"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <IconWorld size={50} color="#35A67F" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
