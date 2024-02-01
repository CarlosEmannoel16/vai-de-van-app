import styled from "styled-components/native";
import { FormCustomer } from "../organism/FormCustomer";
import { PaymentMethod } from "../organism/PaymentMethod";
import { HeaderReservation } from "../organism/HeaderReservation";
import { ScrollView } from "react-native-gesture-handler";
import { InformationReservation } from "../organism/InformationPayment";
import { ButtonFinishPayment } from "../atoms/ButtonFinishPayment";
import { useContext } from "react";
import { TravelsSearchContext } from "../../hooks/TravelsSearch";
import { QuickLoginAccess } from "../organism/QuickLoginAccess";

export const PaymentPage = () => {
  const { setTravelSelected } = useContext(TravelsSearchContext);

  return (
    <PayMentPageArea>
      <HeaderReservation />
      <ScrollArea showsVerticalScrollIndicator={false}>
        <InternalArea>
          <QuickLoginAccess />
          {/* <PaymentMethod /> */}
          <FormCustomer />
          <InformationReservation />
        </InternalArea>
      </ScrollArea>
      <ButtonFinishPayment action={() => {}} />
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
