import { useNavigation, useLinkTo } from "@react-navigation/native";
import styled from "styled-components/native";

export const ButtonSelectTravel = ({ label = "Selecionar", handler }) => {
  const linkTo = useLinkTo();

  return (
    <AreaButton
      onPress={() => {
        handler();
        linkTo("/Reservation");
      }}
    >
      <TextButton>{label}</TextButton>
    </AreaButton>
  );
};

const AreaButton = styled.TouchableOpacity`
  display: flex;
  width: 90%;
  background-color: #10112C;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 10px;
  margin-top: 10px;
`;

const TextButton = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: #fff;
`;
