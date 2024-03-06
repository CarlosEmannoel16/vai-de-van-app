import styled from "styled-components/native";
import { FormCustomer } from "../organism/FormCustomer";
import { InformationReservation } from "../organism/InformationPayment";
import { ButtonFinishPayment } from "../atoms/ButtonFinishPayment";
import { QuickLoginAccess } from "../organism/QuickLoginAccess";
import { HeaderPayment } from "../organism/HeaderPayment";
import { useNavigation } from "@react-navigation/native";
import { PaymentMethod } from "../organism/PaymentMethod";
import { useUser } from "../../hooks";

export const PaymentPage = () => {
  const { user } = useUser();

  return (
    <PayMentPageArea>
      <HeaderPayment />
      <ScrollArea showsVerticalScrollIndicator={false}>
        <InternalArea>
          {!user?.id ? <QuickLoginAccess inPage="LoginInPayment" /> : null}

          <PaymentMethod />
          <InformationReservation />
        </InternalArea>
      </ScrollArea>
      <ButtonFinishPayment action={() => {}} title="Finalizar reserva" />
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
  padding-top: 40px;
`;
