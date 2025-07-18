import { ParallaxProvider } from "react-scroll-parallax";

import MagicMouseTrail from "../components/MagicMouse";

import NavBar from "../components/Header/Navbar";
import Hero from "../sections/Hero";
// import Feature from "../sections/Feature";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Footer from "../components/Common/Footer";
import SkillsCard from "../components/SkillCard/SkillsCard";
// import TopSkills from "../components/SkillCard/TopSkills";

import FeatureWithAnimation from "../components/Feature/FeatureWithAnimation";
// import Clock from "../sections/Clock";

const Home = () => (
  <>
    <MagicMouseTrail />
    <NavBar />
    <Hero />
    <FeatureWithAnimation />
    <About />
    <Projects />
    <SkillsCard />
    {/* <Clock /> */}
    <Footer />
  </>
);

export default Home;
