const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-sky-100 text-center w-full py-4">
      <p>© {year} Greg Barker</p>
    </footer>
  );
};
export default Footer;
