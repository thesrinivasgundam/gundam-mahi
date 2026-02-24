'use client';

import axios from "axios";
import { useState } from "react";
import { FaWhatsapp, FaLinkedin, FaTwitter, FaFacebook, FaGithub } from "react-icons/fa";

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post("/api/contact", form);
    alert("Message Sent!");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4">

      {/* Title */}
      <span className=" text-6xl tracking-[0.1em] lg:text-6xl sm:text-4xl md:text-5xl font-bold mb-10 text-center">
        Contact
      </span>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-5"
      >

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          className="w-full p-3 sm:p-4 rounded-lg border text-sm sm:text-base"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          onChange={handleChange}
          className="w-full p-3 sm:p-4 rounded-lg border text-sm sm:text-base"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows={4}
          onChange={handleChange}
          className="w-full p-3 sm:p-4 rounded-lg border text-sm sm:text-base resize-none"
        />

        <button
          type="submit"
          className="w-full py-3 sm:py-4 bg-black text-white rounded-lg hover:scale-105 transition duration-300"
        >
          Send
        </button>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 pt-6 text-xl sm:text-2xl">

          <FaWhatsapp className="cursor-pointer hover:text-green-500 transition" />
          <FaLinkedin className="cursor-pointer hover:text-blue-600 transition" />
          <FaTwitter className="cursor-pointer hover:text-sky-500 transition" />
          <FaFacebook className="cursor-pointer hover:text-blue-700 transition" />
          

        </div>

      </form>

    </div>
  );
}