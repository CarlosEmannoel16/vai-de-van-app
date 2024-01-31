import styled from "styled-components/native";
import { CardHome } from "../molecules/CardHome";
import { Row } from "../atoms/Row";

export const CardsHome = () => {
  return (
    <CardsHomeArea>
      <Row>
        <CardHome url="https://4.bp.blogspot.com/_6TUjO10xRKM/SQCGrxNmUNI/AAAAAAAAAFE/XAf6N6U83MI/w1200-h630-p-k-no-nu/ATgAAAAd5BWFp28r_pysA8XRzUqYjJ6DVIV9mObfR7yJ-70o3AsEVLmXejG7Knl0rmyMSOK8P46UVvpy_Zb_FT7Xe5YAAJtU9VAEn8bFy71UWui12Q_FTc_c8GZGTw.jpg" name="Iguatu" price="R$ 12,30" />
        <CardHome url="https://varzeaalegreagora.com/portal/wp-content/uploads/2018/08/bandeira.jpg" name="Várzea alegre" price="R$ 15,00" />
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
