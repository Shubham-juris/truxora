import React from 'react'
import Hero from '../components/homecomponent/HomeHero'
import About from '../components/homecomponent/About'
import Services from '../components/homecomponent/services'
import WhyChooseUs from '../components/homecomponent/WhyChooseUs'
import CallToAction from '../components/homecomponent/CallToAction'

const HomePage = () => {
  return (
    <>
      <Hero/>
      <About/>
      <Services/>
      <WhyChooseUs/>
      <CallToAction/>
    </>
  )
}

export default HomePage
