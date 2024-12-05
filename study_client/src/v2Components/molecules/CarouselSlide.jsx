import CarouselContent from "../atoms/CarouselContent";
import PropTypes from "prop-types";

const CarouselSlide = ({ slide, isActive }) => (
  <div
    className={` w-full h-full grid grid-cols-2 gap-1 transition-transform duration-[600ms] ease-in-out ${
      isActive ? "block" : "hidden"
    }`}
  >
    <div className="w-full h-full">
      <img
        src={slide.src}
        className=" h-full w-full object-cover"
        alt={slide.label}
      />
    </div>
    <div className="w-full h-full">
      <CarouselContent label={slide.label} description={slide.description} />
    </div>
  </div>
);
CarouselSlide.propTypes = {
  slide: PropTypes.shape({
    src: PropTypes.string,
    label: PropTypes.string,
    description: PropTypes.string,
  }),
  isActive: PropTypes.bool,
};
export default CarouselSlide;

{
  /* <div
            key={index}
            className={` w-full h-full grid grid-cols-2 gap-1 transition-transform duration-[600ms] ease-in-out ${
              currentSlide === index ? "block" : "hidden"
            }`}
          >
            <div className="w-full h-full">
              <img
                src={slide.src}
                className=" h-full w-full object-cover"
                alt={slide.label}
              />
            </div>
            <div className="w-full h-full">
              <div className=" inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                <h5 className="text-xl">{slide.label}</h5>
                <p>{slide.description}</p>
              </div>
            </div>
          </div> */
}
