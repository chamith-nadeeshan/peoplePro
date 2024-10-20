import React from "react";

const CommonDropdown = ({
  label,
  id,
  options,
  selectedValue,
  onChange,
  required,
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <label htmlFor={id} className="font-poppins text-[12px]">
          {label}
        </label>
        {required ? (
          <p className="text-red-500 font-poppins text-[12px]">*</p>
        ) : null}
      </div>
      <select
        value={selectedValue}
        onChange={onChange}
        id={id}
        className="font-poppins text-[12px] px-4 py-2 font-normal rounded-lg border-2 bg-inputBgColor"
      >
        <option value="">--Select an option--</option>
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CommonDropdown;
