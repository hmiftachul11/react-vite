import React from "react";

const Label = (props) => {
  const { children, htmlFor } = props;
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block text-slate-700 text-sm font-bold mb-2"
      >
        {children}
      </label>
    </div>
  );
};

export default Label;
