import styled from "styled-components/native";
import { InputSelect } from "../molecules/SelectInput";
import { ButtonSearch } from "../molecules/ButtonSearch";
import { DateInput } from "../molecules/DateInput";
import CityServiceHttp from "../../services/Cities/CityServiceHttp";
import { useContext, useEffect, useState } from "react";
import { TravelsSearchContext } from "../../hooks/TravelsSearch";
import TravelServiceHttp from "../../services/Travels/TravelService";
import { Alert } from "react-native";
import { useNavigationController, useTravelsSearch } from "../../hooks";

export const AreaSearchHome = () => {
  const [cities, setCities] = useState([]);
  const { setDestines, setInSearch, setTravelsSearch } = useTravelsSearch();
  const { changeToStack } = useNavigationController();
  const [origin, setOrigin] = useState({
    label: "Cedro",
    value: '0b952554-01d6-401b-8326-a67bd53e1ea0',
  });
  const [destiny, setDestiny] = useState({
    label: "Iguatu",
    value: "70fbd63f-a0d5-4d7d-921e-8f9592c7b32b",
  });
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    CityServiceHttp.getAllCities().then((res) => {
      console.log(res.data);
      setCities(res.data);
    });
  }, []);

  const onSubmit = () => {
    setDestines({ origin, destiny });

    TravelServiceHttp.search({
      dateOfTravel: date.toISOString().split("T")[0],
      destiny: destiny.value,
      origin: origin.value,
    })
      .then((res) => {
        if (res.data.data.length) {
          setTravelsSearch(res.data.data);
          changeToStack("Travels");
          return;
        }
        Alert.alert(
          "Nenhuma viagem encontrada",
          "Tente novamente em outra data"
        );
      })
      .catch((err) => {
        console.log("=======>", err);
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
