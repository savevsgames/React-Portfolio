import { links } from "../assets/data";

const Navbar = () => {
  return (
    <nav className="bg-sky-200">
      <div className="mx-auto max-w-7xl px-8 py-2 flex flex-col sm:flex-row sm-gap-x-16 sm:items-center sm:py-8">
        <h2 className="text-3xl font-bold">
          <span className="text-sky-900">FULL-STACK </span> web-dev
        </h2>
        <div className="flex gap-3 ml-8">
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <a
                key={id}
                href={url}
                className="text-sky-900 tracking-wider capitalize font-bold hover:text-sky-400"
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
