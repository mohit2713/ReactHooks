import React, { useRef } from "react";
import Button from "./Button";

const UseImperativeHandle = () => {
  const buttonRef = useRef(null);
  return (
    <div>
      <button
        style={{ width: "300px", "font-size": 30, margin: 10, padding: 5 }}
        onClick={() => {
          buttonRef.current.alterToggle();
        }}
      >
        Button From Parent
      </button>
      <Button ref={buttonRef} />
    </div>
  );
};

export default UseImperativeHandle;
