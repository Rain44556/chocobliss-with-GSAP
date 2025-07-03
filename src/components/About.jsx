import React from "react";
import aboutBg from '../assets/images/about-bg.png'

const About = () => {
 
  return (
    <>
      <div 
      id="about-section"
       className="flex w-full flex-wrap md:flex-nowrap"
        style={{backgroundImage: 'linear-gradient(90deg, #a9774c, #864831, #402014)'}}>
        <div 
        className= "left-side w-full md:w-[50%]">
            <div className="h-[60vh]"></div>
          <img 
          className=" w-full rotate-[-25deg]"
          src={aboutBg} alt="Chocolate background" />
        </div>

        <div className="right-side w-full text-yellow-50 flex items-start justify-center flex-col gap-10 md:w-[50%]">
          <h1 className="text-4xl md:text-7xl font-bold">Chocolate Shake</h1>
          <p className="text-sm md:text-md w-[80%] text-center md:text-left">
            A chocolate shake is pure happiness in a glass — rich, creamy, and
            perfectly sweet. Whether you're cooling off on a hot day or just
            treating yourself, every sip feels like a little indulgent hug for
            your taste buds!
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
