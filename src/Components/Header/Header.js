import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import IconBus from "../../../assets/frente-do-onibus.png";
import IconCalendar from "../../../assets/calendar.png";
import InputWithIcon from "./inputs/InputWithIcon";
export default HeaderInitial = () => {
  return (
    <View style={styles.header}>
      <View style={styles.searchViewIntern}>
        <InputWithIcon
          icon={IconBus}
          size="small"
          placeholder="Cidade Origem"
        />
        <InputWithIcon
          icon={IconBus}
          size="small"
          placeholder="Cidade Destino"
        />
      </View>
      <View style={styles.searchViewIntern}>
        <InputWithIcon icon={IconCalendar} placeholder="Data da viagem" />
      </View>
      <View style={styles.searchViewIntern}>
        <TouchableOpacity style={styles.buttonSearch} activeOpacity={0.7}>
          <Text style={{ color: "#fff", fontWeight: 800 }}>BUSCAR</Text>
        </TouchableOpacity>
      </View>
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
    height: 240,
    backgroundColor: "#222689",
    gap: 10,
    paddingHorizontal: 10,
    paddingTop: 20,
    marginBottom: 20,
  },

  buttonSearch: {
    width: "100%",
    height: 50,
    backgroundColor: "#0052CE",
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  searchViewIntern: {
    gap: 10,
    flexDirection: "row",
    width: "100%",
    height: "auto",
    alignItems: "center",
    justifyContent: "space-around",
  },
  effectLeft: {
    backgroundColor: "#222689",
    width: "28%",
    height: 37,
    transform: [{ rotate: "-33deg" }],
    left: -20,
    top: 220,
    position: "absolute",
  },
  effectRight: {
    backgroundColor: "#fff",
    width: "38%",
    height: 37,
    transform: [{ rotate: "-35deg" }],
    left: 220,
  },
});
