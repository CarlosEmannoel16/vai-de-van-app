import styled from "styled-components/native";

export const InputText = ({
  label = "Label",
  placeholder = "Placeholder",
  onFocus = () => {},
  onChange = (any) => {},
  value,
}) => {
  return (
    <AreaInput>
      <Label>{label}</Label>
      <Input
        onChange={(e) => onChange(e.nativeEvent.text)}
        onFocus={onFocus}
        placeholder={placeholder}
        value={value}
      />
    </AreaInput>
  );
};

const AreaInput = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
`;

const Label = styled.Text`
  font-size: 12px;
  font-weight: 600;
  color: #919090;
`;

const Input = styled.TextInput`
  width: 100%;
  height: 50px;
  border: 1px solid #e2e0e0;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
`;
