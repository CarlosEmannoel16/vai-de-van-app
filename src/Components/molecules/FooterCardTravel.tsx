import styled from "styled-components/native";
import { InfoTaxasCardTravel } from "../atoms/InforTaxasCardTravel";
import { ValueFooterCard } from "../atoms/PriceFooterCard";
import { TravelsSearchContext } from "../../hooks/TravelsSearch";
import { useContext } from "react";

export const FootCardTravel = ({value}) => {

  const removeMask = (value) => {
    console.log(" ===>", value.replace("R$", " ").replace(",", "."));
    return Number(value.replace("R$", "").replace(",", "."));
  }

  const addMask = (value) => {
    return value.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
  }

  return (
    <AreaFoot>
      <InfoTaxasCardTravel label="1 adulto" value={value}/>
      <InfoTaxasCardTravel label="Taxa de administração" value="R$ 2,00" />
      <ValueFooterCard value={addMask(removeMask(value) + 2)}/>
    </AreaFoot>
  );
};

const AreaFoot = styled.View`
  display: flex;
  width: 85%;
  height: auto;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e5e1e1;
  padding-top: 10px;
  padding-bottom: 20px;
`;
