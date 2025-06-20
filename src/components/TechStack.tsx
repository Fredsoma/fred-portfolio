// src/components/TechStack.tsx
import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiReactos,
  SiFlutter,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";

export default function TechStack() {
 const tech = [
  { name: "HTML5", icon: <SiHtml5 size={40} /> },
  { name: "CSS3", icon: <SiCss3 size={40} /> },
  { name: "JavaScript", icon: <SiJavascript size={40} /> },
  { name: "React", icon: <SiReact size={40} /> },
  { name: "Next.js", icon: <SiNextdotjs size={40} /> },
  { name: "Node.js", icon: <SiNodedotjs size={40} /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={40} /> },
  { name: "MongoDB", icon: <SiMongodb size={40} /> },
  { name: "React Native", icon: <SiReactos size={40} /> },
  { name: "Flutter", icon: <SiFlutter size={40} /> },
];


  return (
    <section id="tech" className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">My Tech Stack</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 justify-items-center">
          {tech.map((t, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="text-blue-600 mb-2">{t.icon}</div>
              <p className="text-sm">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
