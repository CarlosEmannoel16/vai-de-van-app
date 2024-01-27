import styled from "styled-components/native";
import { CardHome } from "../molecules/CardHome";
import { Row } from "../atoms/Row";

export const CardsHome = () => {
  return (
    <CardsHomeArea>
      <Row>
        <CardHome url="https://www.civitatis.com/blog/wp-content/uploads/2022/10/panoramica-rio-janeiro-brasil.jpg" />
        <CardHome url="https://www.civitatis.com/blog/wp-content/uploads/2022/10/panoramica-rio-janeiro-brasil.jpg" />
      </Row>
      <Row>
        <CardHome url="https://www.civitatis.com/blog/wp-content/uploads/2022/10/panoramica-rio-janeiro-brasil.jpg" />
        <CardHome url="https://www.civitatis.com/blog/wp-content/uploads/2022/10/panoramica-rio-janeiro-brasil.jpg" />
      </Row>
      <Row>
        <CardHome url="https://www.civitatis.com/blog/wp-content/uploads/2022/10/panoramica-rio-janeiro-brasil.jpg" />
        <CardHome url="https://www.civitatis.com/blog/wp-content/uploads/2022/10/panoramica-rio-janeiro-brasil.jpg" />
      </Row>
    </CardsHomeArea>
  );
};

const CardsHomeArea = styled.View`
  margin-top: 30px;
  display: flex;
  width: 100%;
  padding: 0 10px;
`;
