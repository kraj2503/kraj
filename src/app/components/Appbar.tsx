import Link from "next/link";

export default function Appbar() {
  return (
    <nav
      className=" flex lg:justify-around py-3 sticky top-0 w-full bg-smoky-black  border-b
    border-emerald-500 font-mono font-semibold lg:text-lg text-sm text-primary  z-50"
    >
      <nav className=" hidden lg:flex lg:x-5 lg:py-2 :visible ">Kshitiz</nav>
      <nav className="">
        <nav className="  flex  lg:justify-end  -mr-40">
          <nav className={smnavbar}>
            <Link href="#about" className={Appbuttons}>
              About
            </Link>
          </nav>
          <nav className={smnavbar}>
            <Link href="#projects" className={Appbuttons}>
              Projects
            </Link>
          </nav>
          <nav className={smnavbar}>
            <Link href="#skills" className={Appbuttons}>
              Skills
            </Link>
          </nav>
          <nav className={smnavbar}>
            <Link href="#contact" className={Appbuttons}>
              Contact
            </Link>
          </nav>
          <nav className={smnavbar}>
            <a
              href="/Kshitiz_Raj.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={Appbuttons}
            >
              Resume
            </a>
          </nav>
        </nav>
      </nav>
    </nav>
  );
}

const Appbuttons =
  "transition duration-700 ease-in-out hover:bg-emerald-400 hover:scale-110 hover:underline rounded-md lg:px-4 py-2  ml-3 sm:text-sm ";

const smnavbar = "flex flex-col justify-center";
