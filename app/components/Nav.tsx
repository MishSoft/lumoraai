import Link from "next/link";
import React from "react";

const links = [
  {
    href: "#features",
    name: "Features",
  },
  {
    href: "#templates",
    name: "Templates",
  },
  {
    href: "#community",
    name: "Community",
  },
  {
    href: "#pricing",
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
