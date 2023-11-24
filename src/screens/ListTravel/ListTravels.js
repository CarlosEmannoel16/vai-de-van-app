import { ScrollView, RefreshControl, View } from "react-native";
import HeaderProfile from "./Header/HeaderListTravels";
import { ListTravelStyled } from "./styled";
import { CardTravel } from "./cardTravel/CardTravel";

export default ListTravels = () => {
  return (
    <ListTravelStyled>
      <ScrollView
        style={{ height: 720, width: "100%" }}
        refreshControl={<RefreshControl />}
      >
        <HeaderProfile />

        <View style={{ width: "100%", alignItems: "center" }}>
          <CardTravel />
          <CardTravel />
          <CardTravel />
          <CardTravel />
        </View>
      </ScrollView>
    </ListTravelStyled>
  );
};
