import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-social">
          <div className="footer-icon">
            <a
              href="https://www.linkedin.com/company/mahesh-carpets/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="hgi-stroke hgi-linkedin-02" />
            </a>
          </div>
          <div className="footer-icon">
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="hgi-stroke hgi-youtube" />
            </a>
          </div>
          <div className="footer-icon">
            <a
              // href="https://www.linkedin.com/company/mahesh-carpets/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="hgi-stroke hgi-facebook-02" />
            </a>
          </div>
          <div className="footer-icon">
            <a
              // href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="hgi-stroke hgi-instagram" />
            </a>
          </div>
        </div>

        <div className="first-container">
          <div className="footer-container-wraper">
            <div className="footer-logo">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={180}
                height={80}
              />
            </div>
            {/* <div className="footer-description">
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div> */}
          </div>
        </div>

        <div className="sec-container">
          <div className="footer-container-wraper">
            <div className="footer-link-header">
              <span>Quick Links</span>
            </div>

            <div className="footer-links">
              <ul>
                <li>
                  <i className="hgi-stroke hgi-link-forward" />
                  <a href="/">Home</a>
                </li>
                <li>
                  <i className="hgi-stroke hgi-link-forward" />
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <i className="hgi-stroke hgi-link-forward" />
                  <Link href="/contact">Contact Us</Link>
                </li>
                <li>
                  <i className="hgi-stroke hgi-link-forward" />
                  <Link href="/">Privacy & Policy</Link>
                </li>
                <li>
                  <i className="hgi-stroke hgi-link-forward" />
                  <Link href="/">Terms & Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="sec-container">
          <div className="footer-container-wraper">
            <div className="footer-link-header">
              <span>Categories</span>
            </div>

            <div className="footer-links">
              <ul>
                <li>
                  <i className="hgi-stroke hgi-link-forward" />
                  <Link href="/collections/hand-knotted">Hand Knotted</Link>
                </li>
                <li>
                  <i className="hgi-stroke hgi-link-forward" />
                  <Link href="/collections/hand-tufted">Hand Tufted</Link>
                </li>
                <li>
                  <i className="hgi-stroke hgi-link-forward" />
                  <Link href="/collections/shaggy">Shaggy</Link>
                </li>
                <li>
                  <i className="hgi-stroke hgi-link-forward" />
                  <Link href="/collections/handloom">Handloom</Link>
                </li>
                <li>
                  <i className="hgi-stroke hgi-link-forward" />
                  <Link href="/collections/flat-weave">Flat Weave</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="sec-container">
          <div className="footer-container-wraper">
            <div className="footer-link-header">
              <span>Contact Us</span>
            </div>

            <div className="footer-links">
              <ul>
                <li>
                  <i className="hgi-stroke hgi-telephone" />
                  <Link href="/">
                    <span>+91 9517292555</span>
                  </Link>
                </li>
                <li>
                  <i className="hgi-stroke hgi-mail-at-sign-01" />
                  <Link href="mailto:info@maheshcarpets.com">
                    <span>info@maheshcarpets.com</span>
                  </Link>
                </li>
                <li>
                  <i className="hgi-stroke hgi-location-03" />
                  <span>Jagatpur GT Road Varanasi 221302 Uttar Pradesh</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="base-footer">
        <span>
          Copyright &copy; {new Date().getFullYear()} Mahesh Carpets | All
          rights reserved Design by{" "}
          <a href="https://wizards.co.in/" target="_blank">
            Wizards Next
          </a>
        </span>
      </div>
    </footer>
  );
}
