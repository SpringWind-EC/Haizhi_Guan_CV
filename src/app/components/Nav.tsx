"use client";

import Link from "next/link";

type NavProps = {
  name: string;
  context?: "home" | "contact";
};

export default function Nav({ name, context = "home" }: NavProps) {
  return (
    <nav className="nav">
      <p>{name}</p>
      <ul>
        <li>
          {context === "contact" ? (
            <Link href="/">About {name}</Link>
          ) : (
            <Link href="/contact">Contact {name}</Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
