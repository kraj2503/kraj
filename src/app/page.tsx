import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Appbar from "../components/Appbar";
import Skills from "@/components/Skills";
import Education from "@/components/contact";

export default function Home() {
  return (
    <div className="bg-oxford-blue ">
      <Appbar />
      <AboutMe />
      <Projects/>
      <Skills/>
      <Education/>
      <div className="flex justify-center text-emerald-500 text-xl pb-5 ">
      <span>&#169;</span>
      <div className="pl-2 underline-offset-4 underline ">

       Made with ❤ by Kshitiz Raj
      </div>
      </div>


    </div>
  );
}
