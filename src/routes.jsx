import PageNotFound from "./pages/PageNotFound";
import PageLayout from "./components/PageLayout";
import Home from "./pages/Home";
import { HashRouter, Route, Routes } from "react-router-dom";
import ProjectDocumentation from "./pages/ProjectDocumentation";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />}/>
          <Route path="/projects/:id" element={<ProjectDocumentation />}/>
          <Route path="*" element={<PageNotFound />}/>
        </Route>
      </Routes>
    </HashRouter>
  );
}
 
export default Router;