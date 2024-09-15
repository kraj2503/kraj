type SkillProps = {
    title: string;
  };

export default function Skill({title}:SkillProps) {
  const skill =
    "border-2 flex justify-center m-3 p-2  border-emerald-500 hover:scale-110 transition duration-300 ease-in-out";

  return <div className={skill}>{title}</div>;
}
