import React from "react";

const About = () => {
  return (
    <section className="text-center pb-10 items-center justify-center flex flex-col gap-5">
      <header>
        <h1 className="text-[45px] font-extrabold capitalize">About Me</h1>
        <h2 className="text-[19px] bg-gradient-to-r from-[#4FC3F7] to-white text-transparent bg-clip-text">
          Get to know me
        </h2>
      </header>
      <article className="flex flex-col text-[17px] gap-5 w-[840px]">
        <p>
          Hi there! I'm Shubhanshu Nayak (Dev Alchamist), a Full Stack Developer
          specializing in MERN development, Next.js, TypeScript, seamless UI and
          responsive builds, and secure backends. With a passion for unraveling
          insights from complex datasets, I'm dedicated to helping businesses
          make informed decisions and stay ahead in today's data-driven world.
        </p>
        <p>
          I bring a blend of technical expertise, hands-on experience, and a
          commitment to clear communication to every project. Whether it's
          building intuitive user interfaces, creating robust backend systems,
          or automating processes with AI, I'm here to help you harness the full
          potential of your data.
        </p>
        <p>
          Let's work together to transform your ideas into actionable solutions
          that drive real results. Get in touch, and let's build something
          exceptional today!
        </p>
      </article>
      <div className="w-[216px]">
        <a target="_blank" href="https://docs.google.com/document/d/1A0_Ffp-hGpssWY1tGzjQ1sCOpArQ5iG99g335qFFkTI/edit?usp=sharing">
          <button className="w-full hover:bg-[#4FC3F7] transition ease-in-out duration-500 hover:scale-105 border-[#4FC3F7] border rounded-full font-bold py-3">
            Download Resume
          </button>
        </a>
      </div>
    </section>
  );
};

export default About;
