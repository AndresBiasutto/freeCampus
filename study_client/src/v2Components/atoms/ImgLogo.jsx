import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ImgLogo = ({logo, toLink}) => {
  return (
    <Link to={toLink}>
    <img className="h-10 md:h-8" src={logo} alt="Campus Logo" />
  </Link>
  )
}

ImgLogo.propTypes={
    logo: PropTypes.string,
    toLink: PropTypes.string
}

export default ImgLogo