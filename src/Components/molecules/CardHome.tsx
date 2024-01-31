import styled from "styled-components/native";
import { PriceCardHome } from "../atoms/PriceCardHome";
import { NameCardHome } from "../atoms/NameCardHome";

export const CardHome = ({ url, name = "Cidade", price = "R$ 00,00"  }) => {
  return (
    <CardHomeArea source={{ uri: url }}>
      <NameCardHome name={name}/>
      <PriceCardHome label="A partir de" value={price}/>
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
