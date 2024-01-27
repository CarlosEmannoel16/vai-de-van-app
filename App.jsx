import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import "react-native-gesture-handler";

import { TravelSearchContextProvider } from "./src/hooks/TravelsSearch";
import { NavigationMenu } from "./src/navigations/Navigation";
import { UserContextProvider } from "./src/hooks/UserContext";
import { PageHome } from "./src/Components/pages/Home";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Thin": require("./assets/fonts/Poppins-Thin.ttf"),
  });

  return fontsLoaded ? (
    <UserContextProvider>
      <TravelSearchContextProvider>
        <SafeAreaView
          style={{
            flex: 1,
            fontFamily: "Poppins-Regular",
            backgroundColor: "#10112C",
          }}
        >
          <NavigationMenu />
         

          <StatusBar translucent={true} style={"inverted"} />
        </SafeAreaView>
      </TravelSearchContextProvider>
    </UserContextProvider>
  ) : null;
}
