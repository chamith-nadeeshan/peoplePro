import React, { useState, useEffect } from "react";
import { FiMoreVertical } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

import ProfileImg from "../assets/profileImg.jpg";

const DesignationGrid = ({ designations, removeDesignation }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [designationsPerPage] = useState(9);
  const [showModal, setShowModal] = useState(null);

  const indexOfLastDesignation = currentPage * designationsPerPage;
  const indexOfFirstDesignation = indexOfLastDesignation - designationsPerPage;
  const currentDesignations = designations.slice(
    indexOfFirstDesignation,
    indexOfLastDesignation
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const toggleModal = (designationId) => {
    setShowModal((prev) => (prev === designationId ? null : designationId));
  };

  return (
    <div className="">
      <table className="table-auto w-full border-separate border-spacing-y-2">
        <thead>
          <tr className="bg-[#D3D9E0]">
            <th className="px-4 py-2 font-light text-[14px] text-gray-500">
              
            </th>

            <th className="px-4 py-2 font-light text-[14px] text-gray-500">
              Name
            </th>
          </tr>
        </thead>
        <tbody>
          {currentDesignations.map((designation) => (
            <tr
              key={designation._id}
              className="text-center bg-[#F9FAFB] rounded-md overflow-hidden"
            >
              <td className="relative px-1 py-3 w-10 ml-10 font-normal text-[12px] flex items-center justify-center">
                <div className="bg-[#E5E5E5] px-1 py-2 rounded-md">
                  <FiMoreVertical
                    className="cursor-pointer"
                    onClick={() => toggleModal(designation._id)}
                  />
                </div>

                {showModal === designation._id && (
                  <div className="absolute top-0 right-0 bg-white border shadow-lg rounded-md p-3 z-10 ransition-colors duration-300">
                    <button
                      className="flex items-center text-red-500"
                      onClick={() => {
                        removeDesignation(designation._id);
                        setShowModal(null);
                      }}
                    >
                      <MdDelete className="mr-2" />
                      Delete
                    </button>
                  </div>
                )}
              </td>

              <td className="px-1 py-3 font-normal text-[12px]">
                {designation.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end my-4 mx-3">
        {[
          ...Array(Math.ceil(designations.length / designationsPerPage)).keys(),
        ].map((number) => (
          <button
            key={number + 1}
            onClick={() => paginate(number + 1)}
            className={`px-3 py-1 mx-1 border rounded-md ${
              currentPage === number + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DesignationGrid;
