import { createContext, useState } from "react";
export type ContextOfLogin =
  | "LoginInitial"
  | "LoginInPayment"
  | "LoginInReservation";

export const UserContext = createContext<{
  user?: any;
  setUser?: any;
  setContextOfLogin?: (data: ContextOfLogin) => void;
  contextOfLogin?: ContextOfLogin;
}>({});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [contextOfLogin, setContextOfLogin] =
    useState<ContextOfLogin>("LoginInitial");

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        setContextOfLogin,
        contextOfLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
