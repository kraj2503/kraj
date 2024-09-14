import Project from "./Project";
import img1 from '@/Assets/ss.png'
export default function Projects() {

  return (
    <div id="projects">
      <div className="  py-12">
        <div className="flex justify-center text-primary text-5xl p-8 font-mono hover:underline bg-smoky-black underline-offset-8">
          Projects
        </div>

        <Project
        link={"https://kshitizraj.com"}
          image={img1}
          title={"THis is project 1"}
          description={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum expedita et reprehenderit beatae temporibus error saepe velit, quibusdam, voluptates cupiditate, aliquid tenetur deleniti laborum a impedit illum nihil? Illum totam quam laborum tempora adipisci tempore iste dignissimos atque aliquid quasi reiciendis sint qui neque libero nihil, similique provident dicta animi."
          }
        />
        <Project
        link={"https://kshitizraj.com"}
          image={img1}
          title={"THis is project 1"}
          description={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum expedita et reprehenderit beatae temporibus error saepe velit, quibusdam, voluptates cupiditate, aliquid tenetur deleniti laborum a impedit illum nihil? Illum totam quam laborum tempora adipisci tempore iste dignissimos atque aliquid quasi reiciendis sint qui neque libero nihil, similique provident dicta animi."
          }
        />
        <Project
        link={"kshitizraj.com"}
          image={img1}
          title={"THis is project 1"}
          description={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum expedita et reprehenderit beatae temporibus error saepe velit, quibusdam, voluptates cupiditate, aliquid tenetur deleniti laborum a impedit illum nihil? Illum totam quam laborum tempora adipisci tempore iste dignissimos atque aliquid quasi reiciendis sint qui neque libero nihil, similique provident dicta animi."
          }
        />
        <Project
        link={"kshitizraj.com"}
          image={img1}
          title={"THis is project 1"}
          description={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum expedita et reprehenderit beatae temporibus error saepe velit, quibusdam, voluptates cupiditate, aliquid tenetur deleniti laborum a impedit illum nihil? Illum totam quam laborum tempora adipisci tempore iste dignissimos atque aliquid quasi reiciendis sint qui neque libero nihil, similique provident dicta animi."
          }
        />
     
      </div>
    </div>
  );
}
