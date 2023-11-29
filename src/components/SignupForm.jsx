import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { EyeIcon, EyeSlash } from "../utils/icons";

function SignupForm({ setIsLoggedIn }) {
  const [accountType, setAccountType] = useState("student");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
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
  function submitHanlder(event) {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Password Missmatched");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account Created Succesfully");
    const accountData = {
      ...formData,
    };
    const finalData = {
      ...accountData,
      ...accountType,
    };
    navigate("/dashboard");
    console.log(finalData);
  }
  return (
    <div>
      <div className="flex gap-x-2 bg-vulcan-900 my-6 rounded-full max-w-max p-1">
        <button
          className={`${
            accountType === "student"
              ? "bg-vulcan-950 text-vulcan-50"
              : "bg-transparent text-black"
          } py-2 px-5 rounded-full transition-all duration-200" `}
          onClick={() => setAccountType("student")}
        >
          User
        </button>
        <button
          className={`${
            accountType !== "student"
              ? "bg-vulcan-950 text-vulcan-50"
              : "bg-transparent text-black"
          } py-2 px-5 rounded-full transition-all duration-200" `}
          onClick={() => setAccountType("teacher")}
        >
          Creator
        </button>
      </div>
      <form
        onSubmit={submitHanlder}
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
              name="lastName"
              onChange={changeHandler}
              value={formData.lastName}
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
            type="phoneNumber"
            required
            name="phoneNumber"
            onChange={changeHandler}
            value={formData.phoneNumber}
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
        <button className="border border-violet-600 rounded-full px-5 py-2 text-vulcan-50 font-Poppins hover:bg-gradient-to-r from-violet-600 to-indigo-600 duration-700 transition-all hover:border-vulcan-50 ease-in-out">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
