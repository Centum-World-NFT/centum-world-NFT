import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import cardIMg from "../assets/img/cardItem.jpg";

const AuctionSection = () => {
  return (
    <div className="bg-vulcan-950 w-full pt-10">
      <div className="w-11/12 m-auto">
        <p className="text-vulcan-50 font-Poppins text-2xl font-bold">
          New In Market
        </p>
        <div className="mt-10">
          <Swiper
            slidesPerView={4}
            spaceBetween={100}
            grabCursor={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            centeredSlides={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
              <>
                <SwiperSlide key={index}>
                  <div className="h-96 w-80 bg-vulcan-900 rounded-md p-4 flex-col">
                    <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                      <img src={cardIMg} alt="" className="rounded-md" />
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
                      <p>&ldquo;Hii This is React Basic..</p>
                      <p className="text-violet-600">Python</p>
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
