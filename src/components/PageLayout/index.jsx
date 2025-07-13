import { Outlet } from "react-router-dom";
import Header from "../Header";
import Contact from "../Contact";
import ScrollToAnchor from "../../utils/ScrollToHash";
import Sidebar from "../Sidebar";

const PageLayout = () => {
  return (
    <>
      <ScrollToAnchor />
      <Header />
      <Sidebar />
      <Outlet />
      <Contact />
    </>
  );
};

export default PageLayout;
