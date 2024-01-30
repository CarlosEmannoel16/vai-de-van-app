import styled from "styled-components/native";
import { DetailsCardTravel } from "../atoms/DetailsCardTravel";
import { DetailsDateTravelCard } from "../atoms/DetailsDateTravelCard";

export const BodyCardTravel = ({}) => {
  return (
    <AreaBody>
      <DetailsCardTravel />
      <DetailsDateTravelCard />
      <DetailsCardTravel />
    </AreaBody>
  );
};

const AreaBody = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
`;
