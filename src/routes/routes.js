import { PageHome } from "../Components/pages/Home";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const routes = () => {
  return [
    {
      name: "Inicio",
      component: PageHome,
      options: {
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="map-search" size={24} color="#fff" />
        ),
      },
    }
    // {
    //   name: "Viagens",
    //   component: ListTravels,
    //   options: {
    //     tabBarIcon: ({ size, color }) => (
    //       <Ionicons name="bus" size={size} color="#FFF" />
    //     ),
    //   },
    // },
    // {
    //   name: "Minhas Viagens",
    //   component: MyTravels,
    //   options: {
    //     tabBarIcon: ({ size, color }) => (
    //       <Fontisto name="bus-ticket" size={24} color="#FFF" />
    //     ),
    //   },
    // },
    // {
    //   name: "Perfil",
    //   component: Profile,
    //   options: {
    //     tabBarIcon: ({ size, color }) => (
    //       <Ionicons name="person" size={size} color="#FFF" />
    //     ),
    //   },
    // },
    // {
    //   name: "Lista",
    //   component: ListTravels,
    //   options: {
    //     tabBarIcon: ({ size, color }) => (
    //       <Ionicons name="log-out-outline" size={size} color={color} />
    //     ),
    //   },
    // },
  ];
};
