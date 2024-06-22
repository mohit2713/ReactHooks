import React, { useContext } from "react";
import { AppContext } from "./ContextTutorial";

const Login = () => {
  const { setUserName } = useContext(AppContext);
  return (
    <div>
      <input
        style={{
          width: 400,
          height: 50,
          margin: 50,
          padding: 5,
          fontSize: 20,
        }}
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
    </div>
  );
};

export default Login;
