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
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
background-color: #10112C`;
