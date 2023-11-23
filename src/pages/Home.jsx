import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import WhatTheySay from "../components/WhatTheySay";
import MainFeature from "../components/MainFeature";
import OtherFeature from "../components/OtherFeature";
import Developers from "../components/Developers";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <MainFeature />
      <OtherFeature />
      <WhatTheySay />
      <Developers />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
