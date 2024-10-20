import React, { useState, useEffect } from "react";

import ProfileImg from "../assets/profileImg.jpg";

const EmployeeGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(5);

  const employees = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      department: "HR",
      position: "Manager",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      department: "Finance",
      position: "Analyst",
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice@example.com",
      department: "IT",
      position: "Developer",
    },
    {
      id: 4,
      name: "Alice Johnson",
      email: "alice@example.com",
      department: "IT",
      position: "Developer",
    },
    {
      id: 5,
      name: "Alice Johnson",
      email: "alice@example.com",
      department: "IT",
      position: "Developer",
    },
    {
      id: 6,
      name: "Alice Johnson",
      email: "alice@example.com",
      department: "IT",
      position: "Developer",
    },
    {
      id: 7,
      name: "Alice Johnson",
      email: "alice@example.com",
      department: "IT",
      position: "Developer",
    },
  ];

  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = employees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="">
      <table className="table-auto w-full border-separate border-spacing-y-2">
        <thead>
          <tr className="bg-[#D3D9E0]">
            <th className="px-4 py-2 font-light"></th>
            <th className="px-4 py-2 font-light text-[14px] text-gray-500">
              Image
            </th>
            <th className="px-4 py-2 font-light text-[14px] text-gray-500">
              Employee Code
            </th>
            <th className="px-4 py-2 font-light text-[14px] text-gray-500">
              Title
            </th>
            <th className="px-4 py-2 font-light text-[14px] text-gray-500">
              Full Name
            </th>
            <th className="px-4 py-2 font-light text-[14px] text-gray-500">
              Mobile Number
            </th>
            <th className="px-4 py-2 font-light text-[14px] text-gray-500">
              Email Address
            </th>
            <th className="px-4 py-2 font-light text-[14px] text-gray-500">
              Employee Status
            </th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.map((employee) => (
            <tr
              key={employee.id}
              className="text-center bg-[#F9FAFB] rounded-md overflow-hidden"
            >
              <td className="px-4 py-3 font-normal text-[12px]">
                {employee.id}
              </td>
              <td className="px-4 py-3 font-normal text-[12px]">
                <img
                  src={ProfileImg}
                  alt="profile"
                  className="h-10 w-10 rounded-full bg-cover"
                />
              </td>
              <td className="px-4 py-3 font-normal text-[12px]">
                {employee.email}
              </td>
              <td className="px-4 py-2 font-normal text-[12px]">
                {employee.department}
              </td>
              <td className="px-4 py-2 font-normal text-[12px]">
                {employee.position}
              </td>
              <td className="px-4 py-2 font-normal text-[12px]">
                {employee.position}
              </td>
              <td className="px-4 py-2 font-normal text-[12px]">
                {employee.position}
              </td>
              <td className="px-4 py-2 font-normal text-[12px]">
                {employee.position}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end my-4 mx-3">
        {[...Array(Math.ceil(employees.length / employeesPerPage)).keys()].map(
          (number) => (
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
          )
        )}
      </div>
    </div>
  );
};

export default EmployeeGrid;
