import React from "react";
import swiggyImg from "../assets/images/swiggy.png";
import employee from "../assets/images/employe-management.png";
import uploader from "../assets/images/uploader.png";
import ai from "../assets/images/ai.png";
import game from "../assets/images/game.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  useGSAP(() => {
    const mm = gsap.matchMedia(); 

    mm.add("(min-width: 768px)", () => { 
      gsap.from(".cardleft", {
        x: -400,
        opacity: 0,
        scrollTrigger: {
          trigger: ".cardleft",
          start: "top 70%",
          end: "top 60%",
          scrub: true,
        },
      });

      gsap.from(".cardright", {
        x: 400,
        opacity: 0,
        scrollTrigger: {
          trigger: ".cardright",
          start: "top 70%",
          end: "top 60%",
          scrub: true,
        },
      });

      gsap.from(".card1", {
        x: -400,
        opacity: 0,
        scrollTrigger: {
          trigger: ".card1",
          start: "top 70%",
          end: "top 20%",
          scrub: true,
        },
      });

      gsap.from(".card2", {
        x: 400,
        opacity: 0,
        scrollTrigger: {
          trigger: ".card2",
          start: "top 90%",
          end: "top 60%",
          scrub: true,
        },
      });

      gsap.from(".card3", {
        x: -400,
        opacity: 0,
        scrollTrigger: {
          trigger: ".card3",
          start: "top 70%",
          end: "top 20%",
          scrub: true,
        },
      });

      gsap.from(".card4", {
        x: 400,
        opacity: 0,
        scrollTrigger: {
          trigger: ".card4",
          start: "top 90%",
          end: "top 60%",
          scrub: true,
        },
      });

      gsap.from(".card5", {
        x: -400,
        opacity: 0,
        scrollTrigger: {
          trigger: ".card5",
          start: "top 70%",
          end: "top 20%",
          scrub: true,
        },
      });

      gsap.from(".card6", {
        x: 400,
        opacity: 0,
        scrollTrigger: {
          trigger: ".card6",
          start: "top 90%",
          end: "top 60%",
          scrub: true,
        },
      });

      gsap.from(".card7", {
        x: -400,
        opacity: 0,
        scrollTrigger: {
          trigger: ".card7",
          start: "top 70%",
          end: "top 20%",
          scrub: true,
        },
      });

      gsap.from(".card8", {
        x: 400,
        opacity: 0,
        scrollTrigger: {
          trigger: ".card8",
          start: "top 90%",
          end: "top 60%",
          scrub: true,
        },
      });

      gsap.from(".card9", {
        x: -400,
        opacity: 0,
        scrollTrigger: {
          trigger: ".card9",
          start: "top 70%",
          end: "top 20%",
          scrub: true,
        },
      });

      gsap.from(".card10", {
        x: 400,
        opacity: 0,
        scrollTrigger: {
          trigger: ".card10",
          start: "top 90%",
          end: "top 60%",
          scrub: true,
        },
      });
    });

    return () => mm.revert(); // Clean up jab component destroy ho
  }, []);


  return (
    <section className="max-w-screen-xl mx-auto px-4 relative pb-8 sm:pb-16">
      <h2
        id="target"
        className="text-3xl sm:text-[40px] bg-black relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-[#1788ae] sm:border- border-[#1788ae]"
      >
        Latest Works
      </h2>

      {/* employee */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:gap-[80px] items-center sm:mt-20 relative">
        <div className="h-[1px] left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
        <div className="w-4 h-4 rounded-full border-[3px] border-[#459bd5] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>

        <a
          href="https://employee-management-system-ylpz.vercel.app//"
          className="flex w-full relative justify-center sm:justify-start"
        >
          <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 cardleft">
            <img
              className="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
              src={employee}
              alt=" error"
            />
            <span className="flex group-hover:-top-14 ease-jump duration-200 bg-[#459bd5] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
           ( employee management system)
            </span>
          </div>
        </a>

        <div className="w-full cardright">
          <h3 className="text-blue-300 font-bold text-2xl md:text-4xl">Employee management system</h3>
          <span className="text-blue-300 text-base md:text-lg">( EMS) </span>
          <p className="text-justify text-sm md:text-base mt-2 text-white">
          An Employee Management System (EMS) is a software application designed to help organizations manage employee information efficiently. It allows Human Resource (HR) departments and managers to maintain records of employees, track attendance, manage salaries, evaluate performance, assign roles, and handle leave requests. EMS improves overall workflow, reduces paperwork, and ensures better communication within the organization.
          </p>
          <ul className="flex flex-wrap gap-2 mt-2">
            {["react.js", "express.js", "node.js", "mongoDB", "css", "javascript", "gsap"].map((tech) => (
              <li
                key={tech}
                className="text-blue-400 font-bold cursor-pointer border-2 rounded-[50px] px-[10px] py-[5px] text-sm md:text-base drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
              >
                #{tech}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Timeline Line */}
      <div className="w-[2px] hidden sm:block bg-[#1788ae] absolute top-0 bottom-0 left-1/2 -translate-x-1/2"></div>

      

    
       <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:gap-[80px] items-center sm:mt-20 relative">
        <div className="h-[1px] left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
        <div className="w-4 h-4 rounded-full border-[3px] border-[#459bd5] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>

        <a
          href="https://frontend-kappa-mocha-28.vercel.app//"
          className="flex w-full relative justify-center sm:justify-start"
        >
          <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 card3">
            <img
              className="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
              src={uploader}
              alt=" error"
            />
            <span className="flex group-hover:-top-14 ease-jump duration-200 bg-[#459bd5] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
             ( project uploader)
            </span>
          </div>
        </a>

        <div className="w-full card4">
          <h3 className="text-blue-700 font-bold text-2xl md:text-4xl">Project Uploader — Full Stack Project </h3>
          <span className="text-blue-400 text-base md:text-lg m-0.5">Frontend (user interface) Backend (server, database)</span>
          <p className="text-justify text-sm md:text-base mt-2 text-yellow-400">
          Project Uploader is a full-stack web application that allows users to upload, store, and showcase their projects. The platform provides a user-friendly interface to submit project details such as the title, description, and files (images, PDFs, etc.). It is designed for developers, students, or teams to manage and share their project work in an organized way.
          </p>
          <ul className="flex flex-wrap gap-2 mt-2">
            {["react.js", "express.js", "node.js", "mongoDB", "css", "javascript", "gsap",].map((tech) => (
              <li
                key={tech}
                className="text-white font-bold cursor-pointer border-2 rounded-[50px] px-[10px] py-[5px] text-sm md:text-base drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
              >
                #{tech}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Timeline Line */}
      <div className="w-[2px] hidden sm:block bg-[#1788ae] absolute top-0 bottom-0 left-1/2 -translate-x-1/2"></div>

      {/* 4 */}

      <div className="w-[2px] hidden sm:block bg-[#1788ae] absolute top-0 bottom-0 left-1/2 -translate-x-1/2"></div>

      {/* E-Plant */}
      <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
        <div className="order-2 sm:order-1 w-full  card5">
          <h3 className="text-orange-300 font-bold text-2xl md:text-4xl m-1.5">Swiggy </h3>
          <span className="text-orange-300 text-base md:text-lg m-1.5"> ("Your favorite food, delivered fast!" 🍔)</span>
          <p className="text-justify text-sm md:text-base mt-2 text-white">
          Swiggy is an online food delivery platform that connects users with a wide range of restaurants in their area. Users can browse menus, place orders, and get food delivered to their doorstep quickly and conveniently. Swiggy also offers real-time order tracking, multiple payment options, and customer support to ensure a smooth ordering experience.
          </p>
          <ul className="flex flex-wrap gap-2 mt-2">
            {["react.js", "node.js", "swiper.js", "mongoDB", "mongoose", "css", "javascript"].map((tech) => (
              <li
                key={tech}
                className="text-orange-300 font-bold cursor-pointer border-2 rounded-[50px] px-[10px] py-[5px] text-sm md:text-base drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
              >
                #{tech}
              </li>
            ))}
          </ul>
        </div>
        <div className="h-[1px] left-1/2 right-1/4 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
        <div className="w-4 h-4 rounded-full border-[3px] border-[#ffe578] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
        <a
          href="https://swiggy-clone-pink.vercel.app//"
          className="order-1 sm:order-2 flex w-full relative justify-center sm:justify-start"
        >
          <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto card6">
            <img
              className="max-w-[400px] w-full relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
              src={swiggyImg}
              alt=" swiggy"
            />
            <span className="flex group-hover:-top-14 ease-jump duration-200 text-black bg-[#ffe578] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
              Swiggy
            </span>
          </div>
        </a>
      </div>

   {/* krishna */}
       <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:gap-[80px] items-center sm:mt-20 relative">
        <div className="h-[1px] left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
        <div className="w-4 h-4 rounded-full border-[3px] border-[#459bd5] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>

        <a
          href="https:/krishna-ai-blond.vercel.app/"
          className="flex w-full relative justify-center sm:justify-start"
        >
          <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200  card7">
            <img
              className="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
              src={ ai}
              alt=" error"
            />
            <span className="flex group-hover:-top-14 ease-jump duration-200 bg-[#459bd5] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
             
          Krishna-Ai
            </span>
          </div>
        </a>

        <div className="w-full  card8">
          <h3 className="text-red-400 font-bold text-2xl md:text-4xl">  Krishna Ai </h3>
          <span className="text-red-400 text-base md:text-lg m-0.5">( Your smart partner for everyday tasks!)</span>
          <p className="text-justify text-sm md:text-base mt-2 text-yellow-400">
          Make is a creative platform designed to help users build, design, and organize their ideas into real projects. Whether it's creating a to-do list, designing a product, or managing a team task, Make offers easy-to-use tools for planning, tracking, and completing projects efficiently.
          </p>
          <ul className="flex flex-wrap gap-2 mt-2">
            {["react.js", "express.js", "node.js", "mongoDB", "css", "javascript", "gsap",].map((tech) => (
              <li
                key={tech}
                className="text-white font-bold cursor-pointer border-2 rounded-[50px] px-[10px] py-[5px] text-sm md:text-base drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
              >
                #{tech}
              </li>
            ))}
          </ul>
        </div>
      </div>    

       <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
        <div className="order-2 sm:order-1 w-full  card9">
          <h3 className="text-purple-400 font-bold text-2xl md:text-4xl m-1.5">

🎲 Snake and Ladder  </h3>
          <span className="text-purple-400  text-base md:text-lg m-1.5">( "Roll the dice, climb the ladder, and avoid the snakes!" 🐍🎲🪜)</span>
          <p className="text-justify text-sm md:text-base mt-2 text-white">
          Snake and Ladder is a classic board game recreated as a fun and interactive digital project. The game is played between two or more players who roll a dice and move forward on a board with 100 numbered squares. If a player lands on the bottom of a ladder, they climb up. If they land on the head of a snake, they slide down.

This project brings the traditional game to life with smooth animations, colorful graphics, and engaging gameplay. It's perfect for practicing logic, turn-based game development, and random number generation.
          </p>
          <ul className="flex flex-wrap gap-2 mt-2">
            {["react.js", "node.js", "swiper.js", "mongoDB", "mongoose", "css", "javascript"].map((tech) => (
              <li
                key={tech}
                className="text-purple-400  font-bold cursor-pointer border-2 rounded-[50px] px-[10px] py-[5px] text-sm md:text-base drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
              >
                #{tech}
              </li>
            ))}
          </ul>
        </div>
        <div className="h-[1px] left-1/2 right-1/4 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
        <div className="w-4 h-4 rounded-full border-[3px] border-[#ffe578] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
        <a
          href="https://snake-ladder-game-chi.vercel.app//"
          className="order-1 sm:order-2 flex w-full relative justify-center sm:justify-start"
        >
          <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto  card10">
            <img
              className="max-w-[400px] w-full relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
              src={ game }
              alt="  Snake and Ladder"
            />
            <span className="flex group-hover:-top-14 ease-jump duration-200 text-black bg-[#ffe578] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
            Snake and Ladder
            </span>
          </div>
        </a>
      </div>  
    </section>
  );
};

export default Project;
