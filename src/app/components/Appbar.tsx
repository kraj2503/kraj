import Link from "next/link";

export default function Appbar() {
  return (
    <div
      className=" flex lg:justify-around py-3 sticky top-0 w-full bg-smoky-black  border-b
    border-emerald-500 font-mono font-semibold lg:text-lg text-sm text-primary  z-50"
    >
      <div className=" hidden lg:flex lg:x-5 lg:py-2 lg:visible ">Kshitiz</div>
      <div className="">
        <div className="  flex  lg:justify-end  -mr-40">
          <div className={smnavbar}>
            <Link href="#about" className={Appbuttons}>
              About
            </Link>
          </div>
          <div className={smnavbar}>
            <Link href="#projects" className={Appbuttons}>
              Projects
            </Link>
          </div>
          <div className={smnavbar}>
            <Link href="#skills" className={Appbuttons}>
              Skills
            </Link>
          </div>
          <div className={smnavbar}>
            <Link href="#contact" className={Appbuttons}>
              Contact
            </Link>
          </div>
          <div className={smnavbar}>
            <a
              href="/Kshitiz_Raj.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={Appbuttons}
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const Appbuttons =
  "transition duration-700 ease-in-out hover:bg-emerald-400 hover:scale-110 hover:underline rounded-md lg:px-4 py-2  ml-3 sm:text-sm ";

const smnavbar = "flex flex-col justify-center";
