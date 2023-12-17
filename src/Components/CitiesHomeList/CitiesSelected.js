import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { cities } from "../../../database/hors";
import { CardCityHomeStyled } from "./CardCityHome.styled";

export default CitieSelecteView = () => {
  const Item = ({ title, url, index }) => {
    return (
      <CardCityHomeStyled key={index}>
        <ImageBackground
          source={{
            uri: url,
          }}
          borderRadius={0}
          style={{
            height: "100%",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            filter: "blur(4)",
          }}
        >
          <Text style={styles.textItem}>{title}</Text>
        </ImageBackground>
      </CardCityHomeStyled>
    );
  };

  return (
    <View style={styles.listContainer}>
      {cities.map((city, index) => {
        return (
          <Item
            style={styles.item}
            title={city.title}
            url={city.url}
            //checkedIndex={checkedIndex}
            index={index}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  searchView: {
    flex: 1,
    width: "100%",
    height: 100,
    backgroundColor: "#222689",
  },

  itemInternal: {
    width: "100%",
    height: "100%",
  },
  textItem: {
    fontSize: 20,
    width: 120,
    textAlign: "center",
    color: "#fff",
    fontWeight: "600",
  },
  listContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    height: "auto",
    flex: 1,
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
