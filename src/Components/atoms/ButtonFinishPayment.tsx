import styled from "styled-components/native";

export const ButtonFinishPayment = ({ action, title = "Continuar para pagamento" }) => {
  return (
    <Button onPress={action}>
      <TextButton>{title}</TextButton>
    </Button>
  );
};

const Button = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: #f04842;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextButton = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: 600;
`;
