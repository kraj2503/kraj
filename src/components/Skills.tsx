import Skill from "./Skill";

export default function Skills() {
  return (
    <div id="skills">
      <div className="  py-12">
        <div className="flex justify-center text-primary text-5xl p-8 font-mono hover:underline bg-smoky-black underline-offset-8">
          Skills
        </div>
        <div className="flex justify-around text-primary mt-10 ">
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
            </div>
          </div>
        </div>
      </div>
      <div className=" ">
        {/* ----------------------- */}

        <div className="flex justify-around text-primary   ">
          <div className={skillsTab}>
            <div className={skillsTabHeading}>Backend Frameworks</div>

            <div className={skillsTabGrid}>
              <Skill title={"ExpressJS"} />
              <Skill title={"JWT"} />
              <Skill title={"Zod"} />
              <Skill title={"Prisma"} />
              <Skill title={"Node.js"} />
              <Skill title={"Prisma"} />
              <Skill title={"Hono"} />
              <Skill title={"Axios"} />
              <Skill title={"Flask"} />
              {/* <Skill title={"OpenCV"} /> */}
            </div>
          </div>
          <div className={skillsTab}>
            <div className={skillsTabHeading}>Developer Tools</div>

            <div className={skillsTabGrid}>
              <Skill title={"Turborepo"} />
              <Skill title={"Vite"} />
              <Skill title={"Docker"} />
              <Skill title={"Git"} />
              <Skill title={"Postman"} />
              <Skill title={"Notion"} />
            </div>
          </div>
        </div>

        <div className="flex justify-around text-primary mt-10 ">
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
    </div>
  );
}

const skillsTab = "border-2   border-emerald-500 w-2/6";
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
