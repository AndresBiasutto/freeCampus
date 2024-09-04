import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../redux/actions/userActions";

const Register = () => {
  const dispatch = useDispatch();
  const token = useSelector((store) => store.registerToken);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [e_mail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roles, setRoles] = useState("3");
  const [errors, setErrors] = useState({});
  const userRef = useRef();
  const errRef = useRef();
  // eslint-disable-next-line no-unused-vars
  const [errMsg, setErrMsg] = useState("");

  const validate = () => {
    const errors = {};

    if (!name || name.length < 3) {
      errors.name = "El nombre debe tener al menos 3 caracteres.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!e_mail || !emailRegex.test(e_mail)) {
      errors.e_mail = "El correo electrónico no es válido.";
    }

    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!image || !urlRegex.test(image)) {
      errors.image = "La URL de la imagen no es válida.";
    }

    if (!password || password.length < 6) {
      errors.password = "La contraseña debe tener al menos 6 caracteres.";
    }

    if (!roles) {
      errors.roles = "Debe seleccionar un rol.";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    const newUser = {
      name: name,
      image: image,
      e_mail: e_mail,
      password: password,
      roles: roles,
    };

    console.log(newUser);
    dispatch(createUser(newUser));
  };

  return (
    <main className="mx-auto flex min-h-screen w-full items-center justify-around bg-gray-900 text-white">
      <section className="flex w-[30rem] flex-col space-y-10">
        <div className="text-center text-4xl font-medium">Register</div>

        <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
          <input
            type="text"
            placeholder="Name"
            className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
            id="name"
            ref={userRef}
            autoComplete="on"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
          {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
        </div>

        <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
          <input
            type="url"
            placeholder="Image URL"
            className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
            id="image"
            autoComplete="on"
            onChange={(e) => setImage(e.target.value)}
            value={image}
            required
          />
          {errors.image && (
            <p className="text-red-600 text-sm">{errors.image}</p>
          )}
        </div>

        <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
          <input
            type="text"
            placeholder="E_mail"
            className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
            id="e_mail"
            autoComplete="on"
            onChange={(e) => setEmail(e.target.value)}
            value={e_mail}
            required
          />
          {errors.e_mail && (
            <p className="text-red-600 text-sm">{errors.e_mail}</p>
          )}
        </div>

        <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
          <input
            type="password"
            placeholder="Password"
            className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
            id="password"
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          {errors.password && (
            <p className="text-red-600 text-sm">{errors.password}</p>
          )}
        </div>

        <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
          <select
            id="roles"
            className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
            onChange={(e) => setRoles(e.target.value)}
            value={roles}
            required
          >
            <option value="1">Admin</option>
            <option value="2">Teacher</option>
            <option value="3">Student</option>
          </select>
          {errors.roles && (
            <p className="text-red-600 text-sm">{errors.roles}</p>
          )}
        </div>

        <button
          className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400"
          onClick={handleSubmit}
        >
          LOG IN
        </button>
        <p ref={errRef} aria-live="assertive">
          {errMsg}
        </p>
        {token && (
          <p ref={errRef} aria-live="assertive">
            EXITO!!
          </p>
        )}
      </section>
    </main>
  );
};

export default Register;
