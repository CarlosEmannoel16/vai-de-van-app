import styled from "styled-components/native";
import { OptionsProfile } from "../molecules/OptionsProfile";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { useNavigationController, useUser } from "../../hooks";
import { NotificationsList } from "../organism/NotificationList";
import { useLinkTo } from "@react-navigation/native";
import { sendNotification } from "../../services/Notification/Notification";
export const Profile = () => {
  const { setUser, user } = useUser();
  const { changeToStack } = useNavigationController();

  return (
    <>
      <ScrollViewExternal>
        <ImageBackgroundExternal
          source={{
            uri: "https://cdn.pixabay.com/photo/2015/06/20/07/24/color-815551_1280.png",
          }}
        >
          <ProfileInformation>
            <NotificationsList />
            <ProfilesInformationInternal>
              <ProfileImageArea>
                <ProfileImage
                  source={{
                    uri: "https://media.licdn.com/dms/image/D4D03AQFyEYwsDcfjEg/profile-displayphoto-shrink_200_200/0/1707534719234?e=1715212800&v=beta&t=OgpCJKi2_OycDnhEntv1g6OOzGZNDQSkoV-JEuOzUCU",
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
            actionOnClick={sendNotification}
          />
          <OptionsProfile
            Icon={<MaterialIcons name="history" size={16} color="black" />}
            description="Minhas viagens"
          />
          <OptionsProfile
            Icon={<Fontisto name="email" size={16} color="black" />}
            description="Minha conta"
            actionOnClick={() => {
              changeToStack("MyAccount");
            }}
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
  height: 120px;
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
  font-weight: 800;
  color: #000;
`;

const OptionsArea = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;
