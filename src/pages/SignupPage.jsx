import Template from "../components/Template";
import SignUp from "../assets/png/signup.png";
import bgImg from "../assets/img/bg-img.jpg";
import { NavLink } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const SignupPage = ({ setIsLoggedIn }) => {
  return (
    <>
       <div className="md:block relative">
        <img className="h-28 w-full object-cover" src={bgImg} alt="" />
        <div className="absolute top-3.5 right-[46%] font-Poppins text-vulcan-50 font-extrabold text-5xl text-center">
          <p>SignUp</p>
          <p className="text-sm font-normal mt-2">
            <NavLink to="/">Home</NavLink> / SignUp
          </p>
        </div>
      </div>
      <div className="bg-vulcan-950 h-[calc(100vh-64px)] flex items-start">
        <Template
          title="Join the millions learning to code with Centumo NFT"
          desc1="Build skills for today, tomorrow, and beyond."
          desc2="Education to future-proof your career."
          image={SignUp}
          formType="signup"
          setIsLoggedIn={setIsLoggedIn}
        />
      </div>
    </>
  );
};

export default SignupPage;
