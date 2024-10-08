import Image, { StaticImageData } from "next/image";

type Props = {
  image: StaticImageData;
  title: string;
  description: string;
  link: string;
};

export default function Project(props: Props) {
  return (
    <div className="pt-24 text-justify">
      <div className="text-primary text-3xl flex justify-center hover:underline hover:pointer hover:text-blue-600 transition duration-300">
        <a href={props.link} target="_blank">
          {props.title}
        </a>
      </div>

      <div className="grid grid-cols-4  pt-14">
        <div className="text-xl text-secondary col-span-2 pl-28 ">
          {props.description}
        </div>
        <div className=" col-span-2 flex justify-center pr-20 items-center">
          <a href={props.link} target="_blank">
            <div className=" flex flex-col justify-center ">
              <Image
                className="max-w-md rounded-xl  transition duration-300 ease-in-out hover:scale-110 hover:opacity-80"
                src={props.image}
                width={500}
                alt="Project image"
                style={{ objectFit: "cover" }}
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
