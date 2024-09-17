"use client";

import { IconBrandX } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (!isHome) {
    return null;
  }
  return (
    <div className=" text-center text-gray-100 z-20 text-bold text-lg  pt-10">
      <div className="mx-auto px-8 flex justify-center items-center space-y-4 max-w-screen-lg ">
        <div className="flex flex-col items-center space-y-2">
          <Link href={"https://x.com/solinitypresale"}>
            <IconBrandX size={53} color="#5ACEA2" />
          </Link>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-500 pb-1">
        <p>&copy; 2024 Solinity. All rights reserved.</p>
      </div>
    </div>
  );
}
