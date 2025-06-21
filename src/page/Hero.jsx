import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Link } from 'react-scroll';
import HeroImage from '../assets/images/Hero.png';



export const Hero = () => {
  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between pt-32 px-6 md:px-20 z-10 max-w-[90%] mx-auto overflow-hidden">
      {/* Left Content */}
      <div className="flex flex-col items-start text-white z-10 max-w-xl animate-fadeInUp">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white leading-tight">
          <span className="text-red-500">Hi, </span>
          <TypeAnimation
            sequence={[
              "I'm Devesh Puniya",
              2000,
              "I'm a Full Stack Developer",
              2000,
              "And a Passionate Coder ",
              2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            speed={20}
            style={{ display: 'inline-block' }}
          />
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fadeIn">
          <TypeAnimation
            sequence={[
              "💡Transforming ideas into code !!",
              4000,
              "Building full-stack applications !!",
              4000,
              "Crafting websites with passion !!",
              4000,
             
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            speed={70}
            style={{ display: 'inline-block' }}
          />
        </p>

        <a
  href="/contact"
  target="_blank"
  rel="noopener noreferrer"
  className="m-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xl font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300"
>
  Contact Me
</a>

      </div>

      {/* Hero Image */}
     <img 
  src={HeroImage}
  alt="Hero"
  className="w-[90%] md:w-[40%] animate-float z-1 drop-shadow-xl"
/>

    </section>
  );
};
