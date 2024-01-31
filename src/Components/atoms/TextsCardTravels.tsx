import styled from "styled-components/native";

interface Props {
  value: string;
}

export const TextsCardTravels = ({ value = "" }: Props) => {
  return (
    <DetailsArea>
      <TextValue>{value}</TextValue>
      <TextSmall>(Sem taxa)</TextSmall>
    </DetailsArea>
  );
};

const DetailsArea = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 50px;
  margin: 0 1rem;
  padding: 1rem;
`;

const TextValue = styled.Text`
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 1rem;
  color: #fff;
`;

const TextSmall = styled.Text`
  font-size: 10px;
  font-weight: 300;
  color: #fff;
  margin-bottom: 1rem;
`;
