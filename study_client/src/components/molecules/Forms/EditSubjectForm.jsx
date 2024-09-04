import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { updateSubject } from "../../../redux/actions/subjectActions";
import PropTypes from "prop-types"

const EditSubjectForm = ({subjectId, handleToggleModal, showModal}) => {
    const [formData, setFormData] = useState({
      name: "",
      description: "",
      department: "",
      image: ""
    });
    const dispatch = useDispatch();
  
    useEffect(() => {}, [subjectId]);
  
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value !== "" ? value : null
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
        dispatch(updateSubject(subjectId, updateData));
      }
      handleToggleModal(!showModal);
    };
  return (
    <form
          onSubmit={handleUpdatedSubject}
          className="h-full w-full flex flex-col items-center justify-center rounded-lg gap-1"
        >
          <input
            name="name"
            className="h-7 w-full rounded-lg"
            type="text"
            placeholder="cambiar nombre"
            value={formData.name || ""}
            onChange={handleChange}
          />
          <input
            name="description"
            className="h-7 w-full rounded-lg"
            type="text"
            placeholder="cambiar descripción"
            value={formData.description || ""}
            onChange={handleChange}
          />
          <input
            name="department"
            className="h-7 w-full rounded-lg"
            type="text"
            placeholder="cambiar tema"
            value={formData.department || ""}
            onChange={handleChange}
          />
          <input
            name="image"
            className="h-7 w-full rounded-lg"
            type="text"
            placeholder="cambiar imagen"
            value={formData.image || ""}
            onChange={handleChange}
          />
          <button className="w-full bg-light-blueBtn hover:bg-light-blueBtnHvr dark:bg-dark-blueBtn dark:hover:bg-dark-blueBtnHvr rounded-lg text-light-text dark:text-dark-text">
            listo
          </button>
        </form>
  )
}
EditSubjectForm.propTypes={
    subjectId: PropTypes.string,
    handleToggleModal: PropTypes.func,
    showModal: PropTypes.bool
}
export default EditSubjectForm