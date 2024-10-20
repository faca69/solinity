"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { NavLink } from "@/common/navLink.enum";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { IconMenu2, IconX } from "@tabler/icons-react";

const navLinks = Object.values(NavLink);

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  if (isHomePage) {
    return null;
  }

  return (
    <header className="flex items-center justify-between backdrop-blur-sm text-white py-5 sticky top-0 z-50 px-10">
      <Link href="/" className="flex items-center" aria-label="Homepage">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-emerald-200 to-emerald-600">
          Solinity
        </h1>
      </Link>

      <nav className="lg:flex gap-5 hidden" aria-label="Main Navigation">
        {navLinks.map((link) => {
          const url = link.toLowerCase().replace(/\s+/g, "-");
          return (
            <Link
              key={link}
              href={`/${url}`}
              className="text-2xl font-semibold hover:underline underline-offset-4"
            >
              {link}
            </Link>
          );
        })}
      </nav>

      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger
          asChild
          className="lg:hidden cursor-pointer"
          aria-label="Menu"
        >
          {isOpen ? (
            <IconX size="33" />
          ) : (
            <IconMenu2
              size="33"
              className="transform transition-transform duration-300 hover:scale-110"
            />
          )}
        </DrawerTrigger>

        <DrawerContent className="backdrop-blur-md bg-transparent border-none focus:outline-none focus:border-none text-white">
          <div className="flex flex-col py-11 text-center gap-7">
            {navLinks.map((link) => {
              const url = link.toLowerCase().replace(/\s+/g, "-");
              return (
                <Link
                  key={link}
                  href={`/${url}`}
                  className="text-2xl font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </Link>
              );
            })}
          </div>
        </DrawerContent>
      </Drawer>
    </header>
  );
}
