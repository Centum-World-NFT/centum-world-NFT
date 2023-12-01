import { useSelector } from "react-redux";
import createNFT from "../utils/constant";

const DescriptionSection = () => {
  const lightmode = useSelector((state) => state.theme.lightTheme);
  return (
    <div
      className={`${
        lightmode ? `bg-vulcan-50` : `bg-vulcan-950`
      } w-full pt-10 transition-all duration-300`}
    >
      <div className="w-4/5 m-auto">
        <p
          className={`${
            lightmode ? `text-vulcan-950` : `text-vulcan-50`
          } font-Poppins text-2xl font-bold`}
        >
          Create You Own NFT
        </p>
        <div className="flex mt-10 flex-wrap w-full justify-between">
          {createNFT.map((item) => (
            <>
              <div
                className={`flex-col w-[350px] p-2 gap-10  ${
                  lightmode ? `hover:bg-vulcan-600` : `hover:bg-vulcan-900`
                } rounded-md transition-all duration-200`}
              >
                <div className="w-max p-5 bg-gradient-to-t rounded-full from-violet-600 to-indigo-600 flip-2-ver-right-1">
                  {item.icon}
                </div>
                <p
                  className={`font-Poppins ${
                    lightmode ? `text-vulcan-950` : `text-vulcan-50`
                  } font-bold mt-5`}
                >
                  {item.title}
                </p>
                <p
                  className={`font-Poppins ${
                    lightmode ? `text-vulcan-950` : `text-vulcan-50`
                  }  text-justify mt-5`}
                >
                  {item.description}
                </p>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DescriptionSection;
