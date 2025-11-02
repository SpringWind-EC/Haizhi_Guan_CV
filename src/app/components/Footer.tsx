"use client";

import Link from "next/link";
import resumeData from "../resume.json";
import "./style.css";

export default function Footer() {
  const { name, contact } = resumeData;
  const { address, phone, email, linkedin } = contact;

  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} <Link href="/contact">{name}</Link>
      </p>
      <p>
        Email: <Link href={`mailto:${email}`}>{email}</Link>
      </p>
      <p>
        LinkedIn: <Link href={linkedin} target="_blank" rel="noopener noreferrer">{linkedin}</Link>
      </p>
      <p>Phone: {phone}</p>
      <p>Address: {address}</p>
    </footer>
  );
}
