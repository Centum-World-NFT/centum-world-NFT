import { useState } from "react";
import { DownArrow, UpArrow, accordionQuestion } from "../utils/constant";
import { useSelector } from "react-redux";

const Accordions = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const lightmode = useSelector((state) => state.theme.lightTheme);

  const handleItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div
      className={`${
        lightmode ? `bg-vulcan-50` : `bg-vulcan-950`
      } py-10 border-t border-vulcan-50 border-opacity-20`}
    >
      <div className="w-4/5 m-auto">
        <div className="flex justify-center">
          <p
            className={`font-Poppins ${
              lightmode ? `text-vulcan-950` : `text-vulcan-50`
            }  text-4xl font-bold`}
          >
            Frequently Asked Questions
          </p>
        </div>
        {accordionQuestion.map((item, index) => (
          <div key={index} className="my-2">
            <div
              className="bg-vulcan-900 md:w-1/2 w-full m-auto p-5 cursor-pointer rounded-3xl transition-all duration-200 flex justify-between items-center"
              onClick={() => handleItemClick(index)}
            >
              <h2 className="text-lg font-semibold font-Poppins text-vulcan-100">
                <span className="bg-vulcan-950 p-2 rounded-md mr-2 font-Poppins">
                  {index + 1}
                </span>
                {item.question}
              </h2>
              {activeIndex === index ? <UpArrow /> : <DownArrow />}
            </div>
            {activeIndex === index && (
              <div className="mt-2">
                <p className="text-vulcan-100 bg-vulcan-600 px-10 py-5 md:w-2/3 w-full m-auto text-justify rounded-3xl transition-all duration-200 font-Poppins font-semibold ">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordions;
