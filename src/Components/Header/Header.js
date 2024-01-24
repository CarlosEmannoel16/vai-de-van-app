import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { InputSelect } from "../Select/Select";
import { InputDate } from "../InputDate/InputDate";
import { useContext, useEffect, useState } from "react";
import CityServiceHttp from "../../services/Cities/CityServiceHttp";
import TravelServiceHttp from "../../services/Travels/TravelService";
import { TravelsSearchContext } from "../../hooks/TravelsSearch";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
export default HeaderInitial = () => {
  const navigation = useNavigation();

  const { setTravelsSearch, setDestines, setInSearch } =
    useContext(TravelsSearchContext);

  const [dateOfTravel, setDateOfTravel] = useState(new Date());
  const [cityOrigin, setCityOrigin] = useState("");
  const [cityDestiny, setCityDestiny] = useState("");
  const [cities, setCities] = useState([]);

  useEffect(() => {
    CityServiceHttp.getAllCities().then((res) => {
      setCities(res.data.map((city) => ({ label: city.name, value: city.id })));
    });
  }, []);

  const search = async () => {
    if (!cityOrigin || !cityDestiny || !dateOfTravel) {
      Alert.alert("Preencha todos os campos");
      return;
    }
    TravelServiceHttp.search({
      origin: cityOrigin,
      destiny: cityDestiny,
      dateOfTravel:
        dateOfTravel.getFullYear() +
        "-" +
        ((dateOfTravel.getMonth() + 1).toString().length == 1
          ? `0${dateOfTravel.getMonth() + 1}`
          : (dateOfTravel.getMonth() + 1).toString()) +
        "-" +
        dateOfTravel.getDate(),
    })
      .then((res) => {
        if (!res.data.data.length) {
          Alert.alert("Nenhuma viagem encontrada");
          return;
        }
        setTravelsSearch(res.data.data);
        setDestines({
          origin: cities.filter((city) => city?.value == cityOrigin)[0]?.label,
          destiny: cities.filter((city) => city?.value == cityDestiny)[0]
            ?.label,
        });
        navigation.navigate("Viagens");
        setInSearch(true);
      })
      .catch((err) => {
        Alert.alert("Nenhuma viagem encontrada");
      });
  };
  return (
    <View style={styles.header}>
      <View style={styles.searchViewIntern}>
        <MaterialIcons
          name="swap-calls"
          size={32}
          color="orange"
          style={{
            position: "absolute",
            right: 20,
            top: 48,
            zIndex: 1,
            borderWidth: 4,
            borderRadius: 12,
            borderColor: "orange",
            backgroundColor: "#fff",
          }}
        />
        <View style={styles.viewRow}>
          <View style={styles.viewRow}>
            <InputSelect
              buttonLabel="Selecione sua origem"
              data={cities}
              setValue={setCityOrigin}
              value={cityOrigin}
              Icon={
                <MaterialCommunityIcons
                  name="bus-marker"
                  size={24}
                  color="black"
                />
              }
            />
          </View>
        </View>
        <View style={styles.viewRow}>
          <View style={styles.viewRow}>
            <InputSelect
              buttonLabel="Selecione seu destino"
              data={cities}
              setValue={setCityDestiny}
              value={cityDestiny}
              Icon={
                <MaterialCommunityIcons
                  name="bus-marker"
                  size={24}
                  color="black"
                />
              }
            />
          </View>
        </View>
        <InputDate
          label="Data de ida"
          setDate={setDateOfTravel}
          date={dateOfTravel}
          buttonLabel="Selecione a data da viagem"
          modalLabel={"Selecione a data da viagem"}
        />
      </View>
      <View style={styles.searchViewIntern}>
        <TouchableOpacity
          style={styles.buttonSearch}
          activeOpacity={0.7}
          onPress={search}
        >
          <Text style={{ color: "#fff", fontWeight: 800 }}>BUSCAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "baseline",
    height: 320,
    backgroundColor: "#10112C",
    gap: 5,
    paddingHorizontal: 10,
    paddingTop: 20,
    marginBottom: 20,
  },

  buttonSearch: {
    width: "100%",
    height: 50,
    backgroundColor: "#860068",
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  searchViewIntern: {
    gap: 10,
    flexDirection: "column",
    width: "100%",
    height: "auto",
    alignItems: "center",
    justifyContent: "space-around",
  },

  view50: {
    width: "48%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  viewRow: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
});
