import styled from "styled-components";
const vars = {
  color: {
    primary: "#58C0A6",
    white: "#F0F4F7",
    grey: "#445264",
    primary: "#58C0A6",
    greenDark: "#04503D",
    blueDark: "#222E55",
    greyLigth: "#E4E4E4",
    greenLigth: "#E9F7FC",
  },
  size: {
    h1: `6.4rem`,
    h2: "4rem ",
    h3: "2.8rem",
    h4: `1.8rem`,
    p1: "2rem",
    p2: "1.4rem",
    p3: "1.2rem",
  },
};

export const Button = styled.button`
  color: ${(props) => (props.primary ? vars.color.white : vars.color.blueDark)};
  width: 100%;
  background-color: ${(props) =>
    props.primary ? vars.color.primary : vars.color.white};
  border: ${(props) =>
    props.primary ? `1px solid ${vars.color.primary}` : `0`};
  padding: 14px 22px;
  margin: ${(props) => props.margin};
  border-radius: 6px;
  font-weight: 700;
  font-size: ${vars.size.p1};
  font-family: "Plus Jakarta Sans", sans-serif;
  cursor: pointer;
  @media (min-width: 768px) {
    width: 260px;
  }
`;

export const H1 = styled.h1`
  color: ${vars.color.blueDark};
  font-size: ${vars.size.h3};
  font-weight: 800;

  @media (min-width: 768px) {
    font-size: ${vars.size.h1};
  }
`;

export const H2 = styled.h2`
  color: ${vars.color.blueDark};
  font-size: ${vars.size.h4};
  font-weight: 700;
  margin: ${(props) => props.margin};

  @media (min-width: 768px) {
    font-size: ${vars.size.h2};
  }
`;

export const P1 = styled.p`
  color: ${vars.color.grey};
  font-size: ${vars.size.p1};
  font-weight: 400;
  margin: 20px 0;
`;

export const P2 = styled.p`
  color: ${(props) => (props.opinion ? vars.color.blueDark : vars.color.grey)};
  font-size: ${vars.size.p2};
  margin: ${(props) => (props.margin ? props.margin : "0 auto")};
  width: ${(props) => props.width};
  margin-left: ${(props) => props.ml};
  font-weight: ${(props) => (props.patient ? `700` : `400`)};

  @media (min-width: 768px) {
    font-size: ${(props) => (props.patient ? `2.4rem` : vars.size.p1)};
  }
`;

export const P3 = styled.p`
  color: ${vars.color.blueDark};
  font-size: ${vars.size.p3};
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: ${vars.size.p1};
  }
`;

export const Card = styled.section`
  width: 90%;
  margin: 50px auto 100px auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid; */

  @media (min-width: 768px) {
    flex-direction: ${(props) => (props.reverse ? `row-reverse` : `row`)};
    justify-content: space-between;
    height: 450px;
  }
`;

export const CardContent = styled.div`
  max-width: 400px;
  height: ${(props) => props.height};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px) {
    height: ${(props) => props.hDesktop};
  }
  @media (min-width: 1024px) {
    max-width: 600px;
  }
`;

export const CardImage = styled.div`
  width: 250px;
  height: 300px;
  margin: ${(props) => props.margin};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Image = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};

  @media (min-width: 1424px) {
    width: ${(props) => props.wDesktop};
    height: ${(props) => props.hDesktop};
    top: ${(props) => props.topDesktop};
    left: ${(props) => props.leftDesktop};
  }
`;

export const Bg = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) =>
    props.inside ? vars.color.primary : vars.color.greenLigth};
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  /* border: 1px solid; */
  border-radius: ${(props) => props.borderRadius};
  z-index: ${(props) => (props.inside ? `-1` : `-2`)};

  @media (min-width: 1424px) {
    width: ${(props) => props.wDesktop};
    height: ${(props) => props.hDesktop};
    top: ${(props) => props.topDesktop};
    left: ${(props) => props.leftDesktop};
  }
`;

export const Container = styled.div`
  display: flex;
  margin: 10px 0;
  align-items: center;
`;
export const Icon = styled.i`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  color: ${vars.color.primary};
  background-color: #fff;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: ${(props) => props.size};
`;
export const ButtonStudy = styled(Button)`
  @media (min-width: 768px) {
    width: 400px;
  }
`;

export const OpinionContainer = styled.div`
  width: 90%;
  height: 240px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1024px) {
    height: 425px;
  }
`;
export const OpinionCard = styled.div`
  width: 100%;
  height: 200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  border-radius: 15px;

  @media (min-width: 1024px) {
    height: 340px;
    width: 70%;
  }
`;
export const Patient = styled(Container)`
  justify-content: space-evenly;
  flex-direction: column;
`;
export const CovidCard = styled(OpinionContainer)`
  background-color: ${vars.color.primary};
  border-radius: 6px;
  margin: 140px auto;
  justify-content: space-evenly;
`;
export const ButtonCovid = styled(Button)`
  width: 300px;
  @media (min-width: 768px) {
    width: 370px;
  }
`;
export const ContainerCovid = styled(Container)`
  flex-direction: column;
  justify-content: space-between;
  height: 100px;
  text-align: center;

  @media (min-width: 768px) {
    height: 100px;
  }
`;

export const Foot = styled.footer`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 0 auto 100px auto;
  height: 700px;
  justify-content: space-between;

  @media (min-width: 1024px) {
    flex-direction: row;
    height: 200px;
  }
`;
export const FooterC1 = styled.div`
  width: 90%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 1024px) {
    height: 150px;
  }
`;
export const FooterC2 = styled.div`
  width: 90%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const FooterC3 = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
`;
export const IconRedes = styled(Icon)`
  width: 30px;
  height: 30px;
  background-color: transparent;
  margin-right: 30px;
  cursor: pointer;
`;
export const FooterT1 = styled.h4`
  font-size: ${vars.size.p1};
  font-weight: 700;
  color: ${vars.color.blueDark};
`;
export const FooterP1 = styled(P2)`
  font-size: ${vars.size.p1};
  font-weight: 700;
  color: ${vars.color.blueDark};
  margin: 0;
`;
