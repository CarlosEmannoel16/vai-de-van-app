import { ImageBackground, StyleSheet, TextInput } from "react-native";

export default InputWithIcon = ({ icon, placeholder, keyboardType, size }) => {
  return (
    <ImageBackground
      style={size === "small" ? styles.input : styles.inputLarge}
      source={icon}
      imageStyle={{
        height: 20,
        width: 20,
        marginLeft: 10,
        marginTop: 12,
      }}
    >
      <TextInput
        style={{ paddingLeft: 20 }}
        placeholder={placeholder}
        keyboardType="ascii-capable"
      />
    </ImageBackground>
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
