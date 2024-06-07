import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getSubjects } from "../redux/actions/subjectActions";
import { GrCertificate } from "react-icons/gr";

const SubjectForm = () => {
  const { id } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    department: "",
    creatorId: id,
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
    if (!formData.department) formErrors.department = "Department is required";
    return formErrors;
  };

  const handleSubmit = (e) => {
    console.log(formData);
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      console.log("Sending data:", formData); // Imprimir los datos antes de enviarlos
      axios
        .post("http://localhost:3001/subjects", formData)
        .then((response) => {
          console.log("Success:", response.data);
          setNotification({
            type: "success",
            message: "Form submitted successfully!",
          });
          dispatch(getSubjects());
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
    }, 2000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-sky-700 px-10 py-8 rounded-xl shadow-md max-w-sm w-full"
    >
      <div className="space-y-4">
        <h1 className="text-center text-2xl font-semibold text-gray-100">
          Agregar materia
        </h1>
        <div>
          <label
            htmlFor="name"
            className="block mb-1 text-gray-50 font-semibold"
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
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>
        <div>
          <label
            htmlFor="description"
            className="block mb-1 text-gray-50 font-semibold"
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
            <p className="text-red-500">{errors.description}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="department"
            className="block mb-1 text-gray-50 font-semibold"
          >
            Tema
          </label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
          />
          {errors.department && (
            <p className="text-red-500">{errors.department}</p>
          )}
        </div>
      </div>
      <button
        type="submit"
        className=" flex  flex-row justify-center items-center gap-4 mt-4 px-3 md:px-4 py-1 md:py-2 bg-sky-600 border border-sky-600 text-white rounded-lg hover:bg-sky-700"
      >
        crear <GrCertificate className=" text-gray-50 text-xl" />
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

export default SubjectForm;
