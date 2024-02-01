import styled from "styled-components/native";
import { HeaderCardTravel } from "../molecules/HeaderCardTravel";
import { Text } from "react-native";
import { BodyCardTravel } from "../molecules/BodyCardTravel";
import { FootCardTravel } from "../molecules/FooterCardTravel";
import { ButtonSelectTravel } from "../atoms/ButtonSelectTravel";
import { useContext } from "react";
import { TravelsSearchContext } from "../../hooks/TravelsSearch";

interface CardTravelProps {
  value: string;
  travel: any;
}

export const CardTravel = ({ value = "", travel }: CardTravelProps) => {
  const { setTravelSelected } = useContext(TravelsSearchContext);
  const handler = () => {
    setTravelSelected(travel);
  };

  return (
    <AreaCard>
      <HeaderCardTravel value={value} />
      <BodyCardTravel />
      <FootCardTravel value={value} />
      <ButtonSelectTravel handler={handler} />
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
