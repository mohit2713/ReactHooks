import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [person, setPerson] = useState({ name: "Demo", age: 4 });
  console.log(person);
  const [count, setCount] = useState(0);
  console.log("Parent Called");
  return (
    <div>
      <input
        type="text"
        style={{
          width: "400px",
          height: "30px",
          fontSize: 20,
          margin: 20,
          padding: 5,
        }}
        // value={name}
        placeholder="Enter Name"
        onChange={(e) => setPerson({ ...person, name: e.target.value })}
      />
      <input
        type="number"
        style={{
          width: "400px",
          height: "30px",
          fontSize: 20,
          margin: 20,
          padding: 5,
        }}
        // value={name}
        placeholder="Enter Age"
        onChange={(e) => setPerson({ ...person, age: e.target.value })}
      />
      <div>
        <div>
          <h1>{count}</h1>
          <button
            style={{
              width: "150px",
              height: "50px",
              fontSize: 20,
              margin: 10,
              padding: 10,
            }}
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>
        </div>
        <Child data={person} />
      </div>
    </div>
  );
};

export default Parent;
