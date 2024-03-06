import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
export const OptionsProfile = ({
  Icon,
  description,
  actionOnClick = () => {},
}) => {
  return (
    <AreaOptions onPress={actionOnClick}>
      <AreaIcon>{Icon}</AreaIcon>
      <AreaText>
        <TextOptions style={{ fontFamily: "Poppins-Regular" }}>
          {description}
        </TextOptions>
      </AreaText>
      <AreaIconAction>
        <MaterialIcons name="arrow-forward-ios" size={16} color="black" />
      </AreaIconAction>
    </AreaOptions>
  );
};

export const AreaOptions = styled.TouchableOpacity`
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 10px;
  border-bottom-width: 0.5px;
  border-color: #00000020;
`;

const AreaText = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  width: 80%;
`;

const AreaIconAction = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 10%;
`;

const TextOptions = styled.Text`
  font-size: 18px;
  font-weight: 400;
  color: #000;
`;

const AreaIcon = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 10%;
`;
