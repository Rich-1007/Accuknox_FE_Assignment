import React, { useState } from "react";
import { data } from "./helpers";
import { ColorInput, TextInput } from "./Input";

const MainItem = () => {
  const [textElements, setTextElements] = useState(data);

    console.log(textElements);

  const clickHandler = (btnText, textElementId, inputValue=null) => {
    if (btnText === "Bold") {
      boldText(textElementId);
    }
    if (btnText === "Italic") {
      italicText(textElementId);
    }
    if (btnText === "Underline") {
      underlineText(textElementId);
    }
    if(btnText === "Change size"){
      console.log("Hello");
      changeFontSize(textElementId, inputValue)

    }
    if(btnText === "Change color"){
      console.log("Hello");
      changeColor(textElementId, inputValue)
    }
  };

  const changeFontSize = (textElementId, newFontSize) => {
    const modifiedArray = textElements.map((item) => {
      return item.id === textElementId
        ? { ...item, fontSize:newFontSize  }
        : item;
    });
    setTextElements(modifiedArray);
  }

  const changeColor = (textElementId, newColor) => {
    const modifiedArray = textElements.map((item) => {
      return item.id === textElementId
        ? { ...item, color:newColor  }
        : item;
    });
    setTextElements(modifiedArray);
  }

  const boldText = (textElementId) => {
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
      <h1 className="text-center pt-4 text-3xl"> Assignment </h1>

      <div className=" p-3 sm:p-10 m-3 sm:m-12  flex flex-col border-2 border-gray-800 justify-center gap-10 sm:gap-10 ">
        {textElements.map((item) => {
          return (
            <div key={item.id} className="   ">
              <div className="">
                <div className="flex sm:flex-row  flex-col gap-3 ">
                  <div className="border-gray-600 text-white   border p-5 flex gap-5 sm:w-1/2 sm:justify-around flex-wrap  justify-center">
                    {item.buttons.map((button, index) => {
                      return button.hasInput ? (
                        button.type === "number" ? (
                          <TextInput key={index} handler={clickHandler} data={item} button={button} />
                        ) : (
                          <ColorInput key={index} handler={clickHandler}  data={item} button={button} />
                        )
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
                        style={{color: item.color, fontSize:`${item.fontSize}px`}}
                        className={` ${item.isBold && "font-bold"} ${
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
