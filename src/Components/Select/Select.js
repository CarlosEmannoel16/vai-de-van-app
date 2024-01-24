import {
  ActivityIndicator,
  Alert,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useEffect, useState } from "react";
import {
  AreaMyInputSelectStyled,
  AreaOptionsModalStyled,
  AreaSearchSelectedModalStyled,
  BodyModalStyled,
  InputTextSearchStyled,
  MyInputSelectButtonStyled,
  OptionSelectStyled,
} from "./select.styled";
import { Ionicons } from "@expo/vector-icons";

export const InputSelect = ({
  modalLabel = "Selecionar",
  buttonLabel = "Selecionar",
  label,
  setValue,
  value,
  data,
  Icon,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setItemSelected] = useState({});
  const [citiesView, setCitiesView] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setCitiesView(data.slice(0, 10));
  }, [data]);
  data.slice(0, 10);
  const SearchCity = (text) => {
    setLoading(true);
    setCitiesView(
      data
        .filter((city) =>
          city.label.toLowerCase().includes(text?.toLowerCase())
        )
        .slice(0, 10)
    );
    setLoading(false);
  };
  return (
    <AreaMyInputSelectStyled>
      {Icon}
      <MyInputSelectButtonStyled onPress={() => setModalVisible(true)}>
        <Text
          style={{
            textAlign: "center",
            textAlignVertical: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {`${selectedItem.label || buttonLabel}`}
        </Text>
      </MyInputSelectButtonStyled>

      <Modal
        style={styles.modalView}
        animationType="slide"
        presentationStyle="pageSheet"
        visible={modalVisible}
        onRequestClose={() => {
          //Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.headerModal}>
          <Pressable
            style={[styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>Cancelar</Text>
          </Pressable>
          <Text style={styles.titleText}>{modalLabel}</Text>
          <Pressable
            style={[styles.button, styles.buttonCloseOk]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>Salvar</Text>
          </Pressable>
        </View>
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
              {citiesView.map((city) => (
                <OptionSelectStyled
                  onPress={() => {
                    setValue(city.value);
                    setItemSelected(city);
                    setModalVisible(!modalVisible);
                  }}
                >
                  <Text>{city.label}</Text>
                </OptionSelectStyled>
              ))}
            </AreaOptionsModalStyled>
          )}
        </BodyModalStyled>
      </Modal>
    </AreaMyInputSelectStyled>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
  },
  modalView: {
    backgroundColor: "white",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    width: "100%",
    height: "100%",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  buttonClose: {
    width: 80,
    alignContent: "center",
    justifyContent: "center",
  },
  buttonCloseOk: {
    width: 80,
    alignContent: "center",
    justifyContent: "center",
  },
  textStyle: {
    color: "#f56217",
    fontWeight: "bold",
    textAlign: "center",
  },
  titleText: {
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
  },

  headerModal: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingTop: 25,
  },
});
