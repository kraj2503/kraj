export default function Appbar() {
  return (
    <div className="flex justify-around py-3  sticky top-0 bg-oxford-blue  border-b border-emerald-500 font-mono font-semibold text-lg text-primary ">
      <div className=" flex px-5 py-2 ">Kshitiz</div>
      <div>
        <div className="  flex justify-end  -mr-40">
          <button id="about" className={Appbuttons}>
            About
          </button>
          <button id="projects" className={Appbuttons}>
            Projects
          </button>
          <button id="skills" className={Appbuttons}>
            Skills
          </button>
          <button id="experience" className={Appbuttons}>
            Experience
          </button>
          <button id="education" className={Appbuttons}>
            Education
          </button>
          <button id="contact" className={Appbuttons}>
            Contact me
          </button>
        </div>
      </div>
    </div>
  );
}

const Appbuttons =
  "transition duration-700 ease-in-out hover:bg-emerald-400 hover:scale-110 hover:underline rounded-md px-4 py-2  ml-3 ";
