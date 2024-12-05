import PropTypes from "prop-types";
const RoundedBtn = ({ children, action }) => {
  return (
    <button
      onClick={action}
      className={`group h-14 w-14 md:h-8 md:w-8 p-2 rounded-full flex items-center justify-center bg-light-accent dark:bg-dark-accent text-dark-text dark:text-light-text border-2 border-light-border dark:border-dark-border md:hover:shadow-light md:dark:hover:shadow-dark  transition`}
    >
      {children}
    </button>
  );
};

RoundedBtn.propTypes = {
  children: PropTypes.any,
  action: PropTypes.func,
};

export default RoundedBtn;
