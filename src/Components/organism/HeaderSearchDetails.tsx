import styled from "styled-components/native";
import { CitySearchDetails } from "../molecules/CitySearchDatails";
import { FontAwesome } from "@expo/vector-icons";
import { ButtonBack } from "../atoms/ButtonBack";
export const HeaderSearchDetails = ({ cityName, date }) => {
  return (
    <AreaDetails>
      <ButtonBack key={1} action={() => {}} />
      <CitySearchDetails cityName="Juazeiro do norte" date="01/02/2024" />
      <FontAwesome name="arrow-right" size={24} color="black" />
      <CitySearchDetails cityName="Juazeiro do norte" date="01/02/2024" />
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
