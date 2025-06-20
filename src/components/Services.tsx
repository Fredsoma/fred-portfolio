// src/components/Services.tsx
import React from "react";
import { FaCode, FaServer, FaMobileAlt, FaDatabase } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaCode size={28} />,
      title: "Front-End Development",
      description: "React, Next.js, Tailwind CSS, HTML5, CSS3, Javascript",
    },
    {
      icon: <FaServer size={28} />,
      title: "Back-End & APIs",
      description: "Node.js / Express, REST APIs",
    },
    {
      icon: <FaDatabase size={28} />,
      title: "Databases",
      description: "MySQL, PostgreSQL, MongoDB, Prisma",
    },
    {
      icon: <FaMobileAlt size={28} />,
      title: "Mobile Development",
      description: "React Native, Flutter",
    },
  ];

  return (
    <section id="services" className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow"
            >
              <div className="text-blue-600 mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-gray-700">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
