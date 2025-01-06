"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [openDropDown, setOpenDropDown] = useState(false);
  const [showMobMenu, setShowMobMenu] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    if (typeof window !== "undefined") {
      lastScrollY = window.scrollY;
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY) {
          setShowMobMenu(false);
        } else {
          setShowMobMenu(true);
        }
        lastScrollY = currentScrollY;
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  // useEffect(() => {
  //   const handleWheel = (event) => {
  //     if (event.deltaY > 0) {
  //       setShowMobMenu(false);
  //     }
  //     if (event.deltaY < 0) {
  //       setShowMobMenu(true);
  //     }
  //   };
  //   window.addEventListener("wheel", handleWheel);
  //   return () => {
  //     window.removeEventListener("wheel", handleWheel);
  //   };
  // }, []);

  return (
    <header>
      <nav>
        <div className="logo-container">
          <div className="logo-wraper">
            <a href="/">
              <svg
                viewBox="0 0 573 54"
                // fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={pathname !== "/" ? "active-logo" : ""}
              >
                <path d="M8.97951 5.936L22.4195 38.512L37.9715 3.376L46.8035 5.936L46.9315 47.856L37.9715 46V24.432L27.4115 47.856L19.0915 46L19.1555 45.872L19.0915 45.936L8.97951 20.784L9.10751 47.856L0.147511 46V3.376L8.97951 5.936ZM74.4575 6L74.3935 6.192L91.5455 47.856L83.2895 46L78.8095 34.288L63.7055 35.312L59.0975 47.856L50.1375 46L65.6255 3.376L74.4575 6ZM71.2575 14.64L65.7535 29.744L76.7615 28.976L71.2575 14.64ZM102.952 5.936L103.016 23.856L123.688 22.704V3.376L132.648 5.936V47.856L123.688 46V28.144L103.016 29.296L103.08 47.856L94.12 46V3.376L102.952 5.936ZM148.02 46L147.892 45.872L139.7 44.144V3.312H167.028L172.148 9.072H148.532V21.36H164.468L169.588 27.12H148.596V40.24H169.588L174.708 46H148.02ZM211.114 12.272C209.322 11.5893 207.572 11.0347 205.866 10.608C204.202 10.1813 202.303 9.94667 200.17 9.904C198.079 9.81866 196.223 10.0747 194.602 10.672C192.98 11.2693 191.508 12.4213 190.186 14.128C188.863 15.792 187.988 17.9893 187.562 20.72C187.476 21.1893 189.098 21.3387 192.426 21.168C195.754 20.9547 198.996 20.72 202.154 20.464C205.311 20.208 207.487 20.4 208.682 21.04C212.906 24.7947 215.871 28.272 217.578 31.472C218.431 33.008 218.068 35.2267 216.49 38.128C214.484 41.7547 211.583 44.4213 207.786 46.128C201.087 49.2 193.748 48.0693 185.77 42.736C182.527 40.56 179.263 37.68 175.978 34.096L177.898 33.136C180.372 34.4587 182.356 35.4827 183.85 36.208C185.386 36.9333 187.306 37.68 189.61 38.448C191.914 39.1733 193.94 39.5573 195.69 39.6C199.743 39.6853 203.071 38.704 205.674 36.656C208.276 34.5653 209.748 31.7493 210.09 28.208C210.132 27.824 208.596 27.888 205.482 28.4C202.367 28.8693 199.231 29.296 196.074 29.68C192.916 30.064 190.527 29.7653 188.906 28.784C187.199 27.4187 184.532 24.7307 180.906 20.72C179.754 19.312 179.156 17.7973 179.114 16.176C179.071 14.5547 179.604 12.912 180.714 11.248C181.823 9.584 183.188 8.09067 184.81 6.768C186.431 5.44533 188.33 4.35733 190.506 3.504C192.724 2.65067 194.922 2.224 197.098 2.224C197.652 2.224 198.698 2.58666 200.234 3.312C201.77 3.99466 203.882 5.04 206.57 6.448C209.3 7.856 211.092 8.77333 211.946 9.2L211.114 12.272ZM231.567 5.936L231.631 23.856L252.303 22.704V3.376L261.263 5.936V47.856L252.303 46V28.144L231.631 29.296L231.695 47.856L222.735 46V3.376L231.567 5.936ZM324.866 12.272C321.495 10.48 318.381 8.96533 315.522 7.728C313.261 6.74666 310.829 6.85333 308.226 8.048C305.666 9.24267 303.49 11.1413 301.698 13.744C299.906 16.3467 298.519 19.184 297.538 22.256C296.557 25.328 296.514 28.4427 297.41 31.6C298.349 34.7573 300.269 37.296 303.17 39.216C304.706 40.24 306.306 40.8373 307.97 41.008C309.677 41.1787 311.362 40.944 313.026 40.304C314.69 39.664 316.162 38.96 317.442 38.192C318.722 37.424 320.13 36.464 321.666 35.312L329.41 41.008C327.149 42.928 324.695 44.464 322.05 45.616C319.447 46.768 316.653 47.4507 313.666 47.664C310.722 47.8773 307.991 47.216 305.474 45.68C301.25 43.2053 297.197 40.1973 293.314 36.656C291.565 35.0347 290.199 33.264 289.218 31.344C288.279 29.3813 287.746 27.44 287.618 25.52C287.49 23.5573 287.618 21.552 288.002 19.504C288.386 17.456 289.069 15.536 290.05 13.744C291.074 11.952 292.205 10.2453 293.442 8.624C294.722 7.00266 296.173 5.63733 297.794 4.528C299.415 3.376 301.058 2.43733 302.722 1.712C304.386 0.943998 306.093 0.581331 307.842 0.623997C309.634 0.666665 311.319 1.008 312.898 1.648C319.298 4.592 324.333 6.98133 328.002 8.816L324.866 12.272ZM352.518 6L352.454 6.192L369.606 47.856L361.35 46L356.87 34.288L341.766 35.312L337.158 47.856L328.198 46L343.686 3.376L352.518 6ZM349.318 14.64L343.814 29.744L354.822 28.976L349.318 14.64ZM398.228 32.688C397.844 31.9627 396.863 30.9173 395.284 29.552C391.145 31.088 386.409 31.2587 381.076 30.064L381.14 47.856L372.18 46V3.184C376.063 2.11733 380.393 1.41333 385.172 1.072C389.993 0.730665 393.023 0.986664 394.26 1.84C395.54 2.992 397.545 4.93333 400.276 7.664C403.007 10.3947 404.905 12.3787 405.972 13.616C407.081 14.9813 406.953 17.2 405.588 20.272C404.265 23.344 401.983 25.8827 398.74 27.888C403.263 29.808 405.716 30.9813 406.1 31.408C406.655 32.2187 407.039 33.1573 407.252 34.224C407.508 35.248 407.636 36.1227 407.636 36.848C407.636 37.5733 407.593 38.5973 407.508 39.92C407.423 41.2427 407.38 42.1387 407.38 42.608C407.38 43.0347 407.337 43.696 407.252 44.592C407.209 45.4453 407.188 46.0853 407.188 46.512C407.188 46.9387 407.252 47.472 407.38 48.112C407.508 48.7947 407.721 49.328 408.02 49.712C408.319 50.096 408.767 50.5013 409.364 50.928C409.961 51.3547 410.729 51.7173 411.668 52.016C408.297 52.6987 405.481 52.144 403.22 50.352C401.001 48.6027 399.785 46.0213 399.572 42.608C399.572 42.352 399.529 41.5627 399.444 40.24C399.401 38.9173 399.337 37.9573 399.252 37.36C399.209 36.7627 399.103 35.9947 398.932 35.056C398.761 34.0747 398.527 33.2853 398.228 32.688ZM397.14 9.072C394.623 6.68267 389.247 6.34133 381.012 8.048L381.076 25.968C384.063 26.0107 386.751 25.584 389.14 24.688C391.572 23.7493 393.428 22.576 394.708 21.168C395.988 19.7173 396.969 18.2027 397.652 16.624C398.335 15.0453 398.612 13.5733 398.484 12.208C398.356 10.8427 397.908 9.79733 397.14 9.072ZM413.697 46V3.184C417.58 2.11733 421.911 1.41333 426.689 1.072C431.511 0.730665 434.54 0.986664 435.778 1.84C437.058 2.992 439.063 4.93333 441.793 7.664C444.524 10.3947 446.423 12.3787 447.49 13.616C448.13 14.384 448.3 15.6853 448.001 17.52C447.703 19.312 446.956 21.2107 445.762 23.216C444.567 25.1787 442.903 27.0133 440.77 28.72C438.636 30.384 436.055 31.4933 433.025 32.048C429.996 32.56 426.519 32.24 422.593 31.088L422.657 47.856L413.697 46ZM438.53 9.008C436.268 6.49067 430.935 6.04266 422.529 7.664L422.593 28.08C425.665 28.4213 428.396 28.1227 430.785 27.184C433.175 26.2027 434.988 24.88 436.226 23.216C437.463 21.552 438.38 19.7813 438.978 17.904C439.618 15.984 439.874 14.2133 439.746 12.592C439.618 10.9707 439.212 9.776 438.53 9.008ZM461.66 46L461.532 45.872L453.34 44.144V3.312H480.668L485.788 9.072H462.172V21.36H478.108L483.228 27.12H462.236V40.24H483.228L488.348 46H461.66ZM492.498 9.072L487.378 3.312H523.666L528.786 9.072H513.362L513.49 47.856L504.53 46V9.072H492.498ZM564.271 12.272C562.479 11.5893 560.73 11.0347 559.023 10.608C557.359 10.1813 555.46 9.94667 553.327 9.904C551.236 9.81866 549.38 10.0747 547.759 10.672C546.138 11.2693 544.666 12.4213 543.343 14.128C542.02 15.792 541.146 17.9893 540.719 20.72C540.634 21.1893 542.255 21.3387 545.583 21.168C548.911 20.9547 552.154 20.72 555.311 20.464C558.468 20.208 560.644 20.4 561.839 21.04C566.063 24.7947 569.028 28.272 570.735 31.472C571.588 33.008 571.226 35.2267 569.647 38.128C567.642 41.7547 564.74 44.4213 560.943 46.128C554.244 49.2 546.906 48.0693 538.927 42.736C535.684 40.56 532.42 37.68 529.135 34.096L531.055 33.136C533.53 34.4587 535.514 35.4827 537.007 36.208C538.543 36.9333 540.463 37.68 542.767 38.448C545.071 39.1733 547.098 39.5573 548.847 39.6C552.9 39.6853 556.228 38.704 558.831 36.656C561.434 34.5653 562.906 31.7493 563.247 28.208C563.29 27.824 561.754 27.888 558.639 28.4C555.524 28.8693 552.388 29.296 549.231 29.68C546.074 30.064 543.684 29.7653 542.063 28.784C540.356 27.4187 537.69 24.7307 534.063 20.72C532.911 19.312 532.314 17.7973 532.271 16.176C532.228 14.5547 532.762 12.912 533.871 11.248C534.98 9.584 536.346 8.09067 537.967 6.768C539.588 5.44533 541.487 4.35733 543.663 3.504C545.882 2.65067 548.079 2.224 550.255 2.224C550.81 2.224 551.855 2.58666 553.391 3.312C554.927 3.99466 557.039 5.04 559.727 6.448C562.458 7.856 564.25 8.77333 565.103 9.2L564.271 12.272Z" />
              </svg>
            </a>
          </div>
        </div>
        <ul className="nav-links-container">
          <li className="nav-links">
            <Link href="/" className={pathname === "/" ? "active-link" : ""}>
              Home
            </Link>
          </li>
          <li className="nav-links">
            <Link
              href="/about"
              className={pathname.startsWith("/about") ? "active-link" : ""}
            >
              About
            </Link>
          </li>
          <li className="nav-links">
            <Link
              href="#"
              className={
                pathname.startsWith("/collections") ? "active-link" : ""
              }
            >
              collections
            </Link>
            <div className="dropdown">
              <ul>
                <li>
                  <Link href="/collections/handloom">Handloom</Link>
                </li>
                <li>
                  <Link href="/collections/hand-tufted">Hand Tufted</Link>
                </li>
                <li>
                  <Link href="/collections/flat-weave">Flat Weave</Link>
                </li>
                <li>
                  <Link href="/collections/shaggy">Shaggy</Link>
                </li>
                <li>
                  <Link href="/collections/hand-knotted">Hand Knotted</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-links">
            <Link
              href="/contact"
              className={pathname.startsWith("/contact") ? "active-link" : ""}
            >
              Contact
            </Link>
          </li>
        </ul>
        {/* <div className="menu-btn-container">
          <div className="menu-btn-wraper">
            <div className="menu-btn"></div>
            <div className="menu-btn"></div>
          </div>
        </div> */}
        <div
          className="mobile-navigation"
          style={{
            transform: `${showMobMenu ? "translateY(0)" : "translateY(100%)"}`,
          }}
        >
          <ul className="mabile-nav-links-container">
            <li className="nav-links">
              <Link href="/" className={pathname === "/" ? "active-link" : ""}>
                <i className="hgi-stroke hgi-home-04" />
              </Link>
              <span>Home</span>
            </li>
            <li className="nav-links">
              <Link
                href="/about"
                className={pathname.startsWith("/about") ? "active-link" : ""}
              >
                <i className="hgi-stroke hgi-house-01" />
              </Link>
              <span>About</span>
            </li>
            <li
              className="nav-links"
              onClick={() => setOpenDropDown(!openDropDown)}
            >
              <Link
                href="#"
                className={
                  pathname.startsWith("/collections") ? "active-link" : ""
                }
              >
                <i className="hgi-stroke hgi-collections-bookmark" />
              </Link>
              <span>collections</span>
              <div className={`dropdown ${openDropDown && "act-drp"}`}>
                <ul>
                  <li>
                    <Link href="/collections/handloom">Handloom</Link>
                  </li>
                  <li>
                    <Link href="/collections/hand-tufted">Hand Tufted</Link>
                  </li>
                  <li>
                    <Link href="/collections/flat-weave">Flat Weave</Link>
                  </li>
                  <li>
                    <Link href="/collections/shaggy">Shaggy</Link>
                  </li>
                  <li>
                    <Link href="/collections/hand-knotted">Hand Knotted</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-links">
              <Link
                href="/contact"
                className={pathname.startsWith("/contact") ? "active-link" : ""}
              >
                <i className="hgi-stroke hgi-add-team" />
              </Link>
              <span>Contact</span>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
