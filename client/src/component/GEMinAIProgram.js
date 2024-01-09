import React, { useContext } from "react";
import styled from "styled-components";
import { DarkModeContext } from "./DarkModeContext";
import {Grid} from "@mui/material";
import GEMinAIImage from "../component/png/GEMinAI.png";
import AIinstituteImage from "../component/png/AIinstitute.png";
import logo from "./img/logo.svg";
import logoDark from "./img/logo_dark.svg";
const GEMinAIProgram = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <Container>
       <Grid
    container
    justifyContent="center"
 alignItems="center"
    style={{ flex: 1,padding:"20px" }}
    
  >     

      <Main>
      <Grid item xs={12} md={12} lg={12} xl={12}>

        <Row>
          <Col1> 
          
      <header>

      <Title isDarkMode={isDarkMode}>GEMinAI Program</Title>
      </header>
      <Img src={ GEMinAIImage} alt=" GEMinAI.jpg" />
      <Details isDarkMode={isDarkMode}>
      <Bold isDarkMode={isDarkMode}>The GEMinAI (Gender Equity Mentoring in AI)</Bold> Program addresses gender
inequity within artificial intelligence fields, where women make up only 25%
of AI specialists (World Economic Forum, 2021). <Bold isDarkMode={isDarkMode}>GEMinAI</Bold> aims to narrow
this gap by connecting women and gender non-conforming undergraduate
and graduate students with AI industry professionals for support,
encouragement and assistance along their career journey.</Details>
<Details isDarkMode={isDarkMode}>
Mentors and mentees commit to at least 4 one-hour sessions across 2
semesters (2 in Fall and 2 in Winter) with a recommended 6 sessions.
Meetings can be in person at the mentor’s workplace, a nearby location, or
virtually based on mutual agreement and convenience.
Read more about <Bold isDarkMode={isDarkMode}>GEMinAI</Bold> <a href="https://www.concordia.ca/news/stories/2023/11/28/new-concordia-mentoring-project-geminai-addresses-gender-inequity-in-artificial-intelligence.html?c=/research/applied-ai-institute">
    here</a></Details>
    <Details isDarkMode={isDarkMode}>
To apply to be a Mentor, please fill out the application form:

</Details>
<Details isDarkMode={isDarkMode}>

For more information on the <Bold isDarkMode={isDarkMode}>GEMinAI</Bold> Program, please contact us:<ul>
<li>Lori Akiyama, CREATE SE4AI <EmailLink href="mailto:lori.akiyama@concordia.ca">lori.akiyama@concordia.ca</EmailLink>{" "}</li>
<li>Lindsay Rodgers, Applied AI Institute <EmailLink href="mailto:lindsay.rodgers@concordia.ca">lindsay.rodgers@concordia.ca</EmailLink></li>
<li>Mitali Ruths, Applied AI Institute <EmailLink href="mailto:mitali.ruths@concordia.ca">mitali.ruths@concordia.ca</EmailLink></li></ul>
        </Details>
      <Details isDarkMode={isDarkMode}><Bold isDarkMode={isDarkMode}>The GEMinAI Program is proudly presented in partnership by:</Bold></Details>
        
      <Img3 src={isDarkMode ? logoDark : logo} alt="CREATE SE4AI" />{" "}

        <Img2  src={AIinstituteImage} alt="AIAIinstitute"/>
        
          </Col1>
          <Col2></Col2>
        </Row>    </Grid>
       </Main>
      
  
      </Grid>
    </Container>
  );
};

export default GEMinAIProgram;

// The CSS Part
const Container = styled.div`
/* border:2px solid red */
   display: flex;
   /* flex: 1 0 auto; */
   font-family:   "-apple-system", "Segoe UI", sans-serif;
  /* border: ${(props) =>
    props.isDarkMode ? "  0px solid #404040" : "  2px solid #f4f0ec"}; */
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
/* max-height:1000px; */
margin-bottom:20px;
margin-left:200px;
margin-top:45px;
/* border:2px solid yellow; */
  @media screen and (min-width: 1700px) {
    align-items: center;
    margin-left: calc(30% - 140px); 
    margin-bottom:calc(50% - 140px);
    max-width:100%;

  }
  @media screen and (max-width: 768px) {
    margin-top:15px;
  }

  @media screen and (max-width: 480px) {
    margin-top:20px;
  }
`;

const Bold = styled.span`
  font-weight: bold;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
width:100%;  
padding-top:500px;
  font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
/* a{
  margin-left:15px;
  } */
`;
const Img = styled.img`
width:100%;
text-align:center;
 max-width: 765px; 
 height:400px;
/* border:2px solid red; */
  padding-top: 20px;
  padding-bottom:20px;
  background-color: ${(props) => (props.isDarkMode ? "" : "white")};

  @media screen and (max-width: 480px){height:200px;}
`;

const Img2 = styled.img`
width:100%;
text-align:center;
 max-width: 765px; 
 height:200px;
/* border:2px solid red; */
  padding-top: 50px;
  padding-bottom:20px;
  background-color: ${(props) => (props.isDarkMode ? "" : "white")};

  @media screen and (max-width: 480px){height:200px;}
`;

const Img3 = styled.img`
width:100%;
text-align:center;
 max-width: 765px; 
 height:200px;
/* border:2px solid red; */
  padding-top: 50px;
  padding-bottom:20px;

  @media screen and (max-width: 480px){height:200px;}
`;
const Title = styled.h1`
  font-weight: 700;
  /* padding-top: 20px; */
  font-size: 2rem;
  color: ${(props) => (props.isDarkMode ? "white" : "black")};
  /* width: 100%;  */

`;

const Details = styled.div`
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
width:100%; 
max-width: 740px;
  line-height: 1.7em;
  font-size: 16px;  
padding-top:20px;
font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";

  a {  

    color: #bb5a7d;
    text-decoration: none;  

  }

  a:hover {
    text-decoration: underline;
  }
`;

const Main=styled.div` 
max-width:1900px;
width:100%;
/* width: 1900px; */
/* border:2px solid red; */
margin-top:-40px;
/* margin:0px 16px ; */
color: ${(props) => (props.isDarkMode ? "white" : "#484848")}; 
 @media screen and (max-width: 900px) {
  margin-left:-200px;
  width: 1900px;
/* padding-left:20px; */
  margin-top:-20px;
  margin-right:0px;
  padding-right:-500px;

display:flex;
flex-direction:row;

} 


`
const Row=styled.div`    display: flex;
flex-direction: row;
flex-wrap: wrap;
/* margin:0px 16px ; */
width:100%; 
/* border:2px solid blue; */


 `
const Col1=styled.div`
/* max-width:66.66667%; */
/* padding:0px 16px; */
/* border:2px solid orange; */

`
const Col2=styled.div`
max-width:16.66667%;
/* padding:0px 16px; */
/* border:2px solid red; */
`
const EmailLink = styled.a`
  text-decoration: none;
  color:rgb(187, 90, 125);
width:100%;

  &:hover {
    color:rgb(187, 90, 125);;
    text-decoration: underline;
  }

`;