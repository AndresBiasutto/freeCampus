import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../redux/actions/actions";
import axios from "../api/axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const LOGIN_URL = "users/signin";

const Login = () => {
  const navigate = useNavigate();
  const userRef = useRef();
  const errRef = useRef();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const { role, name, image, id } = useSelector((store) => store.auth);

  useEffect(() => {
    console.log(role, name, image, id);
  }, [role, name, image, id]);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      if (response.data.message) {
        setErrMsg(response.data.message);
      } else {
        const { role, name, image, token, id } = response.data;
        window.localStorage.setItem("token", token);
        window.localStorage.setItem("name", name);
        window.localStorage.setItem("role", role);
        window.localStorage.setItem("image", image);
        window.localStorage.setItem("id", id);
        dispatch(loginSuccess({ name, role, image, token, id }));
        let redirectPath = "/";
        if (role === "Manager") {
          redirectPath = "/manager";
        } else if (role === "Admin") {
          redirectPath = "/admin/home";
        } else if (role === "teacher") {
          redirectPath = "/teacher/home";
        } else if (role === "student") {
          redirectPath = "/student";
        } else if (role === "Clevel") {
          redirectPath = "/clevel";
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
    <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
      <section className="flex w-[30rem] flex-col space-y-10">
        <div className="text-center text-4xl font-medium">Log In</div>

        <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
          <input
            type="text"
            placeholder="Email"
            className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
            id="email"
            ref={userRef}
            autoComplete="on"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
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
