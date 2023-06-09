import Navbar from "./Navbar";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
export default SharedLayout;
