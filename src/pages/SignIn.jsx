import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import MainButton from "../components/MainButton";
import { useSelector, useDispatch } from "react-redux";
import { signInFailure, signInStart, signInSuccess } from "../redux/user/userSlice";

const Signin = () => {
  const [formData, setFormData] = useState({});
  // const [errorMessage, setErrorMessage] = useState(null);
  // const [loading, setLoading] = useState(false);
  const { loading, error: errorMessage, currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  }

  const handleSubmit =  async (e) => {
    e.preventDefault();
    //setErrorMessage(null);
    if(!formData.email || !formData.password) {
      //setErrorMessage("Please fill all the fields");
      return dispatch(signInFailure("Please fill all the fields"))
    }
    try {
      // setLoading(true);
      // setErrorMessage(null);
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if(data.success === false) {
        // setErrorMessage(data.message);
        // setLoading(false)
        dispatch(signInFailure(data.message));
      }
      if(res.ok){
        console.log(data);
        // setErrorMessage(null);
        // setLoading(false);
        dispatch(signInSuccess(data))
        navigate("/");
      }
    } catch (error) {
      setErrorMessage(error);
    }
  }

   return (
    <div className="bg-backgroundColor min-h-screen max-w-full">
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
            <p className="font-poppins text-[24px] font-semibold">Login</p>
            <p className="font-poppins text-[16px] font-light">
              Login to your account.
            </p>
          </div>
          <form className="mt-16" onSubmit={handleSubmit}>
            <div className="flex flex-col mb-5">
              <label className="font-poppins text-[14px] text-gray-500 mb-1">
                Email
              </label>
              <input
                className="font-poppins text-[14px] px-4 py-2 font-normal rounded-lg border-2"
                type="email"
                id="email"
                placeholder="name@gmail.com"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col mb-10">
              <label className="font-poppins text-[14px] text-gray-500 mb-1">
                Password
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
            <MainButton>
                Login
            </MainButton>
          </form>
          <p className="mt-5 text-gray-500">
            Create account ? <span className="text-mainColor underline"><Link to="/sign-up">Sign-Up</Link></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
