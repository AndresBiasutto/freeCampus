import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CardChapters = (props) => {
  const {role}= useSelector(state => state.auth)
  const chapter = props.chapter;
  const chapterId = props.chapter.id;
  return (
    <li className="w-full rounded-lg p-1 pl-3 bg-light-primary hover:bg-light-accent dark:bg-dark-secondary dark:hover:bg-dark-accent">
      <Link
        className="text-light-text dark:text-dark-text  text-center"
        to={`/${role}/subjects/module/chapters/${chapterId}`}
      >
        <h3>{chapter.name} </h3>
      </Link>
    </li>
  );
};

CardChapters.propTypes = {
  chapter: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
  }),
};

export default CardChapters;
