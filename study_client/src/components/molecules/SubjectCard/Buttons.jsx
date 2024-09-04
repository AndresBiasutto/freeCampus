import PropTypes from "prop-types"
import EditSubjectBtn from "../../atoms/SubjectCardAtoms/buttons/EditSubjectBtn";
import DeleteSubjectBtn from "../../atoms/SubjectCardAtoms/buttons/DeleteSubjectBtn"

const Buttons = ({subjectId}) => {
  return (
    <div className=" absolute h-28 pt-2 flex flex-col justify-start items-center gap-2 transition-all -right-10 group-hover:right-0 top-0  pr-2">
    <EditSubjectBtn subjectId={subjectId} />
    <DeleteSubjectBtn subjectId={subjectId} />
  </div>
  )
}

Buttons.propTypes={
    subjectId: PropTypes.string
}

export default Buttons