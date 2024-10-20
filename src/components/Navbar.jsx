import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import dashboardImgWhite from "../assets/dashboards.png";
import dashboardImgBlack from "../assets/dashboards-black.png";
import employeeImgWhite from "../assets/employees-white.png";
import employeeImgBlack from "../assets/employees-black.png";
import recruitmentImgWhite from "../assets/recruitment-white.png";
import recruitmentImgBlack from "../assets/recruitment-black.png";
import payrollImgWhite from "../assets/payroll-white.png";
import payrollImgBlack from "../assets/payroll-black.png";
import requestsImgWhite from "../assets/requests-white.png";
import requestsImgBlack from "../assets/request-black.png";
import ProfileImg from "../assets/profileImg.jpg";
import DownArrowIcon from "../assets/down.png";
import UpArrowIcon from "../assets/up.png";

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const [isEmployeeSectionExpanded, setEmployeeSectionExpanded] =
    useState(false);

  const toggleEmployeeSection = () => {
    setEmployeeSectionExpanded(!isEmployeeSectionExpanded);
  };

  return (
    <div className="w-64 bg-mainColor text-white h-screen flex flex-col justify-between">
      <div>
        <p className="font-roboto_condesed text-white text-[20px] m-3">
          PeoplePro.
        </p>
        <p className="text-[12px] text-gray-400 m-3 mt-16">MAIN MENU</p>
        <nav className="flex flex-col p-4 gap-2">
          <Link
            to="/"
            className={`py-3 px-4 rounded-lg flex items-center gap-3 transition-colors duration-300 ${
              isActive("/")
                ? "bg-white text-black"
                : "hover:bg-gray-600 hover:bg-opacity-50"
            }`}
          >
            <div>
              <img
                src={isActive("/") ? dashboardImgBlack : dashboardImgWhite}
                alt="dashboard"
                className="w-4 h-4"
              />
            </div>
            Dashboard
          </Link>

          {/* Employee Section with Subsections */}
          <div>
            <button
              onClick={toggleEmployeeSection}
              className={`w-full text-left py-3 px-4 rounded-lg flex items-center justify-between transition-colors duration-300 ${
                isActive("/employees")
                  ? "hover:bg-gray-600 hover:bg-opacity-50"
                  : "hover:bg-gray-600 hover:bg-opacity-50"
              }`}
            >
              <div className="flex items-center gap-3">
                <div>
                  <img
                    src={
                      isActive("/employees")
                        ? employeeImgWhite
                        : employeeImgWhite
                    }
                    alt="employees"
                    className="w-4 h-4"
                  />
                </div>
                Employee Master
              </div>
              <img src={isEmployeeSectionExpanded ? UpArrowIcon : DownArrowIcon}  className="h-3 w-3" />
            </button>

            {/* Subsections with Transition */}
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isEmployeeSectionExpanded ? "max-h-48" : "max-h-0"
              }`}
              style={{ maxHeight: isEmployeeSectionExpanded ? "260px" : "0" }}
            >
              <Link
                to="/employees"
                className={`py-2 pl-12 rounded-lg block transition-colors duration-300 text-[14px] ${
                  isActive("/employees")
                    ? "bg-white text-black"
                    : "hover:bg-gray-600 hover:bg-opacity-50"
                }`}
              >
                 - Employees
              </Link>
              <Link
                to="/designation"
                className={`py-2 pl-12 rounded-lg block transition-colors duration-300 text-[14px] ${
                  isActive("/designation")
                    ? "bg-white text-black"
                    : "hover:bg-gray-600 hover:bg-opacity-50"
                }`}
              >
                - Designation
              </Link>

              <Link
                to="/employees/add"
                className={`py-2 pl-12 rounded-lg block transition-colors duration-300 text-[14px] ${
                  isActive("/employees/add")
                    ? "bg-gray-500 text-white"
                    : "hover:bg-gray-600 hover:bg-opacity-50"
                }`}
              >
                - Department
              </Link>
              <Link
                to="/employees/add"
                className={`py-2 pl-12 rounded-lg block transition-colors duration-300 text-[14px] ${
                  isActive("/employees/add")
                    ? "bg-gray-500 text-white"
                    : "hover:bg-gray-600 hover:bg-opacity-50"
                }`}
              >
                - Branch
              </Link>
              <Link
                to="/employees/add"
                className={`py-2 pl-12 rounded-lg block transition-colors duration-300 text-[14px] ${
                  isActive("/employees/add")
                    ? "bg-gray-500 text-white"
                    : "hover:bg-gray-600 hover:bg-opacity-50"
                }`}
              >
                - Employee Status
              </Link>
              <Link
                to="/employees/add"
                className={`py-2 pl-12 rounded-lg block transition-colors duration-300 text-[14px] ${
                  isActive("/employees/add")
                    ? "bg-gray-500 text-white"
                    : "hover:bg-gray-600 hover:bg-opacity-50"
                }`}
              >
                - Employee Type
              </Link>
            </div>
          </div>

          {/* Other sections */}
          <Link
            to="/recruitment"
            className={`py-3 px-4 rounded-lg flex items-center gap-3 transition-colors duration-300 ${
              isActive("/recruitment")
                ? "bg-white text-black"
                : "hover:bg-gray-600 hover:bg-opacity-50"
            }`}
          >
            <div>
              <img
                src={
                  isActive("/recruitment")
                    ? recruitmentImgBlack
                    : recruitmentImgWhite
                }
                alt="recruitment"
                className="w-4 h-4"
              />
            </div>
            Recruitment
          </Link>
          <Link
            to="/payroll"
            className={`py-3 px-4 rounded-lg flex items-center gap-3 transition-colors duration-300 ${
              isActive("/payroll")
                ? "bg-white text-black"
                : "hover:bg-gray-600 hover:bg-opacity-50"
            }`}
          >
            <div>
              <img
                src={isActive("/payroll") ? payrollImgBlack : payrollImgWhite}
                alt="payroll"
                className="w-4 h-4"
              />
            </div>
            Payroll
          </Link>

          <Link
            to="/request"
            className={`py-3 px-4 rounded-lg flex items-center gap-3 transition-colors duration-300 ${
              isActive("/request")
                ? "bg-white text-black"
                : "hover:bg-gray-600 hover:bg-opacity-50"
            }`}
          >
            <div>
              <img
                src={isActive("/request") ? requestsImgBlack : requestsImgWhite}
                alt="request"
                className="w-4 h-4"
              />
            </div>
            Requests
          </Link>
        </nav>
      </div>
      <img
        src={ProfileImg}
        alt="profile"
        className="h-10 w-10 rounded-full bg-cover m-3"
      />
    </div>
  );
};

export default Navbar;
