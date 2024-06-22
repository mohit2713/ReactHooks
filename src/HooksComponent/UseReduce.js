import { useReducer } from "react";
 
// useReducer hook :- 
// useReducer hook is a Replacement or a alternative to the useState hook, They have the same purpose.
// They are used to create values and when the values changed the page will rerender to show those new values.

// When to use:-
// In situation when you have some buttons or a trigger that triggers some couple of actions and if it is more the one action then you might use useReducer hook.
// So you don't have to actually using many different states and changing each state individually. 
// So rather you have a single state that keep track of all the states and collectively manage them and change them.


// Creating reducer function which is used inside useReducer hook.
const reducer = (state, action) => {
  // state :- Is the Collection states that is currently managing. Constant access of the each current state you have in your reducer hook.
  // action:- The way we will determine what kind of actions we wanna take and what we will do with each of our states.

  // Boiler plate for wokring with useReducer hook that we will use a switch case.
  switch (action.type) {
    case "INCREMENT":
      // INCREMENT : Is the action we wanna take or Name of the action is INCREMENT.
      return { count: state.count + 1, showText: state.showText }; //Return object including count (value of count is current count state value + 1) and showText (current state of showText)
    case "toggleShowText":
      return { count: state.count, showText: !state.showText }; //Return object including count (current count state) and showText ( reverse of current state of showText)
    case "DECREMENT":
      return { count: state.count - 1, showText: !state.showText };
    default:
      return state;
  }
};

const UseReduce = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true }); // In useReducer hook we will pass reducer fuction and initial states.

  // state = It's hold different states.
  // dispatch = dispatch function is used to change value of our states. This dispatch function will be called whenever we alter any state.

  return (
    <div>
      <h1>{state.count}</h1>
      <button
        style={{ width: "200px", "font-size": 30, margin: 10, padding: 5 }}
        onClick={() => {
          dispatch({ type: "INCREMENT" }); // Calling "INCREMENT" action from reducer function.
          dispatch({ type: "toggleShowText" }); // Calling "toggleShowText" action from reducer function.
        }}
      >
        Increment
      </button>
      <button
        style={{ width: "200px", "font-size": 30, margin: 10, padding: 5 }}
        onClick={() => {
          dispatch({ type: "DECREMENT" }); // Calling "DECREMENT" action from reducer function.
        }}
      >
        Decrement
      </button>
      {state.showText && <p style={{ fontSize: 30 }}>This is a text</p>}
    </div>
  );
};

export default UseReduce;
