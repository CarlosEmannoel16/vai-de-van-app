import {
  Button,
  ImageBackground,
  Text,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  ScrollView,
} from "react-native";
import styled from "styled-components/native";
import { InputText } from "../atoms/InputText";
import { useRef, useState } from "react";
import { useUser } from "../../hooks";
import UserServiceHttp from "../../services/User/UserServiceHttp";

export const Register = ({ changeToLogin }) => {
  const [dto, setDto] = useState({
    name: "Carlos Emannoel",
    email: "carlosemannoel2019@gmail.com",
    password: "123456",
    telefone: "88997018711",
    cpf: "00012356981",
  });

  const handleInputFocus = () => {
    // scrollRef?.current.scrollTo({ y: 200 });
  };

  const { setUser } = useUser();

  const handleRegister = async () => {
    const result = await UserServiceHttp.createUser({
      name: dto.name,
      phone: dto.telefone,
      password: dto.password,
      cpf: dto.cpf,
      dateOfBirth: new Date(),
      email: dto.email,
    });
    console.log(result.data);
    setUser({
      name: result.name,
      email: result.email,
      phone: result.phone,
      id: result.id,
      emailConfirmed: result.emailConfirmed,
    });
  };
  return (
    <ScrollViewExternal>
      <ImageBackground
        style={styles.image}
        source={require("../../../assets/fundo-login.jpeg")}
      >
        <AreaLogin>
          <BodyLogin>
            <TextLogin>Cadastre-se</TextLogin>
            <InputText
              onChange={(value) => {
                setDto({ ...dto, name: value });
              }}
              onFocus={handleInputFocus}
              label="Nome"
              value={dto.name}
            />
            <InputText
              onChange={(value) => {
                setDto({ ...dto, email: value });
              }}
              onFocus={handleInputFocus}
              label="Email"
              value={dto.email}
            />

            <InputText
              onChange={(value) => {
                setDto({ ...dto, telefone: value });
              }}
              onFocus={handleInputFocus}
              label="Telefone"
              value={dto.telefone}
            />

            <InputText
              onChange={(value) => {
                setDto({ ...dto, cpf: value });
              }}
              onFocus={handleInputFocus}
              label="Cpf"
              value={dto.cpf}
            />
            <InputText
              onChange={(value) => {
                setDto({ ...dto, password: value });
              }}
              onFocus={handleInputFocus}
              label="Senha"
              value={dto.password}
            />

            <ButtonLogin onPress={handleRegister}>
              <TextButtonLogin>Cadastrar</TextButtonLogin>
            </ButtonLogin>
            <TextRegisterPhrase>Já tem uma conta?</TextRegisterPhrase>
            <TouchableOpacity onPress={changeToLogin}>
              <Text>Realizar login</Text>
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
  
`;

const BodyLogin = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
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
