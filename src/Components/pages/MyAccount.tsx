import { Text } from "react-native";
import styled from "styled-components/native";
import { HeaderGlobal } from "../organism/HeaderGlobal";
import { InputText } from "../atoms/InputText";
import { useNavigationController, useUser } from "../../hooks";

export const MyAccount = ({ actionReturn = () => {} }) => {
  const { user } = useUser();
  const { changeToTab } = useNavigationController();
  console.log(user);
  return (
    <AreaExternal>
      <HeaderGlobal
        action={() => {
          changeToTab("Perfil");
        }}
        textReturn="Voltar "
      />
      <Session>
        <InputText value={user.name} label="Nome" placeholder={user.name} />
        <InputText value={user.email} label="Email" placeholder={user.email} />
      </Session>
    </AreaExternal>
  );
};

const AreaExternal = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 20px;
`;

const Session = styled.View`
  display: flex;
  width: 100%;
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 20px;
`;
