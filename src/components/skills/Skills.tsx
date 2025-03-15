"use client"

import * as React from "react"
import { Progress } from "@/components/ui/progress"

const skills = [
  { name: "HTML", value: 1 },
  { name: "CSS", value: 85 },
  { name: "Javascipt", value: 90 },
  { name: "TypeScript", value: 80 },
  { name: "ReactJS", value: 90 },
  { name: " Next js", value: 90 },
  { name: "Node js Express", value: 90 },
  { name: "", value: 90 },
  { name: "RestFul API", value: 90 },
  { name: "regex", value: 90 },
  { name: " Git/GitHub", value: 90 },
];

const Skills = () => {
  return (
    <section className="p-10 m-auto" style={{ height: "100vh" }}>
      <h2 className="text-3xl font-bold mb-6 text-white" >My Skills</h2>
      <div className="grid  gap-10 grid-rows-4">

      {skills.map((skill) => (
        <div key={skill.name} className="mb-4">
          <span className="flex justify-between">
          <p className="text-lg text-white">{skill.name}</p>
          <p className="text-white">{skill.value}%</p>
          </span>
          <Progress value={skill.value} className="h-2 " />
        </div>
      ))}
      </div>
    </section>
  );
};

export default Skills;
