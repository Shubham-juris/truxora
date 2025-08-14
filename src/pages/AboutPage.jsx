import React from 'react'
import AboutHero from '../components/aboutcomponent/AboutHero'
import WhyChooseUs from '../components/aboutcomponent/WhyChooseUs'
import CallToAction from '../components/aboutcomponent/CallToAction'
import AboutHighlights from '../components/aboutcomponent/AboutHighlights'

const AboutPage = () => {
  return (
    <>
      <AboutHero/>
      <AboutHighlights/>
      <WhyChooseUs/>
      <CallToAction/>
    </>
  )
}

export default AboutPage
