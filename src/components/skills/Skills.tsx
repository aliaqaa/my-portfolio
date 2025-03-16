"use client";

import { Progress } from "@/components/ui/progress";
import { useState } from "react";

const Skills = () => {
  const [openSection, setOpenSection] = useState("frontend");

  const frontend = [
    { name: "HTML", value: 100 },
    { name: "CSS", value: "85" },
    { name: "JavaScript", value: 90 },
    { name: "TypeScript", value: 20 },
    { name: "React JS", value: 33 },
    { name: "Next JS", value: 90 },
  ];

  const backend = [
    { name: "Node Js Express", value: 70 },
    { name: "SQL", value: 85 },
    { name: "MongoDB", value: 90 },
  ];

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <>
      <h2 className="text-3xl font-bold text-white text-center mb-4">
        My Skills
      </h2>
      <div className="flex justify-center ">
        <section className="container flex flex-col gap-10 px-30  mt-10">
          {/* Frontend Section */}
          <div>
            <h2
              className="text-white cursor-none flex justify-between "
              onClick={() => toggleSection("frontend")}
            >
              FrontEnd
              <span>{openSection === "frontend" ? "⬇" : "⬆"}</span>
            </h2>
            <div
              className={`accordion-content ${
                openSection === "frontend" ? "open" : ""
              }`}
            >
              {frontend.map((skill) => (
                <div key={skill.name} className="mb-1">
                  <span className="flex justify-between">
                    <p className="text-lg text-white">{skill.name}</p>
                    <p className="text-white">{skill.value}%</p>
                  </span>
                  <Progress
                    value={skill.value}
                    className="h-2 bg-slate-400 border-white border"
                    style={{ width: `${skill.value}%` }}
                  />{" "}
                </div>
              ))}
            </div>
          </div>

          {/* Backend Section */}
          <div>
            <h2
              className="text-white cursor-none flex justify-between"
              onClick={() => toggleSection("backend")}
            >
              BackEnd <span>{openSection === "frontend" ? "⬇" : "⬆"}</span>
            </h2>
            <div
              className={`accordion-content ${
                openSection === "backend" ? "open" : ""
              }`}
            >
              {backend.map((skill) => (
                <div key={skill.name} className="mb-4">
                  <span className="flex justify-between">
                    <p className="text-lg text-white">{skill.name}</p>
                    <p className="text-white">{skill.value}%</p>
                  </span>
                  <Progress
                    value={skill.value}
                    className="h-2 bg-slate-400 border-white border"
                    style={{ width: `${skill.value}%` }} // Dynamic width based on skill value
                  />{" "}
                </div>
              ))}
            </div>
          </div>
        </section>
        <img
          src="/assets/images/posts/ali2.png"
          alt="ali"
          className="grayscale-100  bg-slate-900 rounded-2xl border "
        />
      </div>
    </>
  );
};

export default Skills;
