import React from "react";
import Hero from "../components/homecomponent/HomeHero";
import About from "../components/homecomponent/About";
import Services from "../components/homecomponent/services";
import WhyChooseUs from "../components/homecomponent/WhyChooseUs";
import CallToAction from "../components/homecomponent/CallToAction";
import bgimage from "../assets/bg/main1.webp";

const HomePage = () => {
  return (
    <>
      <Hero />
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgimage})` }}
      >
        <About />
        <Services />
        <WhyChooseUs />
        <CallToAction />
      </div>
    </>
  );
};

export default HomePage;
