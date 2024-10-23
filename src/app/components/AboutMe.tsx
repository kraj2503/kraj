import Image from "next/image";
import me from "@/Assets/Kshitiz_raj.jpg"

export default function AboutMe() {
  return (
    <div className="bg-oxford-blue  h-screen grid grid-cols-5 lg:my-10">
      <div className="flex flex-col col-span-3 justify-center ml-4 lg:ml-24 ">
        <div className="text-xl lg:text-7xl text-primary flex font-semibold">
          <span className="typewriter">
            Hi, I am{" "}
            <span className="underline underline-offset-4 decoration-dashed">
              Kshitiz Raj
            </span>
            <span className="blinking">!</span> {/* Moved inside the name */}
          </span>
        </div>
        <span className="typewriter-delayed lg:text-5xl text-primary pt-2  lg:pl-8 underline underline-offset-4 decoration-solid">
          Welcome to my Portfolio
        </span>

        <div className="text-secondary text-sm lg:text-xl text-justify pt-10 lg:pt-28">
          I am a full-stack developer with expertise in TypeScript, JavaScript,
          and Python. I specialize in building modern web applications using
          frameworks like React, Next.js, and Express.js. With experience in
          databases like PostgreSQL and MySQL, I focus on creating scalable,
          secure, and user-friendly solutions that integrate front-end,
          back-end, and cloud technologies.
        </div>
      </div>

      <div className="pl-5 col-span-2 flex justify-center pr-5 lg:pr-0 ">
        <div className="flex flex-col justify-center ">
          <Image
            className="rounded-xl "
            src={me}
            width={400}
            height={100}
            quality={100}
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  );
}
