const PortfolioCard = (project) => {
  const { id, img, url, github, title, text } = project;
  console.log(img);
  return (
    <article
      key={id}
      className="border-slate-500 border-2 rounded-xl p-4 bg-white shadow-xl"
    >
      <h3 className="text-xl font-bold">{title}</h3>
      <img
        src={img}
        alt={title}
        className="h-24 w-36 border-slate-500 border-2 rounded-xl my-4"
      />
      <p className="p-2">
        <span className="font-bold">GitHub:</span> <a href={github}>{github}</a>
      </p>
      <p className="p-2">
        <span className="font-bold">Deployed Project:</span>{" "}
        <a href={url}>{url}</a>
      </p>
      <p className="p-2">
        <span className="font-bold">About:</span> {text}
      </p>
    </article>
  );
};
export default PortfolioCard;
