/* eslint-disable react/prop-types */
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const Template = ({ title, desc1, desc2, formType, image, setIsLoggedIn }) => {
  console.log(title, desc1, desc2, formType);
  return (
    <>
      <div className="flex justify-between mx-auto py-4 gap-x-12 bg-vulcan-950">
        <div className="w-11/12 max-w-[480px] mx-auto">
          <div className="w-11/12 max-w-[480px]">
            <h1 className="bg-gradient-to-r from-violet-600 font-Poppins to-indigo-600 bg-clip-text text-vulcan-0 text-3xl font-bold ">{title}</h1>
            <p className="text-black-50 mt-4 font-Poppins font-bold">{desc1}</p>
            <p className="italic text-blue-400 text-black-50">{desc2}</p>
          </div>
          {formType === "signup" ? (
            <SignupForm setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <LoginForm setIsLoggedIn={setIsLoggedIn} />
          )}
          <div className="flex w-full items-center">
            <div className="h-[1px] w-[50%] bg-richblack-700"></div>
            <p className="text-richblack-700">OR</p>
            <div className="h-[1px] w-[50%] bg-richblack-700"></div>
          </div>
        </div>
        <div className="relative w-11/12 max-w-[480px] hidden md:block">
          <img src="" alt="pattern" width={558} height={504} loading="lazy" />
          <img
            className="absolute -top-4 right-4 hidden md:block"
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
