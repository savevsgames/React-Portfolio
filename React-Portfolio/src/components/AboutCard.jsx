const AboutCard = (aboutInfo) => {
  const { id, heading, content, image, imageInfo } = aboutInfo;
  console.log(
    "id",
    id,
    "heading",
    heading,
    "content",
    content,
    "image",
    image,
    "imageInfo",
    imageInfo
  );
  return (
    <article>
      <div
        key={id}
        className="bg-white border-2 border-slate-500 rounded-xl p-4 w-full shadow-xl"
      >
        <p className="text-lg font-bold p-4">{heading}</p>
        <div className="bg-white px-8 py-4 rounded-xl border-2 border-slate-500">
          <img
            src={image}
            alt="Greg Barker"
            className="border-2 border-slate-500 rounded-xl shadow-xl w-full"
          />
          <p className="text-lg font-bold p-4">{imageInfo}</p>

          {content.map((item, index) => (
            <p key={index} className="text-lg p-4">
              {item}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
};
export default AboutCard;
