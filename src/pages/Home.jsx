import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
// import Tips from "../components/Tips";
import WhatWeOffer from "../components/WhatWeOffer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <WhatWeOffer />
      {/* Layanan rekomendasi sparepart */}
      <Footer />
    </>
  );
};

export default Home;
