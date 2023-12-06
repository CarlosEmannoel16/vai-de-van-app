import { ImageBackground, StyleSheet, Text, View } from "react-native";
export default HeaderMyTravel = () => {
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
    backgroundColor: "#10112C",
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
});
