const Project = (project) => {
  const { id, img, url, github, title, text } = project;
  console.log(img);

  const removeBackgroundImage = (e) => {
    const target = e.target;
    target.style.backgroundColor = "rgba(256, 256, 256, 1.0)";
  };

  const restoreBackgroundImage = (e) => {
    const target = e.target;
    target.style.backgroundColor = "rgba(256, 256, 256, 0.9)";
  };

  return (
    <article
      style={{
        position: "relative",
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        zIndex: "2",
      }}
      key={id}
      className="border-slate-500 border-2 rounded-xl p-4 bg-white shadow-xl hover:bg-slate-200"
    >
      <div
        id={id}
        onMouseEnter={removeBackgroundImage}
        onMouseLeave={restoreBackgroundImage}
        style={{
          position: "absolute",
          borderRadius: "0.5rem",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(256, 256, 256, 0.9)",
          zIndex: "-1",
        }}
      ></div>
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
export default Project;
