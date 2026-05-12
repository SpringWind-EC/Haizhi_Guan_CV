"use client";

import Link from "next/link";
import Image from "next/image";
import type { Contact } from "@/types/resume";

type HeaderProps = {
  name: string;
  tagline: string;
  headshot: string;
  contact: Contact;
};

export default function Header({ name, tagline, headshot, contact }: HeaderProps) {
  return (
    <header className="header">
      <Image 
        src={`/${headshot}`}
        alt={name}
        width={150}
        height={150}
      />
      <h1>{name}</h1>
      <p>{tagline}</p>
      
      <div>
        <p>
        Github: <Link href={contact.github_link} target="_blank" rel="noopener noreferrer">{contact.github_link}</Link>
        </p>
        <p>
          Email: <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </p>
        <p>Phone: {contact.phone}</p>
        <p>Address: {contact.address}</p>
      </div>
    </header>
  );
}
