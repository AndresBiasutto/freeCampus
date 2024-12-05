import PropTypes from "prop-types";
import { IoLibraryOutline } from "react-icons/io5";
import LinkBtn from "../../layouts/LinkBtn";

const ListCoursesBtn = () => (
    <LinkBtn
      btnName={"Ver todos los cursos"}
      icon={<IoLibraryOutline />}
      bgColor={"accent"}
      bdrColor={"secondary"}
    />
);

ListCoursesBtn.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  isActive: PropTypes.bool,
};
export default ListCoursesBtn;