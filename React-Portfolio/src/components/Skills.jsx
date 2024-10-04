import Skill from "./Skill";
import { skills } from "../assets/data";

const Skills = () => {
  return (
    <section className="bg-white">
      <h2 className="text-3xl alignment-class text-sky-950 bg-white py-4 font-bold tracking-widest">
        Skilled In...
      </h2>

      <div className="alignment-class bg-white py-4">
        {skills.map((skill) => {
          return <Skill key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};
export default Skills;
