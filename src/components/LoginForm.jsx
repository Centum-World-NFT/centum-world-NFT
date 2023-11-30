import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { EyeIcon, EyeSlash } from "../utils/icons";

// eslint-disable-next-line react/prop-types
const LoginForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  function changeHanlder(event) {
    event.preventDefault();
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  function singInHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/dashboard");
  }
  return (
    <>
      <form
        onSubmit={singInHandler}
        className="flex flex-col w-full gap-y-4 mt-4"
      >
        <label className="w-full ">
          <p className="text-vulcan-50 mb-1">
            Email address<sup className="text-[#ef476f]">*</sup>
          </p>
          <input
            className="bg-richblack-700 flex items-center px-[12px] py-[8px] w-full rounded-md placeholder:text-sm text-white focus:outline-none border-b-richblack-100 border-b-2"
            type="email"
            required
            value={formData.email}
            onChange={changeHanlder}
            placeholder="Enter Email address"
            name="email"
          />
        </label>

        <label className="w-full relative">
          <p className="text-vulcan-50 mb-1">
            Password<sup className="text-[#ef476f]">*</sup>
          </p>
          <input
            className="bg-richblack-700 flex items-center px-[12px] py-[8px] w-full rounded-md placeholder:text-sm text-white focus:outline-none border-b-richblack-100 border-b-2"
            type={showPassword ? "text" : "password"}
            required
            value={formData.password}
            onChange={changeHanlder}
            placeholder="Enter Password"
            name="password"
          />
          <span
            className="absolute right-3 top-[40px] cursor-pointer"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? (
              <EyeSlash className="text-white" />
            ) : (
              <EyeIcon className="text-white" />
            )}
          </span>
        </label>
        <button className="border  border-violet-600 font-Poppins text-vulcan-50 font-bold px-[12px] py-[8px] rounded-md mb-4 hover:bg-gradient-to-tr from-violet-600 hover:to-indigo-600 transition-all duration-700 ease-in-out hover:border-vulcan-50">
          Sign In
        </button>
      </form>
    </>
  );
};

export default LoginForm;