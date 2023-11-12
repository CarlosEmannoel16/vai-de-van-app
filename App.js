import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Home from "./src/screens/Home/Home";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Profile from "./src/screens/Profile/Profile";

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
        <Tab.Navigator
          screenOptions={{
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
          }}
        >
          <Tab.Screen
            name="Buscar"
            component={Home}
            options={{
              tabBarIcon: ({ size, color }) => (
                <Ionicons name="search" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Viagens"
            component={Home}
            options={{
              tabBarIcon: ({ size, color }) => (
                <Ionicons name="bus" size={size} color={color} />
              ),
            }}
          />

          <Tab.Screen
            name="Perfil"
            component={Profile}
            options={{
              tabBarIcon: ({ size, color }) => (
                <Ionicons name="person" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>

      <StatusBar backgroundColor="red" />
    </SafeAreaView>
  ) : null;
}
