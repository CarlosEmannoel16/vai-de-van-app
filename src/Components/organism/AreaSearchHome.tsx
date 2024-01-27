import styled from "styled-components/native";
import { InputSelect } from "../molecules/SelectInput";
import { ButtonSearch } from "../molecules/ButtonSearch";
import { DateInput } from "../molecules/DateInput";
import CityServiceHttp from "../../services/Cities/CityServiceHttp";
import { useEffect, useState } from "react";

export const AreaSearchHome = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    CityServiceHttp.getAllCities().then((res) => {
      setCities(res.data);
    });
  }, []);

  return (
    <AreaSearch>
      <LimitedArea>
        <InputSelect
          label="Origem"
          value="Juazeiro do Norte"
          data={cities}
          setValue={() => {}}
          icon="Origin"
        />
        <InputSelect
          label="Destino"
          value="São Paulo"
          data={cities}
          setValue={() => {}}
          icon="Origin"
        />
        <DateInput
          date={new Date()}
          modalLabel="Data da viagem"
          setDate={() => {}}
          label="Data da viagem"
          value={new Date().toLocaleString("pt-br")}
          icon=""
        />
        <ButtonSearch />
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
