import React from 'react'
import AboutHero from '../components/aboutcomponent/AboutHero'
import OurMission from '../components/aboutcomponent/OurMission'
import CompanyHistory from '../components/aboutcomponent/CompanyHistory'
import WhyChooseUs from '../components/aboutcomponent/WhyChooseUs'
import CallToAction from '../components/aboutcomponent/CallToAction'

const AboutPage = () => {
  return (
    <>
      <AboutHero/>
      <OurMission/>
      <CompanyHistory/>
      <WhyChooseUs/>
      <CallToAction/>
    </>
  )
}

export default AboutPage
