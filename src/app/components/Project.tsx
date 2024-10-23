import Image, { StaticImageData } from "next/image";

type Props = {
  image: StaticImageData;
  title: string;
  description: string;
  link: string;
};

export default function Project(props: Props) {
  return (
    <div className="pt-12 lg:pt-24 text-justify">
      <div className="text-primary text-xl lg:text-4xl flex justify-center hover:underline hover:pointer hover:text-blue-600 transition duration-300">
        <a href={props.link} target="_blank">
          {props.title}
        </a>
      </div>

      <div className="lg:grid grid-cols-4  pt-5 lg:pt-14">
        <div className=" lg:col-span-2 flex justify-center scale-75 lg:scale-110 lg:pr-20 items-center lg:pl-8">
          <a href={props.link} target="_blank">
            <div className=" flex lg:flex-col lg:justify-center  ">
              <Image
                className=" mb-5 lg:mb-0 lg:ml-0  lg:max-w-md rounded-xl  transition duration-300 ease-in-out hover:scale-110 hover:opacity-80 "
                src={props.image}
                width={500}
                alt="Project image"
                style={{ objectFit: "cover" }}
              />
            </div>
          </a>
        </div>
        <div className=" text-sm lg:text-xl text-secondary lg:col-span-2 pl-6  pr-6 lg:pr-12 ">
          {props.description}
        </div>
      </div>
    </div>
  );
}
