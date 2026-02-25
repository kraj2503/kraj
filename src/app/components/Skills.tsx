import Heading from "./Heading";
import Skill from "./Skill";

export default function Skills() {
  return (
    <div id="skills">
      <div className="py-12">
        <Heading title={"Skills"} />
      </div>

      {/* Row 1 */}
      <div className={tab}>
        <div className={skillsTab}>
          <div className={skillsTabHeading}>Languages</div>
          <div className={skillsTabGrid}>
            <Skill title="TypeScript" />
            <Skill title="JavaScript" />
            <Skill title="Python" />
            <Skill title="C / C++" />
          </div>
        </div>

        <div className={skillsTab}>
          <div className={skillsTabHeading}>Frontend</div>
          <div className={skillsTabGrid}>
            <Skill title="React.js" />
            <Skill title="Next.js" />
            <Skill title="Tailwind CSS" />
            <Skill title="ShadCN UI" />
            <Skill title="HTML / CSS" />
            <Skill title="Vite" />
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className={tab}>
        <div className={skillsTab}>
          <div className={skillsTabHeading}>Backend & Systems</div>
          <div className={skillsTabGrid}>
            <Skill title="Node.js" />
            <Skill title="Express.js" />
            <Skill title="FastAPI" />
            <Skill title="GraphQL" />
            <Skill title="WebSockets" />
            <Skill title="gRPC" />
            <Skill title="JWT / OAuth" />
            <Skill title="Kafka" />
            <Skill title="Event-Driven Systems" />
          </div>
        </div>

        <div className={skillsTab}>
          <div className={skillsTabHeading}>AI & Agentic Systems</div>
          <div className={skillsTabGrid}>
            <Skill title="Google ADK" />
            <Skill title="LangChain" />
            <Skill title="LangGraph" />
            <Skill title="Agent-to-Agent (A2A)" />
            <Skill title="RAG Pipelines" />
            <Skill title="ReAct-style Tool Use" />
            <Skill title="Vector Databases" />
            <Skill title="Prompt Engineering" />
            <Skill title="MCP" />
          </div>
        </div>
      </div>

      {/* Row 3 */}
      <div className={tab}>
        <div className={skillsTab}>
          <div className={skillsTabHeading}>Databases & Storage</div>
          <div className={skillsTabGrid}>
            <Skill title="PostgreSQL" />
            <Skill title="MySQL" />
            <Skill title="SQL Server" />
            <Skill title="MongoDB" />
            <Skill title="Redis" />
            <Skill title="Prisma ORM" />
            <Skill title="Supabase" />
          </div>
        </div>

        <div className={skillsTab}>
          <div className={skillsTabHeading}>Cloud & DevOps</div>
          <div className={skillsTabGrid}>
            <Skill title="AWS" />
            <Skill title="AWS Bedrock" />
            <Skill title="AWS AgentCore" />
            <Skill title="Docker" />
            <Skill title="Red Hat OpenShift" />
            <Skill title="CI/CD" />
            <Skill title="Vercel" />
            <Skill title="Cloudflare" />
          </div>
        </div>
      </div>

      {/* Row 4 */}
      <div className={tab}>
        <div className={skillsTab}>
          <div className={skillsTabHeading}>Machine Learning & NLP</div>
          <div className={skillsTabGrid}>
            <Skill title="XGBoost" />
            <Skill title="LightGBM" />
            <Skill title="Feature Engineering" />
            <Skill title="Model Evaluation" />
            <Skill title="TF-IDF" />
            <Skill title="Semantic Search" />
          </div>
        </div>

        <div className={skillsTab}>
          <div className={skillsTabHeading}>Developer Tools</div>
          <div className={skillsTabGrid}>
            <Skill title="Git" />
            <Skill title="Docker" />
            <Skill title="Postman" />
            <Skill title="Jest" />
            <Skill title="Turborepo" />
            <Skill title="Notion" />
          </div>
        </div>
      </div>
    </div>
  );
}

const tab = "lg:flex justify-around text-primary lg:mt-10 px-5 lg:px-0";
const skillsTab = "border-2 border-emerald-500 lg:w-2/6 mt-10 lg:mt-0";
const skillsTabHeading =
  "border-b py-2 underline underline-offset-4 decoration-dashed flex justify-center border-emerald-500";
const skillsTabGrid = "grid grid-cols-3";
