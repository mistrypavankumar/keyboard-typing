import { useRef, useEffect } from "react";

import { keyboard_button } from "../data/keyboard_button";
import KeyButton from "./KeyButton";
const KeyBoard = () => {
  const accessKey = useRef(null);

  const keys = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  const timestamps = [];

  const getTimestamp = () => {
    return Math.floor(Date.now() / 1000);
  };

  timestamps.unshift(getTimestamp());

  // Generating a random number
  const getRamdomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getRandomKey = () => {
    return keys[getRamdomNumber(0, keys.length)];
  };

  const targetRamdomKey = () => {
    const key = accessKey.current.id == getRandomKey() && getRandomKey();
    key.classList.add("selected");

    console.log(key);

    let start = Date.now();
  };

  const key = accessKey.current.id;
  console.log(key);

  useEffect(() => {
    document.addEventListener("keyup", (event) => {
      const keyPressed = String.fromCharCode(event.keyCode);
      const keyElement = accessKey.current.id == keyPressed && keyPressed;
      const highlightedKey = accessKey.current.querySelector(".selected");

      keyElement.classList.add("hit");
      keyElement.addEventListener("animationed", () => {
        keyElement.classList.remove("hit");
      });

      if (keyPressed === highlightedKey.innerText) {
        timestamps.unshift(getTimestamp());
        const elapsedTime = timestamps[0] - timestamps[1];
        console.log(`Characters per minute: ${60 / elapsedTime}`);

        highlightedKey.classList.remove("selected");
        targetRamdomKey();
      }
    });
    return () => {};
  });
  return (
    <div className="keyboard">
      <h1 className="title">MG-Typing</h1>
      {keyboard_button.map((list, index) => {
        return <KeyButton key={index} rowsData={list.row} />;
      })}
    </div>
  );
};

export default KeyBoard;
