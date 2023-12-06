import { Text } from "react-native";
import {
  BarStatusMyTravelStyled,
  BodyCardMyTravelStyled,
  CardMyTravelStyled,
  DestinyMyCardTravelStyled,
  HeaderCardMyTravelStyled,
  HeaderCenterCardMyTravelStyled,
  HeaderLeftCardMyTravelStyled,
  HeaderRightCardMyTravelStyled,
  LeftBodyCardMyTravelStyled,
  OriginMyCardTravelStyled,
  RightBodyCardMyTravelStyled,
} from "./MyCardTravel.styled";

export const CardMyTravel = ({ travelDate }) => {
  return (
    <>
      <CardMyTravelStyled>
        <HeaderCardMyTravelStyled>
          <HeaderLeftCardMyTravelStyled>
            <Text style={{ fontSize: 10, textAlign: "center" }}>
              Adquirida no dia 27-09-2023 ás 12:32
            </Text>
          </HeaderLeftCardMyTravelStyled>
          <HeaderCenterCardMyTravelStyled>
            <Text>Data da Viagem</Text>
            <Text style={{ fontWeight: "900" }}>{travelDate}</Text>
          </HeaderCenterCardMyTravelStyled>
          <HeaderRightCardMyTravelStyled>
            <Text>status: Finalizada</Text>
          </HeaderRightCardMyTravelStyled>
        </HeaderCardMyTravelStyled>
        <BarStatusMyTravelStyled />
        <BodyCardMyTravelStyled>
          <LeftBodyCardMyTravelStyled>
            <OriginMyCardTravelStyled></OriginMyCardTravelStyled>
            <DestinyMyCardTravelStyled></DestinyMyCardTravelStyled>
          </LeftBodyCardMyTravelStyled>
          <RightBodyCardMyTravelStyled></RightBodyCardMyTravelStyled>
        </BodyCardMyTravelStyled>
        <Text>CardMyTravel</Text>
      </CardMyTravelStyled>
    </>
  );
};
