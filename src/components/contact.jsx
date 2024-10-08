"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields", { theme: "dark" });
      return;
    }

    try {
      // Simulate form submission (you can replace this with an API call)
      console.log("Form submitted:", formData);
      setSubmitted(true);
      toast.success("Your message has been sent successfully!", {
        theme: "dark",
      });
      // Reset the form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to send message", { theme: "dark" });
    }
  };

  return (
    <div className="w-full mt-10 text-center flex flex-col items-center justify-center gap-5">
      <ToastContainer />
      <div className="flex flex-col">
        <div className="font-extrabold text-[45px] font-mono capitalize">
          Get in Touch
        </div>
        <div className="text-[14px] bg-gradient-to-r from-[#4FC3F7] to-white text-transparent bg-clip-text">
          Let's Work Together
        </div>
      </div>
      <div className="text-start w-[696px]">
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4 ">
            <label className="block text-sm text-white font-bold" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full mt-1 px-7  py-3 outline-none border rounded-lg bg-transparent"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm text-white font-bold" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full mt-1 px-7  py-3 outline-none border rounded-lg bg-transparent"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm text-white font-bold" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full mt-1 px-7 h-[222px] py-3 outline-none border rounded-lg bg-transparent"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-white text-black font-bold py-3 px-4 rounded hover:bg-opacity-75 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
