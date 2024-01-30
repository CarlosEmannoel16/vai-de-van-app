import styled from "styled-components/native";
import { InfoTaxasCardTravel } from "../atoms/InforTaxasCardTravel";

export const FootCardTravel = ({}) => {
  return (
    <AreaFoot>
      <InfoTaxasCardTravel  />
    </AreaFoot>
  );
};


const AreaFoot = styled.View`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #e5e1e1;
  padding: 10px;
`;