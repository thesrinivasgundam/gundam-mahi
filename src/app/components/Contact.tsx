'use client';

import axios from "axios";
import { useState } from "react";

export default function Contact() {

  const [message, setMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await axios.post("/api/contact", { message });
    alert("Message Sent!");
  };

  return (
    <div className="space-y-10 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold">
        Contact
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full mx-auto space-y-4"
      >
        <input
          type="text"
          placeholder="Your Message"
          className="
            w-full p-3 sm:p-4
            rounded-lg
            text-sm sm:text-base
          "
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          className="
            w-full
            py-3
            bg-black text-white
            rounded-lg
            hover:scale-105
            transition duration-300
          "
        >
          Send
        </button>
      </form>
    </div>
  );
}