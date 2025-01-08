import Image from "next/image";
import React from "react";

export default function Map() {
  return (
    <section className="section">
      <div className="map-section">
        <div className="map-heading">
          <h2>Our Family and Counting</h2>
        </div>
        <div className="map-img">
            <Image src="/images/map.png" width={5000} height={5000} alt="country we serve."/>
        </div>
      </div>
    </section>
  );
}
