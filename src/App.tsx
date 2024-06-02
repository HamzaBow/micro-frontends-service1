import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SubPage1 from "./SubPage1";
import SubPage2 from "./SubPage2";
import MainPage from "./MainPage";

export default function App() {
  return (
    <Router basename="/service1">
      <Routes>
        <Route path="subpage1" element={<SubPage1 />} />
        <Route path="subpage2" element={<SubPage2 />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}
