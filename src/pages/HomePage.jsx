import Accordions from "../components/Accordions";
import AuctionSection from "../components/AuctionSection";
import BestCourse from "../components/BestCourse";
import DescriptionSection from "../components/DescriptionSection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import TopCreators from "../components/TopCreators";

// eslint-disable-next-line react/prop-types
const HomePage = ({isLoggedIn}) => {
  return (
    <>
      <Hero isLoggedIn={isLoggedIn}/>
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
