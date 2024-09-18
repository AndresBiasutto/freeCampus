import PropTypes from "prop-types"

const SubjectImage = ({image}) => {
  return (
    <img
    className=" h-24 w-24 object-cover rounded-l-md group-hover:scale-105 transition"
    src={image}
  />
  )
}

SubjectImage.propTypes = {
    image: PropTypes.string.isRequired,
  };

export default SubjectImage