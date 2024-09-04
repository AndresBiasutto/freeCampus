import PropTypes from 'prop-types';

const ModuleHeader = ({ chapterName }) => (
  <h2 className='w-full flex items-center justify-start'>{chapterName}</h2>
);

ModuleHeader.propTypes = {
  chapterName: PropTypes.string
};

export default ModuleHeader;