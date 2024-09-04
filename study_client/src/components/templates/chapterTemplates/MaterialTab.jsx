import PropTypes from "prop-types";
import FileCard from "../../molecules/ChapterMolecules/FileCard/FileCardIndex";
import UploadFile from "../../molecules/ChapterMolecules/UploadFile";
import Spinner from "../../atoms/CommonAtoms/Spinner";
import { useSelector } from "react-redux";
import isTeacher from "../../../Libs/isTeacher";
import ModuleHeader from "./ModuleHeader";

const MaterialTab = ({ chapterFiles, chapterId, chapterName }) => {
  const { role } = useSelector((state) => state.auth);
  return (
    <div className="p-4 mb-4 w-full h-auto flex flex-col items-center justify-center bg-light-background dark:bg-dark-background">
      {isTeacher(role) && (
        <div className="w-full flex flex-row justify-between items-center">
          <ModuleHeader chapterName={chapterName} />
          <UploadFile chapterId={chapterId} />
        </div>
      )}
      <div className="w-full grid sm:grid-cols-2 md:grid-cols-4 grid-cols-1 gap-2">
        {chapterFiles ? (
          chapterFiles.map((file) => <FileCard key={file.id} file={file} />)
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

MaterialTab.propTypes = {
  chapterFiles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  chapterId: PropTypes.string.isRequired,
  chapterName: PropTypes.string,
};

export default MaterialTab;
