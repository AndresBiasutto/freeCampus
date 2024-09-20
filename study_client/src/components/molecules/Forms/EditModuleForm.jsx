import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { updateModule } from "../../../redux/actions/moduleActions";

const EditModuleForm = ({ moduleId, handleToggleModal }) => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });
  useEffect(() => {}, [moduleId]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value !== "" ? value : null,
    });
  };

  
  const handleUpdatedSubject = (e) => {
    e.preventDefault();
    const updateData = {};
    Object.keys(formData).forEach((key) => {
      if (formData[key]) {
        updateData[key] = formData[key];
      }
    });
    if (Object.keys(updateData).length > 0) {
      dispatch(updateModule(moduleId, updateData, token));
    }
    handleToggleModal();
  };
  return (
    <form
      onSubmit={handleUpdatedSubject}
      className=" h-full w-full flex flex-col items-center justify-center rounded-lg gap-1"
    >
      <input
        name="name"
        className=" w-full h-7 rounded-lg"
        type="text"
        placeholder="cambiar nombre"
        value={formData.name || ""}
        onChange={handleChange}
      />
      <input
        name="description"
        className=" w-full h-7 rounded-lg"
        type="text"
        placeholder="cambiar descripción"
        value={formData.description || ""}
        onChange={handleChange}
      />
      <button className="w-full bg-light-blueBtn hover:bg-light-blueBtnHvr dark:bg-dark-blueBtn dark:hover:bg-dark-blueBtnHvr rounded-lg text-light-text dark:text-dark-text">
        listo
      </button>
    </form>
  );
};

EditModuleForm.propTypes = {
  moduleId: PropTypes.string,
  handleToggleModal: PropTypes.func,
};

export default EditModuleForm;
