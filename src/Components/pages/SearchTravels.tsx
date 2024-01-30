import styled from "styled-components/native";
import { HeaderSearchDetails } from "../organism/HeaderSearchDetails";
import { CardTravel } from "../organism/CardTravel";

export const SearchTravels = () => {
  return (
    <AreaSearch>
      <HeaderSearchDetails cityName="Juazeiro do Norte" date="12/01/2023" />
      <AreaCard>
        <CardTravel />
        <CardTravel />
        <CardTravel />
        
      </AreaCard>
    </AreaSearch>
  );
};

const AreaSearch = styled.View`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #fff;
`;

const AreaCard = styled.ScrollView`
  display: flex;
  height: 90%;
  width: 100%;
  padding: 10px;
`;
