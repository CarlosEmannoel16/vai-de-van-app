import { useContext, useEffect, useState } from "react";
import styled from "styled-components/native";
import { TravelsSearchContext } from "../../hooks/TravelsSearch";
import { DetailsFinishPayment } from "../molecules/DetailsFinishPayment";
import { FootDetailsTravel } from "../molecules/FooterDetailsTravel";

export const InformationReservation = () => {

  const { travelSelected } = useContext(TravelsSearchContext);
  const [customer, setCustomer] = useState({
    name: "",
    cpf: "",
    email: "",
    phone: "",
  });
  const [canSend, seCanSend] = useState(false);

  console.log(travelSelected);

  const getNameDriver = () => {
    const driver = travelSelected.driver.split(" ");
    return `${driver[0]} ${driver[driver.length - 1]}`;
  };

  const removeMask = (value) => {
    console.log(" ===>", value.replace("R$", " ").replace(",", "."));
    return Number(value.replace("R$", "").replace(",", "."));
  };

  const addMask = (value) => {
    return value.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };

  const calculateValue = () => {
    const value = removeMask(travelSelected.value);
    const tax = 2;
    return addMask(value + tax);
  };

  return (
    <PaymentInfoArea>
      <Title>Detalhes do bilhete</Title>
      <DetailsFinishPayment
        label="Origem da viagem"
        value={travelSelected.nameOrigin}
      />
      <DetailsFinishPayment
        label="Destino da viagem"
        value={travelSelected.nameDestiny}
      />
      <DetailsFinishPayment
        label="Data da viagem"
        value={travelSelected.dateOfDeparture}
      />
      <DetailsFinishPayment label="Motorista" value={getNameDriver()} />
      <DetailsFinishPayment
        label="Valor do bilhete"
        value={travelSelected.value}
      />
      <DetailsFinishPayment label="Taxa de administração" value="R$ 2,00" />
      <FootDetailsTravel value={calculateValue()} />
    </PaymentInfoArea>
  );
};

const PaymentInfoArea = styled.View`
  padding: 10px;
  width: 90%;
  border-radius: 5px;
  height: auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 3px #00000060;
  margin-bottom: 20px;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: #000;
  margin-bottom: 10px;
`;
