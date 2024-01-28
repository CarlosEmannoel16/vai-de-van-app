import { FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { Text, View } from "react-native";

interface Props {
  modalLabel: string;
  label: string;
  date: Date;
  setDate: (data: Date) => void;
  icon?: string;
  value: string;
}

export const DateInput = ({
  date,
  label,
  modalLabel,
  setDate,
  value,
}: Props) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Input onPress={() => setModalVisible(true)}>
        <FontAwesome5 name="calendar" size={24} color="black" />
        <AreaText>
          <Placeholder>{label}</Placeholder>
          <PlaceholderValue>{value}</PlaceholderValue>
        </AreaText>
      </Input>

      <ModalView
        animationType="slide"
        presentationStyle="formSheet"
        visible={modalVisible}
        onRequestClose={() => {
          //Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <HeaderModal>
          <AreaViewReturn>
            <CloseButton onPress={() => setModalVisible(!modalVisible)}>
              <TextCloseButton>
                <Feather name="arrow-left" size={24} color="black" />
              </TextCloseButton>
            </CloseButton>
            <TextReturn>{modalLabel}</TextReturn>
          </AreaViewReturn>
          <ModalLabel></ModalLabel>
        </HeaderModal>
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          locale="pt-br"
          mode="date"
          display="spinner"
          onChange={(e) => {
            setDate(new Date(e.nativeEvent.timestamp));
          }}
          textColor="#000"
          minimumDate={new Date()}
          style={{ padding: 90, marginTop: 60}}
        />
      </ModalView>
    </>
  );
};

const Input = styled.TouchableOpacity`
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

const CloseButton = styled.TouchableOpacity`
  padding: 10px;
  border-radius: 10px;
  border-width: 1px;
  border-color: #00000030;
  border-radius: 30px;
  box-shadow: 0px 0px 2px #00000030;
`;

const TextCloseButton = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #000;
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
