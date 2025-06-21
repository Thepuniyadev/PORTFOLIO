import React, { useRef } from "react";
import contactImg from "../assets/images/contact-me.svg";
import emailjs from '@emailjs/browser';

const Gmail = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_69xeed8', 'template_5ft36kl', form.current, 'tRnKIp7Tt5cONizlA')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send message!');
      });

    e.target.reset(); 
  };

  return (
    <section className="max-w-screen-xl mx-auto px-4 pb-12">
      <h2 className="text-3xl sm:text-[40px] bg-[#111] relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-[#1788ae] border-2 border-[#1788ae] rounded-md">
        Let's Connect
      </h2>
      <div className="flex flex-col md:flex-row items-center mt-10">
        <div className="w-full">
          <img src={contactImg} alt="phone" className="w-full h-auto" />
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full"
        >
          <label htmlFor="name" className="block mb-2 text-sm text-white font-bold">
            Name
          </label>
          <div className="relative mb-4">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              className="bg-gray-50 border-2 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#1788ae] focus:border-[#1788ae] block w-full ps-10 p-2.5 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>

          <label htmlFor="email" className="block mb-2 text-sm font-bold text-white">
            Your Email
          </label>
          <div className="relative mb-4">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Devesh@gmail.com"
              className="bg-gray-50 border-2 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#1788ae] focus:border-[#1788ae] block w-full ps-10 p-2.5 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>

          <label htmlFor="message" className="block mb-2 text-sm font-bold text-white">
            Message
          </label>
          <div className="relative mb-4">
            <textarea
              id="message"
              name="message"
              rows="8"
              placeholder="Your message..."
              className="bg-black border-2 outline-none text-white text-sm rounded-lg focus:ring-[#1788ae] focus:border-[#1788ae] block w-full p-2.5 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full text-white bg-[#1788ae] hover:bg-[#1280a4] focus:ring-4 focus:ring-[#4489a0] font-medium rounded-lg text-sm px-5 py-2.5 mb-2 focus:outline-none"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Gmail;
