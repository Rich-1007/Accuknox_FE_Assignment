import React, { useState } from "react";
import { data } from "./helpers";
import { ColorInput, TextInput } from "./Input";

const MainItem = () => {
  const [textElements, setTextElements] = useState(data);

  console.log(textElements);

  const clickHandler = (btnText, textElementId, inputValue = null) => {
    if (btnText === "Bold") {
      boldText(textElementId);
    }
    if (btnText === "Italic") {
      italicText(textElementId);
    }
    if (btnText === "Underline") {
      underlineText(textElementId);
    }
    if (btnText === "Change size") {
      console.log("Hello");
      changeFontSize(textElementId, inputValue);
    }
    if (btnText === "Change color") {
      console.log("Hello");
      changeColor(textElementId, inputValue);
    }
  };

  const changeFontSize = (textElementId, newFontSize) => {
    const modifiedArray = textElements.map((item) => {
      return item.id === textElementId
        ? { ...item, fontSize: newFontSize }
        : item;
    });
    setTextElements(modifiedArray);
  };

  const changeColor = (textElementId, newColor) => {
    const modifiedArray = textElements.map((item) => {
      return item.id === textElementId ? { ...item, color: newColor } : item;
    });
    setTextElements(modifiedArray);
  };

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
      
    </div>
  );
};

export default MainItem;
