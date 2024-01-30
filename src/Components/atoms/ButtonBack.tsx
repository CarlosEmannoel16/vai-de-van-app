import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";

interface Props {
  action: () => void;
}
export const ButtonBack = ({ action }: Props) => {
  return (
    <CloseButton onPress={() => action()}>
      <TextCloseButton>
        <Feather name="arrow-left" size={24} color="black" />
      </TextCloseButton>
    </CloseButton>
  );
};

const CloseButton = styled.TouchableOpacity`
  padding: 10px;
  border-radius: 10px;
  border-width: 1px;
  border-color: #00000030;
  border-radius: 30px;
`;

const TextCloseButton = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #000;
`;
