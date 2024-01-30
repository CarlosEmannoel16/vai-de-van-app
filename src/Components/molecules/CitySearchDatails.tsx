import styled from "styled-components/native";

interface Props {
  cityName: string;
  date: string;
}

export const CitySearchDetails = ({ cityName, date }: Props) => {
  return (
    <DetailsArea>
      <DetailsTitle>{cityName}</DetailsTitle>
      <DetailsText>{date}</DetailsText>
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
  background-color: #fff;
  margin: 0 1rem;
  padding: 1rem;
`;

const DetailsTitle = styled.Text`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 1rem;
`;
const DetailsText = styled.Text`
  font-size: 10px;
  font-weight: 400;
  margin-bottom: 1rem;
`;
