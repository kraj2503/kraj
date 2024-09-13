import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Appbar from "../components/Appbar";

export default function Home() {
  return (
    <div className="bg-oxford-blue ">
      <Appbar />
      <AboutMe />
      <Projects/>


    </div>
  );
}
