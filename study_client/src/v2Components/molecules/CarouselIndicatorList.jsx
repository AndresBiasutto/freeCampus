import PropTypes from "prop-types";
import CarouselButton from "../atoms/CarouselButton";

const CarouselIndicatorList = ({ slides, currentSlide, goToSlide }) => (
  <div className="absolute bottom-0 left-0 right-0 mx-auto flex justify-center p-0">
    {slides.map((_, index) => (
      <CarouselButton
        key={index}
        onClick={() => goToSlide(index)}
        isActive={currentSlide === index}
        label={`Slide ${index + 1}`}
      />
    ))}
  </div>
);
CarouselIndicatorList.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      label: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  currentSlide: PropTypes.number,
  goToSlide: PropTypes.func,
};
export default CarouselIndicatorList;
