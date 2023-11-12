import { ImageBackground, StyleSheet, Text, View } from "react-native";
export default HeaderProfile = () => {
  return (
    <View style={styles.header}>
      <ImageBackground
        source={{
          uri: "https://people.com/thmb/SL7_3mF5irtEm4Kz8f63FWDrmPA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2)/dog-dating-1-a1a34ab3445740fcadf8699850c8333b.jpg",
        }}
        borderRadius={100}
        style={{ width: 120, height: 120 }}
      ></ImageBackground>
      <Text style={styles.textProfile}>Carlos Emannoel</Text>
      <Text style={styles.textSubtitle}>Meus Dados Cadastrais</Text>
      <View style={styles.effectLeft}></View>
      <View style={styles.effectRight}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "baseline",
    height: 220,
    backgroundColor: "#222689",
    gap: 10,
    paddingHorizontal: 10,
    paddingTop: 20,
    marginBottom: 40,
  },

  textProfile: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Poppins-Regular",
  },

  textSubtitle: {
    color: "#fff",
    fontSize: 12,
    fontFamily: "Poppins-Regular",
  },

  effectLeft: {
    backgroundColor: "#222689",
    width: "28%",
    height: 37,
    transform: [{ rotate: "-33deg" }],
    left: -20,
    top: 190,
    position: "absolute",
  },
  effectRight: {
    position: "absolute",
    backgroundColor: "#fff",
    width: "38%",
    height: 37,
    transform: [{ rotate: "-35deg" }],
    left: 310,
    top: 200,
  },
});
