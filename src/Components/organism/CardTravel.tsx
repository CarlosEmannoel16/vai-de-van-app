import styled from "styled-components/native";
import { HeaderCardTravel } from "../molecules/HeaderCardTravel";
import { Text } from "react-native";
import { BodyCardTravel } from "../molecules/BodyCardTravel";
import { FootCardTravel } from "../molecules/FooterCardTravel";
import { ButtonSelectTravel } from "../atoms/ButtonSelectTravel";

interface CardTravelProps {
  value: string;
}

export const CardTravel = ({ value = "" }: CardTravelProps) => {
  return (
    <AreaCard>
      <HeaderCardTravel value={value} />
      <BodyCardTravel />
      <FootCardTravel  value={value}/>
      <ButtonSelectTravel />
    </AreaCard>
  );
};

const AreaCard = styled.View`
  display: flex;
  margin-bottom: 20px;
  height: 380px;
  width: 100%;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 1px 1px 4px #00000080;
`;
