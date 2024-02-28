import { NavigationContainer } from "@react-navigation/native";
import { routes } from "../routes/routes";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { PageHome } from "../Components/pages/Home";
import { SearchTravels } from "../Components/pages/SearchTravels";
import { AntDesign } from "@expo/vector-icons";
import { ReservationPage } from "../Components/pages/ReservationPage";
import { Login } from "../Components/pages/Login";
import { PaymentPage } from "../Components/pages/PaymentPage";
import { Authentication } from "../Components/pages/Autenticate";
import { useTravelsSearch, useUser } from "../hooks";
import { Profile } from "../Components/pages/Profile";
export const NavigationMenu = () => {
  const { user } = useUser();
  console.log("user===.", user);

  const Stack = createStackNavigator();

  const { travelsSearch, inSearch } = useTravelsSearch();
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
            {user && user.token ? (
              <Tab.Screen
                name={"Login"}
                component={Authentication}
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
            ) : (
              <Tab.Screen
                name={"Perfil"}
                component={Profile}
                options={{
                  tabBarLabel: "Perfil",
                  tabBarLabelStyle: {
                    color: "#000",
                  },
                  tabBarIcon: ({ focused }) => (
                    <AntDesign name="user" size={24} color="black" />
                  ),
                }}
              />
            )}
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

            <Stack.Screen name={"Perfil"} component={PageHome} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </>
  );
};
