import styled from "styled-components/native";
import { CitySearchDetails } from "../molecules/CitySearchDatails";
import { FontAwesome } from "@expo/vector-icons";
import { ButtonBack } from "../atoms/ButtonBack";
import { useContext } from "react";
import { TravelsSearchContext } from "../../hooks/TravelsSearch";
export const HeaderSearchDetails = () => {
  const { setInSearch, destinies } = useContext(TravelsSearchContext);
  const { destines } = useContext(TravelsSearchContext);
  const destine = destines.destiny.label;
  const origin = destines.origin.label;
  return (
    <AreaDetails>
      <ButtonBack key={1} action={() => {setInSearch(false)}} />
      <CitySearchDetails cityName={origin} date="01/02/2024" />
      <FontAwesome name="arrow-right" size={24} color="black" />
      <CitySearchDetails cityName={destine} date="01/02/2024" />
    </AreaDetails>
  );
};

 const AreaDetails = styled.View`
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
