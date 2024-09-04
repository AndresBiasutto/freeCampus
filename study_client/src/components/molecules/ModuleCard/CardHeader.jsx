import PropTypes from "prop-types"

const CardHeader = ({moduleName}) => {
  return (
    <div className="w-full flex flex-col justify-center items-start ">
    <p className=" scale-75">{moduleName}</p>
  </div>
  )
}

CardHeader.propTypes ={
    moduleName: PropTypes.string
}

export default CardHeader