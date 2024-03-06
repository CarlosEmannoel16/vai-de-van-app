import styled from "styled-components/native";
import { FormCustomer } from "../organism/FormCustomer";
import { HeaderReservation } from "../organism/HeaderReservation";
import { ScrollView } from "react-native-gesture-handler";
import { InformationReservation } from "../organism/InformationPayment";
import { ButtonFinishPayment } from "../atoms/ButtonFinishPayment";
import { useContext } from "react";
import { TravelsSearchContext } from "../../hooks/TravelsSearch";
import { QuickLoginAccess } from "../organism/QuickLoginAccess";
import { useLinkTo } from "@react-navigation/native";
import { Alert } from "react-native";
import { useUser } from "../../hooks";

export const ReservationPage = () => {
  const linkTo = useLinkTo();
  const { user } = useUser();

  console.log(user);

  return (
    <PayMentPageArea>
      <HeaderReservation />
      <ScrollArea showsVerticalScrollIndicator={false}>
        <InternalArea>
          {!user?.id ? <QuickLoginAccess inPage="LoginInReservation" /> : null}
          <FormCustomer />
          <InformationReservation />
        </InternalArea>
      </ScrollArea>
      <ButtonFinishPayment
        action={() => {
          linkTo("/Pagamento");
        }}
      />
    </PayMentPageArea>
  );
};

const InternalArea = styled.View`
  align-items: center;
  width: 100%;
  height: auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
`;

const PayMentPageArea = styled.View`
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

const ScrollArea = styled.ScrollView`
  width: 100%;
  height: 80%;
  padding-top: 30px;
  padding-bottom: 30px;
`;
