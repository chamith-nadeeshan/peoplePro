import React, { useState, useEffect } from "react";
import CommonDropdown from "../components/CommonDropdown";
import CommonTextInput from "../components/CommonTextInput";
import MainButton from "../components/MainButton";

import blankProfileImage from "../assets/blankprofileimage.jpg";
import deleteIcon from "../assets/delete.png";

const AddEmployee = () => {
  const [employeeData, setEmployeeData] = useState({
    employeeCode: "",
    branch: "",
    department: "",
    designation: "",
    employeeType: "",
    employeeStatus: "",
    title: "",
    initials: "",
    nameDenotedByInitials: "",
    firstName: "",
    middleName: "",
    lastName: "",
    mobileNumber: "",
    emailAddress: "",
    education: [{ degree: "", institution: "", graduationYear: "" }],
    certifications: [
      { certificationNumber: "", issuedDate: "", expiryDate: "" },
    ],
    skills: [{ skillName: "", proficiencyLevel: 1 }],
    workExperience: [{ company: "", jobTitle: "", startDate: "", endDate: "" }],
  });

  const handleChange = (e) => {
    setEmployeeData({
      ...employeeData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEducationChange = (index, e) => {
    const updatedEducation = [...employeeData.education];
    updatedEducation[index][e.target.name] = e.target.value;
    setEmployeeData({
      ...employeeData,
      education: updatedEducation,
    });
  };

  const addEducationField = () => {
    setEmployeeData({
      ...employeeData,
      education: [
        ...employeeData.education,
        { degree: "", institution: "", graduationYear: "" },
      ],
    });
  };

  const removeEducationField = (index) => {
    const updatedEducation = [...employeeData.education];
    updatedEducation.splice(index, 1);
    setEmployeeData({
      ...employeeData,
      education: updatedEducation,
    });
  };

  const handleCertificationChange = (index, e) => {
    const updatedCertification = [...employeeData.certifications];
    updatedCertification[index][e.target.name] = e.target.value;
    setEmployeeData({
      ...employeeData,
      certifications: updatedCertification,
    });
  };

  const addCertificationField = () => {
    setEmployeeData({
      ...employeeData,
      certifications: [
        ...employeeData.certifications,
        { certificationNumber: "", issuedDate: "", expiryDate: "" },
      ],
    });
  };

  const removeCertificationField = (index) => {
    const updatedCertification = [...employeeData.certifications];
    updatedCertification.splice(index, 1);
    setEmployeeData({
      ...employeeData,
      certifications: updatedCertification,
    });
  };

  const handleSkillChange = (index, e) => {
    const updatedSkill = [...employeeData.skills];
    updatedSkill[index][e.target.name] = e.target.value;
    setEmployeeData({
      ...employeeData,
      skills: updatedSkill,
    });
  };

  const addSkillField = () => {
    setEmployeeData({
      ...employeeData,
      skills: [...employeeData.skills, { skillName: "", proficiencyLevel: 1 }],
    });
  };

  const removeSkillField = (index) => {
    const updatedSkill = [...employeeData.skills];
    updatedSkill.splice(index, 1);
    setEmployeeData({
      ...employeeData,
      skills: updatedSkill,
    });
  };

  const handleExperienceChange = (index, e) => {
    const updatedExperience = [...employeeData.workExperience];
    updatedExperience[index][e.target.name] = e.target.value;
    setEmployeeData({
      ...employeeData,
      workExperience: updatedExperience,
    });
  };

  const addExperienceField = () => {
    setEmployeeData({
      ...employeeData,
      workExperience: [...employeeData.workExperience, { company: "", jobTitle: "", startDate: "", endDate: "" }],
    });
  };

  const removeExperienceField = (index) => {
    const updatedExperience = [...employeeData.workExperience];
    updatedExperience.splice(index, 1);
    setEmployeeData({
      ...employeeData,
      workExperience: updatedExperience,
    });
  };

  const branchOptions = [
    {
      id: 1,
      value: "Colombo",
    },
    {
      id: 2,
      value: "Kandy",
    },
    {
      id: 3,
      value: "Jaffna",
    },
  ];
  return (
    <div className="p-3 bg-backgroundColor h-full">
      <div className="flex justify-between mb-3 h-14">
        <p className="my-4 text-[22px] font-medium">Add New Employee</p>
        <MainButton>Save</MainButton>
      </div>
      <div className="flex flex-col gap-3 overflow-y-auto h-[680px]">
        <div className="flex items-end gap-3">
          <img src={blankProfileImage} className="h-32 w-32 rounded-full" />
          <div className="h-10">
            <button className="bg-mainColor hover:bg-[#3A5DF3] py-2 px-8 rounded-lg text-white font-poppins text-[12px] font-light transition-colors duration-300">
              Upload
            </button>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg gap-5 flex flex-col">
          <p className="font-medium mb-3">Employee Master Details</p>
          <div className="flex justify-between gap-3">
            <div className="flex flex-col w-1/3">
              <CommonTextInput
                label="Employee Code"
                id="employeecode"
                required={true}
              />
            </div>
            <div className="flex flex-col w-1/3">
              <CommonDropdown
                label="Branch"
                id="branch"
                options={branchOptions}
                required={true}
              />
            </div>

            <div className="flex flex-col w-1/3">
              <CommonDropdown
                label="Department"
                id="department"
                options={branchOptions}
                required={true}
              />
            </div>
          </div>
          <div className="flex justify-between gap-3">
            <div className="flex flex-col w-1/3">
              <CommonDropdown
                label="Designation"
                id="designation"
                options={branchOptions}
                required={true}
              />
            </div>
            <div className="flex flex-col w-1/3">
              <CommonDropdown
                label="Employee Type"
                id="employeetype"
                options={branchOptions}
              />
            </div>
            <div className="flex flex-col w-1/3">
              <CommonDropdown
                label="Employee Status"
                id="employeestatus"
                options={branchOptions}
                required={true}
              />
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg gap-5 flex flex-col">
          <p className="font-medium mb-3">Employee Personal Details</p>
          <div className="flex justify-between gap-3">
            <div className="flex w-1/3 gap-3">
              <div className="flex flex-col w-1/2">
                <CommonDropdown
                  label="Title"
                  id="Title"
                  options={branchOptions}
                  required={true}
                />
              </div>
              <div className="flex flex-col w-1/2">
                <CommonTextInput
                  label="Initials"
                  id="initials"
                  required={true}
                />
              </div>
            </div>
            <div className="flex flex-col w-2/3">
              <CommonTextInput
                label="Name denoted by initials"
                id="namedenotedbyinitials"
                required={true}
              />
            </div>
          </div>
          <div className="flex justify-between gap-3">
            <div className="flex flex-col w-1/3">
              <CommonTextInput
                label="First Name"
                id="firstname"
                required={true}
              />
            </div>
            <div className="flex flex-col w-1/3">
              <CommonTextInput label="Middle Name" id="middlename" />
            </div>
            <div className="flex flex-col w-1/3">
              <CommonTextInput
                label="Last Name"
                id="lastname"
                required={true}
              />
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg gap-5 flex flex-col">
          <p className="font-medium mb-3">Employee Contact Details</p>
          <div className="flex justify-between gap-3">
            <div className="flex flex-col w-1/2">
              <CommonTextInput
                label="Mobile Number"
                id="mobilenumber"
                required={true}
              />
            </div>
            <div className="flex flex-col w-1/2">
              <CommonTextInput
                label="Email Address"
                id="email"
                required={true}
              />
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg gap-5 flex flex-col">
          <p className="font-medium mb-3">Employee Education Details</p>

          {employeeData.education.map((edu, index) => (
            <div key={index} className="flex gap-3 items-center">
              <div className="flex flex-col w-1/3">
                <CommonTextInput
                  name="degree"
                  type="text"
                  placeholder="Degree"
                  value={edu.degree}
                  onChange={(e) => handleEducationChange(index, e)}
                />
              </div>
              <div className="flex flex-col w-1/3">
                <CommonTextInput
                  type="text"
                  name="institution"
                  placeholder="Institution"
                  value={edu.institution}
                  onChange={(e) => handleEducationChange(index, e)}
                />
              </div>
              <div className="flex flex-col w-1/3">
                <CommonTextInput
                  type="number"
                  name="graduationYear"
                  placeholder="Graduation Year"
                  value={edu.graduationYear}
                  onChange={(e) => handleEducationChange(index, e)}
                />
              </div>
              <div className="hover:bg-red-300 rounded-full h-8 w-8 flex items-center justify-center transition-colors duration-300">
                <img
                  className="h-5 w-5"
                  onClick={() => removeEducationField(index)}
                  src={deleteIcon}
                />
              </div>
            </div>
          ))}
          <div className="flex self-end">
            <button
              className="bg-mainColor hover:bg-[#3A5DF3] py-2 px-8 rounded-xl text-[12px] text-white font-poppins font-light transition-colors duration-300"
              type="button"
              onClick={addEducationField}
            >
              Add More
            </button>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg gap-5 flex flex-col">
          <p className="font-medium mb-3">Employee Certification Details</p>

          {employeeData.certifications.map((edu, index) => (
            <div key={index} className="flex gap-3 items-center">
              <div className="flex flex-col w-1/3">
                <CommonTextInput
                  name="certificationNumber"
                  type="text"
                  placeholder="Certification Number"
                  value={edu.certificationNumber}
                  onChange={(e) => handleCertificationChange(index, e)}
                />
              </div>
              <div className="flex flex-col w-1/3">
                <CommonTextInput
                  type="date"
                  name="issuedDate"
                  placeholder="Issued Date"
                  value={edu.issuedDate}
                  onChange={(e) => handleCertificationChange(index, e)}
                />
              </div>
              <div className="flex flex-col w-1/3">
                <CommonTextInput
                  type="date"
                  name="expiryDate"
                  placeholder="Expiry Date"
                  value={edu.expiryDate}
                  onChange={(e) => handleCertificationChange(index, e)}
                />
              </div>
              <div className="hover:bg-red-300 rounded-full h-8 w-8 flex items-center justify-center transition-colors duration-300">
                <img
                  className="h-5 w-5"
                  onClick={() => removeCertificationField(index)}
                  src={deleteIcon}
                />
              </div>
            </div>
          ))}
          <div className="flex self-end">
            <button
              className="bg-mainColor hover:bg-[#3A5DF3] py-2 px-8 rounded-xl text-[12px] text-white font-poppins font-light transition-colors duration-300"
              type="button"
              onClick={addCertificationField}
            >
              Add More
            </button>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg gap-5 flex flex-col">
          <p className="font-medium mb-3">Employee Skills</p>

          {employeeData.skills.map((edu, index) => (
            <div key={index} className="flex gap-3 items-center">
              <div className="flex flex-col w-1/2">
                <CommonTextInput
                  name="skillName"
                  type="text"
                  placeholder="Skill"
                  value={edu.skillName}
                  onChange={(e) => handleSkillChange(index, e)}
                />
              </div>
              <div className="flex flex-col w-1/2">
                <CommonTextInput
                  type="number"
                  name="proficiencyLevel"
                  placeholder="Proficiency Level"
                  value={edu.proficiencyLevel}
                  onChange={(e) => handleSkillChange(index, e)}
                />
              </div>
              
              <div className="hover:bg-red-300 rounded-full h-8 w-8 flex items-center justify-center transition-colors duration-300">
                <img
                  className="h-5 w-5"
                  onClick={() => removeSkillField(index)}
                  src={deleteIcon}
                />
              </div>
            </div>
          ))}
          <div className="flex self-end">
            <button
              className="bg-mainColor hover:bg-[#3A5DF3] py-2 px-8 rounded-xl text-[12px] text-white font-poppins font-light transition-colors duration-300"
              type="button"
              onClick={addSkillField}
            >
              Add More
            </button>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg gap-5 flex flex-col">
          <p className="font-medium mb-3">Employee Work Experience</p>

          {employeeData.workExperience.map((edu, index) => (
            <div key={index} className="flex gap-3 items-center">
              <div className="flex flex-col w-1/4">
                <CommonTextInput
                  name="company"
                  type="text"
                  placeholder="Company"
                  value={edu.company}
                  onChange={(e) => handleExperienceChange(index, e)}
                />
              </div>
              <div className="flex flex-col w-1/4">
                <CommonTextInput
                  type="text"
                  name="jobTitle"
                  placeholder="Job Title"
                  value={edu.jobTitle}
                  onChange={(e) => handleExperienceChange(index, e)}
                />
              </div>
              <div className="flex flex-col w-1/4">
                <CommonTextInput
                  type="date"
                  name="startDate"
                  placeholder="Start Date"
                  value={edu.startDate}
                  onChange={(e) => handleExperienceChange(index, e)}
                />
              </div>
              <div className="flex flex-col w-1/4">
                <CommonTextInput
                  type="date"
                  name="endDate"
                  placeholder="End Date"
                  value={edu.endDate}
                  onChange={(e) => handleExperienceChange(index, e)}
                />
              </div>
              
              <div className="hover:bg-red-300 rounded-full h-8 w-8 flex items-center justify-center transition-colors duration-300">
                <img
                  className="h-5 w-5"
                  onClick={() => removeExperienceField(index)}
                  src={deleteIcon}
                />
              </div>
            </div>
          ))}
          <div className="flex self-end">
            <button
              className="bg-mainColor hover:bg-[#3A5DF3] py-2 px-8 rounded-xl text-[12px] text-white font-poppins font-light transition-colors duration-300"
              type="button"
              onClick={addExperienceField}
            >
              Add More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
