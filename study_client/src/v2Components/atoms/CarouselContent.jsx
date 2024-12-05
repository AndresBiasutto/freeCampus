import PropTypes from "prop-types";

const CarouselContent = ({ label, description }) => (
  <div className=" inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
    <h5 className="text-xl">{label}</h5>
    <p>{description}</p>
  </div>
);
CarouselContent.propTypes = {
  label: PropTypes.string,
  description: PropTypes.string,
};
export default CarouselContent;
