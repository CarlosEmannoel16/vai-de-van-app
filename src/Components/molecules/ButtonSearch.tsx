import styled from "styled-components/native";

export const ButtonSearch = () => {
    return (
        <ButtonSearchArea>
        <ButtonSearchText>Buscar</ButtonSearchText>
        </ButtonSearchArea>
    );
}

const ButtonSearchArea = styled.TouchableOpacity`
  height: 50px;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #10112C;
  border-radius: 10px;
`;

const ButtonSearchText = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: 500;
  text-transform: uppercase;
`;