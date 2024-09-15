import Image from "next/image";
import me from "@/Assets/Kshitiz_raj.jpg";

export default function AboutMe() {
  return (
    <div className="bg-oxford-blue flex justify-around h-screen">
      <div className="flex flex-col justify-center pb-32">
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
      </div>

      <div className="flex flex-col justify-center pb-32">
        <Image
          className="rounded-full pb-8"
          src={me}
          width={200}
          height={100}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
}
