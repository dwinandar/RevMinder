import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Recommendation from "../components/Recommendation";
import WhatTheySay from "../components/WhatTheySay";
import WhatWeOffer from "../components/WhatWeOffer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <WhatWeOffer />
      <Recommendation />
      <WhatTheySay />
      <Footer />
    </>
  );
};

export default Home;
