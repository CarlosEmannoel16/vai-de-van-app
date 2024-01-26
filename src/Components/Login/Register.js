import { Text, TextInput, TouchableOpacity } from "react-native";
import { ViewLoginStyled } from "./login.styled";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
export const Register = () => {
  return (
    <ViewLoginStyled>
      <TextInput
        keyboardType="default"
        placeholder="Nome"
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
        keyboardType="default"
        placeholder="Sobrenome"
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
          Cadastre-se
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          marginTop: 20,
          fontSize: 16,
          color: "#000",
        }}
      >
        Ou Realize login
      </Text>
    </ViewLoginStyled>
  );
};
