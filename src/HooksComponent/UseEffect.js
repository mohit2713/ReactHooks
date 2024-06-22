//useEffect is a React Hook that lets you synchronize a component with an external system.
// useEffect is a function which is called automatically when our page render.
// useEffect is called after the page render to the user.

// Dependency:- An array of all the states that you want to listen too. Every single state we pass here will triger useEffect on state change.
// Emtp Dependency :- useEffect will call once.

import { useEffect, useState } from "react";

// Usage:-
// 1. Connecting to an external system.
// 2. Fetching data with effects.
// 3. updating state based on previous state from an effect.
// 4. Display different content on the server and the client.

const UseEffect = () => {
  const [data, setData] = useState(0);

  useEffect(() => {
    // axios
    // .get("https://apiCall").then((response) => {
    //   setData(response.data);
    // });
  }, []);
  return <div>UseEffect</div>;
};

export default UseEffect;
