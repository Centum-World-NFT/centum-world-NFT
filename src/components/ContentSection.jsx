import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
const ContentSection = ({ isLoggedIn }) => {
  const lightmode = useSelector((state) => state.theme.lightTheme);
  return (
    <div className="md:w-2/4 w-full flex items-center relative z-10">
      <div className="h-24 w-24 slide-top absolute rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 -z-10"></div>
      <div className="h-24 w-24 slide-right absolute border rounded-full border-violet-600 -z-10 top-14  right-0"></div>
      <div className="h-16 w-16 slide-right absolute rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 top-0 right-60  -z-10"></div>
      <div className="h-5 w-5 slide-top absolute rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 left-60 -z-30"></div>
      <div className="h-20 w-20 slide-top absolute border rounded-full border-indigo-600 bottom-0 left-60"></div>
      <div>
        <p
          className={`font-Poppins text-4xl ${
            lightmode ? `text-vulcan-950` : `text-vulcan-50`
          } font-extrabold text-right mb-5 z-20`}
        >
          Discover, find,
        </p>
        <p className="font-poppins text-5xl font-extrabold text-right mb-5 text-vulcan-0 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text ">
          Sell Extraordinary
        </p>
        <p
          className={`font-Poppins text-4xl ${
            lightmode ? `text-vulcan-950` : `text-vulcan-50`
          }  font-extrabold text-right mt-1`}
        >
          Monster NFT
        </p>
        <div className="flex justify-end gap-2">
          {!isLoggedIn && (
            <>
              <a href="">
                <button
                  className={`border mt-10 bg-vulcan-0 border-violet-600 rounded-full px-5 py-2 ${
                    lightmode ? `text-vulcan-950` : `text-vulcan-50`
                  } font-Poppins hover:bg-gradient-to-r from-violet-600 to-indigo-600 duration-700 transition-all ${
                    lightmode
                      ? `hover:border-vulcan-950`
                      : `hover:border-vulcan-50`
                  } ease-in-out ${lightmode ? `hover:text-vulcan-50` : ``}`}
                >
                  I&apos;m a User
                </button>
              </a>
              <a href="https://centum-world-nft-creator.netlify.app/">
                <button
                  className={`border mt-10 bg-vulcan-0 border-violet-600 rounded-full px-5 py-2 ${
                    lightmode ? `text-vulcan-950` : `text-vulcan-50`
                  } font-Poppins hover:bg-gradient-to-r from-violet-600 to-indigo-600 duration-700 transition-all ${
                    lightmode
                      ? `hover:border-vulcan-950`
                      : `hover:border-vulcan-50`
                  } ease-in-out ${lightmode ? `hover:text-vulcan-50` : ``}`}
                >
                  I&apos;m a Creator
                </button>
              </a>
            </>
          )}
        </div>
        <p
          className={`font-Poppins ${
            lightmode ? `text-vulcan-950` : `text-vulcan-50`
          }  mt-20 w-full text-right text-xl`}
        >
          Marketplace for monster character cllections non fungible token NFTs
        </p>
      </div>
    </div>
  );
};

export default ContentSection;
