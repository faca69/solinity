import Link from "next/link";

export default function PageNotFound() {
  return (
    <div className=" font-semibold flex flex-col items-center justify-center h-[90vh] bg-clip-text text-transparent bg-gradient-to-b from-emerald-300 to-emerald-700">
      <div className="bg-emerald-800 h-[100px]  w-[100px] blur-[100px] absolute top-[450px] -z-10  "></div>
      <h1 className="text-[30px] sm:text-[50px] pb-5">404 | Page not found</h1>

      <Link href="/tokens">
        <button className="p-[3px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-700 rounded-lg" />
          <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            Go To Tokens
          </div>
        </button>
      </Link>
    </div>
  );
}
