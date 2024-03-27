import React, { useState } from "react";

export const ColorInput = ({ handler, data, button }) => {
  const [color, setColor] = useState("");
  return (
    // <input value={color} onChange={(e) => setColor(e.target.value)} />
    <div className="flex flex-col items-center ">
      <input
        type={button.type}
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="border-2 mb-1  text-gray-800 border-gray-400  w-4/6  rounded-sm"
      />

      <button
        className="bg-green-600  rounded-md px-3 py-1"
        onClick={() => {handler(button.btnText, data.id, color)
             setColor("") } }
        >
          
        {button.btnText}
      </button>


    </div>
  );
};

export const TextInput = ({ handler, data, button }) => {
  const [fontSize, setFontSize] = useState();
  return (
    <div className="flex flex-col items-center ">
      <input
        type={button.type}
        value={fontSize}
        onChange={(e) => setFontSize(e.target.value)}
        className="border-2 mb-1  text-gray-800 border-gray-400  w-4/6  rounded-sm"
      />

      <button
        className="bg-green-600  rounded-md px-3 py-1"
        onClick={() =>{ handler(button.btnText, data.id, fontSize)
        setFontSize("")}}
      >
        {button.btnText}
      </button>
    </div>
  );
};
