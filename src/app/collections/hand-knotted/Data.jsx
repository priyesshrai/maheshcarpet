"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";
// import { shaggy } from "@/data/productdata.js";
// import Loader from "@/components/Loader/Loader";

export default function Data() {
  const pathname = usePathname();
  const router = useRouter();
  //   const [loading, setLoading] = useState(true);
  //   const [data, setData] = useState(null);

  //   useEffect(() => {
  //     try {
  //       setLoading(true);
  //       setData(shaggy);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error(error);
  //       setLoading(false);
  //     }
  //   }, []);

  const handleBackClick = () => {
    router.back();
  };

  return (
    <section className="section">
      <div className="product-section">
        {/* <div className="product-top-level">
          <div className="back-btn" onClick={handleBackClick}>
            <i className="hgi-stroke hgi-arrow-left-01" />
          </div>
          <div className="current-path">
            <p>
              <i className="hgi-stroke hgi-home-04" /> {pathname}
            </p>
          </div>
        </div> */}

        <div className="product-desc">
          <div className="product-title">
            <h1>Handknotted Construction</h1>
          </div>
          <div className="product-content">
            <p>
              A masterpiece of craftsmanship, created by skilled artisans who
              meticulously tie individual knots to form intricate patterns.
              Known for their unparalleled durability and exquisite detail. Each
              hand-knotted piece is a unique work of art, combining heritage and
              luxury or a truly sophisticated statement.
            </p>
          </div>
        </div>

        {/* {loading ? (
          <Loader />
        ) : (
          <div className="product-body">
            <div className="product-wraper">
              {data.map((data) => (
                <div className="product-card" key={data.id}>
                  <div className="product-img">
                    <Image
                      src={data.src}
                      width={500}
                      height={500}
                      alt={data.alt}
                    />
                  </div>
                  <div className="product-details">
                    <div className="product-color">
                      <span>Color : </span>
                      <span>{data.color}</span>
                    </div>
                    <div
                      className="product-category"
                      style={{ marginTop: "0" }}
                    >
                      <span>Category : </span>
                      <span>{data.category}</span>
                    </div>
                    <div className="product-btn">
                      <Link href={`shaggy/${data.uri}`}>View Product</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )} */}
      </div>
    </section>
  );
}
