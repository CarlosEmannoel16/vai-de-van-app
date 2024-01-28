import { createContext, useState } from "react";

export const TravelsSearchContext = createContext();

export const TravelSearchContextProvider = ({ children }) => {
  const [destines, setDestines] = useState({
    origin: "",
    destiny: "",
  });

  const [inSearch, setInSearch] = useState(false);
  const [travelsSearch, setTravelsSearch] = useState([]);

  return (
    <TravelsSearchContext.Provider
      value={{
        travelsSearch,
        setTravelsSearch,
        setDestines,
        destines,
        inSearch,
        setInSearch,
      }}
    >
      {children}
    </TravelsSearchContext.Provider>
  );
};
