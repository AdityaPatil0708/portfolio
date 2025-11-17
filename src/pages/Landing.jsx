import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Footer from "../components/Footer.jsx";

import "../landing.css";

function Landing() {
  return (

    <div className="app">
      <Navbar />
      <main className="content">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

export default Landing;
