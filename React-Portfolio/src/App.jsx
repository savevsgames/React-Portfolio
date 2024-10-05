import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="bg-sky-100">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default App;
