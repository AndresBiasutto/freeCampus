import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getSubjects } from "../../redux/actions/subjectActions";
import PropTypes from "prop-types";

const SubjectForm = ({ turnModal, setTurnModal }) => {
  const { id } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    department: "",
    creatorId: id,
    image: "",
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

  useEffect(() => {
    setTurnModal(turnModal);
  }, [turnModal, setTurnModal]);

  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.description)
      formErrors.description = "Description is required";
    if (!formData.department) formErrors.department = "Department is required";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      axios
        .post("http://localhost:3001/subjects", formData) // post para local
        //.post("https://freecampus-back.onrender.com/subjects", formData)      //post para remoto
        .then((response) => {
          console.log("Success:", response.data);
          setNotification({
            type: "success",
            message: "Form submitted successfully!",
          });
          dispatch(getSubjects());
          setTurnModal(false);
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
      });
    }, 1000);
  };

  return (
    <div
      className={` h-full w-full`}
    >
      <form
        onSubmit={handleSubmit}
        className=" z-40 absolute top-14 left-4 h-auto flex flex-col items-center justify-center rounded-lg gap-1"
      >
        <div className="space-y-2">
          <div>
            <input
              placeholder="Nombre de la materia."
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="h-7 rounded-lg"
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>
          <div>
            <input
              placeholder="breve descripción de la materia"
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="h-7 rounded-lg"
            />
            {errors.description && (
              <p className="text-red-500">{errors.description}</p>
            )}
          </div>
          <div>
            <input
              placeholder="Ej: Ciencias Naturales."
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="h-7 rounded-lg"
            />
            {errors.department && (
              <p className="text-red-500">{errors.department}</p>
            )}
          </div>

          <div>
            <input
              placeholder="http://imageUrl.jpg/png/etc"
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="h-7 rounded-lg"
            />
            {errors.image && <p className="text-red-500">{errors.image}</p>}
          </div>
        </div>
        <button
          type="submit"
          className="w-full flex flex-row justify-center items-center border gap-4 border-dark-blueBtn hover:border-dark-blueBtnHvr bg-light-blueBtn hover:bg-light-blueBtnHvr dark:bg-dark-blueBtn dark:hover:bg-dark-blueBtnHvr rounded-lg text-light-text dark:text-dark-text">
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
    </div>
  );
};

SubjectForm.propTypes = {
  turnModal: PropTypes.bool.isRequired,
  setTurnModal: PropTypes.func.isRequired,
};

export default SubjectForm;
