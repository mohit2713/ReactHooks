import React, { memo } from "react";

const Child = ({ data }) => {
  console.log("Child is called");
  const value = data;
  return (
    <div>
      Child Component
      <div>{data && <h1>{data.name}</h1>}</div>
      <div>{data && <h1>{data.age}</h1>}</div>
    </div>
  );
};
function arePropsEqual(prevProps, nextProps) {
  // console.log(prevProps.data === nextProps.data);
  if (prevProps.data.age != nextProps.data.age) {
    return false;
  }
  return true;
}
export default memo(Child, arePropsEqual); // arePropsEual used for Deep Comparisons and used to add more complex conditions.

// memo lets you skip re-rendering a component when its props are unchanged.

// This memoized version of your component will usually not be re-rendered when its parent component is re-rendered as long as its props have not changed.
// But React may still re-render it: memoization is a performance optimization, not a guarantee.

// Usage:-
// 1.Skipping re-rendering when props are unchanged
// 2.Updating a memoized component using state
// 3.Updating a memoized component using a context
// 4.Minimizing props changes
// 5.Specifying a custom comparison function
