import minilistLight from "./../assets/Login Page/hash-lightMode.svg";
import minilistDark from "./../assets/Login Page/hash-darkMode.svg";
import { useContext, useState } from "react";
import DarkModeContext from "../DarkModeContext";
import DatabaseContext from "../DatabaseContext";
import { CheckForUserInDatabase } from "../utils/CheckForUserInDatabase";
import gsap from "gsap";
// eslint-disable-next-line react/prop-types
const LoginPage = ({ darkModeIcon, lightModeIcon }) => {
  const [isDarkMode, setDarkMode] = useContext(DarkModeContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const database = useContext(DatabaseContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    CheckForUserInDatabase(username, password, database);
  };

  const handleTheme = () => {
    gsap.to(document.body, {
      opacity: 0,
      duration: 0.2,
      onComplete: () => {
        setDarkMode(!isDarkMode);

        gsap.to(document.body, {
          opacity: 1,
          duration: 0.2,
        });
      },
    });
  };

  return (
    <div
      className={`login-page ${
        isDarkMode ? "bg-black" : "bg-white"
      } flex flex-col h-screen justify-center px-5 lg:flex-row lg:justify-between lg:w-12/12 lg:items-center`}
    >
      <div className="login-favicon -mt-12 lg:mt-0 basis-5/12 lg:ml-12 ">
        <img
          src={isDarkMode ? minilistDark : minilistLight}
          className="w-80 my-0 mx-auto md:w-50 lg:w-8/12"
          alt="minilist favicon"
        />
        <p
          className={`moto ${
            isDarkMode ? "text-white" : "text-black"
          } text-center text-2xl md:text-lg `}
        >
          Less noise, more connection – Simplify your social world.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="login-form flex flex-col gap-2 items-center p-5 lg:basis-6/12"
      >
        <div className=" ml-5 hidden rounded-full mr-12 mb-12  p-2 lg:flex self-end cursor-pointer  ">
          <img
            onClick={handleTheme}
            src={isDarkMode ? lightModeIcon : darkModeIcon}
            className="theme-img w-12 cursor-pointer "
            alt="theme"
          />
        </div>
        <input
          type="text"
          required
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          className={`username outline-none focus:border-blue-600 border-2 p-4 w-10/12 md:w-7/12 mt-5 border-gray-700 rounded-lg`}
          placeholder="Enter Username"
        />
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          required
          className={`username outline-none focus:border-blue-600 border-2 p-4 w-10/12 md:w-7/12 mt-2 border-gray-700 rounded-lg`}
          placeholder="Enter Password"
        />
        <button
          className={`login-btn px-5 py-4 mt-3 text-white w-10/12 md:w-7/12 rounded-xl bg-blue-600 text-center font-bold`}
          type="submit"
        >
          Login
        </button>

        <p
          className={`${
            isDarkMode ? "text-white" : "text-black"
          } mt-12 font-normal`}
        >
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Don't have an account ?
          <span className="text-blue-600"> Sign up now !</span>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
