import { Text } from "react-native";
import styled from "styled-components/native";

export const MyAccount = () => {
  return (
    <AreaExternal>
      <Text>MyAccount</Text>
    </AreaExternal>
  );
};

const AreaExternal = styled.View`
  flex: 1;
  background-color: #f5f5f5;
  padding: 20px;
`;
