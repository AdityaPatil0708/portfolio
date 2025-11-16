import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import Footer from "../components/Footer";
import "../about.css";

function About() {
    return (
        <div className="about">
            <Navbar />
            <main><Profile/></main>
            <Footer />
        </div>
    );
}
export default About;