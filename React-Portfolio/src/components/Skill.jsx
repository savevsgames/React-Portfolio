const Skill = (skill) => {
  const { id, title, icon2, text } = skill;
  return (
    <article
      key={id}
      className="border-slate-500 border-2 rounded-xl p-4 h-48 bg-white shadow-xl"
    >
      <icon>{icon2}</icon>
      <h3 className="text-xl font-bold">{title}</h3>

      <p>{text}</p>
    </article>
  );
};
export default Skill;
