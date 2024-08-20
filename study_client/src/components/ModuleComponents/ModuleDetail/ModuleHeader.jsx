import PropTypes from 'prop-types';

const ModuleHeader = ({ chapter }) => (
  <h2>{chapter.name}</h2>
);

ModuleHeader.propTypes = {
  chapter: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

export default ModuleHeader;