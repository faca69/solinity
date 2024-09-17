import { Skeleton } from "./ui/skeleton";

function TokensPageSkeleton() {
  return (
    <div className="flex flex-col items-center px-10">
      <h1 className="text-6xl font-bold py-11">Explore Presales</h1>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7 xl:grid-cols-4">
        {[...Array(12)].map((_, index) => (
          <div key={index} className="w-[280px] p-6  bg-gray-900/35 rounded-xl">
            <Skeleton className="h-[200px] w-full rounded-2xl bg-gray-800/35" />
            <div className="mt-3">
              <Skeleton className="h-4 w-3/4 bg-gray-700/35 mt-3" />
              <Skeleton className="h-4 w-1/2 bg-gray-700/35 mt-3" />
              <Skeleton className=" text-center h-12 w-full bg-gray-600/35 mt-3" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TokensPageSkeleton;
