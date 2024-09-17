"use client";

import { Token } from "@/common/token.interface";
import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScrollSpinner from "./InfiniteScrollSpinner";
import TokenCard from "./TokenCard";
import Link from "next/link";
import { InView } from "react-intersection-observer";
import TokensPageSkeleton from "./PageSkeleton";
import NoTokensFound from "./NoTokensFound";
import { useState } from "react"; // Add this import

export default function TokensContainer() {
  const [searchTerm, setSearchTerm] = useState(""); // Add state for search term

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
    return <NoTokensFound />;
  }

  const filteredTokens = tokensData?.pages
    .flat()
    .filter((token: Token) =>
      token.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="flex flex-col items-center px-10 ">
      <input
        type="text"
        placeholder="Search tokens..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 p-2 border rounded"
      />
      <div className="grid gap-5  sm:grid-cols-2 lg:grid-cols-3 lg:gap-7 xl:grid-cols-4   ">
        {filteredTokens?.map((token: Token) => (
          <Link key={token.id} href={`/tokens/${token.id}`}>
            <TokenCard token={token} />
          </Link>
        ))}
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
