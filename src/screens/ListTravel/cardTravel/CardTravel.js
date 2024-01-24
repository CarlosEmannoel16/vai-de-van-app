import { StyleSheet, Text, View } from "react-native";
import {
  ButtonCardTravelStyled,
  CardTravelStyled,
  InformationCenterInternCardTravelStyled,
  InformationExternalCardTravelStyled,
  InformationInternCardTravelStyled,
  NameCityStyled,
  TextButtonSelectStyled,
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
        <InformationInternCardTravelStyled>
          <NameCityStyled>{nameOrigin}</NameCityStyled>
          <Text
            style={{
              fontSize: 12,
              color: "#000",
            }}
          >
            13:00hs
          </Text>
        </InformationInternCardTravelStyled>
        <InformationInternCardTravelStyled>
          <View style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              name="bus-stop-covered"
              size={24}
              color="black"
            />
            <Entypo name="dots-three-horizontal" size={24} color="black" />
            <Entypo name="dots-three-horizontal" size={24} color="black" />
            <MaterialCommunityIcons
              name="bus-articulated-front"
              size={24}
              color="black"
            />
          </View>
          <Text
            style={{
              fontSize: 12,
              color: "#000",
              textAlign: "center",
            }}
          >
            3hs e 30min de viagem
          </Text>
        </InformationInternCardTravelStyled>
        <InformationInternCardTravelStyled>
          <NameCityStyled>{nameDestiny}</NameCityStyled>
          <Text
            style={{
              fontSize: 12,
              color: "#000",
            }}
          >
            14:00hs
          </Text>
        </InformationInternCardTravelStyled>
      </InformationExternalCardTravelStyled>

      <Text>12 vagas disponiveis</Text>
      <Text>7 paradas até o destino</Text>

      <ButtonCardTravelStyled>
        <TextButtonSelectStyled>Selecionar</TextButtonSelectStyled>
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
