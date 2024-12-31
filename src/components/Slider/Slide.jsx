import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const images = [
  { src: "/images/hero-img.jpg", alt: "Hero Image 1" },
  { src: "/images/hero-img-2.jpg", alt: "Hero Image 2" },
  { src: "/images/hero-img-3.jpg", alt: "Hero Image 3" },
  { src: "/images/hero-img-4.jpg", alt: "Hero Image 4" },
  { src: "/images/hero-img-5.jpg", alt: "Hero Image 5" },
  { src: "/images/hero-img-6.jpg", alt: "Hero Image 6" },
];

export default function Slide() {
  return (
    <section className="section">
      <div className="slider-container">
        <Carousel className="w-full">
          <CarouselContent className="-ml-1">
            {images.map((image, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-0">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={500}
                        height={500}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
