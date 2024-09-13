import Image from "next/image";
import me from "@/Assets/Kshitiz_raj.jpg";
export default function AboutMe() {
  return (
    <div className="bg-oxford-blue flex justify-around h-screen ">
      <div className=" flex flex-col justify-center pb-32">


        <div className="text-7xl text-primary ">Hi, I am Kshitiz Raj</div>
        <div className="text-5xl text-primary mt-2">
          Welcome to my Portfolio
        </div>
      </div>

      <div className="flex flex-col justify-center pb-32 ">
        <Image
          className="rounded-full pb-8  "
          src={me}
          width={200}
          height={100}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
}
