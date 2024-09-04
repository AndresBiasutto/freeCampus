import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getSubjects } from "../../../redux/actions/subjectActions";
import PropTypes from "prop-types";

const CreateSubjectForm = ({ setOpenModal, id }) => {
  const userId = useSelector((store) => store.auth.id);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    department: "",
    creatorId: userId,
    image: "",
    dateStart: "",
    dateEnd: ""
  });

  const [errors, setErrors] = useState({});
  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.description)
      formErrors.description = "Description is required";
    if (!formData.department) formErrors.department = "Department is required";
    if (!formData.dateStart) formErrors.dateStart = "Date Start is required";
    if (!formData.dateEnd) formErrors.dateEnd = "Date End is required";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      axios
        .post("http://localhost:3001/subjects", formData)
        .then((response) => {
          console.log("Success:", response.data);
          setNotification({
            type: "success",
            message: "Form submitted successfully!",
          });
          dispatch(getSubjects());
          setOpenModal(false); // Cierra el modal
        })
        .catch((error) => {
          console.error("Error:", error);
          setNotification({
            type: "error",
            message: "Failed to submit the form.",
          });
        });
    } else {
      setErrors(formErrors);
      setNotification({
        type: "error",
        message: "Please fix the errors in the form.",
      });
    }
    setTimeout(() => {
      setNotification("");
      setFormData({
        name: "",
        description: "",
        department: "",
        creatorId: id,
        dateStart: "",
        dateEnd: ""
      });
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1 text-light-text dark:text-dark-text">
            Nombre
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
          />
          {errors.name && <p className="text-red-500 h-3">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="description" className="block mb-1 text-light-text dark:text-dark-text">
            Descripción
          </label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
          />
          {errors.description && (
            <p className="text-red-500 h-3">{errors.description}</p>
          )}
        </div>
        <div>
          <label htmlFor="department" className="block mb-1 text-light-text dark:text-dark-text">
            Cohorte
          </label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
          />
          {errors.department && (
            <p className="text-red-500 h-3">{errors.department}</p>
          )}
        </div>
        <div>
          <label htmlFor="image" className="block mb-1 text-light-text dark:text-dark-text">
            Url de la imagen
          </label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
          />
          {errors.image && (
            <p className="text-red-500 h-3">{errors.image}</p>)}
        </div>
        <div className=" w-full flex flex-row justify-center items-center gap-4">
          <div className="w-full" >
            <label
              htmlFor="dateStart"
              className="block mb-1 text-light-text dark:text-dark-text"
            >
              Inicio
            </label>
            <input
              type="date"
              name="dateStart"
              value={formData.dateStart}
              onChange={handleChange}
              className=" bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
            />
            {errors.dateStart && (
              <p className="text-red-500 h-3">{errors.dateStart}</p>
            )}
          </div>
          <div className="w-full" >
            <label
              htmlFor="dateEnd"
              className="block mb-1 text-light-text dark:text-dark-text"
            >
              Final
            </label>
            <input
              type="date"
              name="dateEnd"
              value={formData.dateEnd}
              onChange={handleChange}
              className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
            />
            {errors.dateEnd && (
              <p className="text-red-500 h-3">{errors.dateEnd}</p>
            )}
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="w-full flex flex-row justify-center items-center gap-4 mt-4 px-3 md:px-4 py-1 md:py-2 bg-sky-600 border border-sky-600 text-white rounded-lg hover:bg-sky-700"
      >
        crear 
      </button>
      {notification && (
        <div
          className={`mt-4 text-center py-2 rounded-md ${
            notification.type === "success"
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-600"
          }`}
        >
          {notification.message}
        </div>
      )}
    </form>
  );
};

CreateSubjectForm.propTypes = {
  setOpenModal: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

export default CreateSubjectForm;