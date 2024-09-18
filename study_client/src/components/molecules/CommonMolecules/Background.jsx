import PropTypes from "prop-types";

const Background = ({ children }) => {
  return (
    <section className=" pt-14 w-full h-full flex flex-col justify-center items-center">
      {children}
    </section>
  );
};
Background.propTypes = {
  children: PropTypes.node,
};
export default Background;
