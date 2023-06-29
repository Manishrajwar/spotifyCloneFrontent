import { Icon } from "@iconify/react";
import Continue from "../Components/Continue";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import InputField from "../Components/InputField";
import { useState } from "react";
import Password from "../Components/Password";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { makeUnauthenticatedPOSTRequest } from "../utils/serverHelper";

function Signup() {
  const [passwordHide, setPasswordHide] = useState(false);
const navigate = useNavigate();


  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    date: "",
    month: "january",
    year: "",
    gender: "",
    userName: "",
  });

  function changeHandler(event) {
    let { name, value } = event.target;

    setFormData((prevData) => {
      return {
        ...prevData,
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
    const response = await makeUnauthenticatedPOSTRequest(
      `/register`,
      formData
    );

    if (response && response.success) {
     navigate("/login");
    } else {
      alert(response.message);
    }
  }

  return (
    <div className="flex flex-col w-full gap-4 items-center">
      <nav className="flex gap-2 justify-center items-center mt-10 mb-5">
        <Icon icon="bi:spotify" width="3rem" className="" />
        <h1 className="font-bold text-[2rem]">Spotify</h1>
      </nav>

      <p className="font-bold text-black text-2xl">
        Sign up for free to start listening.
      </p>

      {/* two method to signup */}
      <div className="flex flex-col gap-4 mt-2">
        <Continue title={"Sign up with Facebook"} logo={<BsFacebook />} />
        <Continue title={"Sign up with google"} logo={<FcGoogle />} />
      </div>

      {/* line with or */}
      <div className="flex justify-evenly items-center gap-4 mb-2">
        <div className="w-[10rem] h-[1px] bg-black opacity-40"></div>
        <p>or</p>
        <div className="w-[10rem] h-[1px] bg-black opacity-40"></div>
      </div>

      {/* ! form */}
      <form className="flex flex-col gap-3" onSubmit={submitHandler}>
        <label htmlFor="email" className="">
          <p>What's your email</p>
          <InputField
            changeHandler={changeHandler}
            value={formData.email}
            name={"email"}
            placeholder={"Enter your email"}
            formData={formData}
          />
        </label>
        <label htmlFor="userName" className="">
          <p>Enter userName</p>
          <InputField
            changeHandler={changeHandler}
            value={formData.userName}
            name={"userName"}
            placeholder={"Enter your userName"}
            formData={formData}
          />
        </label>
        <label htmlFor="password">
          <p>create a password</p>
          <div className="flex items-center relative">
            <Password
              changeHandler={changeHandler}
              passwordHide={passwordHide}
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

        <label htmlFor="firstName" className="flex flex-col gap-2">
          <p>What should we call you?</p>
          <InputField
            formData={formData}
            value={formData.firstName}
            changeHandler={changeHandler}
            name={"firstName"}
            placeholder={"Enter a firstName name"}
          />
          <InputField
            formData={formData}
            value={formData.lastName}
            changeHandler={changeHandler}
            name={"lastName"}
            placeholder={"Enter a lastName name"}
          />
        </label>

        <label htmlFor="DOB">
          <p>What's your date of birth?</p>

          <div className="flex justify-between">
            <div className="flex flex-col gap-2">
              <p>Year</p>
              <input
                value={formData.year}
                name="year"
                onChange={changeHandler}
                type="number"
                className="w-[100px] text-xl pl-2 py-[5px]  border-2 border-black placeholder"
                placeholder="YYY"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p>Month</p>
              <select
                value={formData.month}
                name="month"
                onChange={changeHandler}
                className="w-[200px] border-2 border-black py-2 pl-2"
              >
                <option value="january">january</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <p>date</p>
              <input
                value={formData.date}
                name="date"
                onChange={changeHandler}
                type="number"
                className="w-[70px] text-xl pl-2  py-[5px] overflow-hidden border-2 border-black placeholder"
                placeholder="DD"
              />
            </div>
          </div>
        </label>

        <label htmlFor="gender">
          <p className="mb-2">What's your gender?</p>
          <div className="flex flex-wrap gap-4 max-w-[500px] w-[400px]">
            <div className="flex gap-1 items-center ">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                onChange={changeHandler}
              />
              <label htmlFor="male">male</label>
            </div>
            <div className="flex gap-1 items-center ">
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                onChange={changeHandler}
              />
              <label htmlFor="female">female</label>
            </div>
            <div className="flex gap-1 items-center ">
              <input
                type="radio"
                id="Non-binary"
                name="gender"
                value="non-binary"
                onChange={changeHandler}
              />
              <label htmlFor="Non-binary">Non-binary</label>
            </div>
            <div className="flex gap-1 items-center ">
              <input
                type="radio"
                id="Other"
                name="gender"
                value="other"
                onChange={changeHandler}
              />
              <label htmlFor="Other">Other</label>
            </div>
            <div className="flex gap-1 items-center ">
              <input
                type="radio"
                id="PreferNotToSay"
                name="gender"
                value="prefer not to say"
                onChange={changeHandler}
              />
              <label htmlFor="PreferNotToSay">Prefer not to say</label>
            </div>
          </div>
        </label>

        <div className="max-w-[500px] flex flex-col w-[400px] text-center text-[10px] gap-3">
          <p>
            By clicking on sign-up, you agree to Spotify's{" "}
            <span className="underline cursor-pointer text-green-400 ">
              {" "}
              Terms and Conditions of Use .
            </span>
          </p>

          <p>
            To learn more about how Spotify collects, uses, shares and protects
            your personal data,
            <span className="underline cursor-pointer text-green-400 ">
              please see Spotify's Privacy Policy
            </span>
            .
          </p>
        </div>

        <button className="w-[150px] bg-green-500 rounded-3xl mx-auto py-3 text-black font-bold hover:scale-105 transition-all duration-150 ">
          Sign up
        </button>
      </form>

      <Link to="/login" className="mb-20">
        <p>
          Have an account?{" "}
          <span className="underline text-green-600 ">Login</span>
        </p>
      </Link>
    </div>
  );
}

export default Signup;
