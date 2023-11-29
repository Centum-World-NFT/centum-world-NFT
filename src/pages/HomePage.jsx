import Accordions from "../components/Accordions";
import AuctionSection from "../components/AuctionSection";
import BestCourse from "../components/BestCourse";
import DescriptionSection from "../components/DescriptionSection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import TopCreators from "../components/TopCreators";

const HomePage = () => {
  return (
    <>
      <Hero />
      <AuctionSection />
      <DescriptionSection />
      <TopCreators />
      <BestCourse />
      <Accordions />
      <Footer />
    </>
  );
};

export default HomePage;
