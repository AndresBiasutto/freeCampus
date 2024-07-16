import PropTypes from 'prop-types';

const ModuleHeader = ({ module }) => (
  <h2>{module.name}</h2>
);

ModuleHeader.propTypes = {
  module: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

export default ModuleHeader;