import { StyleSheet, Text, View } from "react-native";
import {
  ButtonCardTravelStyled,
  CardTravelStyled,
  InformationExternalCardTravelStyled,
  TitleAreaCardTravelStyled,
  TitleCardInternTravelStyled,
} from "./cardTravel.styled";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
export const CardTravel = ({ value, nameOrigin, nameDestiny }) => {
  return (
    <CardTravelStyled>
      <TitleAreaCardTravelStyled>
        <TitleCardInternTravelStyled>
          <Text style={styles.price}>{value}</Text>
        </TitleCardInternTravelStyled>
      </TitleAreaCardTravelStyled>
      <InformationExternalCardTravelStyled>
        <View
          style={{
            borderBottomColor: "#00000020",
            borderBottomWidth: 1,
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Text>
            Saída: <Text style={styles.textBold}> 12:00hs</Text>
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "left",
            width: "50%",
          }}
        >
          <Text
            style={{
              marginLeft: 1,
            }}
          >
            <MaterialCommunityIcons name="bus-marker" size={24} color="black" />{" "}
            {nameOrigin}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "left",
            width: "50%",
          }}
        >
          <Entypo name="dots-three-vertical" size={24} color="black" />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "left",
            width: "50%",
          }}
        >
          <Text
            style={{
              marginLeft: 1,
            }}
          >
            <MaterialCommunityIcons name="bus-marker" size={24} color="black" />
            {nameDestiny}
          </Text>
        </View>
      </InformationExternalCardTravelStyled>
      <ButtonCardTravelStyled>
        <Text style={{ ...styles.textWhite, ...styles.fontButton }}>
          Selecionar
        </Text>
      </ButtonCardTravelStyled>
    </CardTravelStyled>
  );
};

const styles = StyleSheet.create({
  textWhite: {
    color: "#fff",
  },
  textBold: {
    fontWeight: "bold",
  },

  fontButton: {
    fontFamily: "Poppins-Regular",
    fontSize: 21,
  },

  price: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 25,
  },
});
