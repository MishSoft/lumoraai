import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const links = [
  {
    href: "/",
    name: "Features",
  },
  {
    href: "/",
    name: "Templates",
  },
  {
    href: "/",
    name: "Community",
  },
  {
    href: "/",
    name: "Pricing",
  },
];

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"outline"} className="cursor-pointer">
          {/* Drop menu icon */}
          <Menu size={40} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <nav className="flex items-center w-full h-full justify-center flex-col gap-10">
          {links.map((link, id) => {
            return (
              <Link className="font-medium" key={id} href={link.href}>
                {link.name}
              </Link>
            );
          })}
        </nav>
        <SheetFooter className="flex items-center flex-col gap-2">
          <Button variant={"outline"} className="w-full cursor-pointer">
            Login
          </Button>
          <Button className="w-full cursor-pointer">Get Started</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
