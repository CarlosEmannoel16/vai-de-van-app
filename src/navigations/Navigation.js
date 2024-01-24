import { NavigationContainer } from "@react-navigation/native";
import { routes } from "../routes/routes";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TravelsSearchContext } from "../hooks/TravelsSearch";
import { useContext, useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

export const NavigationMenu = () => {
  const Stack = createStackNavigator();

  const { travelsSearch, inSearch } = useContext(TravelsSearchContext);
  const Tab = createBottomTabNavigator();

  const [routesList, setRoutesList] = useState(routes());

  useEffect(() => {
    setRoutesList(routes());
  }, [travelsSearch]);

  useEffect(() => {
    setRoutesList(routes());
  }, []);

  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "#10112C",
              borderBottomWidth: 0,
              marginBottom: 0,
            },
            tabBarActiveTintColor: "#fff",
            tabBarInactiveTintColor: "#888",
            tabBarStyle: {
              borderTopColor: "#00000080",
              backgroundColor: "#10112C",
              paddingBottom: 4,
              paddingTop: 8,
              height: 60,
              paddingHorizontal: 0,
            },
            tabBarLabelStyle: {
              fontFamily: "Poppins-Regular",
              fontSize: 12,
            },
          }}
        >
          {routesList.map((route) => {
            if (route.name === "Viagens" && travelsSearch.length === 0) return;
            return (
              <Tab.Screen
                name={route.name}
                component={route.component}
                options={route.options}
              />
            );
          })}
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};
