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
      <Navbar key={1} />
      <Hero key={2} />
      <MainFeature key={3} />
      <OtherFeature key={4} />
      <WhatTheySay key={5} />
      <Developers key={6} />
      <Contact key={7} />
      <Footer key={8} />
    </>
  );
};

export default Home;
