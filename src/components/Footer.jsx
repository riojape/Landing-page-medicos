import React from "react";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import {
  H1,
  P2,
  Foot,
  FooterC1,
  FooterC2,
  FooterC3,
  IconRedes,
  FooterT1,
} from "./styledComponents/Home";

const Footer = () => {
  return (
    <Foot>
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
    </Foot>
  );
};

export default Footer;
