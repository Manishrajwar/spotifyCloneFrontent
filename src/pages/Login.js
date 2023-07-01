import { useState } from "react";
import { Icon } from "@iconify/react";
import Continue from "../Components/Continue";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import InputField from "../Components/InputField";
import Password from "../Components/Password";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { makeUnauthenticatedPOSTRequest } from "../utils/serverHelper";
import { AppContext } from "../Context/AppContext";
import { useContext } from "react";

function Login() {
  const navigate = useNavigate();
  const [passwordHide, setPasswordHide] = useState(false);
  const [cookie, setCookie] = useCookies(["token"]);
  const { active , setActive } = useContext(AppContext);

  // email and password data contains
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //   ! any changes in input field handler
  function changeHandler(event) {
    const { value, name } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  //   ! click handler -> for password hide and unhide icon
  function clickhandler() {
    setPasswordHide((prev) => !prev);
  }

  // ! final submission of form
  async function submitHandler(event) {
    event.preventDefault();
    const response = await makeUnauthenticatedPOSTRequest("/login", formData);
    console.log(response);
    if (response && response.success) {
      const token = response.token;
      const date = new Date();
      date.setDate(date.getDate() + 30);
    
      setCookie("token", token, {
        path: "/",
        expires: date,
      });

       
      navigate("/home");
      setActive("Home");
    } else {
      alert(response.message);
    }
  }

  return (
    <div>
      <nav className="flex gap-2 justify-center items-center mt-4 mb-5">
        <Icon icon="bi:spotify" width="70px" className="" />
        <h1 className="font-bold text-4xl">Spotify</h1>
      </nav>

      {/* line */}
      <div className="w-full h-[1px] opacity-40 mb-8 bg-black "></div>

      {/* 4 login methods */}
      <div className="flex flex-col gap-3 w-full justify-center items-center">
        <Continue title={"continue with Facebook"} logo={<BsFacebook />} />
        <Continue title={"continue with google"} logo={<FcGoogle />} />
        <Continue title={"continue with Phone Number"} />
      </div>

      <div className="w-full text-2xl my-2 font-bold flex justify-center">
        OR
      </div>

      <form
        onSubmit={submitHandler}
        className="w-full flex flex-col items-center gap-4"
      >
        <label htmlFor="email">
          <p>Email address or username</p>

          <InputField
            formData={formData}
            name={"email"}
            placeholder={"Enter your email"}
            changeHandler={changeHandler}
          />
        </label>

        <label htmlFor="password">
          <p>Password</p>
          <div className="flex items-center  relative">
            <Password
              passwordHide={passwordHide}
              changeHandler={changeHandler}
              formData={formData}
            />

            {passwordHide ? (
              <AiFillEyeInvisible
                className="absolute right-3  text-3xl cursor-pointer"
                onClick={clickhandler}
              />
            ) : (
              <AiFillEye
                className="absolute right-3 text-3xl cursor-pointer"
                onClick={clickhandler}
              />
            )}
          </div>
        </label>

        <p className="underline mb-2 hover:text-blue-400 cursor-pointer">
          Forget Your Password?
        </p>

        <div className=" flex items-center gap-[8rem]">
          <div className="cursor-pointer flex gap-2 items-center">
            <input type="checkbox" />
            <label htmlFor="">Remember me </label>
          </div>

          <button className="bg-green-500  text-xl font-bold w-[8rem] h-[2.6rem] text-black rounded-xl  hover:bg-opacity-80 duration-300">
            LOG IN{" "}
          </button>
        </div>
      </form>

      {/* line */}
      <div className="w-full h-[1px] mt-6 opacity-40 mb-10 bg-black "></div>

      <div className="w-full flex flex-col gap-5 items-center justify-center">
        <p className="cursor-default">Don't have an account?</p>

        <Link to="/signup">
          <button className="mb-6 cursor-pointer border-2 border-gray-600 text-gray-600 w-[25rem] py-3 rounded-3xl hover:bg-gray-400 hover:text-white duration-200 ">
            SIGN FOR SPOTIFY
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
