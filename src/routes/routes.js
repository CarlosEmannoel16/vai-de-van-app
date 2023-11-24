import Home from "../screens/Home/Home";
import ListTravels from "../screens/ListTravel/ListTravels";
import Profile from "../screens/Profile/Profile";
import { Ionicons } from "@expo/vector-icons";

export const Routes = [
  {
    name: "Home",
    component: Home,
    options: {
      tabBarIcon: ({ size, color }) => (
        <Ionicons name="search" size={size} color={color} />
      ),
    },
  },
  {
    name: "Viagens",
    component: ListTravels,
    options: {
      tabBarIcon: ({ size, color }) => (
        <Ionicons name="bus" size={size} color={color} />
      ),
    },
  },
  {
    name: "Perfil",
    component: Profile,
    options: {
      tabBarIcon: ({ size, color }) => (
        <Ionicons name="person" size={size} color={color} />
      ),
    },
  },
  {
    name: "Lista",
    component: ListTravels,
    options: {
      tabBarIcon: ({ size, color }) => (
        <Ionicons name="log-out-outline" size={size} color={color} />
      ),
    },
  },
];
