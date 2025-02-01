import dynamic from "next/dynamic";

const HeroSection = dynamic(
  () => import("@/components/Hero_Section/HeroSection"),
  {
    loading: () => <Loader />,
  }
);
const Collection = dynamic(
  () => import("@/components/Our_Collection/Collection"),
  {
    loading: () => <Loader />,
  }
);
const Slider = dynamic(() => import("@/components/Slider/Slider"), {
  loading: () => <Loader />,
});
const Benefits = dynamic(() => import("@/components/Our_Benefits/Benefits"), {
  loading: () => <Loader />,
});
const Certificates = dynamic(
  () => import("@/components/Certificates/Certificates"),
  {
    loading: () => <Loader />,
  }
);
const Offer = dynamic(() => import("@/components/Offer_Section/Offer"), {
  loading: () => <Loader />,
});
const Testimonials = dynamic(
  () => import("@/components/Testimonials/Testimonials"),
  {
    loading: () => <Loader />,
  }
);
const Map = dynamic(() => import("@/components/Map/Map"), {
  loading: () => <Loader />,
});
import Loader from "@/components/Loader/Loader";

export default function page() {
  return (
    <>
      <HeroSection />
      <Collection />
      <Slider />
      <Benefits />
      <Certificates />
      <Offer />
      <Testimonials />
      {/* <Map/> */}
    </>
  );
}
