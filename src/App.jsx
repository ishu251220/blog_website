import "./App.css";
import Blogs from "./Component/Blogs";
import Headers from "./Component/Headers";
import Footer from "./Component/Footer";
import { useContext, useEffect } from "react";
import { AppContext } from "./Context/AppContext";
import { Route, Routes, useLocation } from "react-router";
import { useSearchParams } from "react-router-dom"; // Fix import here
import Home from "./Page/Home"; // Remove curly braces for default export
import TagPage from "./Page/TagPage"; // Remove curly braces for default export
import BlogsPage from "./Page/BlogsPage"; // Remove curly braces for default export
import CateogryPage from "./Page/CateogryPage"; // Remove curly braces for default export

function App() {
  const [searchParams, setSearchParams] = useSearchParams(); // Fix import here
  const location = useLocation();
  const { Fetchdata } = useContext(AppContext);

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;
    if (location.pathname.includes("tag")) {
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
      Fetchdata(Number(page), tag);
    } else if (location.pathname.includes("cateogry")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
      Fetchdata(Number(page), null, category);
    } else {
      Fetchdata(Number(page));
    }
  }, [location.pathname, searchParams]); // <-- Remove location.searchParams from the dependency array

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:blogId" element={<BlogsPage />} />
        <Route path="/tags/:tag" element={<TagPage />} />
        <Route path="/categories/:cateogry" element={<CateogryPage />} />
      </Routes>
    </div>
  );
}

export default App;
