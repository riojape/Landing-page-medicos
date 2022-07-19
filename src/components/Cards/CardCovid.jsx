import React from "react";
import {
  H2,
  P2,
  CovidCard,
  ButtonCovid,
  ContainerCovid,
} from "../styledComponents/Home";

const CardCovid = () => {
  return (
    <CovidCard>
      <ContainerCovid>
        <H2>¿Tuviste COVID y aún presentas síntomas?</H2>
        <P2>Revisa el estado de tus pulmones con una tomografía de tórax.</P2>
      </ContainerCovid>
      <ButtonCovid>Agenda una TAC de tórax</ButtonCovid>
    </CovidCard>
  );
};

export default CardCovid;
