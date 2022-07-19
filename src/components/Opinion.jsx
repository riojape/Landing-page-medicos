import React from "react";
import {
  H2,
  P2,
  P3,
  OpinionContainer,
  OpinionCard,
  Patient,
} from "./styledComponents/Home";

const Opinion = () => {
  return (
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
  );
};

export default Opinion;
