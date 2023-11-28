import Accordions from "../components/Accordions";
import AuctionSection from "../components/AuctionSection";
import BestCourse from "../components/BestCourse";
import DescriptionSection from "../components/DescriptionSection";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TopCreators from "../components/TopCreators";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <AuctionSection />
      <DescriptionSection />
      <TopCreators />
      <BestCourse />
      <Accordions />
    </>
  );
};

export default HomePage;
