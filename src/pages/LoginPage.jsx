import Template from "../components/Template";
import loginImg from "../assets/png/login.png";
import bgImg from "../assets/img/bg-img.jpg";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
const LoginPage = ({ setIsLoggedIn }) => {
  const lightmode = useSelector((state) => state.theme.lightTheme);
  return (
    <>
      <div className="md:block relative">
        <img className="h-28 w-full object-cover" src={bgImg} alt="" />
        <div className="absolute top-3.5 right-[46%] font-Poppins text-vulcan-50 font-extrabold text-5xl text-center">
          <p>Login</p>
          <p className="text-sm font-normal mt-2">
            <NavLink to="/">Home</NavLink> / Login
          </p>
        </div>
      </div>
      <div
        className={`${
          lightmode ? `bg-vulcan-50` : `bg-vulcan-950`
        } h-[calc(100vh-64px)] flex items-start`}
      >
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
