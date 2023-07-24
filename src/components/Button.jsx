import React from "react";

const Button = ({ value, additionalClasses, onClick }) => {
  return (
    <button
      className={` text-xl font-bold rounded-md  ${
        additionalClasses
          ? additionalClasses
          : "bg-white p-5 hover:bg-slate-200"
      }`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Button;
