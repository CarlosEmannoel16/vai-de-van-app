import { ImageBackground, StyleSheet, Text, View } from "react-native";
import {
  AreTextSubtitleStyled,
  HeaderListTravelsStyled,
  TextSubtitleStyled,
  TextTitleStyled,
} from "./header.listtravels.styled";
import { Ionicons } from "@expo/vector-icons";
import { TravelsSearchContext } from "../../../hooks/TravelsSearch";
import { useContext } from "react";

export default HeaderListTravels = () => {
  const { destines } = useContext(TravelsSearchContext);

  return (
    <HeaderListTravelsStyled>
      <TextTitleStyled>Vai de Van</TextTitleStyled>
      <AreTextSubtitleStyled>
        <TextSubtitleStyled>
          <Ionicons name="location-outline" size={12} color="#fff" />
          {destines?.origin}
        </TextSubtitleStyled>
        <TextSubtitleStyled>
          <Ionicons name="arrow-forward" size={12} color="#fff" />
        </TextSubtitleStyled>
        <TextSubtitleStyled>
          <Ionicons name="location-outline" size={12} color="#fff" />
          {destines?.destiny}
        </TextSubtitleStyled>
      </AreTextSubtitleStyled>
    </HeaderListTravelsStyled>
  );
};
