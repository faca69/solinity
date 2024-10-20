"use client";

import { Token } from "@/common/token.interface";
import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScrollSpinner from "./InfiniteScrollSpinner";
import TokenCard from "./TokenCard";
import Link from "next/link";
import { InView } from "react-intersection-observer";
import TokensPageSkeleton from "./PageSkeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
export default function TokensContainer() {
  const {
    data: tokensData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery<Token[]>({
    queryKey: ["tokens"],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await fetch(
        `https://solinity.onrender.com/api/tokens?page=${pageParam}&pageSize=12`
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

  const allTokens = tokensData?.pages.flat();
  const upcomingTokens = allTokens?.filter(
    (token: Token) => new Date(token.releaseDate) > new Date()
  );
  const releasedTokens = allTokens?.filter(
    (token: Token) => new Date(token.releaseDate) <= new Date()
  );

  return (
    <div className="">
      <Tabs
        defaultValue="upcoming"
        className=" px-10 flex flex-col justify-center "
      >
        <TabsList className="max-w-[700px] bg-gray-300/20 mb-7 mx-auto flex justify-center ">
          <TabsTrigger value="upcoming" className="mx-auto font-bold">
            Upcoming
          </TabsTrigger>
          <TabsTrigger value="released" className="mx-auto font-bold">
            Released
          </TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming" className="flex mx-auto ">
          {upcomingTokens?.length === 0 ? (
            <div className="text-center">No upcoming tokens</div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7 xl:grid-cols-4">
              {upcomingTokens?.map((token: Token) => (
                <Link key={token.id} href={`/tokens/${token.id}`}>
                  <TokenCard token={token} />
                </Link>
              ))}
            </div>
          )}
        </TabsContent>
        <TabsContent value="released" className="flex mx-auto">
          {releasedTokens?.length === 0 ? (
            <div className="text-center">No released tokens</div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7 xl:grid-cols-4">
              {releasedTokens?.map((token: Token) => (
                <Link key={token.id} href={`/tokens/${token.id}`}>
                  <TokenCard token={token} />
                </Link>
              ))}
            </div>
          )}
        </TabsContent>

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
      </Tabs>
    </div>
  );
}
