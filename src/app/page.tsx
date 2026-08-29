import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Mission from "@/components/sections/Mission";
import ActionAreas from "@/components/sections/ActionAreas";
import Work from "@/components/sections/Work";
import Projects from "@/components/sections/Projects";
import Gallery from "@/components/sections/Gallery";
import Impact from "@/components/sections/Impact";
import Institutional from "@/components/sections/Institutional";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Mission />
      <ActionAreas />
      <Work />
      <Projects />
      <Gallery />
      <Impact />
      <Institutional />
      <Contact />
    </>
  );
}
