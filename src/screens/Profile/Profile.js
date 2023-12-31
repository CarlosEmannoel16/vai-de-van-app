import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import HeaderProfile from "./Header/HeaderProfile";
import { Ionicons } from "@expo/vector-icons";

export default Profile = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        style={{ height: 720, width: "100%" }}
        refreshControl={<RefreshControl />}
      >
        <HeaderProfile />
        <TouchableOpacity style={styles.menuOption}>
          <Text>Meus dados</Text>
          <Ionicons name="chevron-forward-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuOption}>
          <Text>Histórico de passagens</Text>
          <Ionicons name="chevron-forward-outline" size={24} color="black" />
        </TouchableOpacity>
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

  menuOption: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    borderBottomColor: "#ccc",
  },
});
