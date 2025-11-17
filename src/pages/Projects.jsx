import Navbar from "../components/Navbar";
import HeroW from "../components/HeroW";
import Footer from "../components/Footer";
import "../projects.css";

function Projects() {
  return (
    <div className="app">
      <Navbar />
      <main className="content">
        <HeroW />
      </main>
      <Footer/>
    </div>
  );
}

export default Projects;