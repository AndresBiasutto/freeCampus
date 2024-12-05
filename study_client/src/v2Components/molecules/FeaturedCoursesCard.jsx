import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
import LinkBtn from "../../layouts/LinkBtn";
import { FaCartPlus } from "react-icons/fa";

const FeaturedCoursesCard = ({ card, isActive }) => {
  return (
    <div
      className={`  flex justify-center items-center gap-1 transition-transform duration-[600ms] ease-in-out ${
        isActive ? "block" : "hidden"
      }`}
    >
      <div className=" w-60 h-96 bg-light-primary dark:bg-dark-primary rounded-tl-lg rounded-br-lg  flex flex-col items-center justify-start gap-1">
        <img
          className="w-full h-32 rounded-tl-lg object-cover"
          src={card.img}
        />
        <h3>{card.title} </h3>
        <div className=" w-full flex flex-row justify-between px-2">
          <span className=" text-light-border dark:text-dark-border text-sm">
            {card.author}{" "}
          </span>
          <div className="flex flex-row items-center justify-between gap-1 text-yellow-300">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <div className="px-2 flex flex-col justify-start items-center gap-1">
          <p>
            {card.description}
          </p>
          <div className="px-2 w-full flex flex-row justify-center items-end ">
            <span className="text-light-border dark:text-dark-border text-2xl ">
              AR$
            </span>
            <p className=" text-3xl">{card.prize} </p>
          </div>
        </div>
        <LinkBtn btnName={"comprar"} icon={<FaCartPlus />} bgColor={"accent"} />
      </div>
    </div>
  );
};
FeaturedCoursesCard.propTypes = {
  card: PropTypes.object,
  isActive: PropTypes.bool,
};
export default FeaturedCoursesCard;
