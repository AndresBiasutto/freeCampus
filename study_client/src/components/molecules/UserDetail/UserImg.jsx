import { FaUser } from "react-icons/fa";
import PropTypes from "prop-types";

const UserImg = ({ image, name }) => {
  return (
    <div className=" w-auto flex items-start justify-start">
      {image ? (
        <img
          className=" min-w-20 w-20 h-20 flex justify-center items-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600"
          src={image}
          alt={name}
        />
      ) : (
        <div className="relative min-w-20 w-20 h-20 flex justify-center items-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <FaUser className=" text-5xl " />
        </div>
      )}
    </div>
  );
};

UserImg.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
};

export default UserImg;
