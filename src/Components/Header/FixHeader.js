import { StyleSheet, Text, View } from "react-native";

export const FixHeader = () => {
  return (
    <View style={styles.areaLogo}>
      <Text style={styles.title}>Vai de Van</Text>
      <Text style={styles.subtitle}>Sua viagem começa aqui</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  areaLogo: {
    width: "100%",
    height: 60,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#10112C",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    fontFamily: "Poppins-Bold",
  },
  subtitle: {
    color: "#fff",
    fontSize: 12,
    fontFamily: "Poppins-Regular",
  },
});
