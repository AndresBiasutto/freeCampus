import PropTypes from 'prop-types';
import FileCard from '../../../components/FileCard';
import UploadFile from '../../../components/UploadFile';

const MaterialTab = ({ moduleFiles, moduleId, role }) => (
  <div className="bg-sky-800 rounded pt-4">
    {role === "teacher" && <UploadFile moduleId={moduleId} />}
    <div>
      {moduleFiles.map((file) => (
        <FileCard key={file.id} file={file} />
      ))}
    </div>
  </div>
);

MaterialTab.propTypes = {
  moduleFiles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  moduleId: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

export default MaterialTab;