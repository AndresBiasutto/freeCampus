import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../../redux/actions/authActions";
import axios from "../../api/axios";
import { useDispatch } from "react-redux";

const LOGIN_URL = "users/signin";

const Login = () => {
  const navigate = useNavigate();
  const userRef = useRef();
  const errRef = useRef();
  const dispatch = useDispatch();

  const [e_mail, setE_mail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [e_mail, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ e_mail, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      if (response.data.message) {
        setErrMsg(response.data.message);

      } else {
        const { role, name, image, token, id, enrolledSubjects, description, contactNumber, email } = response.data;
        window.localStorage.setItem("token", token);
        window.localStorage.setItem("name", name);
        window.localStorage.setItem("role", role);
        window.localStorage.setItem("image", image);
        window.localStorage.setItem("id", id);
        window.localStorage.setItem("enrolledSubjects", enrolledSubjects);
        window.localStorage.setItem("description", description);
        window.localStorage.setItem("email", email);
        window.localStorage.setItem("contactNumber", contactNumber);
        dispatch(loginSuccess({ name, role, image, token, id, enrolledSubjects, description, contactNumber, email }));
        let redirectPath = "/";
        if (role === "Manager") {
          redirectPath = "/manager";
        } else if (role === "admin") {
          redirectPath = "/admin/home";
        } else if (role === "teacher") {
          redirectPath = `/${name}/dashboard`;
        } else if (role === "student") {
          redirectPath = `/${name}/dashboard`;
        }
        navigate(redirectPath, { replace: true });
      }
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
    
  };

  return (
    <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-light-background to-light-lightBackground text-white">
      <section className="flex w-[30rem] flex-col space-y-10">
        <div className="text-center text-4xl font-medium">Log In</div>

        <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
          <input
            type="text"
            placeholder="E_mail"
            className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
            id="e_mail"
            ref={userRef}
            autoComplete="on"
            onChange={(e) => setE_mail(e.target.value)}
            value={e_mail}
            required
          />
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
        {/* <a
      href="#"
      className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300"
      >FORGOT PASSWORD?</a
    >

    <p className="text-center text-lg">
      No account?
      <a
        href="#"
        className="font-medium text-indigo-500 underline-offset-4 hover:underline"
        >Create One</a
      >
    </p> */}
      </section>
    </main>
  );
};

export default Login;
