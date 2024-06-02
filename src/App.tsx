import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SubPage1 from "./SubPage1";
import SubPage2 from "./SubPage2";
import MainPage from "./MainPage";

export default function App() {
  return (
    <div className="flex h-full items-stretch">
      <Router basename="/service1">
        <div className="w-72 h-full bg-orange-500 bg-opacity-50">
          <h6>side bar</h6>
          <div className="flex flex-col mt-3">
            <Link to={"/"}>go to Main Page</Link>
            <Link to={"/subpage1"}>go to SubPage 1</Link>
            <Link to={"/subpage2"}>go to SubPage 1</Link>
          </div>
        </div>
        <Routes>
          <Route path="subpage1" element={<SubPage1 />} />
          <Route path="subpage2" element={<SubPage2 />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>
    </div>
  );
}
