import { hero } from "../assets/data";
import { skills } from "../assets/data";

const HeroImg = () => {
  return (
    <div className="bg-sky-200" style={{ position: "relative" }}>
      <div className="mx-auto max-w-7xl px-8 grid md:grid-cols-2 items-center gap-8">
        <article className="text-3xl text-left">
          <h1 className="text-5xl text-sky-950 font-bold tracking-widest">
            Greg Barker
          </h1>
          <p className="text-3xl font-bold text-slate-600">
            Full-Stack Developer
          </p>
          <div className="flex gap-4 mt-4">
            <ul className="flex flex-row gap-2">
              {skills.map((skill) => {
                const { id, icon } = skill;
                return (
                  <li key={id} className="text-sky-900">
                    {icon}
                  </li>
                );
              })}
            </ul>
          </div>
        </article>
        <img
          src={hero.img}
          alt="Web Developer Station"
          className="rounded-xl"
        />
      </div>
    </div>
  );
};
export default HeroImg;
