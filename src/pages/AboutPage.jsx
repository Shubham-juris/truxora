import React from "react";
import AboutHero from "../components/aboutcomponent/AboutHero";
import WhyChooseUs from "../components/aboutcomponent/WhyChooseUs";
import CallToAction from "../components/aboutcomponent/CallToAction";
import AboutHighlights from "../components/aboutcomponent/AboutHighlights";
import bgimage from "../assets/bg/main1.webp";
import About from "../components/aboutcomponent/About";

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgimage})` }}
      >
        <About />
        <AboutHighlights />
        <WhyChooseUs />
        <CallToAction />
      </div>
    </>
  );
};

export default AboutPage;
