import styled from "styled-components/native";

export const FootDetailsTravel = ({ value }) => {
  return (
    <AreaFoot>
      <TextDetailsLabel>Valor</TextDetailsLabel>
      <TextDetailsValue>{value}</TextDetailsValue>
    </AreaFoot>
  );
};


const AreaFoot = styled.View`
  width: 100%;
  border-radius: 5px;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #c94646;
  padding: 10px;
`;

const TextDetailsLabel = styled.Text`
  font-size: 16px;
  font-weight: 300;
  color: #fff;
`;

const TextDetailsValue = styled.Text`
  font-size: 14px;
  font-weight: 00;
  color: #fff;
`;