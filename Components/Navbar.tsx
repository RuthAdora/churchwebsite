// components/Navbar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-center">
        <div className="flex items-center gap-6">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-900 hidden sm:inline">
              Favor & Mercy Church
            </span>
          </Link>

          {/* Navigation Links */}
          <Button variant="ghost" asChild>
            <Link href="/about">About</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/ministries">Ministries</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </nav>
      <Separator />
    </header>
  );
}
