// components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="p-4 border-b bg-[#FBEEEF]">
      <div className="flex items-center justify-between">
            
        <Link href="/" className="text-xl font-bold underline flex items-center text-[#BE1627]">
        <Image
        src={'/globe.png'}
        alt="Digital Guardians Logo"
        height={381}
        width={41}
        />
          <p className="w-fit">Digital Guardian</p>
           
        </Link>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <img src="/menubtn.svg" alt="Menu" className="h-6 w-6" />
        </button>
        <div className="hidden md:flex gap-4">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/pricing">Pricing</Link>
        </div>
      </div>
      {open && (
        <div className="flex flex-col mt-2 gap-2 md:hidden">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/pricing">Pricing</Link>
        </div>
      )}
    </nav>
  );
}
