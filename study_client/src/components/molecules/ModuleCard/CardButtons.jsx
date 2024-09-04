import EditModuleBtn from "../../atoms/ModuleCardAtoms/buttons/EditModuleBtn";
import DeleteModuleBtn from "../../atoms/ModuleCardAtoms/buttons/DeleteModuleBtn";
import PropTypes from "prop-types"

const CardButtons = ({moduleId}) => {
  return (
    <div className="w-auto flex flex-row justify-center items-center gap-2">
    <EditModuleBtn moduleId={moduleId} />
    <DeleteModuleBtn moduleId={moduleId} />
  </div>
  )
}

CardButtons.propTypes={
    moduleId: PropTypes.string
}

export default CardButtons