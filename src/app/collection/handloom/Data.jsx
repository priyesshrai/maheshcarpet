"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Data() {
  const pathname = usePathname();
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <section className="section">
      <div className="product-section">
        <div className="product-top-level">
          <div className="back-btn" onClick={handleBackClick}>
            <i className="hgi-stroke hgi-arrow-left-01" />
          </div>
          <div className="current-path">
            <p>
              <i className="hgi-stroke hgi-home-04" /> {pathname}
            </p>
          </div>
        </div>

        <div className="product-body">
          <div className="product-wraper">
            <div className="product-card">
              <div className="product-img">
                <Image src="/images/handloom/01.jpg" width={500} height={500} />
              </div>
              <div className="product-details">
                <div className="product-color">
                  <span>Color : </span>
                  <span>White & Black</span>
                </div>
                <div className="product-category" style={{ marginTop: "0" }}>
                  <span>Category : </span>
                  <span>Handloom</span>
                </div>
                <div className="product-btn">
                  <Link href="#">View Product</Link>
                </div>
              </div>
            </div>
            <div className="product-card"></div>
            <div className="product-card"></div>
            <div className="product-card"></div>
            <div className="product-card"></div>
            <div className="product-card"></div>
            <div className="product-card"></div>
            <div className="product-card"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
