import PageNotFound from "./pages/PageNotFound";
import PageLayout from "./components/PageLayout";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProjectDocumentation from "./pages/ProjectDocumentation";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />}/>
          <Route path="/projects/:id" element={<ProjectDocumentation />}/>
          <Route path="*" element={<PageNotFound />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
 
export default Router;