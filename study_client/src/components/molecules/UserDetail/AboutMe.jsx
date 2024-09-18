import PropTypes from "prop-types";
const AboutMe = ({ name, description }) => {
  return (
    <div>
      <h3 className="text-lg leading-tight font-bold mb-2">Sobre mí:</h3>
      <p className="text-sm leading-tight text-gray-600 mb-4">
        {description ? description : `${name}, contános álgo sobre vós!`}
      </p>
    </div>
  );
};

AboutMe.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
};

export default AboutMe;
