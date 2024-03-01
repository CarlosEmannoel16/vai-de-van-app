import styled from "styled-components/native";
import { OptionsProfile } from "../molecules/OptionsProfile";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { useUser } from "../../hooks";
import { NotificationsList } from "../organism/NotificationList";
export const Profile = () => {
  const { setUser, user } = useUser();
  return (
    <>
      <ScrollViewExternal>
        <ImageBackgroundExternal
          source={{
            uri: "https://cdn.pixabay.com/photo/2016/10/18/08/13/travel-1749508_1280.jpg",
          }}
        >
          <ProfileInformation>
            <NotificationsList />
            <ProfilesInformationInternal>
              <ProfileImageArea>
                <ProfileImage
                  source={{
                    uri: "https://cdn2.vectorstock.com/i/1000x1000/54/41/young-and-elegant-woman-avatar-profile-vector-9685441.jpg",
                  }}
                />
              </ProfileImageArea>
              <ProfileNameArea>
                <TextProfileName style={{ fontFamily: "Poppins-Regular" }}>
                  {user.name || "Carlos Emannoel"}
                </TextProfileName>
              </ProfileNameArea>
            </ProfilesInformationInternal>
          </ProfileInformation>
        </ImageBackgroundExternal>
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
            actionOnClick={() => setUser(null)}
          />
        </OptionsArea>
      </ScrollViewExternal>
    </>
  );
};

const ScrollViewExternal = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

const ImageBackgroundExternal = styled.ImageBackground`
  width: 100%;
  height: auto;
`;

const ProfileInformation = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 60%;
`;

const ProfilesInformationInternal = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 6px;
`;

const ProfileImageArea = styled.View`
  align-items: center;
  width: 100%;
`;

const ProfileNameArea = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const ProfileImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 50px;
`;

const TextProfileName = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: #fff;
`;

const OptionsArea = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
