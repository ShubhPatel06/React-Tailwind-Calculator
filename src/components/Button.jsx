import React from "react";

const Button = ({ value }) => {
  return (
    <button className="bg-white p-5 text-xl font-bold rounded-md hover:bg-slate-200">
      {value}
    </button>
  );
};

export default Button;
