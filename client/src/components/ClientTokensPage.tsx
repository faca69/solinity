"use client";

import { Token } from "@/common/token.interface";
import { useInfiniteQuery } from "@tanstack/react-query";
import TokensPageSkeleton from "./PageSkeleton";
import Link from "next/link";
import { InView } from "react-intersection-observer";
import InfiniteScrollSpinner from "./InfiniteScrollSpinner";
import TokenCard from "./TokenCard";

export default function ClientTokensPage() {
  const {
    data: tokensData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useInfiniteQuery<Token[]>({
    queryKey: ["tokens"],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await fetch(
        `http://localhost:3000/api/tokens?page=${pageParam}&pageSize=12`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length === 12) {
        return allPages.length + 1;
      } else {
        return undefined;
      }
    },
  });

  if (isLoading) {
    return <TokensPageSkeleton />;
  }

  if (tokensData?.pages[0].length === 0) {
    return <div>No tokens found</div>;
  }
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="flex flex-col items-center px-10 ">
      <div className="bg-emerald-700/80 h-[400px] w-[400px] blur-[400px] absolute top-[200px] left-[750px] -z-10 "></div>
      <h1 className="text-6xl font-bold py-11 text-center ">
        Explore Presales
      </h1>
      <div className="grid gap-5  sm:grid-cols-2 lg:grid-cols-3 lg:gap-7 xl:grid-cols-4   ">
        {tokensData?.pages.map((page) =>
          page.map((token: Token) => (
            <Link key={token.id} href={`/tokens/${token.id}`}>
              <TokenCard token={token} />
            </Link>
          ))
        )}
      </div>
      <InView
        as="div"
        onChange={(inView) => {
          if (inView && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
          }
        }}
        triggerOnce={false}
        threshold={1}
        className="h-1"
      />
      {isFetchingNextPage && (
        <div className="flex justify-center my-8">
          <InfiniteScrollSpinner />
        </div>
      )}
    </div>
  );
}
