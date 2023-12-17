import { createContext, useState } from "react";

export const TravelsSearchContext = createContext();

export const TravelSearchContextProvider = ({ children }) => {
  const [travelsSearch, setTravelsSearch] = useState([]);

  return (
    <TravelsSearchContext.Provider value={{ travelsSearch, setTravelsSearch }}>
      {children}
    </TravelsSearchContext.Provider>
  );
};
