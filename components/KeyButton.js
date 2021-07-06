import { useRef, useEffect } from "react";

const KeyButton = (props) => {
  const datas = props.rowsData;

  return (
    <>
      <ul>
        {datas.map((data, index) => {
          return (
            <li
              key={index}
              ref={accessKey}
              className={data.fingerName}
              id={data.keyName}
            >
              {data.keyName}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default KeyButton;
