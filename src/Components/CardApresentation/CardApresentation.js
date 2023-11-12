import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default CardCitiesHome = () => {
  return (
    <View style={styles.areaExternal}>
      <Text style={{ color: "#fff", fontWeight: 700 }}>Precisa de ajuda?</Text>
      <Text style={{ color: "#fff" }}>
        Entre em contato pelo nosso whatsapp
      </Text>
      <Icon
        style={styles.iconWhatsapp}
        name="whatsapp"
        size={24}
        color="#fff"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  areaExternal: {
    textAlign: "center",
    width: "100%",
    height: 82,
    backgroundColor: "#FF5A36",
    alignItems: "center",
    color: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 20,
  },

  iconWhatsapp: {
    color: "#fff",
    marginTop: 2,
  },
});
