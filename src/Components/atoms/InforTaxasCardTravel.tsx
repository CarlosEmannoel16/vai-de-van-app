import styled from "styled-components/native";

interface Props {
  label: string;
  value: string;
}

export const InfoTaxasCardTravel = ({ label, value }: Props) => {
  return (
    <AreaInfo>
      <TextInfo>{label}</TextInfo>
      <TextValueInfo>{value}</TextValueInfo>
    </AreaInfo>
  );
};

const AreaInfo = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
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
