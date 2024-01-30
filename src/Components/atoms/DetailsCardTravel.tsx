import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export const DetailsCardTravel = ({}) => {
  return (
    <AreaDetails>
      <MaterialCommunityIcons name="bus-multiple" size={24} color="black" />
      <TextCity>Juazeiro do Norte</TextCity>
      <TextHour>05:45</TextHour>
    </AreaDetails>
  );
};

const AreaDetails = styled.View`
  display: flex;
  width: 40%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
`;

const TextHour = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #000;
`;

const TextCity = styled.Text`
  font-size: 12px;
  font-weight: 400;
  color: #000;
`;
