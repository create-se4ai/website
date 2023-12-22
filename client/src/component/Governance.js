import React, { useContext } from "react";
import styled from "styled-components";
import { DarkModeContext } from "./DarkModeContext";
import ProgramCommittee from "./ProgramCommiittee";
import SteeringCommittee from "./SteeringCommittee";
import { Grid } from "@mui/material";

const Governance = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <Container isDarkMode={isDarkMode}>
      <Grid container justifyContent="center" alignItems="center">
        <Main isDarkMode={isDarkMode}>
          <Title isDarkMode={isDarkMode}>Governance</Title>
          <Subtitle isDarkMode={isDarkMode}>
            <RedText>P</RedText>rogram Committee
          </Subtitle>
          <ProgramCommittee isDarkMode={isDarkMode} />
          <Subtitle isDarkMode={isDarkMode}>
            <RedText>S</RedText>teering Committee
          </Subtitle>
          <SteeringCommittee isDarkMode={isDarkMode} />
        </Main>
      </Grid>
    </Container>
  );
};

export default Governance;

const Container = styled.div`
  font-family: "Open Sans", sans-serif;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
  height: 100%;
  width: 100%;
  margin-left: 70px;
`;

const Main = styled.div`
  width: 100%;
  max-width: 1400px;
  padding-top: 0.7px;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
  height: 100%;
  background-color: ${(props) => (props.isDarkMode ? "#181818" : "#ffffff")};
`;

const Title = styled.div`
  font-weight: 700;
  display: flex;
  flex-wrap: wrap;
  margin-top: -20px;
  padding-top: 60px;
  font-size: 45px;
  padding-bottom: 80px;
  border-bottom: 2px solid ${(props) => (props.isDarkMode ? "#212529" : "#f0f0f0")};
  color: ${(props) => (props.isDarkMode ? "#ffffff" : "#484848")};
  background-color: ${(props) => (props.isDarkMode ? "#242526" : "#ffffff")};
  width: 100%;
  min-width: 100vw;
  margin-left: -600px;
  padding-left: 600px;
`;

const Subtitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  font-size: 2em;
  font-weight: bold;
  color: ${(props) => (props.isDarkMode ? "#ffffff" : "#484848")};
`;

const RedText = styled.span`
  color: #bb5a7d;
`;
