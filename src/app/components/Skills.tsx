import Heading from "./Heading";
import Skill from "./Skill";

export default function Skills() {
  return (
    <div id="skills">
      <div className="  py-12">
        <Heading title={"Skills"} />
      </div>
        <div className={tab}>
          <div className={skillsTab}>
            <div className={skillsTabHeading}>Languages</div>

            <div className={skillsTabGrid}>
              <Skill title={"TypeScript"} />
              <Skill title={"JavaScript"} />
              <Skill title={"Python"} />
              <Skill title={"C/C++"} />
              <Skill title={"Rust"} />
            </div>
          </div>
          <div className={skillsTab}>
            <div className={skillsTabHeading}>Frontend Frameworks</div>

            <div className={skillsTabGrid}>
              <Skill title={"NextJS"} />
              <Skill title={"ReactJS"} />
              <Skill title={"Tailwind CSS"} />
              <Skill title={"HTML"} />
              <Skill title={"CSS"} />
              <Skill title={"Apollo Client"} />
            </div>
          </div>
        </div>
      <div className={tab}>
        <div className={skillsTab}>
          <div className={skillsTabHeading}>Backend Frameworks</div>

          <div className={skillsTabGrid}>
            <Skill title={"ExpressJS"} />
            <Skill title={"JWT"} />
            <Skill title={"Zod"} />
            <Skill title={"Prisma"} />
            <Skill title={"Kafka"} />
            <Skill title={"Prisma"} />
            {/* <Skill title={"Hono"} /> */}
            <Skill title={"Axios"} />
            <Skill title={"Flask"} />
            <Skill title={"GraphQL"} />
            <Skill title={"REST API"} />
            <Skill title={"WebSockets"} />
            <Skill title={"gRPC"} />
            <Skill title={"Node / Bun"} />
            <Skill title={"Protocol Buffers"} />
            {/* <Skill title={"Protocol Buffers (Protobufs)"} /> */}
            {/* <Skill title={"OpenCV"} /> */}
          </div>
        </div>
        <div className={skillsTab}>
          <div className={skillsTabHeading}>Developer Tools</div>

          <div className={skillsTabGrid}>
            <Skill title={"Git"} />
            <Skill title={"Postman"} />
            <Skill title={"Vite"} />
            <Skill title={"Docker"} />
            <Skill title={"Jest"} />
            <Skill title={"Notion"} />
            <Skill title={"Turborepo"} />
          </div>
        </div>
      </div>

      <div className={tab}>
        <div className={skillsTab}>
          <div className={skillsTabHeading}>Database</div>

          <div className={skillsTabGrid}>
            <Skill title={"PostgreSQL"} />
            <Skill title={"MySQL"} />
            <Skill title={"SQL Server"} />
            <Skill title={"MongoDb"} />
          </div>
        </div>
        <div className={skillsTab}>
          <div className={skillsTabHeading}>Cloud Services</div>

          <div className={skillsTabGrid}>
            <Skill title={"Cloudflare"} />
            <Skill title={"AWS EC2"} />
            <Skill title={"AWS S3"} />
            <Skill title={"Vercel"} />
            <Skill title={"Prisma"} />
          </div>
        </div>
      </div>
    </div>
  );
}

const tab = "lg:flex justify-around text-primary lg:mt-10 px-5 lg:px-0";
const skillsTab = "border-2  border-emerald-500  lg:w-2/6  mt-10 lg:mt-0";
const skillsTabHeading =
  "border-b py-2 underline underline-offset-4 decoration-dashed flex justify-center   border-emerald-500";
const skillsTabGrid = "grid grid-cols-3 ";

{
  /* <Image
  className=" rounded-full pb-8  "
  src={nextjs}
  width={70}
  height={100}
  alt="Picture of the author"
/>
<Image
  className=" rounded-full pb-8  "
  src={expressjs}
  width={70}
  height={100}
  alt="Picture of the author"
/> */
}
