import {
  Button,
  ImageBackground,
  Text,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from "react-native";
import styled from "styled-components/native";
import { InputText } from "../atoms/InputText";

export const Login = () => {
  return (
    <ImageBackground
      style={styles.image}
      source={require("../../../assets/fundo-login.jpeg")}
    >
      <AreaLogin>
        <BodyLogin>
          <TextLogin>Realizar Login</TextLogin>
          <InputText label="Email" />
          <InputText label="Senha" />
          <ButtonLogin>
            <TextButtonLogin>Entrar</TextButtonLogin>
          </ButtonLogin>

          <TextForgotPassword>Esqueceu a senha?</TextForgotPassword>
          <TextRegisterPhrase>
            Junte-se a nós! Cadastre-se e aproveite.
          </TextRegisterPhrase>
          <TouchableOpacity>
            <Text>Cadastre-se</Text>
          </TouchableOpacity>
        </BodyLogin>
      </AreaLogin>
    </ImageBackground>
  );
};

const AreaLogin = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const BodyLogin = styled.View`
  display: flex;
  width: 95%;
  height: 70%;
  border-radius: 20px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 4px #00000080;
`;

const TextLogin = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: #000;
  margin-bottom: 50px;
`;

const ButtonLogin = styled.TouchableOpacity`
  display: flex;
  width: 90%;
  background-color: #10112c;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 10px;
  margin-top: 10px;
`;

const TextButtonLogin = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: #fff;
`;

const TextRegisterPhrase = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #0c4a6e;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const TextForgotPassword = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #000;
  margin-top: 10px;
`;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    height: "100%",
  },
});
