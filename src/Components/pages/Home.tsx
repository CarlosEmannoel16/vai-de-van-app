import styled from "styled-components/native";
import { HeaderHome } from "../organism/HeaderHome";
import { AreaSearchHome } from "../organism/AreaSearchHome";
import { CardsHome } from "../organism/CardsHome";
import { useContext } from "react";
import { TravelsSearchContext } from "../../hooks/TravelsSearch";

export const PageHome = () => {

  
  return (
    <HomeArea>
      <HeaderHome />
      <AreaSearchHome />
      <CardsHome />
    </HomeArea>
  );
};

const HomeArea = styled.ScrollView`
  flex: 1;
  width: 100%;
  background-color: #fff;
`;
