import Image from "next/image";
import React from "react";

export default function Offer() {
  return (
    <section className="section">
      <div className="offer-section">
        <div className="benefit-heading">
          <h2>Discover What We Offer to Delight Our Valued Customers</h2>
        </div>

        <div className="offer-container">
          <div className="offer-image-section">
            <Image
              src="/images/offer-img.jpg"
              alt="offer"
              width={5000}
              height={500}
            />
          </div>
          <div className="offer-details-section">
            <div className="details-heading">
              <h3>We offer professional guarantee on our products.</h3>
            </div>

            <div className="details-description">
              <p>
                Our carpet range is the perfect combination of quality and
                excellence. We provide the world-class product range keeping in
                mind the diverse needs of the customers all around the globe.
                Our website is the right platform for those who are looking for
                premium quality carpets and rugs created on the terms of
                innovation and in accordance to different places.
              </p>

              <p>
                MaheshCarpets based out of Varanasi has evolved over the years
                and has marked massive growth in the fields of technological
                enhancement, international customer base, and carpet
                manufacturing.
              </p>
            </div>

            <div className="details-badge-container">
              <div className="badge-container">
                <span>25</span>
                <p>Years of Experienced</p>
              </div>
              <div className="badge-container">
                <span>510</span>
                <p>Rugs in Catalog</p>
              </div>
              <div className="badge-container">
                <span>100</span>
                <p>Team Members</p>
              </div>
              <div className="badge-container">
                <span>35</span>
                <p>Countries we Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
