import { Text } from "react-native";
import { ListTravelStyled } from "./myTravels.styled";
import HeaderMyTravel from "./Header/HeaderMyTravel";
import { CardMyTravel } from "./CardMyTravel/CardMyTravels";
import { useContext } from "react";
import { UserContext } from "../../hooks/UserContext";
import { Login } from "../../Components/Login/Login";

const travels = [
  {
    travelDate: "21/02/2023",
  },
  {
    travelDate: "21/02/2023",
  },
  {
    travelDate: "21/02/2023",
  },
];

export const MyTravels = () => {
  const { userData } = useContext(UserContext);

  return (
    <>
      {userData ? (
        <>
          <HeaderMyTravel />
          <ListTravelStyled>
            <Text>Minhas Viagens</Text>

            {travels.map((travel) => {
              return <CardMyTravel travelDate={travel.travelDate} />;
            })}

            <Text>MyTravels</Text>
          </ListTravelStyled>
        </>
      ) : (
        <Login />
      )}
    </>
  );
};
