import styled from "styled-components/native";

export const ValueFooterCard = ({ label = "Total", value }) => {
  return (
    <AreaTextValueFooter>
      <TextValueFooter>{label}</TextValueFooter>
      <TextValueFooter>{value}</TextValueFooter>
    </AreaTextValueFooter>
  );
};

const AreaTextValueFooter = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding: 10px;
  background-color: #ea9270;
`;

const TextValueFooter = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #000000;
`;
