import createNFT from "../utils/constant";

const DescriptionSection = () => {
  return (
    <div className="bg-vulcan-950 w-full pt-10">
      <div className="w-4/5 m-auto">
        <p className="text-vulcan-50 font-Poppins text-2xl font-bold">
          Create You Own NFT
        </p>
        <div className="flex mt-10 flex-wrap w-full justify-between">
          {createNFT.map((item) => (
            <>
              <div className="flex-col w-[350px] p-2 gap-10 hover:bg-vulcan-900 rounded-md transition-all duration-200">
                <div className="w-max p-5 bg-gradient-to-t rounded-full from-violet-600 to-indigo-600">
                    {item.icon}
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="#fff"
                    className="bi bi-wallet2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z" />
                  </svg> */}
                </div>
                <p className="font-Poppins text-vulcan-50 font-bold mt-5">
                  {item.title}
                </p>
                <p className="font-Poppins text-vulcan-50 text-justify mt-5">
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
