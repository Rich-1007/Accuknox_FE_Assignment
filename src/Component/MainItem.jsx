import React, { useState } from "react";
import { data } from "./helpers";

const MainItem = () => {
  const [textElements, setTextElements] = useState(data);

  //   console.log(data);

  const clickHandler = (btnText, textElementId) => {
    if (btnText === "Bold") {
      boldText(textElementId);
    }
    if (btnText === "Italic") {
      italicText(textElementId);
    }
    if (btnText === "Underline") {
      underlineText(textElementId);
    }
  };

  const boldText = (textElementId) => {
    // console.log("id : ", textElementId);

    const modifiedArray = textElements.map((item) => {
      return item.id === textElementId
        ? { ...item, isBold: !item.isBold }
        : item;
    });

    setTextElements(modifiedArray);

    // console.log(modifiedArray);
  };

  const italicText = (textElementId) => {
    const modifiedArray = textElements.map((item) => {
      return item.id === textElementId
        ? { ...item, isItalic: !item.isItalic }
        : item;
    });
    setTextElements(modifiedArray);
  };

  const underlineText = (textElementId) => {
    
    const modifiedArray = textElements.map((item) => {
      return item.id === textElementId
        ? { ...item, isUnderlined: !item.isUnderlined }
        : item;
    });
    setTextElements(modifiedArray);
  };
  // if(!textElements) return <h1>Loading...</h1>

  return (
    <div className=" ">
      <h1 className="text-center"> Assignment </h1>

      <div className=" p-3 sm:p-10 m-3 sm:m-12  flex flex-col border-2 border-gray-800 justify-center gap-10 sm:gap-10 ">
        {textElements.map((item) => {
          return (


            <div key={item.id} className="   ">
            
              <div className="">
            
                <div className="flex sm:flex-row  flex-col gap-3 ">
            
                  <div className="border-gray-600 text-white   border p-5 flex gap-5 sm:w-1/2 sm:justify-around flex-wrap  justify-center">
            
                    {item.buttons.map((button, index) => {
                      return button.hasInput ? (
                        <div
                          className="flex flex-col items-center "
                          key={index}
                        >
                          <input
                            type={button.type}
                            className="border-2 mb-1  text-gray-800  w-4/6  rounded-sm"
                          />

                          <button className="bg-green-600  rounded-md px-3 py-1">
                            {button.btnText}
                          </button>
                        </div>
                      ) : (
                        <button
                          key={index}
                          className="bg-green-600 rounded-md px-3 sm:px-12  py-1 self-center"
                          onClick={() => clickHandler(button.btnText, item.id)}
                        >
                          {button.btnText}
                        </button>
                      );
                    })}
                  </div>

                  {
                    <div className="sm:text-2xl border-gray-600 border p-3 sm:w-1/2 text-center text-lg flex justify-center items-center ">
                      <p
                        className={`${item.isBold && "font-bold"} ${
                          item.isItalic && "italic"
                        } ${item.isUnderlined && "underline"} `}
                      >
                        {item.content}
                      </p>
                    </div>
                  }
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainItem;
