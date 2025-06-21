import React from "react";

const ContactLinks = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl md:text-6xl font-bold mb-16 text-center text-cyan-700">
        Let's get in touch
      </h1>

      <ul className="space-y-6 text-xl md:text-2xl text-gray-800">
        <li>
          <a
            href="mailto:deveshpuniya.615@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            📧 Email: deveshpuniya.615@gmail.com
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/devesh-puniya-2a58a32a1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            💼 LinkedIn: /in/devesh-puniya-2a58a32a1
          </a>
        </li>

        <li>
          <a
            href="https://github.com/Thepuniyadev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            🧑‍💻 GitHub: @Thepuniyadev
          </a>
        </li>

        <li>
          <span className="hover:text-red-600 transition-colors">
            📱 Contact No: 9654213368
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ContactLinks;
