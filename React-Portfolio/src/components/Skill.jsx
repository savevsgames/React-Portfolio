import { defaultImg } from "../assets/data";

const Skill = (skill) => {
  const { id, title, icon2, text } = skill;
  return (
    <article
      key={id}
      className="border-slate-500 border-2 rounded-xl p-4 h-48 bg-sky-100 shadow-xl"
      style={{ position: "relative" }}
    >
      <icon>{icon2}</icon>
      <h3 className="text-xl font-bold">{title}</h3>
      <img
        src={defaultImg.img}
        alt={title}
        className="h-24 w-24"
        style={{
          position: "absolute",
          top: "4px",
          right: "4px",
          borderRadius: "10%",
        }}
      />
      <p>{text}</p>
    </article>
  );
};
export default Skill;
