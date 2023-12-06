import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Routes } from "./src/routes/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Thin": require("./assets/fonts/Poppins-Thin.ttf"),
  });
  const Tab = createBottomTabNavigator();
  return fontsLoaded ? (
    <SafeAreaView
      style={{
        flex: 1,
        fontFamily: "Poppins-Regular",
        backgroundColor: "#10112C",
      }}
    >
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
              paddingHorizontal: 60,
            },
            tabBarLabelStyle: {
              fontFamily: "Poppins-Regular",
              fontSize: 14,
            },
          }}
        >
          {Routes.map((route) => (
            <Tab.Screen
              name={route.name}
              component={route.component}
              options={route.options}
            />
          ))}
        </Tab.Navigator>
      </NavigationContainer>

      <StatusBar translucent={true} style={"inverted"} />
    </SafeAreaView>
  ) : null;
}
