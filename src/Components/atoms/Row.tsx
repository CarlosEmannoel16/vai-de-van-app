import styled from "styled-components/native";

export const Row = ({ children }) => {
  return <RowArea>{children}</RowArea>;
};

const RowArea = styled.View`
  padding: 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;
