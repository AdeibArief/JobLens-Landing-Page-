import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import SupportedSites from "../components/SupportedSites";
import Demo from "../components/Demo";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Demo />
      <SupportedSites />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;
