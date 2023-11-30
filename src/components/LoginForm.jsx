import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { EyeIcon, EyeSlash } from "../utils/icons";
import { signIn } from "../redux/slices/auth";
import { useDispatch } from "react-redux";

const LoginForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ emailorPhone: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  function changeHanlder(event) {
    event.preventDefault();
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  async function singInHandler(event) {
    event.preventDefault();
    try {
      const { ...accountData } = formData;
      const response = await dispatch(signIn(accountData));
      if (response.payload.status) {
        if (response.payload.data.role === "creator") {
          setIsLoggedIn(true);
          toast.success(response.payload.message);
          window.open("https://centum-world-nft-creator.netlify.app/");
        } else if (response.payload.data.role === "user") {
          setIsLoggedIn(true);
          toast.success(response.payload.message);
          navigate("/");
        }
      }
    } catch (error) {
      throw error;
    }
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
            type="emailorPhone"
            required
            value={formData.emailorPhone}
            onChange={changeHanlder}
            placeholder="Enter Email address"
            name="emailorPhone"
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
        <button className="border mt-2 border-violet-600 rounded-full px-5 py-2 text-vulcan-50 font-Poppins hover:bg-gradient-to-r from-violet-600 to-indigo-600 duration-700 transition-all hover:border-vulcan-50 ease-in-out">
          Sign In
        </button>
      </form>
    </>
  );
};

export default LoginForm;
