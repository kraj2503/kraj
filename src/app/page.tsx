import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Appbar from "../components/Appbar";
import Skills from "@/components/Skills";
import Education from "@/components/Education";

export default function Home() {
  return (
    <div className="bg-oxford-blue ">
      <Appbar />
      <AboutMe />
      <Projects/>
      <Skills/>
      <Education/>


    </div>
  );
}
