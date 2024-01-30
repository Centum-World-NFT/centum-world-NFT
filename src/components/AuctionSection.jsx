import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import cardIMg from "../assets/img/cardItem.jpg";
import creatorAV from "../assets/img/creatorAV.jpg";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { allPlaylist } from "../redux/slices/fetchPlaylistSlice";

const AuctionSection = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const lightmode = useSelector((state) => state.theme.lightTheme);

  useEffect(()=>{
    const fetchPlaylistData = async () =>{
      try {
        const response = await dispatch(allPlaylist());
        setData(response.payload.playlists)
      } catch (error) {
        
      }
    }
    fetchPlaylistData();
  },[dispatch])
  return (
    <div
      className={`${lightmode ? `bg-vulcan-50` : `bg-vulcan-950`} w-full pt-10`}
    >
      <div className="w-4/5 m-auto">
        <p
          className={`${
            lightmode ? `text-vulcan-950` : `text-vulcan-50`
          } font-Poppins text-2xl font-bold`}
        >
          New In Market
        </p>
        <div className="mt-10">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Autoplay]}
            className="mySwiper"
          >
            {data.map((item , index) => (
              <>
                <SwiperSlide key={index} className="w-80">
                  <div className={`h-max w-full ${lightmode ? `bg-vulcan-400` : `bg-vulcan-900`} rounded-md p-4 flex-col`}>
                    <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                      <img src={item.playlist_thumbnail} alt="" className="rounded-md" />
                      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-violet-600 to-indigo-600 opacity-0 transition duration-300 ease-in-out hover:opacity-70 flex items-center justify-center">
                        <button
                          onClick={() => {}}
                          className="border border-vulcan-950  bg-vulcan-50 text-vulcan-950 rounded-md p-2"
                        >
                          Show More
                        </button>
                      </div>
                    </div>
                    <div className="mt-5 font-Poppins text-vulcan-50 font-bold flex justify-between">
                      <p>{item.playlist_title}</p>
                      
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center w-max gap-2">
                        <img
                          src={item.creatorId.profile_pic? item.creatorId.profile_pic : creatorAV}
                          alt=""
                          className="h-10 w-10 rounded-lg"
                        />
                        <div>
                          <p className="font-Poppins text-xs opacity-50  text-vulcan-50">
                            Creator
                          </p>
                          <a
                            href=""
                            className="font-Poppins text-md font-bold text-vulcan-50 hover:text-vulcan-500 transition-all duration-200"
                          >
                            {item.creatorId.firstName}{" "}{item.creatorId.surName}
                          </a>
                        </div>
                      </div>
                      <div>
                        <p className="font-Poppins text-xs opacity-50 text-vulcan-50">Price</p>
                        <p className="font-Poppins text-md font-bold text-vulcan-50">
                          {item.price}/-
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AuctionSection;
