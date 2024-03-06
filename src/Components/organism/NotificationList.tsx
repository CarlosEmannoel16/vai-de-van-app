import styled from "styled-components/native";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { useContext, useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, Text } from "react-native";
import { ButtonBack } from "../atoms/ButtonBack";
import { TravelsSearchContext } from "../../hooks/TravelsSearch";
import { Notifications } from "./Notifications";
import { OptionsNotification } from "../molecules/OptionsNotification";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export const NotificationsList = () => {
  const { setInSearch, inSearch } = useContext(TravelsSearchContext);

  const [modalVisible, setModalVisible] = useState(false);

  const [loading, setLoading] = useState(false);

  return (
    <>
      <Notifications
        isNotification={true}
        openModal={() => {
          setModalVisible(true);
        }}
      />
      <ModalView
        animationType="slide"
        presentationStyle="fullScreen"
        visible={modalVisible}
        onRequestClose={() => {
          //Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <HeaderModal>
          <AreaViewReturn>
            <ButtonBack key={1} action={() => setModalVisible(!modalVisible)} />
            <TextReturn>Voltar</TextReturn>
          </AreaViewReturn>
        </HeaderModal>
        <BodyModalStyled>
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <>
              <ScrollView>
                <OptionsNotification
                  icon={<AntDesign name="Trophy" size={24} color="black" />}
                  date="Ontem"
                  title="Boas vindas!"
                  description="Seja bem vindo ao nosso app"
                />
                <OptionsNotification
                  icon={
                    <MaterialCommunityIcons
                      name="email-lock"
                      size={24}
                      color="black"
                    />
                  }
                  date="Ontem"
                  title="Confirme seu email"
                  description="Você ainda não confirmou seu email"
                />
              </ScrollView>
            </>
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
  padding: 40px 50px 10px 10px;
`;

const BodyModalStyled = styled.View`
  flex: 1;
  width: 100%;
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
