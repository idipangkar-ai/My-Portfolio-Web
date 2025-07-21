import { ParallaxProvider } from "react-scroll-parallax";

import MagicMouseTrail from "../components/MagicMouse";

import NavBar from "../components/Header/Navbar";
import Hero from "../sections/Hero";

import About from "../sections/About";
import Projects from "../sections/Projects";
import Footer from "../components/Common/Footer";
import SkillsCard from "../components/SkillCard/SkillsCard";

import Feature from "../components/Feature/Feature";

const Home = () => (
  <>
    <MagicMouseTrail />
    <NavBar />
    <Hero />
    <Feature />
    <About />
    <Projects />
    <SkillsCard />
    <Footer />
  </>
);

export default Home;
