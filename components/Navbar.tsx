"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-[rgba(45,212,216,0.12)] py-3"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/logo.png"
            alt="EmlakAsistan AI"
            width={140}
            height={56}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Hizmetler", href: "#hizmetler" },
            { label: "Nasıl Çalışır", href: "#nasil-calisir" },
            { label: "Demo", href: "#demo" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium animated-underline"
              style={{ color: "var(--text-muted)", fontFamily: "DM Sans, sans-serif" }}
            >
              {item.label}
            </a>
          ))}
          <Link
            href="/blog"
            className="text-sm font-medium animated-underline"
            style={{ color: "var(--text-muted)", fontFamily: "DM Sans, sans-serif" }}
          >
            Blog
          </Link>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#demo" className="btn-primary text-sm py-2.5 px-5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.86 12a19.79 19.79 0 01-3.07-8.67A2 2 0 012.77 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.14a16 16 0 006.95 6.95l1.41-1.41a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            Demo Dene
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü"
        >
          <span className={`block w-6 h-0.5 bg-[var(--text)] transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}/>
          <span className={`block w-6 h-0.5 bg-[var(--text)] transition-all ${menuOpen ? "opacity-0" : ""}`}/>
          <span className={`block w-6 h-0.5 bg-[var(--text)] transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}/>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass border-t border-[rgba(45,212,216,0.12)] px-6 py-4 flex flex-col gap-4">
          {[
            { label: "Hizmetler", href: "#hizmetler" },
            { label: "Nasıl Çalışır", href: "#nasil-calisir" },
            { label: "Demo", href: "#demo" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium py-1"
              style={{ color: "var(--text-muted)" }}
            >
              {item.label}
            </a>
          ))}
          <Link
            href="/blog"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-medium py-1"
            style={{ color: "var(--text-muted)" }}
          >
            Blog
          </Link>
          <a href="#demo" className="btn-primary text-sm justify-center mt-2" onClick={() => setMenuOpen(false)}>
            Demo Dene
          </a>
        </div>
      )}
    </nav>
  );
}
