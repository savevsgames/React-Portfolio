import { hero } from "../assets/data";
import Socials from "./Socials";

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
          <Socials />
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
