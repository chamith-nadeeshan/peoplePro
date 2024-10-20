import React, { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import MainButton from "./MainButton";
import MainButtonWithOutline from "./MainButtonWithOutline";
import { useSelector } from "react-redux";

const AddToDoModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const { currentUser } = useSelector((state) => state.user);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);
    if (!formData.task || !formData.date || !formData.time) {
      setErrorMessage("Fill required fields!");
    } else {
      try {
        setFormData({
          ...formData,
          userEmail: currentUser.email,
        });
        setLoading(true);
        setErrorMessage(null);
        console.log(formData);
        const res = await fetch("/api/todo/createtodo", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        if (data.success === false) {
          return setErrorMessage(data.message);
        }
        setLoading(false);
        if (res.ok) {
          alert("Todo created successfully!");
          setFormData({
            task: "",
            date: "",
            time: "",
          });
        }
      } catch (error) {
        setErrorMessage(error.message);
        setLoading(false);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[600px]">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-[18px] font-semibold">New Task ToDo</h2>
          <hr className="my-3 border-gray-200 w-[500px]" />
        </div>
        <form className="mt-3" onSubmit={handleSubmit}>
          <div className="flex flex-col mb-5">
            <label className="font-poppins text-[14px] text-gray-500 mb-1">
              Task*
            </label>
            <input
              className="font-poppins text-[14px] px-4 py-2 font-normal rounded-lg border-2"
              type="text"
              id="task"
              placeholder="meeting with bob"
              value={formData.task}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mb-5">
            <label className="font-poppins text-[14px] text-gray-500 mb-1">
              Date*
            </label>
            <input
              className="font-poppins text-[14px] px-4 py-2 font-normal rounded-lg border-2"
              type="date"
              id="date"
              value={formData.data}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mb-10">
            <label className="font-poppins text-[14px] text-gray-500 mb-1">
              Time*
            </label>
            <input
              className="font-poppins text-[14px] px-4 py-2 font-normal rounded-lg border-2"
              type="time"
              id="time"
              value={formData.time}
              onChange={handleChange}
            />
          </div>
          {errorMessage && <ErrorMessage message={errorMessage} />}
          <div className="flex gap-3 justify-center">
            <MainButton>Save</MainButton>
            <MainButtonWithOutline onClick={onClose}>
              Cancel
            </MainButtonWithOutline>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToDoModal;
