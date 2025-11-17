
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Landing from "./pages/Landing";
import Projects from "./pages/Projects";
import "./landing.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/projects" element={<Projects/>}/>
    </Routes>
  )
}
export default App;
