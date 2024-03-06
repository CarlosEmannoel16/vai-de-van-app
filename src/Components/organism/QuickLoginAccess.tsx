import { useLinkTo, useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { TravelsSearchContext } from "../../hooks/TravelsSearch";
import { useUser } from "../../hooks";
import { ContextOfLogin } from "../../hooks/UserContext";

export const QuickLoginAccess = ({
  inPage,
  action = "",
  title = "Acessar",
}: {
  inPage: ContextOfLogin;
  action?: any;
  title?: string;
}) => {
  const linkTo = useLinkTo();
  const { setContextOfLogin } = useUser();
  return (
    <AreaQuickLoginAccess>
      <UserIcon source={require("../../../assets/user.png")} />
      <TitleQuickLoginAccess>
        Ah, parece que você ainda não fez o login!
      </TitleQuickLoginAccess>
      <TextSubTitleQuickLoginAccess>
        Que tal entrar para facilitar e personalizar a reserva da sua passagem?
      </TextSubTitleQuickLoginAccess>
      <ButtonQuickLoginAccess
        onPress={() => {
          setContextOfLogin(inPage);
          linkTo("/Login");
        }}
      >
        <TextButton>Entrar em minha conta</TextButton>
      </ButtonQuickLoginAccess>
    </AreaQuickLoginAccess>
  );
};
const AreaQuickLoginAccess = styled.View`
  width: 90%;
  height: auto;
  background-color: #fff;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-bottom: 40px;
`;

const TitleQuickLoginAccess = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: #000;
`;

const TextSubTitleQuickLoginAccess = styled.Text`
  font-size: 14px;
  font-weight: 300;
  color: #000;
`;

const ButtonQuickLoginAccess = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: #f04842;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const TextButton = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: 600;
`;

const UserIcon = styled.ImageBackground`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
