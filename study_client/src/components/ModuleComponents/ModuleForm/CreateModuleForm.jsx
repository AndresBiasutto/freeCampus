import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addModule } from "../../../redux/actions/moduleActions";
import { LuBookPlus } from "react-icons/lu";

const CreateModuleForm = (props) => {
  // eslint-disable-next-line react/prop-types
  const id = props.id;
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    dateStart: "",
    dateEnd: "",
    subjectId: id,
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
    console.log(formData);
  }, [formData]);

  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.description)
      formErrors.description = "Description is required";
    return formErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      dispatch(addModule(formData))
        .then(() => {
          setNotification({
            type: "success",
            message: "Form submitted successfully!",
          });
          setFormData({
            name: "",
            description: "",
            subjectId: id,
            dateStart: "",
            dateEnd:""
          });
        })
        .catch(() => {
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
      setNotification(null);
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className=" w-full">
      <div className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block mb-1 text-light-text dark:text-dark-text"
          >
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
          <label
            htmlFor="description"
            className="block mb-1 text-light-text dark:text-dark-text"
          >
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
        className=" w-full flex  flex-row justify-center items-center gap-4 mt-4 px-3 md:px-4 py-1 md:py-2 bg-sky-600 border border-sky-600 text-white rounded-lg hover:bg-sky-700"
      >
        crear <LuBookPlus />
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

export default CreateModuleForm;
