import styled from "styled-components/native";
import { FontAwesome5 } from "@expo/vector-icons";

interface IInputSelect {
  icon?: "Origin" | "Destination";
  value?: string;
  label?: string;
}
export const InputSelect = ({ icon, value, label }: IInputSelect) => {
  return (
    <Input>
      <FontAwesome5 name="bus" size={24} color="black" />
      <AreaText>
        <Placeholder>{label}</Placeholder>
        <PlaceholderValue>{value}</PlaceholderValue>
      </AreaText>
    </Input>
  );
};

export const Input = styled.View`
  height: 55px;
  flex-direction: row;
  border-radius: 8px;
  width: 100%;
  align-items: center;
  border-color: #8a8a8a60;
  background-color: #fff;
  border-width: 1px;
  padding-left: 10px;
  margin-bottom: 5px;
`;

const AreaText = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 20px;
`;

const Placeholder = styled.Text`
  font-size: 11px;
  font-weight: 500;
  color: #646262;
`;

const PlaceholderValue = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #646262;
`;
