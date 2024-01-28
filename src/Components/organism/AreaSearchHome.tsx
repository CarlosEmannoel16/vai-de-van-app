import styled from "styled-components/native";
import { InputSelect } from "../molecules/SelectInput";
import { ButtonSearch } from "../molecules/ButtonSearch";
import { DateInput } from "../molecules/DateInput";
import CityServiceHttp from "../../services/Cities/CityServiceHttp";
import { useContext, useEffect, useState } from "react";
import { TravelsSearchContext } from "../../hooks/TravelsSearch";
import TravelServiceHttp from "../../services/Travels/TravelService";
import { Alert } from "react-native";

export const AreaSearchHome = () => {
  const [cities, setCities] = useState([]);
  const { setDestines } = useContext(TravelsSearchContext);
  const [origin, setOrigin] = useState({
    label: "São Paulo",
    value: "São Paulo",
  });
  const [destiny, setDestiny] = useState({
    label: "São Paulo",
    value: "São Paulo",
  });
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    CityServiceHttp.getAllCities().then((res) => {
      setCities(res.data);
    });
  }, []);

  const onSubmit = () => {
    setDestines({ origin, destiny });
    console.log(date);
    console.log(destiny);

    TravelServiceHttp.search({
      dateOfTravel: date.toISOString().split('T')[0],
      destiny: destiny.value,
      origin: origin.value,
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <AreaSearch>
      <LimitedArea>
        <InputSelect
          label="Origem"
          value={origin.label}
          data={cities}
          setValue={setOrigin}
          icon="Origin"
        />
        <InputSelect
          label="Destino"
          value={destiny.label}
          data={cities}
          setValue={setDestiny}
          icon="Origin"
        />
        <DateInput
          date={date}
          modalLabel="Data da viagem"
          setDate={setDate}
          label="Data da viagem"
          value={date.toLocaleString("pt-br")}
          icon=""
        />
        <ButtonSearch onSubmit={onSubmit} />
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
