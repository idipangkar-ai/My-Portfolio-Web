import NavBar from "../components/Header/Navbar";
import AboutHero from "../components/AboutDetail/AboutHero";
import About from "../components/AboutDetail/About";
import Qualification from "../components/AboutDetail/Qualification";
import Footer from "../components/Common/Footer";
// import Doraemon from "../components/AboutDetail/Doraemon";
import UFOSection from "../components/AboutDetail/Ufo";

const AboutDetail = () => {
  return (
    <>
      <NavBar />
      <AboutHero />
      <About />
      <Qualification />
      {/* <Doraemon /> */}
      <UFOSection />
      <Footer />
    </>
  );
};

export default AboutDetail;
