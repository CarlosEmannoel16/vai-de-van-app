import { createContext, useState } from "react";

export const TravelsSearchContext = createContext<{
  travelsSearch?: any;
  setTravelsSearch?: any;
  setDestines?: any;
  destines?: any;
  inSearch?: any;
  setInSearch?: any;
  travelSelected?: any;
  setTravelSelected?: any;
}>({});

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
        travelSelected,
      }}
    >
      {children}
    </TravelsSearchContext.Provider>
  );
};
