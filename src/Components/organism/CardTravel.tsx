import styled from "styled-components/native";
import { HeaderCardTravel } from "../molecules/HeaderCardTravel";
import { Text } from "react-native";
import { BodyCardTravel } from "../molecules/BodyCardTravel";
import { FootCardTravel } from "../molecules/FooterCardTravel";

export const CardTravel = ({}) => {
  return (
    <AreaCard>
      <HeaderCardTravel />
      <BodyCardTravel />
      <FootCardTravel />
    </AreaCard>
  );
};

const AreaCard = styled.View`
  display: flex;
  margin-bottom: 20px;
  height: 300px;
  width: 100%;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 1px #00000080;
`;
