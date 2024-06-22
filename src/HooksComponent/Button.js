import React, { forwardRef, useImperativeHandle, useState } from "react";

// useImperativeHandle is a React Hook that lets you customize the handle exposed as a ref.

//Usage:- 
// ** Exposing a custom ref handle to the parent component
//Exposing your own imperative methods

// Parameters:-
// 1.ref (useImperativeHandle(ref): The ref you received as the second argument from the forwardRef render function.
// 2. createHandle (()=>({alterToggle() {})): A function that takes no arguments and returns the ref handle you want to expose. 
// That ref handle can have any type. Usually, you will return an object with the methods you want to expose.

const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));
  return (
    <div>
      <button
        style={{ width: "300px", "font-size": 30, margin: 10, padding: 5 }}
      >
        Button From Child
      </button>
      {toggle && <div style={{ "font-size": 30 }}>Toggle</div>}
    </div>
  );
});

export default Button;
