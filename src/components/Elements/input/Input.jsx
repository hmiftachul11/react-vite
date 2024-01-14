import React from "react";

const Input = (props) => {
    const {type, placeholder, name} = props
  return (
    <div>
      <input
        type={type}
        className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-50"
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

export default Input;
