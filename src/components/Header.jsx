import { useState } from "react";
import { NavMenu } from "../utils/constant";
import {
  CloseIcon,
  DropDownIcon,
  HamBurgerIcon,
  LightBlub,
  LightBlubFill,
} from "../utils/icons";
import { useDispatch, useSelector } from "react-redux";
import { setLightThemeDark } from "../redux/slices/theme";

// eslint-disable-next-line react/prop-types
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();
  const lightmode = useSelector((state) => state.theme.lightTheme);

  const handleToggle = () => {
    setShowMenu((prev) => !prev);
  };

  const handleModeToggle = () => {
    dispatch(setLightThemeDark());
  };

  return (
    <>
      {showMenu && (
        <div
          className={`absolute top-16 h-max ${
            lightmode ? `bg-vulcan-50` : `bg-vulcan-950`
          }  right-9 z-20 rounded-md p-4`}
        >
          <ul className="text-vulcan-50 flex-col gap-10">
            {NavMenu.map((item) => (
              <>
                <li
                  className="flex items-center justify-between cursor-pointer"
                  key={item.id}
                >
                  {item.title}
                  <DropDownIcon />
                </li>
              </>
            ))}
          </ul>
        </div>
      )}
      <div
        className={`w-full h-16 ${
          lightmode ? `bg-vulcan-50` : `bg-vulcan-950`
        }  border-b ${
          lightmode ? `border-vulcan-950` : `border-vulcan-50`
        } border-opacity-10 transition-all duration-300`}
      >
        <div className="w-4/5 m-auto h-full flex items-center justify-between">
          <p
            className={`${
              lightmode ? `text-vulcan-950` : `text-vulcan-50`
            } font-Poppins font-bold text-2xl`}
          >
            Centumo NFT
          </p>
          <div className="block md:hidden">
            {showMenu ? (
              <button onClick={handleToggle}>
                <HamBurgerIcon />
              </button>
            ) : (
              <button onClick={handleToggle}>
                <CloseIcon />
              </button>
            )}
          </div>
          <div
            className={`${
              lightmode ? `text-vulcan-950` : `text-vulcan-50`
            } font-Poppins font-normal text-xl hidden md:block`}
          >
            <ul className="flex gap-10">
              {NavMenu.map((item) => (
                <>
                  <li
                    className="flex items-center justify-between cursor-pointer"
                    key={item.id}
                  >
                    {item.title}
                    <DropDownIcon />
                  </li>
                </>
              ))}
            </ul>
          </div>
          <button onClick={handleModeToggle}>
            {lightmode ? <LightBlub /> : <LightBlubFill />}
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
