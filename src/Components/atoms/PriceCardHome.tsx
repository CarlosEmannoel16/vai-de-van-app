import styled from "styled-components/native";

export const PriceCardHome = ({ value, label }) => {
  return (
    <PriceCard>
      <PriceCardText> {label}</PriceCardText>
      <PriceCardValue> {value}</PriceCardValue>
    </PriceCard>
  );
};

export const PriceCard = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: red;
  width: 100%;
  height: 20%;
  border-radius: 10px;
  padding: 0 10px;
  margin-bottom: 10px;
`;

const PriceCardText = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #fff;
`;

const PriceCardValue = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #fff;
`;
