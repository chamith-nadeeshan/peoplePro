import React from "react";

const CommonTextInput = ({label, id, value, onChange, required, placeholder, name, type}) => {
  return (
    <div className="flex flex-col">
        <div className="flex gap-1">
      <label className="font-poppins text-[12px]">{label}</label>
       {required ? <p className="text-red-500 font-poppins text-[12px]">*</p> : null}
        </div>
      <input
        className="font-poppins text-[12px] px-4 py-2 font-normal rounded-lg border-2 bg-inputBgColor"
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default CommonTextInput;
