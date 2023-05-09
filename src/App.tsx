import { Routes, Route } from "react-router-dom";

import "./styles/App.css";
import About from "./views/About";
import Blog from "./views/Blog";
import Food from "./views/Food";
import Home from "./views/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="about" element={<About />} />
        <Route path="food" element={<Food />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
