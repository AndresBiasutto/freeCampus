import PropTypes from "prop-types"

const CardBody = ({dateStart, dateEnd, description}) => {
  return (
    <div>
    <div className="flex flex-col justify-center items-end gap-2">
      <p className="text-light-text dark:text-dark-text text-sm">
        <span className="text-gray-800 dark:text-gray-300">
          Inicio:
        </span>{" "}
        {dateStart}{" "}
      </p>
      <p className="text-light-text dark:text-dark-text text-sm">
        <span className="text-gray-800 dark:text-gray-300">
          Final:
        </span>{" "}
        {dateEnd}{" "}
      </p>
    </div>
    <p className="mb-2 text-gray-500 dark:text-gray-400">
      {description}
    </p>
  </div>
  )
}

CardBody.propTypes= {
    dateStart: PropTypes.string,
    dateEnd: PropTypes.string,
    description: PropTypes.string
}

export default CardBody