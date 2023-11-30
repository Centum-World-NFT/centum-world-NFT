import { useState } from "react";
import { NavLink } from "react-router-dom";
import { NavMenu } from "../utils/constant";

// eslint-disable-next-line react/prop-types
const Header = ({ isLoggedIn }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggle = () => {
    setShowMenu((prev) => !prev);
  };
  return (
    <>
      {showMenu && (
        <div className="absolute top-16 h-max bg-vulcan-900 right-9 z-20 rounded-md p-4">
          <ul className="text-vulcan-50 flex-col gap-10">
            {NavMenu.map((item) => (
              <>
                <li
                  className="flex items-center justify-between cursor-pointer"
                  key={item.id}
                >
                  {item.title}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </li>
              </>
            ))}
          </ul>
        </div>
      )}
      <div className="w-full h-16 bg-vulcan-950 border-b border-vulcan-50 border-opacity-10">
        <div className="w-4/5 m-auto h-full flex items-center justify-between">
          <p className="text-vulcan-50 font-Poppins font-bold text-2xl">
            Centum NFT
          </p>
          <div className="block md:hidden">
            {showMenu ? (
              <button onClick={handleToggle}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="#fff"
                  className="bi bi-x-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                </svg>
              </button>
            ) : (
              <button onClick={handleToggle}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="#fff"
                  className="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                  />
                </svg>
              </button>
            )}
          </div>
          <div className="text-vulcan-50 font-Poppins font-normal text-xl hidden md:block">
            <ul className="flex gap-10">
              <li className="flex items-center cursor-pointer">
                Home{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </li>
              <li className="flex items-center cursor-pointer">
                Explore{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </li>
              <li className="flex items-center cursor-pointer">
                Community{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </li>
              <li className="flex items-center cursor-pointer">
                Contact{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </li>
            </ul>
          </div>
          <div>
            {!isLoggedIn ? (
              <NavLink to="/login">
                <button className="border hidden md:block bg-vulcan-0 border-violet-600 rounded-full px-5 py-2 text-vulcan-50 font-Poppins hover:bg-gradient-to-r from-violet-600 to-indigo-600 duration-700 transition-all hover:border-vulcan-50 ease-in-out ">
                  Sign In
                </button>
              </NavLink>
            ) : (
              <img src="" alt="" />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
