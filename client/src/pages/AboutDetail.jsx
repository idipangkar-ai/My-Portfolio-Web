import NavBar from "../components/Header/Navbar";
import AboutHero from "../components/AboutDetail/AboutHero";
import Footer from "../components/Common/Footer";
import UFOSection from "../components/AboutDetail/Ufo";
import Education from "../components/AboutDetail/Education";
import WorkExperience from "../components/AboutDetail/WorkExperience";
import QuickStats from "../components/Common/QuickStats";
import TechStack from "../components/AboutDetail/TechStack";

const AboutDetail = () => {
  return (
    <>
      <NavBar />
      <AboutHero />
      <Education />
      <WorkExperience />
      <QuickStats />
      <TechStack />
      <UFOSection />
      <Footer />
    </>
  );
};

export default AboutDetail;
