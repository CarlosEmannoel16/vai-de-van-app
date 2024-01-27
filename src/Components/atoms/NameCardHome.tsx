import styled from "styled-components/native";

export const NameCardHome = ({name}) => {
  return (
    <NameCardHomeArea>
      <NameCardHomeText>{name}</NameCardHomeText>
    </NameCardHomeArea>
  );
};

const NameCardHomeArea = styled.View`
  height: 80%;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 10px;
`;

const NameCardHomeText = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: 500;
  text-transform: uppercase;
`;
