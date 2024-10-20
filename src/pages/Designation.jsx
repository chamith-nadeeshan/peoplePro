import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddDesignationModal from "../components/AddDesignationModal";
import DesignationGrid from "../components/DesignationGrid";
import MainButton from "../components/MainButton";

const Designation = () => {
  const Navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [designations, setDesignations] = useState([]);

  const fetchDesignations = async () => {
    try {
      const res = await fetch("/api/designation/getdesignations", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();

      if (res.ok) {
        setDesignations(data);
      }
      console.log(data.message);
    } catch (error) {
      console.log("Fetch error: ", error.message);
    }
  };

  const removeDesignation = async (id) => {
    console.log(id);
    console.log("hitted");
    try {
      await fetch(`/api/removedesignation/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
      });
      fetchDesignations();
    } catch (error) {
      console.error("Error deleting designation:", error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    fetchDesignations();
  };

  useEffect(() => {
    fetchDesignations();
  }, []);
  return (
    <div className="p-3 bg-backgroundColor h-full">
      <div className="flex justify-between mb-3">
        <p className="my-4 text-[22px] font-medium">List of Designations</p>
        <MainButton onClick={openModal}>Add New</MainButton>
      </div>
      <div className="p-0 bg-white rounded-lg mt-3">
        <div className="flex justify-between items-center p-3">
          <p className="font-medium">Details of Designations</p>
          <input
            className="font-poppins text-[12px] px-4 py-2 font-normal rounded-lg  bg-inputBgColor"
            type="password"
            id="password"
            placeholder="Search"
          />
        </div>
        <DesignationGrid designations={designations} removeDesignation={removeDesignation}/>
      </div>
      <AddDesignationModal isOpen={isModalOpen} onClose={closeModal}>
        <p>This is the content inside the popup modal.</p>
      </AddDesignationModal>
    </div>
  );
};

export default Designation;
