import React from "react";
import medico from "../../assets/medico.png";
import {
  Bg,
  Button,
  Card,
  CardContent,
  CardImage,
  H1,
  Image,
  P1,
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
    </>
  );
};

export default CardSpecialists;
