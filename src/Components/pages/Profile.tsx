import styled from "styled-components/native";
import { OptionsProfile } from "../molecules/OptionsProfile";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
export const Profile = () => {
  return (
    <ScrollViewExternal>
      <HeaderArea>
        <NotificationArea>
          <Ionicons name="notifications" size={24} color="black" />
        </NotificationArea>
      </HeaderArea>
      <ProfileInformation></ProfileInformation>
      <OptionsArea>
        <OptionsProfile
          Icon={<FontAwesome5 name="user-cog" size={16} color="black" />}
          description="Meus dados"
        />
        <OptionsProfile
          Icon={<MaterialIcons name="history" size={16} color="black" />}
          description="Minhas viagens"
        />
        <OptionsProfile
          Icon={<Fontisto name="email" size={16} color="black" />}
          description="Minha conta"
        />
        <OptionsProfile
          Icon={<Ionicons name="exit-outline" size={16} color="black" />}
          description="Sair"
        />
      </OptionsArea>
    </ScrollViewExternal>
  );
};

const ScrollViewExternal = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

const HeaderArea = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 40px;
`;

const NotificationArea = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 10%;
  padding: 4px;
`;

const ProfileInformation = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80px;
`;

const OptionsArea = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
