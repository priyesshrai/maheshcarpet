import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Collection() {
  return (
    <section className="section" style={{ backgroundColor: "#fff" }}>
      <div className="collection-section">
        <div className="collection-heading">
          <h2>Discover Our Exquisite Collection of Carpets & Rugs.</h2>
        </div>
        <div className="collection-sub-heading">
          <p style={{ fontSize: "1.8vw" }}>
            Transform Your Space with Timeless Elegance of Premium Carpets and
            Rugs.
          </p>
        </div>

        <div className="collection-cards-container">
          <div className="collection-cards">
            <div className="collection-body">
              <div className="card-img">
                <Image
                  src="/images/collection-01.jpg"
                  alt="collection1"
                  width={3000}
                  height={3000}
                />
              </div>

              <div className="collection-details">
                <div className="collection-name">
                  <Link href="/collection/hand-knotted">
                    <span>Hand Knotted</span>
                  </Link>
                </div>
                <div className="collection-description">
                  <p>
                    Their textured look, elaborate designs and advanced hand
                    weaving technology makes it an epitome of beauty.
                  </p>
                </div>
                <div className="collection-btn">
                  <Link href="/collection/hand-knotted">
                    Explore Now
                    <div className="icon">
                      <i className="hgi-stroke hgi-arrow-up-right-01" />
                      <i className="hgi-stroke hgi-arrow-up-right-01 copy" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="collection-cards">
            <div className="collection-body">
              <div className="card-img">
                <Image
                  src="/images/collection-02.jpg"
                  alt="collection1"
                  width={3000}
                  height={3000}
                />
              </div>

              <div className="collection-details">
                <div className="collection-name">
                  <Link href="/collection/hand-tufted">
                    <span>Hand Tufted</span>
                  </Link>
                </div>
                <div className="collection-description">
                  <p>
                    Hand Tufted Carpet is mainly made of hand-operated tools.and
                    with our unique designs,the most artistic carpets are
                    manufactured.
                  </p>
                </div>
                <div className="collection-btn">
                  <Link href="/collection/hand-tufted">
                    Explore Now
                    <div className="icon">
                      <i className="hgi-stroke hgi-arrow-up-right-01" />
                      <i className="hgi-stroke hgi-arrow-up-right-01 copy" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="collection-cards">
            <div className="collection-body">
              <div className="card-img">
                <Image
                  src="/images/collection-03.jpg"
                  alt="collection1"
                  width={3000}
                  height={3000}
                />
              </div>

              <div className="collection-details">
                <div className="collection-name">
                  <Link href="/collection/loom-knotted">
                    <span>Loom Knotted</span>
                  </Link>
                </div>
                <div className="collection-description">
                  <p>
                    Designed to stir emotion, brought to life unlike any other.
                    The loom knotted carpet, woven to perfection inch by inch.
                  </p>
                </div>
                <div className="collection-btn">
                  <Link href="/collection/loom-knotted">
                    Explore Now
                    <div className="icon">
                      <i className="hgi-stroke hgi-arrow-up-right-01" />
                      <i className="hgi-stroke hgi-arrow-up-right-01 copy" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="collection-cards">
            <div className="collection-body">
              <div className="card-img">
                <Image
                  src="/images/collection-04.jpg"
                  alt="collection1"
                  width={3000}
                  height={3000}
                />
              </div>

              <div className="collection-details">
                <div className="collection-name">
                  <Link href="/collection/indo-tibetan">
                    <span>Indo-Tibetan</span>
                  </Link>
                </div>
                <div className="collection-description">
                  <p>
                    The Indo-Tibetan carpet, crafted with care and technique
                    resulting in lovely aesthetic carpets.
                  </p>
                </div>
                <div className="collection-btn">
                  <Link href="/collection/indo-tibetan">
                    Explore Now
                    <div className="icon">
                      <i className="hgi-stroke hgi-arrow-up-right-01" />
                      <i className="hgi-stroke hgi-arrow-up-right-01 copy" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
