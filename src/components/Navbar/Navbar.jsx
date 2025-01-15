"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [openDropDown, setOpenDropDown] = useState(false);
  const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };
    setActiveHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <header>
      <nav>
        <div className="logo-container">
          <div className="logo-wraper">
            <Image src="/images/logo/logo-01.jpeg" alt="logo" width={200} height={200} />

            <div className="new-na">
              <a href="/">
                Mahesh Carpets
              </a>
              <div className="blank">
                <Image src='/images/logo/new.png' width={200} height={120} alt="logo" />
              </div>
            </div>
          </div>
        </div>
        <ul className="nav-links-container">
          <li className="nav-links">
            <a href="/" className={pathname === "/" ? "active-link" : ""}>
              Home
            </a>
          </li>
          <li className="nav-links">
            <Link
              href="/our-story"
              className={pathname.startsWith("/our-story") ? "active-link" : ""}
            >
              Our Story
            </Link>
          </li>
          <li className="nav-links">
            <Link
              href="#"
              className={pathname.startsWith("/collections") ? "active-link" : ""
              }
            >
              collections
            </Link>
            <div className="dropdown">
              <ul>
                <li>
                  <Link href="/collections/handloom">Handloom</Link>
                </li>
                <li>
                  <Link href="/collections/hand-tufted">Hand Tufted</Link>
                </li>
                <li>
                  <Link href="/collections/flat-weave">Flat Weave</Link>
                </li>
                <li>
                  <Link href="/collections/shaggy">Shaggy</Link>
                </li>
                <li>
                  <Link href="/collections/hand-knotted">Hand Knotted</Link>
                </li>
                <li>
                  <Link href="/collections/shaped">Asymmetrical</Link>
                </li>
                <li>
                  <Link href="/collections/bespoke">Bespoke</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-links">
            <Link
              href="#compliance"
              className={activeHash === "#compliance" ? "active-link" : ""}
            >
              Compliance
            </Link>
          </li>
          <li className="nav-links">
            <Link
              href="/contact"
              className={pathname.startsWith("/contact") ? "active-link" : ""}
            >
              Contact
            </Link>
          </li>
        </ul>
        {/* <div className="menu-btn-container">
          <div className="menu-btn-wraper">
            <div className="menu-btn"></div>
            <div className="menu-btn"></div>
          </div>
        </div> */}
        <div className="mobile-navigation">
          <ul className="mabile-nav-links-container">
            <li className="nav-links">
              <a href="/" className={pathname === "/" ? "active-link" : ""}>
                <i className="hgi-stroke hgi-home-04" />
              </a>
              <span>Home</span>
            </li>
            <li className="nav-links">
              <Link
                href="/our-story"
                className={pathname.startsWith("/our-story") ? "active-link" : ""}
              >
                <i className="hgi-stroke hgi-house-01" />
              </Link>
              <span>Our Story</span>
            </li>
            <li
              className="nav-links"
              onClick={() => setOpenDropDown(!openDropDown)}
            >
              <Link
                href="#"
                className={
                  pathname.startsWith("/collections") ? "active-link" : ""
                }
              >
                <i className="hgi-stroke hgi-collections-bookmark" />
              </Link>
              <span>collections</span>
              <div className={`dropdown ${openDropDown && "act-drp"}`}>
                <ul>
                  <li>
                    <Link href="/collections/handloom">Handloom</Link>
                  </li>
                  <li>
                    <Link href="/collections/hand-tufted">Hand Tufted</Link>
                  </li>
                  <li>
                    <Link href="/collections/flat-weave">Flat Weave</Link>
                  </li>
                  <li>
                    <Link href="/collections/shaggy">Shaggy</Link>
                  </li>
                  <li>
                    <Link href="/collections/hand-knotted">Hand Knotted</Link>
                  </li>
                  <li>
                    <Link href="/collections/shaggy">Shaggy</Link>
                  </li>
                  <li>
                    <Link href="/collections/hand-knotted">Hand Knotted</Link>
                  </li>
                  <li>
                    <Link href="/collections/shaped">Asymmetrical</Link>
                  </li>
                  <li>
                    <Link href="/collections/bespoke">Bespoke</Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="nav-links">
              <Link
                href="#compliance"
                className={activeHash === "#compliance" ? "active-link" : ""}
              >
                <i className="hgi-stroke hgi-certificate-02" />
              </Link>
              <span>Compliance</span>
            </li>

            <li className="nav-links">
              <Link
                href="/contact"
                className={pathname.startsWith("/contact") ? "active-link" : ""}
              >
                <i className="hgi-stroke hgi-add-team" />
              </Link>
              <span>Contact</span>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
