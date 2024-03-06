import styled from "styled-components/native";
import { ButtonBack } from "../atoms/ButtonBack";

export const HeaderGlobal = ({
  title = "",
  textReturn = "Voltar",
  action = () => {},
}) => {
  return (
    <HeaderModal>
      <AreaViewReturn>
        <ButtonBack key={1} action={action} />

        <TextReturn>{textReturn}</TextReturn>
      </AreaViewReturn>
      <ModalLabel>{title}</ModalLabel>
    </HeaderModal>
  );
};

const HeaderModal = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
`;

const ModalLabel = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #000;
`;

const AreaViewReturn = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: auto;
`;

const TextReturn = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #000;
  margin-left: 10px;
`;
