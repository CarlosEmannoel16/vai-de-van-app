import { createContext, useState } from "react";

export const TravelsSearchContext = createContext();

export const TravelSearchContextProvider = ({ children }) => {
  const [destines, setDestines] = useState({
    origin: "",
    destiny: "",
  });

  const [inSearch, setInSearch] = useState(false);
  const [travelsSearch, setTravelsSearch] = useState([]);
  const [travelSelected, setTravelSelected] = useState({});

  return (
    <TravelsSearchContext.Provider
      value={{
        travelsSearch,
        setTravelsSearch,
        setDestines,
        destines,
        inSearch,
        setInSearch,
        setTravelSelected,
        travelSelected
      }}
    >
      {children}
    </TravelsSearchContext.Provider>
  );
};
