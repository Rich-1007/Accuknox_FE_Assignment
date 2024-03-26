import React from "react";

const Grid = () => {
  return (
    <div className="p-3 sm:p-10 m-3 sm:m-12  flex flex-col border-2 border-gray-800 justify-center gap-10 sm:gap-10 ">
      <div className="flex sm:flex-row  flex-col gap-3  ">
       
       
       
        <div className="border-gray-600 text-white  border p-2 flex gap-1 sm:w-1/2 sm:justify-around flex-wrap  justify-center ">
          
          
          
          <button className="bg-green-600 rounded-md px-3 py-1 ">Bold</button>

          <button className="bg-green-600 rounded-md px-3 py-1">Italic</button>
          <button className="bg-green-600 rounded-md px-3 py-1">
            Underline
          </button>

          <div>
            {" "}
            <input
              type="number"
              className="text-gray-800  w-1/6 border-2  rounded-sm"
            />
            <button className="bg-green-600 rounded-md px-3 py-1">
              Font-Size
            </button>
          </div>

          <div>
            <input
              type="text"
              className="text-gray-800  w-2/6 border-2  rounded-sm"
            />
            <button className="bg-green-600 rounded-md px-3 py-1">Color</button>
          </div>
        </div>

        <div className="border-gray-600 border p-3 sm:w-1/2 text-center text-lg ">
        He's not the sharpest knife in the drawer.
        </div>
      </div>

      <div className="flex sm:flex-row  flex-col gap-3">
        <div className="border-gray-600 text-white border p-2 flex gap-1 sm:w-1/2 sm:justify-around flex-wrap  justify-center">
          <button className="bg-green-600 rounded-md px-3 py-1">Bold</button>

          <button className="bg-green-600 rounded-md px-3 py-1">Italic</button>
          <button className="bg-green-600 rounded-md px-3 py-1">
            Underline
          </button>
          <button className="bg-green-600 rounded-md px-3 py-1">
            Font-Size
          </button>
          <button className="bg-green-600 rounded-md px-3 py-1">Color</button>
        </div>

        <div className="border-gray-600 border p-3 sm:w-1/2 text-lg text-center">
          The big bulding was blazing with lights.
        </div>
      </div>

      <div className="flex sm:flex-row justify-evenly flex-col gap-3">
        <div className="border-gray-600 text-white border p-2 flex gap-1 sm:w-1/2 sm:justify-around flex-wrap  justify-center">
          <button className="bg-green-600 rounded-md px-3 py-1">Bold</button>
          <button className="bg-green-600 rounded-md px-3 py-1">Italic</button>
          <button className="bg-green-600 rounded-md px-3 py-1">
            Underline
          </button>
          <button className="bg-green-600 rounded-md px-3 py-1">
            Font-Size
          </button>
          <button className="bg-green-600 rounded-md px-3 py-1">Color</button>
        </div>

        <div className="border-gray-600 border p-3 sm:w-1/2 text-lg text-center">
        Now you must answer some big questions.
        </div>
      </div>

      <div className="flex sm:flex-row justify-evenly flex-col gap-3">
        <div className="border-gray-600 border p-2 flex gap-1 text-white sm:w-1/2 sm:justify-around flex-wrap  justify-center">
          <button className="bg-green-600 rounded-md px-3 py-1">Bold</button>
          <button className="bg-green-600 rounded-md px-3 py-1">Italic</button>
          <button className="bg-green-600 rounded-md px-3 py-1">
            Underline
          </button>
          <button className="bg-green-600 rounded-md px-3 py-1">
            Font-Size
          </button>
          <button className="bg-green-600 rounded-md px-3 py-1">Color</button>
        </div>

        <div className="border-gray-600 border p-3 text-center sm:w-1/2 text-lg">
        Get Your Act Together!
        </div>
      </div>
    </div>
  );
};

export default Grid;
