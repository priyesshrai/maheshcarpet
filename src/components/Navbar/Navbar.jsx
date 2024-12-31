"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header>
      <nav>
        <div className="logo-container">
          <div className="logo-wraper">
            <Image src="/images/logo.png" alt="logo" width={130} height={80} />
          </div>
        </div>
        <ul>
          <li>
            <Link href="/" className={pathname === "/" ? "active-link" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={pathname === "/about" ? "active-link" : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/collections"
              className={pathname === "/collections" ? "active-link" : ""}
            >
              collections
            </Link>
          </li>
          <li>
            <Link
              href="/blogs"
              className={pathname === "/blogs" ? "active-link" : ""}
            >
              blogs
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={pathname === "/contact" ? "active-link" : ""}
            >
              Contact
            </Link>
          </li>
          <li>
            <div className="menu-btn-container">
              <div className="menu-btn-wraper">
                <div className="menu-btn"></div>
                <div className="menu-btn"></div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
