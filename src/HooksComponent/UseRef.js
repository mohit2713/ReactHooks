import { useRef } from "react";

// useRef returns a `ref object` with a single `current property` initially set to the initial value you provided.

// useRef is a React Hook that lets you reference a value that’s not needed for rendering.

// useRef is usefull when you want to manipulate the dom and access the dom.

// Parameters:-
// initialValue: The value you want the ref object’s current property to be initially. It can be a value of any type. This argument is ignored after the initial render.

// Returns:-
// useRef returns an object with a single property:
// current: Initially, it’s set to the initialValue you have passed. You can later set it to something else. If you pass the ref object to React as a ref attribute to a JSX node, React will set its current property.
// On the next renders, useRef will return the same object.

// When you change the ref.current property, React does not re-render your component.
// React is not aware of when you change it because a ref is a plain JavaScript object.

// You can change its current property to store information and read it later.
// Changing a ref does not trigger a re-render.

// Usage:-
// 1. Reference a value with ref.
// 2. Manipulating the DOM with ref.

const UseRef = () => {
  const inputRef = useRef(null);

  const onClick = () => {
    inputRef.current.value = "";
  };
  return (
    <div>
      <h1>Pedro</h1>
      <input
        style={{
          width: "200px",
          height: "30px",
          fontSize: 20,
          margin: 5,
          padding: 5,
        }}
        type="text"
        placeholder="Ex..."
        ref={inputRef}
      />
      <button
        style={{ height: "45px", width: "200px", margin: 5, padding: 5 }}
        onClick={onClick}
      >
        Empty Name
      </button>
    </div>
  );
};

export default UseRef;
