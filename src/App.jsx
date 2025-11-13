import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import "./styles.css";

function App() {
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

export default App;
