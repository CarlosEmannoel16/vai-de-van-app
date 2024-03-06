import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

export const Notifications = ({ openModal, isNotification }) => {
  return (
    <HeaderArea>
      <NotificationArea onPress={openModal}>
        <NotificationIconArea>
          {isNotification ? <NotificationActive /> : null}
          <Ionicons name="notifications" size={24} color="white" />
        </NotificationIconArea>
      </NotificationArea>
    </HeaderArea>
  );
};

const HeaderArea = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 60px;
`;

const NotificationIconArea = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const NotificationActive = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
  width: 10px;
  height: 10px;
  border-radius: 50px;
  background-color: #ff0000;
`;

const NotificationArea = styled.Pressable`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 10%;
  padding: 6px;
`;
