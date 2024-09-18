import PropTypes from "prop-types"

const UserHeader = ({name, email, contactNumber, role}) => {
  return (
    <div className=" w-full mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
    <p className="text-xl leading-tight font-bold">{name}</p>

    <p className="text-sm leading-tight text-gray-600">{email}</p>
    <p className="text-sm leading-tight text-gray-600">
      {contactNumber && contactNumber}
    </p>
    <p>{role} </p>
  </div>
  )
}

UserHeader.propTypes= {
    name: PropTypes.string, 
    email: PropTypes.string,
    contactNumber: PropTypes.string,
    role: PropTypes.string
}

export default UserHeader