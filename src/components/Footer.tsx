import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 mt-12">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
        <p className="text-gray-600 text-sm mb-4 sm:mb-0">
          © {new Date().getFullYear()} Fred Soma. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <a
            href="mailto:hello@fredsoma.dev"
            className="text-gray-600 hover:text-gray-800"
            aria-label="Email"
          >
            <FaEnvelope size={20} />
          </a>
          <a
            href="https://github.com/fredsoma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
