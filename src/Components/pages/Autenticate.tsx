import { useState } from "react";
import { Login } from "./Login";
import { Register } from "./Register";

export const Authentication = () => {
  const [inLogin, setInLogin] = useState(true);

  const changeToLogin = () => {
    setInLogin(true);
  };

  const changeToRegister = () => {
    setInLogin(false);
  };

  return (
    <>
      {inLogin ? (
        <Login changeToRegister={changeToRegister} />
      ) : (
        <Register changeToLogin={changeToLogin} />
      )}
    </>
  );
};
