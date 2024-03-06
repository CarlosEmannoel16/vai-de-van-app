import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import "react-native-gesture-handler";

import { TravelSearchContextProvider } from "./src/hooks/TravelsSearch";
import { NavigationMenu } from "./src/navigations/Navigation";
import { UserContextProvider } from "./src/hooks/UserContext";
import { PageHome } from "./src/Components/pages/Home";
import { NavigationContextProvider } from "./src/hooks/NavigationController";
import * as Notifications from "expo-notifications";
export default function App() {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  });

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Thin": require("./assets/fonts/Poppins-Thin.ttf"),
  });

  return fontsLoaded ? (
    <NavigationContextProvider>
      <UserContextProvider>
        <TravelSearchContextProvider>
          <SafeAreaView
            style={{
              flex: 1,
              backgroundColor: "#fff",
            }}
          >
            <StatusBar translucent={true} />
            <NavigationMenu />
          </SafeAreaView>
        </TravelSearchContextProvider>
      </UserContextProvider>
    </NavigationContextProvider>
  ) : null;
}
