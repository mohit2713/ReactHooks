import React, { createContext, useState } from "react";
import Login from "./Login";
import User from "./User";

export const AppContext = createContext(null);

const ContextTutorial = () => {
  const [userName, setUserName] = useState("Enter Username");
  return (
    <AppContext.Provider value={{ userName, setUserName }}>
      <Login />
      <User />
    </AppContext.Provider>
  );
};

export default ContextTutorial;

// ** Context provides a way to pass data or state through the component tree without having to pass props down manually through each nested component.
// It is designed to share data that can be considered as global data for a tree of React components, such as the current authenticated user or theme(e.g. color, paddings, margins, font-sizes).

// ** Context API uses Context. Provider and Context. Consumer Components pass down the data but it is very cumbersome to write the long functional code to use this Context API.

// eg:-            <MainContext.Consumer>
//               {
//                   user =>{
//                      return<div>{user} is Best Online Learning Platform</div>
//                   }
//               }
//           </MainContext.Consumer>

// ** So useContext hook helps to make the code more readable, less verbose and removes the need to introduce Consumer Component. The useContext hook is the new addition in React 16.8.

// useContext theory:-
// When we start making React applications, we have to share data between multiple components from the Main Component with the help of props.
// Passing data from a Main component to a sub-component is straightforward when only a few levels of components are involved. At some point in your React app developments,
// you may have needed to pass data to a number of components. Doing this via props can be tedious and repetitive, making it a perfect candidate for useContext React.

// There are three steps to implement when making use of context

// 1.Create the Context
// 2.Providing the Context with a Value
// 3.Consume the Context Value

// We can create our Context using createContext function from React. While createContext remember to export it as we'll need it outside of this file.

// A Provider allows all its children components to subscribe to the context's changes. The Provider must wrap the children's components for the values to be available so we wrap the component Parent.

// 1.Q: What are the disadvantages of useContext hook?
// A: useContext hook is very beneficial in our react applications, however it is not very useful when the size and complexity of application becomes larger.

// 2.Q: When we can use useContext?
// A: When we want a variable which can be accessed anywhere in our application, then we use useContext.

// 3.Q: Which is better, useContext hook or react redux?
// A: When our application is small then useContext is better, on the other hand Redux is more powerful and comes with features that useContext does not have, hence it is more suitable for bigger applications.

// 4.Q: Can useContext be used in class based components?
// A: No, we cannot use useContext in class based components.
