import Hero from "@/components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";


export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <TechStack />
      <Projects />
      <Testimonials />
      <Contact />
    </main>
  );
}
