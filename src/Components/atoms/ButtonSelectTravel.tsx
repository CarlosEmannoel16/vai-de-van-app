import styled from "styled-components/native";

export const ButtonSelectTravel = ({label = "Selecionar"}) => {
    return (
        <AreaButton>
        <TextButton>{label}</TextButton>
        </AreaButton>
    );
}

const AreaButton = styled.TouchableOpacity`
  display: flex;
  width: 80%;
  background-color: #000000;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 10px;
  margin-top: 10px;
`;

const TextButton = styled.Text` 
  font-size: 18px;
  font-weight: 600; 
  color: #fff;
`;