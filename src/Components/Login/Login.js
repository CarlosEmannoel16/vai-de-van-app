import { Text, TextInput, TouchableOpacity } from "react-native";
import { ViewLoginStyled } from "./login.styled";
import { AntDesign } from "@expo/vector-icons";
export const Login = () => {
  return (
    <ViewLoginStyled>
      <AntDesign
        name="user"
        size={64}
        color="orange"
        style={{
          marginBottom: 20,
        }}
      />
      <Text
        style={{
          fontSize: 20,
          textAlign: "center",
          marginBottom: 20,
          color: "#000",
        }}
      >
        Você não está autenticado, realize login para uma melhor experiência
      </Text>
      <TextInput
        keyboardType="visible-password"
        placeholder="Login"
        style={{
          height: 50,
          borderWidth: 1,
          borderColor: "#00000050",
          width: "100%",
          padding: 10,
          borderRadius: 5,
          marginBottom: 10,
        }}
      />
      <TextInput
        keyboardType="visible-password"
        placeholder="Senha"
        style={{
          height: 50,
          borderWidth: 1,
          borderColor: "#00000050",
          width: "100%",
          padding: 10,
          borderRadius: 5,
        }}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "#000",
          width: "100%",
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 5,
          marginTop: 10,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 20,
          }}
        >
          {" "}
          Entrar
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          marginTop: 20,
          fontSize: 16,
          color: "#000",
        }}
      >
        Ou Cadastre-se
      </Text>
    </ViewLoginStyled>
  );
};
