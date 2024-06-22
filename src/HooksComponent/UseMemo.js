import React, { useMemo } from "react";

// Defination :-useMemo is a React Hook that lets you cache the result of a calculation between re-renders.

//useMemo :- Itis used to improved performance and be able to reduce latency on huge computation you make in your application.
// Computation like heavy Algorithm or heavy calculations.

// Usage:-
// 1.Skipping expensive recalculations
// 2.Skipping re-rendering of components
// 3.Memoizing a dependency of another Hook
// 4.Memoizing a function

const UseMemo = () => {
  //  const visibleTodos = useMemo(() => filterTodos(todos, tab), []);
  return <div>UseMemo</div>;
};

export default UseMemo;
