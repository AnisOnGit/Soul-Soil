import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

const HomeLayout = () => {
  const location = useLocation();
  return (
    <div
      className="min-h-screen flex flex-col bg-[#f7f7f7] text-black font-comic
    "
    >
      <nav className={`z-10 ${location.pathname !== '/' ? 'bg-base-200': 'bg-transparent'}`}>
        <Navbar></Navbar>
      </nav>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="bg-base-200">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
