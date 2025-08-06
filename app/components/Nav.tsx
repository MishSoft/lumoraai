import Link from "next/link";
import React from "react";

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

export default function Nav() {
  return (
    <nav className="flex items-center gap-10">
      {links.map((link, id) => {
        return (
          <Link className="font-medium" key={id} href={link.href}>
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
