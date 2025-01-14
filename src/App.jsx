import Navbar from "./Navbar";
import Home from "./pages/Home";
import Work_experience from "./pages/Work_experience";
import Projects from "./pages/Projects";
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/profile" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/work-experience" element={<Work_experience />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
