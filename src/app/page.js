import Certificates from '@/components/Certificates/Certificates'
import HeroSection from '@/components/Hero_Section/HeroSection'
import Offer from '@/components/Offer_Section/Offer'
import Benefits from '@/components/Our_Benefits/Benefits'
import Collection from '@/components/Our_Collection/Collection'
import Slider from '@/components/Slider/Slider'
import { Testimonials } from '@/components/Testimonials/Testimonials'
import React from 'react'

export default function page() {
  return (
    <>
      <HeroSection/>
      <Collection/>
      <Slider/>
      <Benefits/>
      <Certificates/>
      <Offer/>
      {/* <Testimonials/> */}
    </>
  )
}
