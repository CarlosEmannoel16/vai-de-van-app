import styled from "styled-components/native";
import { CitySearchDetails } from "../molecules/CitySearchDatails";
import { FontAwesome } from "@expo/vector-icons";
import { ButtonBack } from "../atoms/ButtonBack";
import { useContext } from "react";
import { TravelsSearchContext } from "../../hooks/TravelsSearch";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
export const HeaderReservation = () => {
  const navigation = useNavigation();

  return (
    <AreaDetails>
      <ButtonBack
        key={1}
        action={() => {
          navigation.goBack();
        }}
      />
     
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
  box-shadow: 1px 3px 4px #00000040;
  background-color: #fff;
  z-index: 10;
`;
