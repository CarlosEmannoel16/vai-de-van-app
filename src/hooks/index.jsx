import { useContext } from "react";
import { UserContext } from "./UserContext";
import { TravelsSearchContext } from "./TravelsSearch";

export const useUser = () => {
  const { user, setUser } = useContext(UserContext);
  return { user, setUser };
};

export const useTravelsSearch = () => {
  const {
    travelsSearch,
    setTravelsSearch,
    setDestines,
    destines,
    inSearch,
    setInSearch,
    travelSelected,
    setTravelSelected,
  } = useContext(TravelsSearchContext);
  return {
    travelsSearch,
    setTravelsSearch,
    setDestines,
    destines,
    inSearch,
    setInSearch,
    travelSelected,
    setTravelSelected,
  };
};
