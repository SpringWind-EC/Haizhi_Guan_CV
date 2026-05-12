"use client";

import resumeData from "../resume.json";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import "../globals.css"; // or your css file

export default function ContactPage() {
  const { name, contact } = resumeData;
  const { address, phone, email, linkedin } = contact;

  return (
    <main>
      <Nav name={name}  context="contact" />

      <section className="one-col">
        <h1>Contact Me</h1>

        <div className="contact-info">
          <p><strong>Address:</strong>  {address}</p>
          <p><strong>Phone:</strong> {phone}</p>
          <p>
            <strong>Email:</strong>{" "}
            <Link href={`mailto:${email}`} className="contact-link">
              {email}
            </Link>
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <Link href={linkedin} target="_blank" className="contact-link">
              {linkedin}
            </Link>
          </p>
        </div>
        
        {/* 
        <form
          action={`https://formsubmit.co/${email}`}
          method="post"
          className="contact-form"
        >
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
        */}
      </section>

      <Footer />
    </main>
  );
}
