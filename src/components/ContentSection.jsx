const ContentSection = () => {
  return (
    <div className="md:w-2/4 w-full flex items-center relative z-10">
      <div className="h-24 w-24 slide-top absolute rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 -z-10"></div>
      <div className="h-24 w-24 slide-right absolute border rounded-full border-violet-600  right-0"></div>
      <div className="h-16 w-16 slide-right absolute rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 top-0 right-60  -z-10"></div>
      <div className="h-5 w-5 slide-top absolute rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 left-60"></div>
      <div className="h-20 w-20 slide-top absolute border rounded-full border-indigo-600 bottom-0 left-60"></div>
      <div>
        <p className="font-Poppins text-4xl text-vulcan-50 font-extrabold text-right mb-5 z-20">
          Discover, find,
        </p>
        <p className="font-poppins text-5xl font-extrabold text-right text-vulcan-400 mb-5">
          Sell Extraordinary
        </p>
        <p className="font-Poppins text-4xl text-vulcan-50 font-extrabold text-right mt-1">
          Monster NFT
        </p>
        <p className="font-Poppins text-vulcan-50 mt-20 w-full text-right text-xl">
          Marketplace for monster character cllections non fungible token NFTs
        </p>
      </div>
    </div>
  );
};

export default ContentSection;