import Template from "../components/Template";
import loginImg from "../assets/png/login.png";
import bgImg from "../assets/img/bg-img.jpg";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const LoginPage = ({ setIsLoggedIn }) => {
  return (
    <>
      <div className="relative top-0 hidden md:block">
        <img src={bgImg} alt="" />
        <div className="absolute top-1/2 right-1/2 font-Poppins text-vulcan-50 font-extrabold text-5xl text-center">
          Login
          <p className="text-sm font-normal mt-2">
            <NavLink to="/">Home</NavLink> / Login
          </p>
        </div>
      </div>
      <div className="bg-vulcan-950 h-[calc(100vh-64px)] flex items-start">
        <Template
          title="Welcome Back"
          desc1="Build skills for today, tomorrow, and beyond."
          desc2="Education to future-proof your career."
          image={loginImg}
          formType="login"
          setIsLoggedIn={setIsLoggedIn}
        />
      </div>
    </>
  );
};

export default LoginPage;
