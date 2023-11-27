import heroImg from "../assets/png/heroImg.png";
import gradient1 from "../assets/png/gradient-1.png";
import gradient2 from "../assets/png/gradient-2.png";
import gradient3 from "../assets/png/gradient-3.png";
import ringImg from "../assets/png/bg-ring.png";
import ContentSection from "./ContentSection";

const Hero = () => {
  return (
    <div className="bg-vulcan-950 relative">
      <img src={gradient1} alt="" className="absolute top-0" />
      <img src={gradient2} alt="" className="absolute left-2/4 bottom-0 hidden lg:block" />
      <img src={gradient3} alt="" className="absolute right-0 " />
      <div className="w-4/5 m-auto flex justify-between p-5">
        <div className="relative w-2/6 justify-center hidden md:flex">
          <img src={heroImg} alt="heroImg" className="z-10 slide-top" />
          <img
            src={ringImg}
            alt="bg-ring-Image"
            className="absolute top-28 h-3/4 slide-top"
          />
        </div>
        <>
            <ContentSection />
        </>
      </div>
    </div>
  );
};

export default Hero;
