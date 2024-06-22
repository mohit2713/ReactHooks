import { useEffect, useLayoutEffect, useRef } from "react";

// **** useLayoutEffect is used to change the layout of the application before its print out to the user.
// More"-
// useLayoutEffect is a version of useEffect that fires before the browser repaints the screen.
// useLayoutEffect can hurt performance. Prefer useEffect when possible.
// useLayoutEffect is called before the component render on the page.

// Returns:-
// useLayoutEffect returns undefined.

// Usage:-
// Measuring layout before the browser repaints the screen.
// Call useLayoutEffect to perform the layout measurements before the browser repaints the screen.

const UseLayout = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.value = "HELLO";
  }, []);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  return (
    <div>
      <input
        ref={inputRef}
        value="PEDRO"
        style={{
          width: 400,
          height: 100,
          margin: 50,
          padding: 5,
          fontSize: 20,
        }}
      />
    </div>
  );
};

export default UseLayout;
