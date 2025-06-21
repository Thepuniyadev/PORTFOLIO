import React from "react";
import aboutImage from "../assets/images/about.webp";

const skills = [
  "React", "JavaScript", "HTML", "CSS", "Tailwind", "Bootstrap",
  "MongoDB", "Express", "Node.js", "Postman", "Power BI",
  "Photoshop", "Figma", "JWT", "Cloudinary"
];

const About = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left - Text Content */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            About Me
          </h2>
          <p className="text-lg leading-relaxed text-slate-300 mb-8">
            Hey there! I'm a passionate <span className="text-blue-400 font-semibold">Full-Stack Developer</span> who loves building engaging, scalable, and high-performance web applications. With a strong foundation in both frontend and backend technologies, I create seamless digital experiences focused on performance, accessibility, and design.
          </p>

          {/* Skills Chips */}
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-md hover:scale-105 transition-transform"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Right - Image */}
        <div className="relative">
          <div className="rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300 border-2 border-blue-600">
            <img
              src={aboutImage}
              alt="Devesh | Full Stack Developer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
