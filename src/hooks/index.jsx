import { useContext } from "react";
import { UserContext } from "./UserContext";
import { TravelsSearchContext } from "./TravelsSearch";
import { NavigationContext } from "./NavigationController";

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

export const useNavigationController = () => {
  const { changeToStack, changeToTab, mode, page } = useContext(NavigationContext);
  return { changeToStack, changeToTab, mode, page };
};
