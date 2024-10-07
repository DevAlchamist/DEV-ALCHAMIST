"use client";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");
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
      setError("Please fill in all fields");
      return;
    }

    setError("");

    // Simulate form submission (you can replace this with an API call)
    try {
      console.log("Form submitted:", formData);
      setSubmitted(true);
      // Reset the form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <div className="w-full mt-10 text-center flex flex-col items-center justify-center gap-5">
      <div className="flex flex-col">
        <div className="font-extrabold text-[45px] font-mono capitalize">
          Get in Touch
        </div>
        <div className="text-[14px] bg-gradient-to-r from-[#4FC3F7] to-white text-transparent bg-clip-text">
          Lets Work Together
        </div>
      </div>
      <div className="text-start w-[696px]">
        {submitted && (
          <p className="text-green-500 mb-4">
            Your message has been sent successfully!
          </p>
        )}
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="w-full" >
          <div className="mb-4 ">
            <label
              className="block text-sm text-white font-bold"
              htmlFor="name"
            >
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
            <label
              className="block text-sm text-white font-bold"
              htmlFor="email"
            >
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
            <label
              className="block text-sm text-white font-bold"
              htmlFor="message"
            >
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
