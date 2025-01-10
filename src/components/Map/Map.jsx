// import Image from "next/image";
// import React from "react";

// export default function Map() {
//   return (
//     <section className="section">
//       <div className="map-section">
//         <div className="map-heading">
//           <h2>Our presence</h2>
//         </div>
//         <div className="map-img">
//           <Image
//             src="/images/map.png"
//             width={5000}
//             height={5000}
//             alt="country we serve."
//           />
//           {/* <div className="map-overlay">
//             <div className="map-box"></div>
//             <div className="map-box"></div>
//             <div className="map-box"></div>
//             <div className="map-box"></div>
//             <div className="map-box"></div>
//             <div className="map-box"></div>
//             <div className="map-box"></div>
//             <div className="map-box"></div>
//             <div className="map-box"></div>
//             <div className="map-box"></div>
//             <div className="map-box"></div>
//             <div className="map-box"></div>
//           </div> */}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";
import WorldMap from "@/components/ui/world-map";
import { motion } from "motion/react";

export default function Map() {
  return (
    // <section className="section">
    //   <div className="map-section">
    //     <div className="map-heading">
    //       <h2>Our presence</h2>
    //     </div>
    //     <div className="map-img">
    //     </div>
    //   </div>
    // </section>
    <div className=" py-20 dark:bg-black bg-white w-full">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl dark:text-white text-black mb-5"style={{fontFamily:"var(--font-jura)"}}>
          Our presence
        </p>
      </div>
      <WorldMap
        dots={[
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: -41.28, lng: 174.77 },
            label: "New Zealand"
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: -35.30, lng: 149.12 },
            label: "Australia"
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: 1.28, lng: 103.85 }, // Singapore
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: 21.03, lng: 105.85 }, // Vietnam
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: 37.55, lng: 126.98 }, // South Korea
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: 35.68, lng: 139.69 }, // Japan
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: 39.90, lng: 116.40 }, // China
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: 33.88, lng: 35.50 }, // Lebanon
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: -25.73, lng: 28.22 }, // South Africa
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: 55.76, lng: 37.62 }, // Russia
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: 41.90, lng: 12.50 }, // Italy
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: 40.38, lng: -3.68 }, // Spain
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: 52.52, lng: 13.40 }, // Germany
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: 48.85, lng: 2.35 }, // France
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: 48.20, lng: 16.37 }, // Austria
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: 30.05, lng: 31.25 }, // Egypt
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: 31.77, lng: 35.23 }, // Israel
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: 51.17, lng: 71.43 }, // Kazakhstan
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: 39.87, lng: 32.85 }, // Turkey
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: -15.78, lng: -47.93 }, // Brazil
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: -33.45, lng: -70.65 }, // Chile
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: 50.85, lng: 4.35 }, // Belgium
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: 59.33, lng: 18.07 }, // Sweden
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: 60.17, lng: 24.93 }, // Finland
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: 45.42, lng: -75.70 }, // Canada
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: 19.43, lng: -99.13 }, // Mexico
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: 37.97, lng: 23.72 }, // Greece
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: 51.50, lng: -0.12 }, // United Kingdom
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: 35.68, lng: 51.42 }, // Iran
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: 24.47, lng: 54.37 }, // UAE
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: 52.37, lng: 4.89 }, // Netherlands
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: 55.67, lng: 12.57 }, // Denmark
          },
        ]}
      />
    </div>
  )
}


