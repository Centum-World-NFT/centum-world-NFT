/* eslint-disable react/prop-types */
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
// import bgImg from "../assets/img/bg-img.jpg";

const Template = ({ title, desc1, desc2, formType, image, setIsLoggedIn }) => {
  return (
    <>
      <div className="flex justify-between items-center gap-x-12 mx-auto py-4 bg-vulcan-950">
        <div className="p-2 md:p-0">
          <div className="w-11/12 max-w-[480px]">
            <p className="bg-gradient-to-r from-violet-600 font-Poppins to-indigo-600 bg-clip-text text-vulcan-0 text-4xl font-bold">
              {title}
            </p>
            <p className="text-black-50 mt-4 font-Poppins font-bold">{desc1}</p>
            <p className="italic text-violet-600 font-Poppins font-semibold ">
              {desc2}
            </p>
          </div>
          {formType === "signup" ? (
            <SignupForm setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <LoginForm setIsLoggedIn={setIsLoggedIn} />
          )}
        </div>
        <div className="hidden md:block">
          <img
            className="hidden md:block"
            src={image}
            alt="student"
            width={558}
            height={450}
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
};

export default Template;
