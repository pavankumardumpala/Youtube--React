import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className=" text-xs bg-gray-200 m-4 px-2 py-1 rounded-md cursor-pointer hover:bg-gray-400   ">
        {name}
      </button>
    </div>
  );
};

export default Button;
