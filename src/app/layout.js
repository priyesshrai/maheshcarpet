import { Jura } from "next/font/google";
import { Akaya_Kanadaka } from "next/font/google";
import { Yatra_One } from "next/font/google";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footor/Footer";
import ContactUs from "@/components/Contact_us/ContactUs";

const jura = Jura({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-jura",
});
const akayaKanadaka = Akaya_Kanadaka({
  subsets: ["latin"],
  variable: "--font-akaya",
  weight: "400",
});
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-raleway",
});
const yatraOne = Yatra_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--logo-font",
});

export const metadata = {
  title: "My Next.js App",
  description: "An example using the Jura font",
};
import { ReactLenis } from "lenis/react";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.hugeicons.com/font/hgi-stroke-rounded.css"
        />
      </head>
      <body
        className={`${jura.variable} ${akayaKanadaka.variable} ${raleway.variable} ${yatraOne.variable}`}
      >
        <ReactLenis root>
          <main className="main">
            <Navbar />
            {children}
            <ContactUs />
            <Footer />
          </main>
        </ReactLenis>
      </body>
    </html>
  );
}
