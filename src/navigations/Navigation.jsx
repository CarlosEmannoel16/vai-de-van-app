import { NavigationContainer } from "@react-navigation/native";
import { routes } from "../routes/routes";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TravelsSearchContext } from "../hooks/TravelsSearch";
import { useContext, useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { PageHome } from "../Components/pages/Home";
import { HeaderSearchDetails } from "../Components/organism/HeaderSearchDetails";
import { SearchTravels } from "../Components/pages/SearchTravels";
import { AntDesign } from "@expo/vector-icons";
import { ReservationPage } from "../Components/pages/ReservationPage";
import { Login } from "../Components/pages/Login";
import { PaymentPage } from "../Components/pages/PaymentPage";
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
        {!inSearch ? (
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
                borderTopColor: "#99848480",
                borderTopWidth: 1,
                backgroundColor: "#ffffff",
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
            <Tab.Screen
              name={"Home"}
              component={PageHome}
              options={{
                tabBarLabel: "Inicio",
                tabBarLabelStyle: {
                  color: "#000",
                },
                tabBarIcon: ({ focused }) => (
                  <AntDesign name="home" size={24} color="#000" />
                ),
              }}
            />
            <Tab.Screen
              name={"Login"}
              component={Login}
              options={{
                tabBarLabel: "Login",
                tabBarLabelStyle: {
                  color: "#000",
                },
                tabBarIcon: ({ focused }) => (
                  <AntDesign name="user" size={24} color="black" />
                ),
              }}
            />
          </Tab.Navigator>
        ) : (
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name={"Busca"} component={SearchTravels} />
            <Stack.Screen name={"Reservation"} component={ReservationPage} />
            <Stack.Screen name={"Pagamento"} component={PaymentPage} />

            <Stack.Screen name={"Login"} component={Login} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </>
  );
};
