import React from "react";
import { useNavigate } from "react-router-dom";
import EmployeeGrid from "../components/EmployeeGrid";
import MainButton from "../components/MainButton";


const Employee = () => {
const Navigate = useNavigate();
  return (
    <div className="p-3 bg-backgroundColor h-full">
      <div className="flex justify-between mb-3">
        <p className="my-4 text-[22px] font-medium">List of Employees</p>
        <MainButton>Add New</MainButton>
      </div>
      <div className="p-3 bg-white rounded-lg">
        <p className="font-medium mb-3">Filter by</p>
        <div className="flex justify-between gap-3 mb-3">
          <div className="flex flex-col w-1/4">
            <label className="font-poppins text-[12px]">Branch</label>
            <input
              className="font-poppins text-[12px] px-4 py-2 font-normal rounded-lg border-2 bg-inputBgColor"
              type="branch"
              id="branch"
              placeholder=""
            />
          </div>
          <div className="flex flex-col w-1/4">
            <label className="font-poppins text-[12px]">Department</label>
            <input
              className="font-poppins text-[12px] px-4 py-2 font-normal rounded-lg border-2 bg-inputBgColor"
              type="department"
              id="department"
              placeholder=""
            />
          </div>
          <div className="flex flex-col  w-1/4">
            <label className="font-poppins text-[12px] ">Designation</label>
            <input
              className="font-poppins text-[12px] px-4 py-2 font-normal rounded-lg border-2 bg-inputBgColor"
              type="designation"
              id="designation"
              placeholder=""
            />
          </div>
          <div className="flex flex-col w-1/4">
            <label className="font-poppins text-[12px] ">Employee Status</label>
            <input
              className="font-poppins text-[12px] px-4 py-2 font-normal rounded-lg border-2 bg-inputBgColor"
              type="status"
              id="status"
              placeholder=""
            />
          </div>
        </div>
      </div>
      <div className="p-0 bg-white rounded-lg mt-3">
        <div className="flex justify-between items-center p-3">
          <p className="font-medium">Details of employee</p>
          <input
            className="font-poppins text-[12px] px-4 py-2 font-normal rounded-lg  bg-inputBgColor"
            type="password"
            id="password"
            placeholder="Search"
          />
        </div>
        <EmployeeGrid />
      </div>
    </div>
  );
};

export default Employee;
