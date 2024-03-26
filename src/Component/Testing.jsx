import React, { useState } from "react";
import { data } from "./helpers";

const Testing = () => {
  const [textElements, setTextElements] = useState(data);

  return (
    <div>
      <div>Assinment</div>
      {textElements.map((item) => {
        return (
          <div className="flex gap-3 p-2 justify-around items-center w-full bg-gray-500">
            {item.buttons.map((button) => {
              return button.hasInput ? (
                <div className="flex   bg-green-500">
                    <input type={button.type} />
                  <button className="bg-red-700">{button.btnText}</button>
                </div>
              ) : (
                <div>
                  <button className="bg-red-700"> {button.btnText}</button>
                </div>
              );
            })}

            {
              <div>
                <p>{item.content}</p>
              </div>
            }
          </div>
        );
      })}
    </div>
  );
};

export default Testing;
