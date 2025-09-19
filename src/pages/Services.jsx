import React from "react";
import ServicesHero from "../components/servicecomponents/ServicesHero";
import OurServicesList from "../components/servicecomponents/services";
import HowItWorks from "../components/servicecomponents/HowItWorks";
import IndustriesWeServe from "../components/servicecomponents/IndustriesWeServe";
import bgimage from "../assets/bg/main1.webp";
import ServicesShow from "../components/servicecomponents/ServicesShow";

const Services = () => {
  return (
    <>
      <ServicesHero />
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgimage})` }}
      >
        <OurServicesList />
        <ServicesShow />
        <HowItWorks />
        <IndustriesWeServe />
      </div>
    </>
  );
};

export default Services;
