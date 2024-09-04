import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { GrChapterAdd } from "react-icons/gr";
import { addChapter } from "../../../redux/actions/moduleActions";
import PropTypes from "prop-types"

const CreateChapterForm = ({handleToggleModal, id}) => {

  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    chapter: {
      name: "",
      description: ""
    },
    moduleId: id
  });

  const [errors, setErrors] = useState({});
  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      chapter: {
        ...prevFormData.chapter,
        [name]: value
      }
    }));
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const validate = () => {
    let formErrors = {};
    if (!formData.chapter.name) formErrors.name = "Name is required";
    if (!formData.chapter.description)
      formErrors.description = "Description is required";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      console.log(formData);

      dispatch(addChapter(formData))
        .then(() => {
          setNotification({
            type: "success",
            message: "Form submitted successfully!"
          });
          setFormData({
            chapter: {
              name: "",
              description: ""
            },
            moduleId: id
          });

        })
        .catch(() => {
          setNotification({
            type: "error",
            message: "Failed to submit the form."
          });
        });
    } else {
      setErrors(formErrors);
      setNotification({
        type: "error",
        message: "Please fix the errors in the form."
      });
    }
    setTimeout(() => {
      setNotification(null);
      handleToggleModal()
    }, 2000);
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
            value={formData.chapter.name}
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
            value={formData.chapter.description}
            onChange={handleChange}
            className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
          />
          {errors.description && (
            <p className="text-red-500 h-3">{errors.description}</p>
          )}
        </div>
      </div>
      <button
        type="submit"
        className="w-full flex flex-row justify-center items-center gap-4 mt-4 px-3 md:px-4 py-1 md:py-2 bg-sky-600 border border-sky-600 text-white rounded-lg hover:bg-sky-700"
      >
        crear <GrChapterAdd />
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

CreateChapterForm.propTypes={
    handleToggleModal: PropTypes.func,
    id: PropTypes.string
}

export default CreateChapterForm;
