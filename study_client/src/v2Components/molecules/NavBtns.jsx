import LoginBtn from '../atoms/LoginBtn'
import DarkModeBtn from '../atoms/DarkModeBtn'
import PropTypes from 'prop-types'

const NavBtns = ({navRef, show, action, btnName, icon, bgColor}) => {
  return (
    <nav
    ref={navRef}
    className={`w-full md:w-auto absolute top-14 ${
      show ? "right-0" : "right-full"
    } transition-all p-2 md:p-0 right-0 md:static flex flex-col md:flex-row justify-end items-end md:items-center gap-2 bg-light-primary dark:bg-dark-primary`}
  >
    <LoginBtn action={action} btnName={btnName} icon={icon} bgColor={bgColor} />
    <DarkModeBtn />
  </nav>
  )
}

NavBtns.propTypes={
    navRef: PropTypes.object,
    show: PropTypes.bool,
    action: PropTypes.func,
    btnName: PropTypes.string,
    bgColor: PropTypes.string,
    icon: PropTypes.element
}


export default NavBtns