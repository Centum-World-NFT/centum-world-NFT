import AuctionSection from "../components/AuctionSection";
import BestCourse from "../components/BestCourse";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TopCreators from "../components/TopCreators";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <AuctionSection />
      <TopCreators />
      <BestCourse />
    </>
  );
};

export default HomePage;
