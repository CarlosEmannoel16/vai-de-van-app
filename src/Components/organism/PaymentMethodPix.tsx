import { ImageBackground } from "react-native";
import styled from "styled-components/native";

export const PaymentMethodPix = () => {
  return (
    <PaymentMethodArea>
      <Title>Pague usando a chave pix abaixo</Title>
      <PaymentMethodOptions>
        <PaymentMethodImage source={require("../../../assets/pix.webp")} />
        <PaymentMethodText>PIX</PaymentMethodText>
      </PaymentMethodOptions>
    </PaymentMethodArea>
  );
};

const PaymentMethodArea = styled.View`
  padding-left: 10px;
  padding-top: 10px;
  padding-right: 10px;
  width: 90%;
  border-radius: 5px;
  height: auto;
  padding-bottom: 10px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 3px #00000060;
  margin-bottom: 20px;
  margin-top: 10px;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: #000;
  margin-bottom: 10px;
`;

const PaymentMethodImage = styled.ImageBackground`
  width: 40px;
  height: 40px;
  border-radius: 5px;
`;

const PaymentMethodOptions = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #00000020;
  padding: 5px;
 
`;

const PaymentMethodText = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: #000;
`;
