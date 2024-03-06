import styled from "styled-components/native";
import { CitySearchDetails } from "../molecules/CitySearchDatails";
import { FontAwesome } from "@expo/vector-icons";
import { ButtonBack } from "../atoms/ButtonBack";

import { useNavigationController, useTravelsSearch } from "../../hooks";
export const HeaderSearchDetails = () => {
  const { destines } = useTravelsSearch();
  const { changeToTab } = useNavigationController();
  const destine = destines.destiny.label;
  const origin = destines.origin.label;
  return (
    <AreaDetails>
      <ButtonBack
        key={1}
        action={() => {
          changeToTab();
        }}
      />
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
  background-color: #fff;
  box-shadow: 1px 3px 4px #00000040;
  z-index: 10;
`;
