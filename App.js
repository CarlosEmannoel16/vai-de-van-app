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
        backgroundColor: "#222689",
      }}
    >
      <NavigationContainer>
        <Tab.Navigator screenOptions={screenOptions}>
          {Routes.map((route) => (
            <Tab.Screen
              name={route.name}
              component={route.component}
              options={route.options}
            />
          ))}
        </Tab.Navigator>
      </NavigationContainer>

      <StatusBar backgroundColor="red" />
    </SafeAreaView>
  ) : null;
}

const screenOptions = {
  headerShown: false,
  tabBarActiveTintColor: "#fff",
  tabBarInactiveTintColor: "#888",
  tabBarStyle: {
    borderTopColor: "#00000080",
    backgroundColor: "#222689",
    paddingBottom: 4,
    paddingTop: 8,
    height: 60,
    paddingHorizontal: 60,
  },
  tabBarLabelStyle: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
  },
};
