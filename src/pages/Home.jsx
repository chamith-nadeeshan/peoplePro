import React, { useState, useEffect } from "react";
import CommonHeader from "../components/CommonHeader";
import NumberCard from "../components/NumberCard";
import { useSelector } from "react-redux";

import employeeImgWhite from "../assets/employees-white.png";
import requestImgWhite from "../assets/requests-white.png";
import applicationImgWhite from "../assets/recruitment-white.png";
import AnnuncementBox from "../components/AnnuncementBox";
import TodoBox from "../components/TodoBox";
import HappinessChart from "../components/HappinessChart";
import AddToDoModal from "../components/AddToDoModel";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const [todos, setTodos] = useState([]);
  const { loading, setLoading } = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [transitioning, setTransitioning] = useState(null);

  const fetchTodos = async () => {
    try {
      const res = await fetch("/api/todo/gettodos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: currentUser.email }),
      });

      const data = await res.json();

      if (res.ok) {
        setTodos(data);
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log("Fetch error:", error.message);
    }
  };

  const completeTodo = async (id) => {
    console.log(`id - ${id}`);
    setTransitioning(id); 
    try {
      const response = await fetch(`/api/todo/completetodo/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        console.log("Failed to update todo");
      }
      const updatedTodo = await response.json();
      console.log("Todo updated:", updatedTodo);
      setTransitioning(id);

      // Remove the completed todo after the transition
      setTimeout(() => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== id));
        setTransitioning(null);
      }, 300); // Match this to the duration of your CSS transition

      fetchTodos();
    } catch (error) {
      console.log(error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    fetchTodos();
  };

  useEffect(() => {
    if (!currentUser?.email) return;
    console.log(currentUser.email);

    fetchTodos();
  }, [currentUser]);

  return (
    <div className="m-3 ">
      <CommonHeader loggedUserFirstName={currentUser.firstName} />
      <div className="flex w-ful gap-3">
        <div>
          <p className="my-4 text-[22px] font-medium">Dashboard</p>
          <div className="flex gap-2">
            <NumberCard
              title={"Total Employees"}
              number={"1230"}
              icon={employeeImgWhite}
            />
            <NumberCard
              title={"Total Requests"}
              number={"1230"}
              icon={requestImgWhite}
            />
            <NumberCard
              title={"Total Applications"}
              number={"1230"}
              icon={applicationImgWhite}
            />
          </div>
          <div className="border rounded-lg mt-3 h-[470px] overflow-y-auto">
            <p className="my-2 mx-2">Employee Engagement</p>
            <HappinessChart />
          </div>
        </div>

        <div className="w-full mt-3 flex flex-col gap-3">
          <AnnuncementBox />
          <TodoBox
            onClick={openModal}
            todos={todos}
            todoCompleted={completeTodo}
          />
        </div>
      </div>

      <AddToDoModal isOpen={isModalOpen} onClose={closeModal}>
        <p>This is the content inside the popup modal.</p>
      </AddToDoModal>
    </div>
  );
};

export default Home;
