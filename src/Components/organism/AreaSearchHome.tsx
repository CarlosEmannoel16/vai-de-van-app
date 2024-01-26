import styled from "styled-components/native";
import { InputSelect } from "../molecules/SelectInput";

export const AreaSearchHome = () => {
  return (
    <AreaSearch>
      <LimitedArea>
        <InputSelect label="Origem" value="Juazeiro do Norte" />
        <InputSelect label="Destino" value="São Paulo" />
      </LimitedArea>
    </AreaSearch>
  );
};

const AreaSearch = styled.View`
  flex: 7;
  align-items: center;
  justify-content: flex-start;
  background-color: ${(props) => props.theme};
  width: 100%;
  margin-top: 10px;
`;

const LimitedArea = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  width: 90%;
`;
