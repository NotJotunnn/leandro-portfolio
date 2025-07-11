import { Outlet } from "react-router-dom";
import Header from "../Header";
import Contact from "../Contact";
import ScrollToAnchor from "../../utils/ScrollToHash";

const PageLayout = () => {
  return (
    <>
      <ScrollToAnchor />
      <Header />
      <Outlet />
      <Contact />
    </>
  );
};

export default PageLayout;
