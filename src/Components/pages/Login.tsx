import {
  Button,
  ImageBackground,
  Text,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import styled from "styled-components/native";
import { InputText } from "../atoms/InputText";
import { useRef, useState } from "react";
import { useNavigationController, useUser } from "../../hooks";
import UserServiceHttp from "../../services/User/UserServiceHttp";
import { useLinkTo } from "@react-navigation/native";

export const Login = ({ changeToRegister }) => {
  const { setUser, contextOfLogin } = useUser();
  const linkTo = useLinkTo();
  const [email, setEmail] = useState("carlosemannoel2019@gmail.com");
  const [password, setPassword] = useState("123456");
  const handleLogin = () => {
    if (!email || !password) return Alert.alert("Preencha todos os campos!");
    UserServiceHttp.authenticateUser({ email, password })
      .then((response) => {
        console.log(response);
        setUser({
          name: response.name,
          email: response.email,
          cpf: response.cpf,
          id: response.id,
        });

        if (contextOfLogin === "LoginInReservation") {
          linkTo("/Reservation");
        }
        if (contextOfLogin === "LoginInPayment") {
          linkTo("/Pagamento");
        }
      })
      .catch((error) => {
        console.log(error.message, email, password);
        Alert.alert("Usuário ou senha inválidos!");
      });
  };

  return (
    <ScrollViewExternal>
      <ImageBackground
        style={styles.image}
        source={require("../../../assets/fundo-login2.jpeg")}
      >
        <AreaLogin>
          <BodyLogin>
            <TextLogin>Realizar Login</TextLogin>
            <InputText
              onChange={(value) => setEmail(value)}
              onFocus={() => {}}
              label="Email"
              value={email}
            />
            <InputText
              onChange={(value) => setPassword(value)}
              onFocus={() => {}}
              label="Senha"
              value={password}
            />
            <ButtonLogin onPress={handleLogin}>
              <TextButtonLogin>Entrar</TextButtonLogin>
            </ButtonLogin>

            <TextForgotPassword>Esqueceu a senha?</TextForgotPassword>
            <TextRegisterPhrase>
              Junte-se a nós! Cadastre-se e aproveite.
            </TextRegisterPhrase>
            <TouchableOpacity onPress={changeToRegister}>
              <Text>Cadastre-se</Text>
            </TouchableOpacity>
          </BodyLogin>
        </AreaLogin>
      </ImageBackground>
    </ScrollViewExternal>
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

const ScrollViewExternal = styled.KeyboardAvoidingView`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
`;
