import styled from "styled-components/native";

export const HomeTitle = () => {
  return (
    <>
      <TextTitle>Vai de Van</TextTitle>
      <SubTextTitle>Sua viagem começa aqui</SubTextTitle>
    </>
  );
};

const TextTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #fff;
`;
const SubTextTitle = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: #fff;
`;
