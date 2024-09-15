import Image from "next/image";
// import me from "@/Assets/Kshitiz_raj.jpg";

export default function AboutMe() {
  return (
    <div className="bg-oxford-blue  h-screen grid grid-cols-2">
      <div className="flex flex-col justify-center  ml-28">
        <div className="text-7xl text-primary flex font-semibold">
          <span className="typewriter">
            Hi, I am{" "}
            <span className="underline underline-offset-4 decoration-dashed">
              Kshitiz Raj
            </span>
            <span className="blinking">!</span> {/* Moved inside the name */}
          </span>
        </div>
        <span className="typewriter-delayed text-5xl text-primary pt-2 pl-8 underline underline-offset-4 decoration-solid">
          Welcome to my Portfolio
        </span>

        <div className="text-secondary text-xl text-justify pt-28">
          I am a full-stack developer with expertise in TypeScript, JavaScript,
          and Python. I specialize in building modern web applications using
          frameworks like React, Next.js, and Express.js. With experience in
          databases like PostgreSQL and MySQL, I focus on creating scalable,
          secure, and user-friendly solutions that integrate front-end,
          back-end, and cloud technologies.
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col justify-center ">
          <Image
            className="rounded-xl "
            src="/kshitiz_raj.jpg"
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
