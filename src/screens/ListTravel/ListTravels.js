import { ScrollView, RefreshControl, View } from "react-native";
import HeaderTravelsList from "./Header/HeaderListTravels";
import { ListTravelStyled } from "./styled";
import { CardTravel } from "./cardTravel/CardTravel";
import { useContext } from "react";
import { TravelsSearchContext } from "../../hooks/TravelsSearch";

export default ListTravels = () => {
  const { travelsSearch } = useContext(TravelsSearchContext);

  return (
    <ListTravelStyled>
      <HeaderTravelsList />
      <ScrollView
        style={{ height: 580, width: "100%", paddingTop: 30 }}
        refreshControl={<RefreshControl />}
      >
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
