import { Text } from "react-native";
import styled from "styled-components/native";
export const OptionsNotification = ({
  title,
  description,
  date,
  icon,
  color = "#335cef",
}) => {
  return (
    <AreaOptions>
      <AreaIcon >
        <CircleIcon style={{ backgroundColor: color }}>{icon}</CircleIcon>
      </AreaIcon>
      <AreaBody>
        <AreaTitleBody>
          <TextTitle>{title}</TextTitle>
        </AreaTitleBody>
        <AreaDescriptionBody>
          <Text>{description}</Text>
        </AreaDescriptionBody>
      </AreaBody>
      <AreaRightBody>
        <AreaRightDate>
          <TextDate>{date}</TextDate>
        </AreaRightDate>
        <AreaRightIcon>
          <Circle>
            <Text>1</Text>
          </Circle>
        </AreaRightIcon>
      </AreaRightBody>
    </AreaOptions>
  );
};

const AreaOptions = styled.TouchableOpacity`
  margin-left: 10px;
  margin-right: 10px;
  flex-direction: row;
  justify-content: flex-start;
  height: 60px;
`;

const AreaIcon = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  height: 100%;
`;

const AreaBody = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 100%;
  border-color: #1b1b1b4a;
  border-bottom-width: 1px;
`;

const AreaTitleBody = styled.View`
  width: 100%;
  font-weight: 600;
  color: #000;
  align-items: flex-start;
  justify-content: left;
  padding-left: 10px;
`;

const TextTitle = styled.Text`
  font-size: 13px;
  font-weight: 600;
  color: #000;
`;

const AreaDescriptionBody = styled.View`
  width: 100%;
  color: #000;
  padding-left: 10px;
  padding-bottom: 8px;
`;

const AreaRightBody = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
  height: 100%;
  border-color: #1b1b1b4a;
  border-bottom-width: 1px;
  padding-bottom: 8px;
`;

const AreaRightDate = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50%;
`;

const TextDate = styled.Text`
  font-size: 12px;
  font-weight: 600;
  color: #000;
`;

const AreaRightIcon = styled.View`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 50%;
`;

const CircleIcon = styled.View`
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  background-color: #00b362;
`;

const Circle = styled.View`
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  background-color: #b9b609;
`;
