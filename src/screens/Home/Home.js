import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  RefreshControl,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import HeaderInitial from "../../Components/Header/Header";
import CitiesSelected from "../../Components/CitiesHomeList/CitiesSelected";
import CardCitiesHome from "../../Components/CardApresentation/CardApresentation";
import { FixHeader } from "../../Components/Header/FixHeader";

export default Home = () => {
  return (
    <View style={styles.container}>
      <FixHeader />
      <ScrollView
        style={{ height: 643, width: "100%" }}
        refreshControl={<RefreshControl />}
      >
        <HeaderInitial />
        <View>
          <View
            style={{
              marginTop: 8,
              marginBottom: 8,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              gap: 5,
            }}
          >
            <Icon name="map-marker" size={15} color="#000" />
            <Text style={{ fontFamily: "Poppins-Regular" }}>
              Selecione sua origem e veja todos os destinos
            </Text>
          </View>
          <CitiesSelected />
        </View>
        <CardCitiesHome />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 0,
    backgroundColor: "#fff",
  },
});
