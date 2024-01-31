import styled from "styled-components/native";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { useContext, useEffect, useState } from "react";
import { ActivityIndicator, Text } from "react-native";
import { ButtonBack } from "../atoms/ButtonBack";
import { TravelsSearchContext } from "../../hooks/TravelsSearch";

interface IInputSelect {
  icon?: "Origin" | "Destination";
  value?: string;
  label?: string;
  data: any[];
  setValue: (data: {}) => void;
}
export const InputSelect = ({
  icon,
  value,
  label,
  data,
  setValue,
}: IInputSelect) => {
  const { setInSearch, inSearch } = useContext(TravelsSearchContext);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setItemSelected] = useState({});
  const [citiesView, setCitiesView] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setCitiesView(data.slice(0, 10));
  }, [data]);

  const SearchCity = (text) => {
    setLoading(true);
    setCitiesView(
      data
        .filter((city) => city.name.toLowerCase().includes(text?.toLowerCase()))
        .slice(0, 10)
    );
    setLoading(false);
  };
  return (
    <>
      <Input onPress={() => setModalVisible(true)}>
        <FontAwesome5 name="bus" size={24} color="black" />
        <AreaText>
          <Placeholder>{label}</Placeholder>
          <PlaceholderValue>{value}</PlaceholderValue>
        </AreaText>
      </Input>
      <ModalView
        animationType="slide"
        presentationStyle="pageSheet"
        visible={modalVisible}
        onRequestClose={() => {
          //Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <HeaderModal>
          <AreaViewReturn>
            <ButtonBack key={1} action={() => setModalVisible(!modalVisible)} />
            <TextReturn>{label}</TextReturn>
          </AreaViewReturn>
        </HeaderModal>
        <BodyModalStyled>
          <AreaSearchSelectedModalStyled>
            <InputTextSearchStyled
              placeholder="Buscar"
              onChange={(e) => SearchCity(e.nativeEvent.text)}
            />
          </AreaSearchSelectedModalStyled>
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <AreaOptionsModalStyled>
              {citiesView.map((city) => {
                console.log(city.name.toLowerCase());
                return (
                  <OptionSelectStyled
                    onPress={() => {
                      setValue({
                        label: city.name,
                        value: city.id,
                      });
                      setItemSelected(city);
                      setModalVisible(!modalVisible);
                    }}
                  >
                    <Text>{city.name}</Text>
                  </OptionSelectStyled>
                );
              })}
            </AreaOptionsModalStyled>
          )}
        </BodyModalStyled>
      </ModalView>
    </>
  );
};

export const Input = styled.TouchableOpacity`
  height: 55px;
  flex-direction: row;
  border-radius: 10px;
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

const ModalView = styled.Modal`
  background-color: white;
  padding: 10px;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const HeaderModal = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
`;

const BodyModalStyled = styled.View`
  flex: 1;
  width: 100%;
  padding: 10px;
`;

const AreaSearchSelectedModalStyled = styled.View`
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
`;

const InputTextSearchStyled = styled.TextInput`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border-width: 1px;
  border-color: #00000030;
  padding: 10px;
`;

const AreaOptionsModalStyled = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

const OptionSelectStyled = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  padding: 10px;
  margin-bottom: 5px;
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
