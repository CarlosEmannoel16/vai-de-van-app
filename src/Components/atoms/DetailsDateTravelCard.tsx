import styled from "styled-components/native";
import { Ionicons } from '@expo/vector-icons';
export const DetailsDateTravelCard = ({}) => {
  return (
    <AreaDetails>
    <TextStops>1 parada</TextStops>
    <Ionicons name="notifications" size={24} color="black" />
      <TextInfo>05:45</TextInfo>
    </AreaDetails>
  );
};

const AreaDetails = styled.View`
  display: flex;
  width: 30%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
`;

const TextInfo = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #000;
`;

const TextStops = styled.Text`
    font-size: 12px;
    font-weight: 400;
    color: #000;
    `;
