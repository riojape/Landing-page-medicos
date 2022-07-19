import React from "react";
import medico from "../../assets/medico.png";
import medicos from "../../assets/medicos.png";
import medica from "../../assets/medica.png";
import shieldCheck from "../../assets/shield-fill-check.svg";
import covid from "../../assets/virus.svg";
import hospital from "../../assets/hospital.svg";
import checkBox from "../../assets/check2-circle.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";
import {
  Bg,
  Button,
  Card,
  CardContent,
  CardImage,
  H1,
  H2,
  Icon,
  Container,
  Image,
  P1,
  P2,
  P3,
  OpinionContainer,
  OpinionCard,
  Patient,
  CovidCard,
  ButtonCovid,
  ContainerCovid,
  Footer,
  FooterC1,
  FooterC2,
  FooterC3,
  IconRedes,
  FooterT1,
  ButtonStudy,
} from "../styledComponents/Home";

const CardSpecialists = () => {
  return (
    <>
      <Card>
        <CardContent>
          <H1>Encuentra tu especialista y pide cita</H1>
          <P1>180 000 profesionales están aquí para ayudarte.</P1>
          <Button primary>Ver especialistas</Button>
        </CardContent>
        <CardImage margin="40px 0">
          <Image
            src={medico}
            alt="foto de medico"
            width="170px"
            height="240px"
            top="21px"
          />
          <Bg
            width="254px"
            height="269px"
            borderRadius="50% 50% 20px 20px"
          ></Bg>
          <Bg
            width="239px"
            height="254px"
            borderRadius="50% 50% 20px 20px"
            top="24px"
            inside
          ></Bg>
        </CardImage>
      </Card>
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
          <Bg
            width="254px"
            height="269px"
            borderRadius="20px 20px 50% 50%"
          ></Bg>
          <Bg
            width="239px"
            height="254px"
            top="24px"
            borderRadius="20px 20px 50% 50%"
            inside
          ></Bg>
        </CardImage>
      </Card>
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
      <OpinionContainer>
        <H2>Opiniones más recientes</H2>
        <OpinionCard>
          <P2 width="80%">
            Excelente trato y atención. Además de explicar todo de forma
            detallada. Muy profesional en todos los sentidos
          </P2>
          <Patient>
            <P2 opinion patient>
              Marilyn Chacon león
            </P2>
            <P3>Paciente</P3>
          </Patient>
        </OpinionCard>
      </OpinionContainer>
      <CovidCard>
        <ContainerCovid>
          <H2>¿Tuviste COVID y aún presentas síntomas?</H2>
          <P2>Revisa el estado de tus pulmones con una tomografía de tórax.</P2>
        </ContainerCovid>
        <ButtonCovid>Agenda una TAC de tórax</ButtonCovid>
      </CovidCard>
      <Footer>
        <FooterC1 h="100px">
          <H1>LOGO</H1>
          <FooterC3>
            <IconRedes url={facebook} size="20px" />
            <IconRedes url={twitter} size="20px" />
            <IconRedes url={instagram} size="20px" />
          </FooterC3>
        </FooterC1>
        <FooterC2 h="150px">
          <FooterT1>Menu</FooterT1>
          <P2 margin="0">Cita</P2>
          <P2 margin="0">Doctor</P2>
          <P2 margin="0">Covid-19</P2>
          <P2 margin="0">Consulta</P2>
        </FooterC2>
        <FooterC2 h="150px">
          <FooterT1>Legal</FooterT1>
          <P2 margin="0">Política de Privacidad</P2>
          <P2 margin="0">Términos de servicio</P2>
          <P2 margin="0">FAQ</P2>
        </FooterC2>
        <FooterC2 h="150px">
          <FooterT1>Sobre nosotros</FooterT1>
          <P2 margin="0">Testimonios</P2>
          <P2 margin="0">Nuestra gestión</P2>
          <P2 margin="0">Nuestra historia</P2>
          <P2 margin="0">Carrera</P2>
        </FooterC2>
      </Footer>
    </>
  );
};

export default CardSpecialists;
