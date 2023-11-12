import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { cities } from "../../../database/hors";

export default CitieSelecteView = () => {
  const Item = ({ title, url, index }) => {
    return (
      <View
        style={{
          ...styles.item,
        }}
        key={index}
      >
        <ImageBackground
          source={{
            uri: url,
          }}
          borderRadius={6}
          style={{
            height: "100%",
            width: "100%",
          }}
        />
        <Text style={styles.textItem}>{title}</Text>
      </View>
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
  item: {
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    marginBottom: 10,
    borderRadius: 6,
    gap: 2,
    width: `48%`,
    aspectRatio: 1, // Mantém uma proporção 1:1 para criar células quadradas
  },
  itemInternal: {
    width: "100%",
    height: "100%",
  },
  textItem: {
    fontSize: 10,
    width: 70,
    textAlign: "center",
    color: "#fff",
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
