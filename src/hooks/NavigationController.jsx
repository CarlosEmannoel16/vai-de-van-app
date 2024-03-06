import { createContext, useState } from "react";

export const NavigationContext = createContext();

export const NavigationContextProvider = ({ children }) => {
  const [mode, setMode] = useState("tab");
  const [page, setPage] = useState("Home");

  const changeToStack = (page = 'Perfil') => {
    setPage(page);
    setMode("stack");
  };

  const changeToTab = (page = 'Home') => {
    setPage(page);
    setMode("tab");
  };

  return (
    <NavigationContext.Provider
      value={{
        changeToStack,
        changeToTab,
        mode,
        page
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};
