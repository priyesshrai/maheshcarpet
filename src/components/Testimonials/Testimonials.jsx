"use client";
import React from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Testimonials() {
  return (
    <section className="section">
      <div className="testimonials-section">
        <div className="testimonial-sub-heading">
          <p>Trade Fair</p>
        </div>
        <div className="benefit-heading mb-4">
          <h2>Our Journey at the Indian Carpet Expo</h2>
        </div>
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "Experience the vibrant highlights of our recent participation in the Indian Carpet Expo Badhoi. Explore a gallery of moments where tradition met innovation, showcasing our finest carpets and rugs to the world. Join us in celebrating our craftsmanship and the rich heritage of the textile industry.",
    name: "Indian Carpet Expo Badhoi",
    src: "/images/fair/fair_badhoi.jpg",
  },
  {
    quote:
      "Experience the vibrant highlights of our recent participation in the Indian Carpet Expo New Delhi. Explore a gallery of moments where tradition met innovation, showcasing our finest carpets and rugs to the world. Join us in celebrating our craftsmanship and the rich heritage of the textile industry.",
    name: "Indian Carpet Expo New Delhi",
    src: "/images/fair/fair_delhi.JPG",
  },
];
