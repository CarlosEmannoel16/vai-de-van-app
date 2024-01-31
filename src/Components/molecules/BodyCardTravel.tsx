import styled from "styled-components/native";
import { DetailsCardTravel } from "../atoms/DetailsCardTravel";
import { DetailsDateTravelCard } from "../atoms/DetailsDateTravelCard";
import { useContext } from "react";
import { TravelsSearchContext } from "../../hooks/TravelsSearch";

export const BodyCardTravel = () => {
  const { destines } = useContext(TravelsSearchContext);
  const destine = destines.destiny.label;
  const origin = destines.origin.label;

  return (
    <AreaBody>
      <DetailsCardTravel label={origin} />
      <DetailsDateTravelCard />
      <DetailsCardTravel  label={destine} />
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
