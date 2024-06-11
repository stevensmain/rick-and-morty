"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import logo from "@/assets/header-logo.png";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b-2">
      <div className="max-w-7xl w-full m-auto flex items-center justify-between px-6 py-2">
        <Link href="/" className="transition-all hover:drop-shadow-4xl">
          <Image src={logo} alt="Site Logo" className="max-w-[50px]" />
        </Link>
        <nav className="flex gap-4">
          <Link
            href="/characters"
            className={clsx(
              "text-sm sm:text-base font-medium hover:opacity-75 transition-opacity",
              pathname.startsWith("/characters") && "text-primary"
            )}
          >
            Characters
          </Link>
          <Link
            href="/episodes"
            className={clsx(
              "text-sm sm:text-base font-medium hover:opacity-75 transition-opacity",
              pathname.startsWith("/episodes") && "text-primary"
            )}
          >
            Episodes
          </Link>
        </nav>
      </div>
    </header>
  );
}
