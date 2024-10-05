import { hero } from "../assets/data";
import { socials } from "../assets/data";

const HeroImg = () => {
  return (
    <div className="bg-sky-100 mx-4" style={{ position: "relative" }}>
      <div className="alignment-class">
        <article className="text-3xl text-left">
          <h1 className="text-5xl text-sky-950 font-bold tracking-widest">
            Greg Barker
          </h1>
          <p className="text-3xl font-bold text-slate-600">
            Full-Stack Developer
          </p>
          <div className="flex gap-4 mt-8">
            <ul className="flex flex-row gap-2 flex-wrap basis-3/4 mt-8">
              {socials.map((social) => {
                const { id, icon } = social;
                return (
                  <li key={id} className="text-sky-900">
                    <icon>{icon}</icon>
                  </li>
                );
              })}
            </ul>
          </div>
        </article>
        <article className="flex items-center justify-center">
          <img
            src={hero.img}
            alt="Web Developer Station"
            className="rounded-xl shadow-black shadow-xl sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl my-8"
          />
        </article>
      </div>
    </div>
  );
};
export default HeroImg;
