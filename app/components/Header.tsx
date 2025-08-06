import Link from "next/link";
import React from "react";
import Nav from "./Nav";
import { Button } from "@/components/ui/button";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="p-5 fixed bg-white flex w-full items-center justify-between">
      <Link href={""}>
        <h1 className="text-gray-800 text-[25px] font-semibold">
          Lumora<span className="text-[#F93493]">AI</span>
        </h1>
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-10">
        <Nav />
        <div className="flex items-center gap-5">
          <Button variant={"outline"} className=" cursor-pointer">
            Login
          </Button>
          <Button variant={"outline"} className=" cursor-pointer">
            Get Started
          </Button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className="block md:hidden">
        <MobileNav />
      </div>
    </header>
  );
}
