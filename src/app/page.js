import ContactUs from '@/components/Contact_us/ContactUs'
import Footer from '@/components/Footor/Footer'
import HeroSection from '@/components/Hero_Section/HeroSection'
import Navbar from '@/components/Navbar/Navbar'
import Offer from '@/components/Offer_Section/Offer'
import Benefits from '@/components/Our_Benefits/Benefits'
import Collection from '@/components/Our_Collection/Collection'
import Slider from '@/components/Slider/Slider'
import { Testimonials } from '@/components/Testimonials/Testimonials'
import React from 'react'

export default function page() {
  return (
    <>
      {/* <Navbar/> */}
      <HeroSection/>
      <Collection/>
      <Slider/>
      <Benefits/>
      <Offer/>
      <Testimonials/>
      {/* <ContactUs/> */}
      {/* <Footer/> */}
    </>
  )
}
