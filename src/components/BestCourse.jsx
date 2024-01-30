import { useSelector } from "react-redux";
import cardIMg from "../assets/img/cardItem.jpg";
import creatorAV from "../assets/img/creatorAV.jpg";
import { useEffect, useState } from "react";
import { allPlaylist } from "../redux/slices/fetchPlaylistSlice";
import { useDispatch } from "react-redux";

const BestCourse = () => {
  const lightmode = useSelector((state) => state.theme.lightTheme);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  useEffect(()=>{
    const callAllPlaylist = async ()=>{
      try {
        const response = await dispatch(allPlaylist())
        const firstSixPlaylists = response.payload.playlists.slice(0, 6);
        console.log(response.payload.playlists)
        setData(firstSixPlaylists)
      } catch (error) {
        
      }
    }

    callAllPlaylist()
  },[dispatch])
  return (
    <div
      className={`${
        lightmode ? `bg-vulcan-50` : `bg-vulcan-950`
      } w-full pt-10 pb-10`}
    >
      <div className="w-4/5 m-auto">
        <p
          className={`${
            lightmode ? `text-vulcan-950` : `text-vulcan-50`
          } font-Poppins text-2xl font-bold`}
        >
          Top Seller
        </p>
        <div className="w-full flex flex-wrap justify-evenly gap-5 mt-10">
          {data.map((item, index) => (
            <>
              <div
                key={index}
                className={`h-max ${lightmode ? `bg-vulcan-700` : `bg-vulcan-900`} group rounded-md p-4 flex-col ${lightmode ? `hover:bg-vulcan-300` : `hover:bg-vulcan-50`} transition-all duration-200 hover:skew-y-3`}
              >
                <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                  <img src={item.playlist_thumbnail} alt="" className="rounded-md" />
                  <div className="absolute rounded-md bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-violet-600 to-indigo-600 opacity-0 transition duration-300 ease-in-out hover:opacity-70 flex items-center justify-center">
                    <button
                      onClick={() => {}}
                      className="border border-vulcan-950  bg-vulcan-50 text-vulcan-950 rounded-md p-2"
                    >
                      Show More
                    </button>
                  </div>
                </div>
                <div
                  className={`mt-5 font-Poppins ${lightmode ? `text-vulcan-50` : `text-vulcan-50`}  group-hover:text-vulcan-950 font-bold flex justify-between`}
                >
                  <p>{item.playlist_title}</p>
                 
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center w-max gap-2">
                    <img
                      src={item.creatorId.profile_pic}
                      alt=""
                      className="h-10 w-10 rounded-lg"
                    />
                    <div>
                      <p className="font-Poppins text-xs opacity-50 text-vulcan-50">Creator</p>
                      <a
                        href=""
                        className="font-Poppins text-md font-bold text-vulcan-50 transition-all duration-200 group-hover:text-vulcan-950"
                      >
                        {item.creatorId.firstName}{" "}{item.creatorId.surName}
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className="font-Poppins text-xs opacity-50 text-vulcan-50">Price</p>
                    <p className="font-Poppins text-md font-bold text-vulcan-50 group-hover:text-vulcan-950">
                      {item.price}/-
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
