import cardIMg from "../assets/img/cardItem.jpg";
import creatorAV from "../assets/img/creatorAV.jpg";

const BestCourse = () => {
  return (
    <div className="bg-vulcan-950 w-full pt-10 pb-10">
      <div className="w-4/5 m-auto">
        <p className="text-vulcan-50 font-Poppins text-2xl font-bold">
          Top Seller
        </p>
        <div className="w-full flex flex-wrap justify-evenly gap-5 mt-10">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <>
              <div
                key={index}
                className="h-max bg-vulcan-900 rounded-md p-4 flex-col hover:bg-vulcan-50 transition-all duration-200 hover:skew-y-3"
              >
                <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                  <img src={cardIMg} alt="" className="rounded-md" />
                  <div className="absolute rounded-md bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-violet-600 to-indigo-600 opacity-0 transition duration-300 ease-in-out hover:opacity-70 flex items-center justify-center">
                    <button
                      onClick={() => {}}
                      className="border border-vulcan-950  bg-vulcan-50 text-vulcan-950 rounded-md p-2"
                    >
                      Show More
                    </button>
                  </div>
                </div>
                <div className="mt-5 font-Poppins text-vulcan-950 font-bold flex justify-between">
                  <p>&ldquo;Hii This is React Basic..</p>
                  <p className="text-violet-600">Python</p>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center w-max gap-2">
                    <img
                      src={creatorAV}
                      alt=""
                      className="h-10 w-10 rounded-lg"
                    />
                    <div>
                      <p className="font-Poppins text-xs opacity-50">Creator</p>
                      <a
                        href=""
                        className="font-Poppins text-md font-bold text-vulcan-950 transition-all duration-200"
                      >
                        Jhon Doe
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className="font-Poppins text-xs opacity-50">Price</p>
                    <p className="font-Poppins text-md font-bold text-vulcan-950">
                      4999/-
                    </p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestCourse;
