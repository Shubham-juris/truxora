import React from 'react'
import ServicesHero from '../components/servicecomponents/ServicesHero'
import OurServicesList from '../components/servicecomponents/services'
import HowItWorks from '../components/servicecomponents/HowItWorks'
import IndustriesWeServe from '../components/servicecomponents/IndustriesWeServe'
import Testimonials from '../components/servicecomponents/Testimonials'

const Services = () => {
  return (
    <>
      <ServicesHero/>
      <OurServicesList/>
      <HowItWorks/>
      <IndustriesWeServe/>
      <Testimonials/>
    </>
  )
}

export default Services
