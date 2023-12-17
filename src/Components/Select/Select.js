import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import {
  AreaMyInputSelectStyled,
  MyInputSelectButtonStyled,
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
        <Picker
          selectedValue={value}
          onValueChange={(itemValue, itemIndex) => {
            setValue(itemValue);
            setItemSelected(data[itemIndex]);
          }}
        >
          {data?.map((item, index) => (
            <Picker.Item key={index} label={item.label} value={item.value} />
          ))}
        </Picker>
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