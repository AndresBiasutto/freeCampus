import PropTypes from 'prop-types';
import FileCard from '../../../components/FileCard';
import UploadFile from '../../../components/UploadFile';
import Spinner from '../../SistemComponents/Spinner';
import { useSelector } from 'react-redux';

const MaterialTab = ({ chapterFiles, chapterId }) => {
  const {role}= useSelector(state=> state.auth)
  return (
  <div className="p-4 mb-4 w-full h-auto flex flex-col items-center justify-center bg-light-background dark:bg-dark-background">
    {role === "teacher" && <UploadFile chapterId={chapterId} />}
    <div className=" grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-2">
      { chapterFiles? chapterFiles.map((file) => (
        <FileCard key={file.id} file={file} />
      )): <Spinner />}
    </div>
  </div>
)};

MaterialTab.propTypes = {
  chapterFiles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  chapterId: PropTypes.string.isRequired,
};

export default MaterialTab;
