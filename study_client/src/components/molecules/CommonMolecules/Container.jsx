import PropTypes from "prop-types"

const Container = ({ children }) => {
  return (
    <div className=" p-4 mt-4 mb-4 rounded-lg w-full md:w-3/5 bg-light-background dark:bg-dark-background flex flex-col items-center justify-start">
        {children}
    </div>
  );
};

Container.propTypes={
    children: PropTypes.node
}

export default Container;
