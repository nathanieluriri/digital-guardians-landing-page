// components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 p-4 border-b border-[#C6C2C2] bg-[#FBEEEF] max-w-[1800px] m-auto ">
      <div className="lg:pl-3 lg:pr-1.5 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold underline flex items-center text-[#BE1627]"
        >
          <Image
            src={"/globe.png"}
            alt="Digital Guardians Logo"
            height={381}
            width={41}
          />
          <p className="w-fit">Digital Guardian</p>
        </Link>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <Image src="/menubtn.svg" alt="Menu" height={35} width={40} />
        </button>
        <div className="hidden md:flex gap-4">
          <Link href="/">Home</Link>
          <Link href="#services">Services</Link>
          <Link href="#about">About</Link>
          <Link href="#products">Products</Link>
          <Link href="#careers">Careers</Link>

        </div>
        <div className="hidden md:flex gap-4">
          <Link href="/contact" className="border-2 p-1.5 rounded-[11px] border-[#404040]">Contact</Link>
          <Link href="/pricing" className="pr-2.5 pl-2.5 pt-1.5 pb-1.5 rounded-[11px] text-white bg-[#BE1627] flex gap-2.5 "><p>Portal</p> <Image src={'/white-arrow.svg'} height={8.5} width={20.5} alt="Arrow" /></Link>
        </div>
      </div>
      {open && (
        <div className="flex flex-col mt-2 gap-2 md:hidden">
         <Link href="/">Home</Link>
          <Link href="#services">Services</Link>
          <Link href="#about">About</Link>
          <Link href="#products">Products</Link>
          <Link href="#careers">Careers</Link>
        </div>
      )}
    </nav>
  );
}
