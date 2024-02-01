import styled from "styled-components/native";

export const DetailsFinishPayment = ({ label = "", value = "" }) => {
  return (
    <AreaDetails>
      <TextDetailsLabel>{label}</TextDetailsLabel>
      <TextDetailsValue>{value}</TextDetailsValue>
    </AreaDetails>
  );
};

const AreaDetails = styled.View`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const TextDetailsLabel = styled.Text`
  font-size: 16px;
  font-weight: 300;
  color: #000;
`;

const TextDetailsValue = styled.Text`
  font-size: 14px;
  font-weight: 00;
  color: #000;
`;
