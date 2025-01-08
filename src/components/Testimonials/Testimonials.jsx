"use client";
import React from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Testimonials() {
  return (
    <section className="section">
      <div className="testimonials-section">
        {/* <div className="testimonial-sub-heading">
          <p>Trade Fair</p>
        </div> */}
        <div className="benefit-heading mb-4">
          <h2>Trade Shows</h2>
        </div>
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: "Indian Carpet Expo Badhoi",
    src: "/images/fair/fair_badhoi.jpg",
  },
  {
    name: "Indian Carpet Expo New Delhi",
    src: "/images/fair/fair_delhi.JPG",
  },
];
