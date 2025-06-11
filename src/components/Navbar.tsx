// components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="p-4 border-b">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          MyApp
        </Link>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
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
