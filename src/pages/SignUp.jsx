import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import MainButton from "../components/MainButton";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);
    if (!formData.firstName || !formData.email || !formData.password) {
      setErrorMessage("Fill required fields!");
    } else {
      try {
        setLoading(true);
        setErrorMessage(null);
        console.log(formData);
        const res = await fetch("/api/auth/signup", {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        const data = await res.json();
        if (data.success === false) {
          return setErrorMessage(data.message);
        }
        setLoading(false);
        if (res.ok) {
          navigate("/sign-in");
          alert("Registration Completed Successfully!");
        }
      } catch (error) {
        setErrorMessage(error.message);
        setLoading(false);
      }
    }
  };

  return (
    <div className="bg-backgroundColor min-h-screen">
      <div className="p-3 flex flex-col w-full min-h-screen md:flex-row">
        <div className="bg-mainColor w-1/3 py-12 px-16 rounded-lg hidden sm:block">
          <p className="font-roboto_condesed text-white text-[20px]">
            PeoplePro
          </p>
          <div className="flex flex-col my-24 h-full">
            <p className="font-poppins text-white text-[40px] font-medium">
              Your Partner In <br></br> HR Excellence.
            </p>
            <p className="font-poppins text-white font-light text-[14px] mt-4 w-[250px]">
              Streamline your HR operations, foster employee development, and
              stay compliant effortlessly, all in one place.
            </p>
          </div>
        </div>
        <div className="w-2/3 flex flex-col justify-center px-10">
          <div>
            <p className="font-poppins text-[24px] font-semibold">Sign Up</p>
            <p className="font-poppins text-[16px] font-light">
              Create a new account.
            </p>
          </div>
          <form className="mt-16" onSubmit={handleSubmit}>
            <div className="flex flex-col mb-5">
              <label className="font-poppins text-[14px] text-gray-500 mb-1">
                First Name*
              </label>
              <input
                className="font-poppins text-[14px] px-4 py-2 font-normal rounded-lg border-2"
                type="text"
                id="firstName"
                placeholder="John"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col mb-5">
              <label className="font-poppins text-[14px] text-gray-500 mb-1">
                Last Name
              </label>
              <input
                className="font-poppins text-[14px] px-4 py-2 font-normal rounded-lg border-2"
                type="text"
                id="lastName"
                placeholder="David"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col mb-5">
              <label className="font-poppins text-[14px] text-gray-500 mb-1">
                Email*
              </label>
              <input
                className="font-poppins text-[14px] px-4 py-2 font-normal rounded-lg border-2"
                type="email"
                id="email"
                placeholder="john@gmail.com"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col mb-5">
              <label className="font-poppins text-[14px] text-gray-500 mb-1">
                Password*
              </label>
              <input
                className="font-poppins text-[14px] px-4 py-2 font-normal rounded-lg border-2"
                type="password"
                id="password"
                placeholder="********"
                onChange={handleChange}
              />
            </div>
            {errorMessage && <ErrorMessage message={errorMessage} />}
            <MainButton type={"submit"}>Create Account</MainButton>
          </form>
          <p className="mt-5 text-gray-500">
            Have an account ?{" "}
            <span className="text-mainColor underline">
              <Link to="/sign-in">Sign-In</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
