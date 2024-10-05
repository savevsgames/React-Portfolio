import { useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const currentPage = useLocation().pathname;
  return (
    <nav className="bg-white">
      <div className="mx-auto max-w-7xl px-8 py-2 flex flex-col justify-between sm:flex-row sm-gap-x-16 sm:items-center sm:py-8">
        <h2 className="font-bold sm:text-2xl lg:text-3xl sm:mb-4 mb-0">
          <span className="text-sky-900">FULL-STACK </span> web-dev
        </h2>
        <div className="flex gap-3">
          <ul className="flex flex-row gap-4 text-sky-950 font-bold">
            <li className="nav-item">
              <Link
                to="/"
                className={currentPage === "/" ? "nav-link active" : "nav-link"}
              >
                About Me
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/Portfolio"
                className={
                  currentPage === "/Portfolio" ? "nav-link active" : "nav-link"
                }
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Resume"
                className={
                  currentPage === "/Resume" ? "nav-link active" : "nav-link"
                }
              >
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Contact"
                className={
                  currentPage === "/Contact" ? "nav-link active" : "nav-link"
                }
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
