import React from "react";
import Image from "next/image";
import Img from "../../public/154456084.png.png";

const Intro = () => {
  
  return (
    <div className="flex flex-col py-28 gap-5 items-center justify-center w-full h-full">
      <Image src={Img} alt="" />
      <div className="font-extrabold text-[63px] font-mono capitalize">
        Shubhanshu Nayak
      </div>
      <div className="flex gap-2">
        <div className="bg-gradient-to-r from-[#4FC3F7] to-white text-transparent bg-clip-text font-bold text-[26px] font-mono capitalize">
          Dev Alchamist
        </div>
        <span className="text-[26px]">🧙‍♂️</span>
      </div>
      <div className="text-center text-[19px] w-[800px]">
        As a passionate full stack developer, with expertise in dynamic UI
        design, robust backend solutions and creating seamless digital
        experiences, I thrive on solving complex technical challenges. Using
        Technologies like Next.js ,Tailwind ,Mui etc, I build efficient
        ,responsive application that enhances user interaction and operational
        efficiency.
      </div>
      <div className="w-[187px]">
        <button className="w-full hover:bg-[#4FC3F7]  transition ease-in-out duration-500 hover:scale-105 border-[#4FC3F7] border rounded-full font-bold  py-3">
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Intro;
