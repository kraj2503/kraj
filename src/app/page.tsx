import AboutMe from "@/app/components/AboutMe";
import Projects from "@/app/components/Projects";
import Appbar from "./components/Appbar";
import Skills from "@/app/components/Skills";
import Education from "@/app/components/contact";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="bg-oxford-blue ">
      <Appbar />
      <AboutMe />
      <Projects />
      <Skills />
      <Education />
      <Footer />
    </div>
  );
}
