import styled from "styled-components/native";
import { TextsCardTravels } from "../atoms/TextsCardTravels";

export const HeaderCardTravel = ({ value = "" }) => {
  return (
    <AreaHeader>
      <TextsCardTravels value={value} />
    </AreaHeader>
  );
};

const AreaHeader = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f04842;
  padding: 10px;
  border-radius: 10px;
`;
