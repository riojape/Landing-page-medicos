import React from "react";
import medica from "../../assets/medica.png";
import checkBox from "../../assets/check2-circle.svg";
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
  ButtonStudy,
} from "../styledComponents/Home";

const CardStudy = () => {
  return (
    <Card>
      <CardContent>
        <H2 margin="0 0 20px 0">
          Información necesaria sobre el estudio en un solo lugar{" "}
        </H2>
        <Container>
          <Icon url={checkBox} size="30px" />
          <P2 ml="20px">Procedimiento del estudio</P2>
        </Container>
        <Container>
          <Icon url={checkBox} size="30px" />
          <P2 ml="20px">Preguntas frecuentes</P2>
        </Container>
        <Container>
          <Icon url={checkBox} size="30px" />
          <P2 ml="20px">
            Recomendaciones sobre cómo prepararse para un estudio
          </P2>
        </Container>
        <ButtonStudy primary margin="20px 0">
          Leer más sobre los estudios
        </ButtonStudy>
      </CardContent>
      <CardImage margin="100px 0 0 0">
        <Image
          src={medica}
          alt="foto de medico"
          width="250px"
          height="310px"
          top="-60px"
          left="20px"
          wDesktop="500px"
          hDesktop="600px"
          topDesktop="-280px"
          leftDesktop="-290px"
        />
        <Bg
          width="209px"
          height="224px"
          left="-20px"
          top="24px"
          borderRadius="150% 20px 20px 150%"
          wDesktop="500px"
          hDesktop="450px"
          topDesktop="-130px"
          leftDesktop="-440px"
          inside
        ></Bg>
        <Bg
          width="89px"
          height="224px"
          left="180px"
          top="24px"
          wDesktop="208px"
          hDesktop="450px"
          topDesktop="-130px"
          leftDesktop="00px"
          inside
        ></Bg>
      </CardImage>
    </Card>
  );
};

export default CardStudy;
