"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, BookOpenIcon } from "@heroicons/react/24/outline";

const items = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "/explore", label: "Explore", icon: BookOpenIcon },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="bg-light-secondary border-t border-brown-light flex justify-around py-3 sm:hidden shadow-inner">
      {items.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link key={item.href} href={item.href} passHref>
            <button
              className={`flex flex-col items-center justify-center gap-1 text-sm font-semibold select-none ${
                isActive ? "text-brown-primary" : "text-brown-secondary"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              <item.icon className="h-6 w-6" aria-hidden="true" />
              {item.label}
            </button>
          </Link>
        );
      })}
    </nav>
  );
}
