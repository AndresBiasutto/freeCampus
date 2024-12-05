import LinkBtn from "../../layouts/LinkBtn";
import PropTypes from "prop-types";

const LoginBtn = ({action, btnName, icon, bgColor}) => {
  return (
    <LinkBtn
      btnName={btnName}
      icon={icon}
      bgColor={bgColor}
      bdrColor={"secondary"}
      onCLik={ action}
    />
  );
};

LoginBtn.propTypes={
  action: PropTypes.func,
  btnName: PropTypes.string,
  icon: PropTypes.element,
  bgColor: PropTypes.string
}

export default LoginBtn;
