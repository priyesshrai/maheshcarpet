import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
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
            <div className="footer-description">
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>

            <div className="footer-social">
              <div className="footer-icon">
                <Link
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="hgi-stroke hgi-facebook-02" />
                </Link>
              </div>
              <div className="footer-icon">
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="hgi-stroke hgi-new-twitter" />
                </Link>
              </div>
              <div className="footer-icon">
                <Link
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="hgi-stroke hgi-linkedin-02" />
                </Link>
              </div>
              <div className="footer-icon">
                <Link
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="hgi-stroke hgi-instagram" />
                </Link>
              </div>
              <div className="footer-icon">
                <Link
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="hgi-stroke hgi-youtube" />
                </Link>
              </div>
            </div>
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
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <i className="hgi-stroke hgi-link-forward" />
                  <Link href="/">About Us</Link>
                </li>
                <li>
                  <i className="hgi-stroke hgi-link-forward" />
                  <Link href="/">Contact Us</Link>
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
                  <Link href="#">Hand Knotted</Link>
                </li>
                <li>
                  <i className="hgi-stroke hgi-link-forward" />
                  <Link href="#">Hand Tufted</Link>
                </li>
                <li>
                  <i className="hgi-stroke hgi-link-forward" />
                  <Link href="#">Loom Knotted</Link>
                </li>
                <li>
                  <i className="hgi-stroke hgi-link-forward" />
                  <Link href="#">Indo Tibetan</Link>
                </li>
                <li>
                  <i className="hgi-stroke hgi-link-forward" />
                  <Link href="#">Custom Made</Link>
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
                    <span>+91 99186 39000</span>
                  </Link>
                </li>
                <li>
                  <i className="hgi-stroke hgi-mail-at-sign-01" />
                  <Link href="/">
                    <span>maniessh@mahesh carpets.com</span>
                  </Link>
                </li>
                <li>
                  <i className="hgi-stroke hgi-location-03" />
                  <span>Mahmoorganj, Varanasi, India - 221010</span>
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
