// src/components/Projects.tsx
import Image from "next/image";

interface Project {
  title: string;
  client: string;
  description: string;
  link: string;
  imageSrc: string;
  type: "Web" | "Mobile";
}

const projects: Project[] = [
  {
    title: "Transco Traduction Website",
    client: "Transco Traduction",
    description: "Static-to-dynamic site deployed on Vercel with FormSubmit integration.",
    link: "https://www.transco-agency.com/",
    imageSrc: "/images/project-web4.png",
    type: "Web",
  },
  {
    title: "GlobalApp Mobile",
    client: "Global Solutions",
    description: "Cross-platform React Native app (iOS & Android).",
    link: "https://github.com/Fredsoma",
    imageSrc: "/images/project-mobile1.jpg",
    type: "Mobile",
  },
  {
    title: "",
    client: "",
    description: "",
    link: "https://github.com/Fredsoma",
    imageSrc: "/images/project-web1.jpg",
    type: "Web",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col"
            >
              <div className="relative w-full h-48">
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <span
                  className={`inline-block mb-2 px-2 py-1 text-xs font-semibold rounded ${
                    project.type === "Web"
                      ? "bg-blue-200 text-blue-800"
                      : "bg-green-200 text-green-800"
                  }`}
                >
                  {project.type}
                </span>
                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{project.client}</p>
                <p className="text-gray-700 mb-4 flex-1">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto text-blue-600 hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
