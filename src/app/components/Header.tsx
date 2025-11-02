"use client";

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
          Email: <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </p>
        <p>Phone: {contact.phone}</p>
        <p>Address: {contact.address}</p>
      </div>
    </header>
  );
}
