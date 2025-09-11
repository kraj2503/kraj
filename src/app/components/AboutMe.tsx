import Image from "next/image";
// import me from "@/Assets/Kshitiz_raj.jpg";
import me from "@/Assets/_DSC0230.png";

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
          {/* I am a Full-Stack Developer specializing in Machine Learning and modern web
          development. With expertise in TypeScript, JavaScript, and Python, I
          build scalable and secure web applications using frameworks like
          React, Next.js, and Express.js. My experience extends to databases
          like PostgreSQL and MySQL and cloud platforms, where I focus on
          creating user-friendly solutions that integrate seamlessly across
          front-end, back-end, and cloud services. */}
          I’m a Software Engineer at Barclays, where I build machine
          learning–driven solutions and scalable systems. Within seven months of
          joining, I was promoted for my performance. My expertise spans backend
          engineering with Node.js, Express.js, WebSockets, Redis, REST/gRPC,
          and databases like PostgreSQL and MongoDB. On the frontend, I work
          with React.js, Next.js, and Tailwind CSS to deliver clean, modern user
          experiences. I’ve built projects including a real-time subscription
          system, WebRTC call platform, crypto exchange, and collaborative
          applications, blending system design, performance optimization, and
          full-stack development. I also have experience in machine learning and
          NLP, working with models such as XGBoost and LightGBM.
        </div>
      </div>

      <div className="pl-5 col-span-2 flex justify-center pr-5 lg:pr-0 ">
        <div className="flex flex-col justify-center ">
          <Image
            className="rounded-2xl "
            src="/me.png"
            width={400}
            height={100}
            quality={100}
            alt="Kshitiz Raj - Software Engineer at Barclays, Full-Stack Developer, Machine Learning Engineer"
          />
        </div>
      </div>
    </div>
  );
}
