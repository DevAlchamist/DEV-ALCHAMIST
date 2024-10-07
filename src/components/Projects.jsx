import Image from "next/image";
import shool from "../../public/Sho-ol.jpeg";
import React from "react";
import { fetchEntries } from "@/lib/contentful";

const Projects = async () => {
  const data = await fetchEntries("projects");
  const allData = data.map((item) => item.fields);
  const sortedData = allData.sort((a, b) => a.sortId - b.sortId);
  console.log(sortedData);
  return (
    <div className="w-full text-center flex flex-col items-center h-full justify-center gap-5">
      <div className="flex flex-col gap-2">
        <div className="font-extrabold text-[45px] font-mono capitalize">
          {" "}
          Projects
        </div>
        <div className="text-[14px] bg-gradient-to-r from-[#4FC3F7] to-white text-transparent bg-clip-text">
          Some of my Work
        </div>
      </div>
      <div className="flex h-fit items-start gap-10 justify-center flex-wrap w-[1150px]">
        {sortedData.map((item, index) => (
          <div
            key={item.sortId}
            className="flex text-start gap-5 flex-col w-[355.5px] min-h-[297px] max-h-[397px]"
          >
            <Image
              src={item.imageLink}
              alt="shool"
              width={1200}
              height={1200}
              className="hover:scale-105 transition ease-in-out duration-500"
            />
            <div className="text-[20px]">{item.projectName}</div>
            <div className="text-[12px]">{item.description}</div>
            <div className="w-full flex justify-between items-end">
              <div className="text-[14px]">Technology Used</div>
              <a href={`${item.link}`} className="hover:scale-105">
                <svg
                  width="38"
                  height="39"
                  viewBox="0 0 38 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="37.666"
                    height="37.666"
                    rx="18.833"
                    transform="matrix(-1 0 0 1 37.6666 0.667236)"
                    fill="#4FC3F7"
                  />
                  <path
                    d="M25.4254 11.4961L12.2422 24.6792"
                    stroke="white"
                    stroke-width="1.41248"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M25.4254 21.1668V11.4961H15.7546"
                    stroke="white"
                    stroke-width="1.41248"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="border rounded-full w-[210px]">
        <button className="py-3"> View All</button>
      </div>
    </div>
  );
};

export default Projects;
