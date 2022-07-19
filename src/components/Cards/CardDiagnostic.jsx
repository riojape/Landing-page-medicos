import React from "react";
import medicos from "../../assets/medicos.png";
import shieldCheck from "../../assets/shield-fill-check.svg";
import covid from "../../assets/virus.svg";
import hospital from "../../assets/hospital.svg";
import {
  Bg,
  Card,
  CardContent,
  CardImage,
  H2,
  Icon,
  Container,
  Image,
  P2,
} from "../styledComponents/Home";

const CardDiagnostic = () => {
  return (
    <Card reverse>
      <CardContent height="300px" hDesktop="450px">
        <H2>Encuentra un centro de diagnóstico y agenda tu estudio </H2>
        <P2>
          Compara los precios del estudio en diferentes centros de diagnóstico
        </P2>
        <div>
          <Container>
            <Icon url={shieldCheck} size="30px"></Icon>
            <P2 ml="20px">Protegemos tu salud</P2>
          </Container>
          <Container>
            <Icon url={covid} size="30px"></Icon>
            <P2 ml="20px">Protegemos tu salud</P2>
          </Container>
          <Container>
            <Icon url={hospital} size="30px"></Icon>
            <P2 ml="20px">Protegemos tu salud</P2>
          </Container>
        </div>
      </CardContent>
      <CardImage>
        <Image
          src={medicos}
          alt="foto de medico"
          width="270px"
          height="275px"
          top="5px"
          left="20px"
        />
        <Bg width="254px" height="269px" borderRadius="20px 20px 50% 50%"></Bg>
        <Bg
          width="239px"
          height="254px"
          top="24px"
          borderRadius="20px 20px 50% 50%"
          inside
        ></Bg>
      </CardImage>
    </Card>
  );
};

export default CardDiagnostic;
