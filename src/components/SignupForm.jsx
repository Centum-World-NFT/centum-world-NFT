import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { EyeIcon, EyeSlash } from "../utils/icons";
import { signUp } from "../redux/slices/auth";
import { useDispatch } from "react-redux";

function SignupForm({ setIsLoggedIn }) {
  const [accountType, setAccountType] = useState("user");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: "",
    surName: "",
    email: "",
    password: "",
    phone: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);

  function changeHandler(event) {
    event.preventDefault();
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  async function submitHandler(event) {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Password Mismatched");
      return;
    }

    try {
      const { confirmPassword, ...accountData } = formData;
      accountData.role = accountType;
      const response = await dispatch(signUp(accountData));
      if (response.payload.status === true) {
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
      throw error
    }
  }

  return (
    <div>
      <div className="flex gap-x-2 bg-vulcan-900 my-6 rounded-full max-w-max p-1">
        <button
          className={`${
            accountType === "user"
              ? "bg-vulcan-950 text-vulcan-50"
              : "bg-transparent text-black"
          } py-2 px-5 rounded-full transition-all duration-200" `}
          onClick={() => setAccountType("user")}
        >
          User
        </button>
        <button
          className={`${
            accountType !== "user"
              ? "bg-vulcan-950 text-vulcan-50"
              : "bg-transparent text-black"
          } py-2 px-5 rounded-full transition-all duration-200" `}
          onClick={() => setAccountType("creator")}
        >
          Creator
        </button>
      </div>
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-y-2 mt-[20px]"
      >
        <div className="flex gap-x-5">
          <label>
            <p className=" text-vulcan-50 mb-1">
              First Name<sup className="text-[#EF476F]">*</sup>
            </p>
            <input
              className="bg-richblack-700 flex items-center w-[100%] px-[12px] py-[8px] rounded-md placeholder:text-sm text-white focus:outline-none border-b-richblack-100 border-b-2"
              type="text"
              required
              name="firstName"
              onChange={changeHandler}
              value={formData.firstName}
              placeholder="First Name"
            />
          </label>

          <label>
            <p className=" text-vulcan-50 mb-1">
              Last Name<sup className="text-[#EF476F]">*</sup>
            </p>
            <input
              className="bg-richblack-700 flex items-center w-[100%] px-[12px] py-[8px] rounded-md placeholder:text-sm text-white focus:outline-none border-b-richblack-100 border-b-2"
              type="text"
              required
              name="surName"
              onChange={changeHandler}
              value={formData.surName}
              placeholder="Last Name"
            />
          </label>
        </div>

        <label>
          <p className=" text-vulcan-50 mt-1 mb-1">
            Email adddress<sup className="text-[#EF476F]">*</sup>
          </p>
          <input
            className="bg-richblack-700 flex items-center px-[12px] py-[8px] w-[100%] rounded-md placeholder:text-sm text-white focus:outline-none border-b-richblack-100 border-b-2"
            type="email"
            required
            name="email"
            onChange={changeHandler}
            value={formData.email}
            placeholder="Email address"
          />
        </label>
        <label>
          <p className=" text-vulcan-50 mt-1 mb-1">
            Phone No<sup className="text-[#EF476F]">*</sup>
          </p>
          <input
            className="bg-richblack-700 flex items-center px-[12px] py-[8px] w-[100%] rounded-md placeholder:text-sm text-white focus:outline-none border-b-richblack-100 border-b-2"
            type="phone"
            required
            name="phone"
            onChange={changeHandler}
            value={formData.phone}
            placeholder="Enter phone number"
          />
        </label>
        <div className="flex gap-x-5">
          <label className=" w-full relative">
            <p className=" text-vulcan-50 mb-1">
              Password<sup className="text-[#EF476F]">*</sup>
            </p>
            <input
              className="bg-richblack-700 flex items-center w-[100%] px-[12px] py-[8px] rounded-md placeholder:text-sm text-white focus:outline-none border-b-richblack-100 border-b-2 mt-1"
              type={showPassword ? "text" : "password"}
              required
              name="password"
              onChange={changeHandler}
              value={formData.password}
              placeholder="Password"
            />
            <span
              className="absolute right-[10px] top-[40px] cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <EyeSlash className="text-white" />
              ) : (
                <EyeIcon className="text-white" />
              )}
            </span>
          </label>

          <label className=" w-full relative">
            <p className=" text-vulcan-50 mb-1">
              Confirm Password<sup className="text-[#EF476F]">*</sup>
            </p>
            <input
              className="bg-richblack-700 flex items-center w-[100%] px-[12px] py-[8px] rounded-md placeholder:text-sm text-white focus:outline-none border-b-richblack-100 border-b-2 mt-1"
              type={showPassword1 ? "text" : "password"}
              required
              name="confirmPassword"
              onChange={changeHandler}
              value={formData.confirmPassword}
              placeholder="Confirm Password"
            />
            <span
              className="absolute right-[10px] top-[40px] cursor-pointer"
              onClick={() => setShowPassword1((prev) => !prev)}
            >
              {showPassword1 ? (
                <EyeSlash className="text-white" />
              ) : (
                <EyeIcon className="text-white" />
              )}
            </span>
          </label>
        </div>
        <button className="border mt-2 border-violet-600 rounded-full px-5 py-2 text-vulcan-50 font-Poppins hover:bg-gradient-to-r from-violet-600 to-indigo-600 duration-700 transition-all hover:border-vulcan-50 ease-in-out">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
