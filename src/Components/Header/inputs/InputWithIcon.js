import { ImageBackground, StyleSheet, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default InputWithIcon = ({ icon, placeholder, keyboardType, size }) => {
  return (
    <TextInput
      style={size === "small" ? styles.input : styles.inputLarge}
      placeholder={placeholder}
      keyboardType="ascii-capable"
    >
      <Ionicons name="bus" size={24} color="black" />
    </TextInput>
  );
};

export const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: "#00000070",
    flex: 1,
  },

  inputLarge: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
    width: "100%",
    borderWidth: 0.5,
    borderColor: "#00000070",
  },
});
