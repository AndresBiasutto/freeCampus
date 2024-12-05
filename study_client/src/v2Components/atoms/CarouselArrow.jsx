import PropTypes from "prop-types";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import RoundedBtn from "../../layouts/RoundedBtn";

const CarouselArrow = ({ direction, onClick }) => (
    <RoundedBtn action={onClick}>
    <span className=" h-8 w-8 flex justify-center items-center text-light-text dark:text-dark-text">
      {direction === "left" ? (
        <SlArrowLeft className=" " />
      ) : (
        <SlArrowRight className=" " />
      )}
    </span>
    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
      {direction}
    </span>
    </RoundedBtn>



);
CarouselArrow.propTypes = {
  onClick: PropTypes.func,
  direction: PropTypes.string,
};
export default CarouselArrow;
