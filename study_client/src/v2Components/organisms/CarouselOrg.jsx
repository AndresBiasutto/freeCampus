import { useState, useEffect } from "react";
import CarouselSlide from "../molecules/CarouselSlide";
import IndicatorList from "../molecules/CarouselIndicatorList";
import CarouselArrow from "../atoms/CarouselArrow";
import PropTypes from "prop-types";

const CarouselOrg = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  const handlePrev = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index) => setCurrentSlide(index);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => handleNext(), 3000);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPaused]);

  return (
    <div
      className="relative w-full h-96 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {slides.map((slide, index) => (
        <CarouselSlide
          key={index}
          slide={slide}
          isActive={currentSlide === index}
        />
      ))}
      <IndicatorList
        slides={slides}
        currentSlide={currentSlide}
        goToSlide={goToSlide}
      />
        <div className="absolute top-1/2 bottom-1/2 left-0 px-1 w-full flex flex-row justify-between items-center">
        <CarouselArrow direction="left" onClick={handlePrev} />
        <CarouselArrow direction="right" onClick={handleNext} />
      </div>
    </div>
  );
};

CarouselOrg.propTypes = {
  slides: PropTypes.array,
};

export default CarouselOrg;
