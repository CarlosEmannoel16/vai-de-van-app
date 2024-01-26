import styled from "styled-components/native";
import { HeaderHome } from "../organism/HeaderHome";
import { AreaSearchHome } from "../organism/AreaSearchHome";

export const PageHome = () => {
  return (
    <HomeArea>
      <HeaderHome />
      <AreaSearchHome />
    </HomeArea>
  );
};

const HomeArea = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  background-color: #fff;
`;
