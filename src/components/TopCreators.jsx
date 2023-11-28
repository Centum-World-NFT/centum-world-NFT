import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import creatorAV from "../assets/img/creatorAV.jpg";
import ReactStars from "react-rating-stars-component";

const TopCreators = () => {
  const breakpoints = {
    320: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  };
  return (
    <div className="w-full bg-vulcan-950 pt-20 pb-20">
      <div className="w-4/5 m-auto ">
        <div className="flex items-center justify-between">
          <p className="text-vulcan-50 font-Poppins text-2xl font-bold">
            Top Creators
          </p>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="#fff"
              className="bi bi-arrow-left-short"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="#fff"
              className="bi bi-arrow-right-short"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
              />
            </svg>
          </div>
        </div>
        <div className="mt-10">
          <Swiper
            slidesPerView={6}
            freeMode={true}
            autoplay={{
              delay: 1200,
              disableOnInteraction: false,
            }}
            breakpoints={breakpoints}
            modules={[FreeMode, Pagination, Autoplay]}
            className="mySwiper"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
              <>
                <SwiperSlide key={index}>
                  <div className="flex items-start gap-2 w-max">
                    <img src={creatorAV} alt="" className="rounded-3xl" />
                    <div>
                      <p className="font-Poppins text-vulcan-50 font-medium">
                        Jhone Doe
                      </p>
                      <ReactStars
                        count={5}
                        edit={false}
                        size={24}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                      />
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

export default TopCreators;
