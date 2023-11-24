import { ImageBackground, StyleSheet, Text, View } from "react-native";
import {
  AreTextSubtitleStyled,
  HeaderListTravelsStyled,
  TextSubtitleStyled,
  TextTitleStyled,
} from "./header.listtravels.styled";
import { Ionicons } from "@expo/vector-icons";

export default HeaderListTravels = () => {
  return (
    <HeaderListTravelsStyled>
      <TextTitleStyled>Vai de Van</TextTitleStyled>
      <AreTextSubtitleStyled>
        <TextSubtitleStyled>
          <Ionicons name="location-outline" size={12} color="#fff" />
          Juazeiro do Norte
        </TextSubtitleStyled>
        <TextSubtitleStyled>
          <Ionicons name="arrow-forward" size={12} color="#fff" />
        </TextSubtitleStyled>
        <TextSubtitleStyled>
          <Ionicons name="location-outline" size={12} color="#fff" />
          Iguatu
        </TextSubtitleStyled>
      </AreTextSubtitleStyled>
    </HeaderListTravelsStyled>
  );
};
