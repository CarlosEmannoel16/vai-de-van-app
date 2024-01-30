import styled from "styled-components/native";

export const InfoTaxasCardTravel = ({}) => {
  return (
    <AreaInfo>
      <TextInfo>2 adultos</TextInfo>
      <TextValueInfo>R$ 123,00</TextValueInfo>
    </AreaInfo>
  );
};

const AreaInfo = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
`;

const TextInfo = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: #000000;
`;

const TextValueInfo = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: #000000;
`;
