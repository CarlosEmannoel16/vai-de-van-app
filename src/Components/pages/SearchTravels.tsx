import styled from "styled-components/native";
import { HeaderSearchDetails } from "../organism/HeaderSearchDetails";
import { CardTravel } from "../organism/CardTravel";
import { useContext } from "react";
import { TravelsSearchContext } from "../../hooks/TravelsSearch";
import { FlatList } from "react-native-gesture-handler";

export const SearchTravels = () => {
  const { travelsSearch } = useContext(TravelsSearchContext);

  
  return (
    <AreaSearch>
      <HeaderSearchDetails />
      <FlatListTravels
       showsVerticalScrollIndicator={false}
        data={travelsSearch}
        renderItem={({ item }: any) => <CardTravel value={item.value} travel={item} />}
        keyExtractor={(item) => item.id}
      />
    </AreaSearch>
  );
};

const AreaSearch = styled.View`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  align-items: center;
`;

const FlatListTravels = styled.FlatList`
  display: flex;
  height: 90%;
  width: 98%;
  padding: 10px;
`;
