import github from "@/Assets/icons/github-mark.png";
import Image from "next/image";
import email from "@/Assets/icons/email.png";
import Heading from "./Heading";
export default function contact() {
  return (
    <div id="contact">
      <div className=" py-8 lg:py-12">
        <Heading title={"Contacts"} />
      </div>
      <div className="lg:flex justify-around lg:py-10">
        <div className={center}>
          <a
            className={button}
            href="https://x.com/_kshitiz_raj"
            target="_blank"
          >
            <svg
              className="mr-1"
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 72 72"
              fill="none"
            >
              <path
                d="M40.7568 32.1716L59.3704 11H54.9596L38.7974 29.383L25.8887 11H11L30.5205 38.7983L11 61H15.4111L32.4788 41.5869L46.1113 61H61L40.7557 32.1716H40.7568ZM34.7152 39.0433L32.7374 36.2752L17.0005 14.2492H23.7756L36.4755 32.0249L38.4533 34.7929L54.9617 57.8986H48.1865L34.7152 39.0443V39.0433Z"
                fill="black"
              />
            </svg>
            <div className="underline underline-offset-4 p-1  transition duration-300">
              _kshitiz_raj
            </div>
          </a>
        </div>
        <div className={center}>
          <a
            className={button}
            href="https://www.linkedin.com/in/kshitiz-raj-2503"
            target="_blank"
          >
            <svg
              className=""
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 72 72"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.6975 11C12.6561 11 11 12.6057 11 14.5838V57.4474C11 59.4257 12.6563 61.03 14.6975 61.03H57.3325C59.3747 61.03 61.03 59.4255 61.03 57.4468V14.5838C61.03 12.6057 59.3747 11 57.3325 11H14.6975ZM26.2032 30.345V52.8686H18.7167V30.345H26.2032ZM26.6967 23.3793C26.6967 25.5407 25.0717 27.2703 22.4615 27.2703L22.4609 27.2701H22.4124C19.8998 27.2701 18.2754 25.5405 18.2754 23.3791C18.2754 21.1686 19.9489 19.4873 22.5111 19.4873C25.0717 19.4873 26.6478 21.1686 26.6967 23.3793ZM37.833 52.8686H30.3471L30.3469 52.8694C30.3469 52.8694 30.4452 32.4588 30.3475 30.3458H37.8336V33.5339C38.8288 31.9995 40.6098 29.8169 44.5808 29.8169C49.5062 29.8169 53.1991 33.0363 53.1991 39.9543V52.8686H45.7133V40.8204C45.7133 37.7922 44.6293 35.7269 41.921 35.7269C39.8524 35.7269 38.6206 37.1198 38.0796 38.4653C37.8819 38.9455 37.833 39.6195 37.833 40.2918V52.8686Z"
                fill="#006699"
              />
            </svg>
            <div className="underline underline-offset-4 p-1 transition duration-300">
              kshitiz-raj-2503
            </div>
          </a>
        </div>
        <div className={center}>
          <a
            className={button}
            href="https://github.com/kraj2503"
            target="_blank"
          >
            <Image src={github} alt="" width={30} />
            <div className="flex flex-col justify-center pl-2 underline    underline-offset-4">
              kraj2503
            </div>
          </a>
        </div>

        <div className={center}>
          <a
            className={button}
            href="mailto:rajkshitiz10@gmail.com"
            target="_blank"
          >
            <Image src={email} alt="" width={30} />
            <div className="flex flex-col justify-center pl-2 underline  underline-offset-4">
              kraj2503
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

const center = "flex justify-center my-3";
const button =
  "flex px-5 py-3 text-gray-300 bg-gray-700 items-center justify-center rounded-md shadow-md hover:bg-gray-500 hover:text-gray-200 transition duration-300 ease-in-out sm:w-3/6 lg:w-full mt-3 ";
