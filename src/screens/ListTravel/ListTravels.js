import { ScrollView, RefreshControl, View } from "react-native";
import HeaderProfile from "./Header/HeaderListTravels";
import { ListTravelStyled } from "./styled";
import { CardTravel } from "./cardTravel/CardTravel";
import { useContext } from "react";
import { TravelsSearchContext } from "../../hooks/TravelsSearch";

export default ListTravels = () => {
  const { travelsSearch } = useContext(TravelsSearchContext);

  return (
    <ListTravelStyled>
      <ScrollView
        style={{ height: 720, width: "100%" }}
        refreshControl={<RefreshControl />}
      >
        <HeaderProfile />

        <View style={{ width: "100%", alignItems: "center" }}>
          {travelsSearch.length > 0 &&
            travelsSearch.map((travel) => {
              console.log(travel);
              return (
                <CardTravel
                  value={travel.value}
                  nameOrigin={travel.nameOrigin}
                  nameDestiny={travel.nameDestiny}
                />
              );
            })}
        </View>
      </ScrollView>
    </ListTravelStyled>
  );
};
