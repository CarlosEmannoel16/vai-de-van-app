import styled from "styled-components/native";
import { HomeTitle } from "../molecules/HomeTitle";

export const HeaderHome = () => {
  return (
    <HeaderArea>
      <HomeTitle />
    </HeaderArea>
  );
};

const HeaderArea = styled.View`
  align-items: center;
  justify-content: center;
  height: 90px;
  width: 100%;
`;
