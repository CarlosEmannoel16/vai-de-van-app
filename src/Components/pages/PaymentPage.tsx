import styled from "styled-components/native";
import { FormCustomer } from "../organism/FormCustomer";
import { InformationReservation } from "../organism/InformationPayment";
import { ButtonFinishPayment } from "../atoms/ButtonFinishPayment";
import { useContext } from "react";
import { TravelsSearchContext } from "../../hooks/TravelsSearch";
import { QuickLoginAccess } from "../organism/QuickLoginAccess";
import { HeaderPayment } from "../organism/HeaderPayment";
import { useNavigation } from "@react-navigation/native";
import { PaymentMethod } from "../organism/PaymentMethod";

export const PaymentPage = () => {
  const { setTravelSelected } = useContext(TravelsSearchContext);

  const navigate = useNavigation();

  return (
    <PayMentPageArea>
      <HeaderPayment />
      <ScrollArea showsVerticalScrollIndicator={false}>
        <InternalArea>
          <QuickLoginAccess />
          <PaymentMethod  />
          <InformationReservation />
        </InternalArea>
      </ScrollArea>
      <ButtonFinishPayment action={() => {}}  title="Finalizar reserva"/>
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
`;
