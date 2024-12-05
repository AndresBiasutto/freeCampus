import PropTypes from "prop-types";
import CarouselArrow from '../atoms/CarouselArrow';
import { useEffect, useState } from "react";
import FeaturedCoursesCard from "../molecules/FeaturedCoursesCard";

const FeaturedCoursesOrg = ({ cards }) => {
    const [currentCard, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
  
    const handleNext = () =>{
      setCurrentSlide((prev) => (prev + 1) % cards.length)        
    }
    const handlePrev = () =>
      setCurrentSlide((prev) => (prev - 1 + cards.length) % cards.length);
    // const goToSlide = (index) => setCurrentSlide(index);
  
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
        {cards.map((card, index) => (
          <FeaturedCoursesCard
            key={index}
            card={card}
            isActive={currentCard === index}
          />
        ))}
        <div className="absolute top-1/2 bottom-1/2 left-0 px-1 w-full flex flex-row justify-between items-center">
          <CarouselArrow direction="left" onClick={handlePrev} />
          <CarouselArrow direction="right" onClick={handleNext} />
        </div>
      </div>
    );
}
FeaturedCoursesOrg.propTypes = {
    cards: PropTypes.array,
  };
export default FeaturedCoursesOrg