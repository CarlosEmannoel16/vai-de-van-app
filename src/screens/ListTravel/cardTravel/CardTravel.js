import { StyleSheet, Text, View } from "react-native";
import {
  ButtonCardTravelStyled,
  CardTravelStyled,
  InformationExternalCardTravelStyled,
  InformationInternCardTravelStyled,
  InformationInternSmallCardTravelStyled,
  TitleAreaCardTravelStyled,
  TitleCardInternTravelStyled,
} from "./cardTravel.styled";
import { Ionicons } from "@expo/vector-icons";

export const CardTravel = () => {
  return (
    <CardTravelStyled>
      <TitleAreaCardTravelStyled>
        <TitleCardInternTravelStyled>
          <Text style={{ ...styles.textWhite, ...styles.textBold }}>
            R$123,00
          </Text>
          <Text style={styles.textWhite}>Por pessoa</Text>
        </TitleCardInternTravelStyled>

        <TitleCardInternTravelStyled>
          <Text style={{ ...styles.textWhite, ...styles.textBold }}>
            Em até
          </Text>
          <Text style={styles.textWhite}>3 x R$ 70,00</Text>
        </TitleCardInternTravelStyled>
        <TitleCardInternTravelStyled></TitleCardInternTravelStyled>
      </TitleAreaCardTravelStyled>

      <InformationExternalCardTravelStyled>
        <InformationInternCardTravelStyled>
          <View>
            <Ionicons name="location-outline" size={24} color="black" />
          </View>

          <View>
            <Text>Saida</Text>
            <Text style={styles.textBold}>Jua</Text>
          </View>
        </InformationInternCardTravelStyled>
        <InformationInternSmallCardTravelStyled>
          <Text>2 paradas</Text>
          <Text>----------</Text>
        </InformationInternSmallCardTravelStyled>
        <InformationInternCardTravelStyled>
          <View>
            <Ionicons name="location-outline" size={24} color="black" />
          </View>

          <View>
            <Text>Chegada</Text>
            <Text style={styles.textBold}>Jua</Text>
          </View>
        </InformationInternCardTravelStyled>
      </InformationExternalCardTravelStyled>
      <ButtonCardTravelStyled>
        <Text style={styles.textWhite}>Selecionar</Text>
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
});
