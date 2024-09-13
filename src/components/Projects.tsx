import Project from "./Project";

export default function Projects() {
  const Project1 = "src/Assets/Kshitiz_raj.jpg";

  return (
    <div id="projects">
      <div className="  pt-12">
        <div className="flex justify-center text-primary text-5xl p-8 font-mono hover:underline bg-smoky-black">
          Projects
        </div>

        <Project
        link={"kshitizraj.com"}
          image={Project1}
          title={"THis is project 1"}
          discription={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum expedita et reprehenderit beatae temporibus error saepe velit, quibusdam, voluptates cupiditate, aliquid tenetur deleniti laborum a impedit illum nihil? Illum totam quam laborum tempora adipisci tempore iste dignissimos atque aliquid quasi reiciendis sint qui neque libero nihil, similique provident dicta animi."
          }
        />
        <Project
        link={"kshitizraj.com"}
          image={Project1}
          title={"THis is project 1"}
          discription={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum expedita et reprehenderit beatae temporibus error saepe velit, quibusdam, voluptates cupiditate, aliquid tenetur deleniti laborum a impedit illum nihil? Illum totam quam laborum tempora adipisci tempore iste dignissimos atque aliquid quasi reiciendis sint qui neque libero nihil, similique provident dicta animi."
          }
        />
        <Project
        link={"kshitizraj.com"}
          image={Project1}
          title={"THis is project 1"}
          discription={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum expedita et reprehenderit beatae temporibus error saepe velit, quibusdam, voluptates cupiditate, aliquid tenetur deleniti laborum a impedit illum nihil? Illum totam quam laborum tempora adipisci tempore iste dignissimos atque aliquid quasi reiciendis sint qui neque libero nihil, similique provident dicta animi."
          }
        />
        <Project
        link={"kshitizraj.com"}
          image={Project1}
          title={"THis is project 1"}
          discription={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum expedita et reprehenderit beatae temporibus error saepe velit, quibusdam, voluptates cupiditate, aliquid tenetur deleniti laborum a impedit illum nihil? Illum totam quam laborum tempora adipisci tempore iste dignissimos atque aliquid quasi reiciendis sint qui neque libero nihil, similique provident dicta animi."
          }
        />
     
      </div>
    </div>
  );
}
