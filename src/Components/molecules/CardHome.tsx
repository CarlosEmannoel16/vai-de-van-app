import styled from "styled-components/native";
import { PriceCardHome } from "../atoms/PriceCardHome";
import { NameCardHome } from "../atoms/NameCardHome";

export const CardHome = ({ url }) => {
  return (
    <CardHomeArea source={{ uri: url }}>
      <NameCardHome name="Rio de Janeiro"/>
      <PriceCardHome label="Apartir de" value="R$ 123,00" />
    </CardHomeArea>
  );
};

const CardHomeArea = styled.ImageBackground`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 182px;
  width: 182px;
  background-color: #10112c;
  margin: 5px;
`;
