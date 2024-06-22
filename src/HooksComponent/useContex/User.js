import React, { useContext } from "react";
import { AppContext } from "./ContextTutorial";

const User = () => {
  const { userName } = useContext(AppContext);
  return (
    <div
      style={{
        fontSize: 40,
      }}
    >
      User: {userName}
    </div>
  );
};

export default User;
