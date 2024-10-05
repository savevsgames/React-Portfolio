const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-sky-100 text-center w-full py-4">
      <p className="border-b-2 border-slate-500 p-4 shadow-xl">© {year} Greg Barker</p>
    </footer>
  );
};
export default Footer;
