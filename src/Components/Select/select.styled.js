import styled from "styled-components/native";
export const AreaMyInputSelectStyled = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  border-bottom-width: 1px;
  border-bottom-color: #00000020;
  border-radius: 6px;
  background-color: #fff;
  margin-bottom: 2px;
  margin-top: 2px;
  padding-left: 5px;
  padding-right: 20px;
`;
export const MyInputSelectButtonStyled = styled.Pressable`
  flex-direction: row;
  align-items: center;
  justify-content: left;
  border-radius: 6px;
  height: 100%;
  width: 100%;
  padding: 10px;
`;

export const InputTextSearchStyled = styled.TextInput`
  height: 50px;
  padding-left: 10px;
  width: 90%;
  border: 1px solid #00000020;
  border-radius: 10px;
  color: #00000080;
`;

export const AreaSearchSelectedModalStyled = styled.View`
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;
`;

export const BodyModalStyled = styled.View`
  width: 100%;
  padding-top: 30px;
  height: auto;
`;

export const AreaOptionsModalStyled = styled.ScrollView`
  width: 100%;
  height: 60%;
`;

export const OptionSelectStyled = styled.Pressable`
  width: 100%;
  height: 60px;
  align-items: flex-start;
  margin-top: 20px;
  padding-left: 30px;
  justify-content: center;
  border-bottom-width: 1px;
  border-bottom-color: #00000020;
`;
