import Heading from "./Heading";
import Project from "./Project";
import muzly from "@/Assets/muzly.png";
import StreamServer from "@/Assets/streamServer.png";
import blogit from "@/Assets/blogit.png";
// import tictactoe from "@/Assets/tic-tac-toe.png"
import trade from "@/Assets/trade.png";
import paytm from "@/Assets/paytm.png";
export default function Projects() {
  return (
    <div id="projects">
      <div className=" py-8 lg:py-12">
        <Heading title={"Projects"} />

        <Project
          link="https://github.com/kraj2503/WorkSync"
          image={trade}
          title="Worksync"
          description={"A worker based model for "}
        />

        <Project
          link="https://github.com/kraj2503/Exchange.git"
          image={trade}
          title="Tradosphere"
          description={
            "Engineered a high-performance cryptocurrency exchange platform inspired by Backpack.exchange. Designed an API server architecture separating user interactions from the trading engine, with Redis pub/sub and queues ensuring FIFO data flow. Built a market maker bot for realistic volatility, real-time WebSocket updates, and interactive charts. Containerized using Docker Compose with TimescaleDB and Redis, and added a trade simulator for virtual strategy testing."
          }
        />
        <Project
          link={"https://muzly.kshitizraj.com/"}
          image={muzly}
          title={"Muzly"}
          description={
            "Muzly is an innovative social streaming platform that revolutionizes the way users experience YouTube content together. Built with cutting-edge technologies including Next.js and NextAuth, this sophisticated SaaS application enables seamless synchronized video playback across multiple users. Its distinctive democratic voting system empowers both creators and viewers to influence the content flow, with the highest-voted videos automatically advancing in the queue. This dynamic, community-driven approach creates an engaging shared viewing experience, transforming passive content consumption into an interactive social activity that brings people together through their shared interests."
          }
        />

        <Project
          link={"https://medium.projects.kshitizraj.com/"}
          image={blogit}
          title={"Blog-It"}
          description={
            "Developed a dynamic blogging platform using React.js and TypeScript, offering a seamless experience for users to write, publish, and read blogs. The backend is powered by Hono, deployed on Cloudflare Workers via Wrangler for high performance and scalability. User authentication and security are ensured through JSON Web Tokens, allowing secure and automated account management. The app features a mobile-first design, styled with Tailwind CSS for a responsive and modern user interface. PostgreSQL serves as the database, with Prisma Accelerate optimizing connection pooling for efficient data management. This project highlights advanced integration of frontend and backend technologies, emphasizing robust security, performance, and a user-friendly design."
          }
        />
        <Project
          link={"https://paytm.projects.kshitizraj.com"}
          image={paytm}
          title={"Payments-app"}
          description={
            "Built a robust payments web application using React.js and JavaScript, featuring a user-friendly interface for managing transactions. The backend, developed with Express.js, is deployed on an AWS EC2 instance, ensuring reliable performance and scalability. Automatic user authentication and security are managed with JSON Web Tokens, safeguarding user accounts. Users can view their balance on a personalized dashboard and send money to other platform users with ease. The mobile-first design is crafted with Tailwind CSS, providing a responsive and modern look. MongoDB is utilized as the database to store user and account details, leveraging transactions to ensure data integrity and consistency. This project demonstrates effective integration of frontend and backend technologies, focusing on secure, efficient, and scalable financial transactions."
          }
        />
        <Project
          link={"https://github.com/kraj2503/StreamServer"}
          image={StreamServer}
          title={"Stream Server"}
          description={
            "This Node.js server, powered by Express.js, excels in managing web requests and system operations. It dynamically logs the server's accessible URL using the first IPv4 address. The server supports endpoints for serving static files, listing directory contents, and executing system commands like shutdown. Middleware logs request times, and robust error handling addresses 404 and 500 errors. This setup demonstrates effective use of Node.js modules for real-time operations and file management, showcasing a strong grasp of server management and web application architecture."
          }
        />
        {/* <Project
          link={"https://github.com/kraj2503/TIC-TAC-TOE"}
          image={tictactoe}
          title={"Tic-Tac-Toe"}
          description={
            "I developed a multiplayer Tic-Tac-Toe game utilizing TCP/IP socket programming to facilitate real-time online gameplay. The project employs socket connections to enable smooth communication between players, ensuring that each move is instantly transmitted across the network. The game features a turn-based system where players update a shared game grid, sending and receiving serialized data packets to reflect the current game state. It includes comprehensive handling of victory conditions, draws, and rematch requests, delivering a fully interactive and engaging experience for online participants."
          }
        /> */}
      </div>
    </div>
  );
}
