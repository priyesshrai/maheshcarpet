"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  useEffect(() => {
    gsap.to(".hero-image", {
      scrollTrigger: {
        trigger: ".hero-image",
        start: "top 50%",
        end: "top -20%",
        scrub: 1,
        scroller: "body",
      },
      height: "45vw",
      borderRadius: "1.5vw",
      width: "80vw",
      // ease: "power1.out",
    });
  }, []);

  return (
    // <ReactLenis root>
      <section className="section">
        <div className="hero-section">
          <div className="hero-heading">
            <h1>Great Collection of Vintage Rugs with a Legacy of 25 Years</h1>
          </div>
          <div className="hero-sub-heading">
            <p>
              Exclusive Range of Carpets of All Make, Sizes and Colours for
              Homes everywhere.
            </p>
          </div>
          <div className="hero-image-container">
            <div className="hero-image">
              <Image
                src="/images/hero-img-3.jpg"
                alt="Hero Image"
                width={5000}
                height={5000}
              />
            </div>
          </div>
        </div>
      </section>
    // </ReactLenis>
  );
}
