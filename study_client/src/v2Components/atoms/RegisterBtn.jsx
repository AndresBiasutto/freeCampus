import LinkBtn from "../../layouts/LinkBtn";
import { IoPersonAddOutline } from "react-icons/io5";

const RegisterBtn = () => {
  return (
    <LinkBtn
      btnName={"Register"}
      icon={<IoPersonAddOutline />}
      bgColor={"accent"}
    />
  );
};

export default RegisterBtn;
