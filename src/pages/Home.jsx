import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Recommendation from "../components/Recommendation";
// import Tips from "../components/Tips";
import WhatWeOffer from "../components/WhatWeOffer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <WhatWeOffer />
      <Recommendation />
      <Footer />
    </>
  );
};

export default Home;
