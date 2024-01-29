import React, { useContext } from "react";
import styled from "styled-components";
import { DarkModeContext } from "./DarkModeContext";
import {Grid} from "@mui/material";
import GEMinAIImage from "../component/png/GEMinAI.png";
import AIinstituteImage from "../component/png/AIinstitute.png";
import logo from "./img/logo.svg";
import logoDark from "./img/logo_dark.svg";
import ProgramSidebar from "./ProgramSidebar";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

const GEMinAIProgram = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
<Container isDarkMode={isDarkMode}>
      <ProgramSidebar />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ flex: 1,
           padding: "20px" }}
      >
        <Grid item xs={12} md={12} lg={12} xl={12}>

      <MainContent isDarkMode={isDarkMode}>
          
      <Grid item xs={12} md={12} lg={12} xl={12}>


      <Title isDarkMode={isDarkMode}>GEMinAI Program</Title>
</Grid>
      <Img src={ GEMinAIImage} alt=" GEMinAI.jpg" />
      <Details isDarkMode={isDarkMode}>

<Bold isDarkMode={isDarkMode}>
The GEMinAI (Gender Equity Mentoring in AI)
</Bold>Program addresses gender
inequity within artificial intelligence fields, where women make up only 25%
of AI specialists (World Economic Forum, 2021). <Bold2 isDarkMode={isDarkMode}>GEMinAI</Bold2> aims to narrow
this gap by connecting women and gender non-conforming undergraduate
and graduate students with AI industry professionals for support,
encouragement and assistance along their career journey.</Details>

<Details isDarkMode={isDarkMode}>
Mentors and mentees commit to at least 4 one-hour sessions across 2
semesters (2 in Fall and 2 in Winter) with a recommended 6 sessions.
Meetings can be in person at the mentor’s workplace, a nearby location, or
virtually based on mutual agreement and convenience.
Read more about 
<Bold2 isDarkMode={isDarkMode}> GEMinAI</Bold2> 
<a href="https://www.concordia.ca/news/stories/2023/11/28/new-concordia-mentoring-project-geminai-addresses-gender-inequity-in-artificial-intelligence.html?c=/research/applied-ai-institute">
 here</a>
</Details>



    <Details isDarkMode={isDarkMode}>
To apply to be a Mentor, please fill out the application form:
<a href="https://docs.google.com/forms/d/e/1FAIpQLScae8M_3FXMUVmUMzf5w1zszdiOVdilnyf6amOghfcmYOE9IQ/viewform">
 here</a>
</Details>

<Details isDarkMode={isDarkMode}>
For more information on the <Bold isDarkMode={isDarkMode}>GEMinAI</Bold> Program, please contact us:<ul>
<li>Lori Akiyama, CREATE SE4AI <EmailLink href="mailto:lori.akiyama@concordia.ca">lori.akiyama@concordia.ca</EmailLink>{" "}</li>
<li>Lindsay Rodgers, Applied AI Institute <EmailLink href="mailto:lindsay.rodgers@concordia.ca">lindsay.rodgers@concordia.ca</EmailLink></li>
<li>Mitali Ruths, Applied AI Institute <EmailLink href="mailto:mitali.ruths@concordia.ca">mitali.ruths@concordia.ca</EmailLink></li></ul>
        </Details>


      <Details2 isDarkMode={isDarkMode}>
        <Bold isDarkMode={isDarkMode}>The GEMinAI Program is proudly presented in partnership by:</Bold>
        </Details2>
        <Box>
        <ChoiceItem isDarkMode={isDarkMode}>

        <Img3 src={isDarkMode ? logoDark : logo} alt="CREATE SE4AI" />{" "}
        </ChoiceItem>

        <ChoiceItem isDarkMode={isDarkMode}>
        <Img2 src={AIinstituteImage} alt="AIAIinstitute" />
        </ChoiceItem>

        </Box>
    

        <Button1 isDarkMode={isDarkMode}>
          <div style={{ width: '50px', marginLeft: '0px' }}>   Previous</div>

            <a href="/intro">
              {" "}
             <div>
              <span><MdKeyboardDoubleArrowLeft style={{paddingTop:'10px',fontSize:'15px' }}/></span>
              Program Overview
              </div> </a>
          </Button1>{" "}


        <Button isDarkMode={isDarkMode}>
       <div >Next</div>
       <a href="/training-program/objectives"> 
        <div> Program Objective{" "} 
           {/* <Icon> */}
             <MdKeyboardDoubleArrowRight />
           {/* </Icon>  */}
           </div>
         </a>
       </Button>
      
      
       </MainContent>
        
       </Grid>

  
      </Grid>
    </Container>
  );
};

export default GEMinAIProgram;

// The CSS Part
const Container = styled.div`
  display: flex;
  font-family: "Open Sans", sans-serif;
/* border:2px solid red; */
  /* margin: 0 auto; */
  font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
`;


const MainContent = styled.div`
  /* border-left: ${props => window.innerWidth <= 1000 ? "none" : "1px solid #e8e8e8"}; */
    /* padding-left:-1px;  */
     margin-left: -5px;
  max-width: 1000px; /* Adjust the maximum width as needed */
  /* padding-top: -40px; */
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
 height:100%; 
  font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  /* border:2px solid green; */
/* margin-top:-10px; */
  

 @media screen and (max-width: 768px) {
  margin-left:-5px;
  /* padding-left:-5px; */
  padding-top:10px;
  /* max-width:300px; */
  /* width:100%s */

} 
 @media screen and (min-width: 1700px) {
    align-items: center;
    margin-left: calc(30% - 150px); 
    margin-top: -390px; 
    /* margin-bottom:calc(13% - 150px); */

  }
`;
const Bold = styled.span`
  font-weight: bold;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
width:100%;  
/* padding-top:5px; */
/* margin-left:0; */
  font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
/* a{
  margin-left:15px;
  } */
`;
const Bold2 = styled.span`
  font-weight: bold;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
/* width:100%;   */
/* padding-top:5px; */
  font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
/* a{
  margin-left:15px;
  } */
`;
const Img = styled.img`
width:100%;
text-align:center;
 max-width: 400px; 
 height:180px;
 margin-left:100px;
/* border:2px solid black; */
  padding-top: 20px;
  padding-bottom:20px;
  background-color: ${(props) => (props.isDarkMode ? "" : "white")};

  @media screen and (max-width: 480px){
    margin-left:0;
    /* height:200px; */
    }
`;
const ChoiceItem = styled.div`
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
  background-color: ${(props) => (props.isDarkMode ? " #BEC3C9" : "white")};
height:60px;
  padding: 20px 50px;
  width:200px;
  margin-right:30px;
  margin-top: 40px;
  border-radius: 12px;
  /* border:2px solid orange;  */

 a {
    text-decoration: none;
    color: inherit;
  }
  @media screen and (max-width: 768px) {
    width:100%;

  }

  @media screen and (max-width: 480px) {
    width:100%;
  }


`
const Box=styled.div`
display:flex; 
flex-direction:row;
margin-left:10px;
padding-top :-20px;
margin-bottom:50px;
@media screen and (max-width: 480px){
  display:flex; 
flex-wrap:wrap;    /* height:200px; */
    } 
/* margin-left:-250px; */
/* margin-top:10px; */
/* border:2px solid black; */
`
const Img2 = styled.img`
/* border:2px solid green; */
/* text-align:center; */
max-width: 190px; 
 height:50px;
margin-top:0px;
padding-left:5px;
  /* padding-top: 5px; */
  /* padding-bottom:20px; */
  @media screen and (max-width: 480px){height:60px;}
`;

const Img3 = styled.img`
width:100%;
/* color:black ;  */
max-width: 70px; 
 height:100px;
padding-left:55px;
margin-top:-15px;
/* padding-top:-175px; */
 /* padding:-75px 45px; */
  /* border:2px solid green; */
  @media screen and (max-width: 480px){height:100px;}
`;

const Title = styled.h1`
  font-weight:700;
  font-size: 50px;
   margin-top: 0px; 
  font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";

  color: ${(props) => (props.isDarkMode ? "white" : "black")};  
  @media screen and (max-width: 768px) {
 margin-bottom:35px;

}
`;

const Details = styled.div`
  padding-top:10px;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
/* margin-top:-25px; */
  /* display:flex;
  flex-direction:row; 
  flex-wrap:wrap; */
  max-width: 885px;
  line-height: 1.65em;
  font-size: 16px; 
/* border:2px solid blue; */
`;

const Details2 = styled.div`
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
  margin-top:5px;  
 /* max-width: 890px;  */
   /* line-height: 1.7em; */
  font-size: 16px;
  margin-bottom: 50px;
  /* border:2px solid green; */
  font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
`;
const Button1 = styled.button`
   max-width:380px; /* Adjust the maximum width as needed */
   width:100%;
  height: 70px;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
  background-color: inherit;
  margin-bottom: 30px;

  margin-right: auto; 
  border-radius: 5px;
  padding-right: 100px; /* Reset padding */
  /* padding-right: 150px; */
  /* padding-top: -2px; */
  font-size: 15px;
  /* line-height: 1.7em; */
  border: 1px solid #606770;
  &:hover {
    border: 1px solid #bb5a7d;
    cursor: pointer;
  }
  div{
    margin-left:-30px;
padding-right:0px;   
 width:250px;
    /* border:2px solid yellow; */
  }

  a {
    margin-left:-15px;
    /* padding-right:20px; */
    /* border:3px solid blue; */
    display: flex;
    flex-direction: row;
    text-decoration: none;
    color: #bb5a7d;
    font-size: 17px;
    font-weight: bold;
    /* margin-right:-20px; */
    /* padding-right:0; */
 }
 @media screen and (max-width: 480px) {
    max-width: 150px;  
     height: 90px;
    padding-top:-200px;
    /* border:1px solid yellow;  */
    padding-top:35px;
    div{
      margin-left:15px;    font-size: 15px;
/* border:1px solid orange; */
margin-top:-15px;
    }
    a {      

         }}
`;
const Button = styled.button`
/* margin-top:-40px; */
padding-top:9px;
/* border:2px solid orange; */
width: 100%; /* Set the width to 100% */
max-width: 380px; /* Adjust the maximum width as needed */
height: 70px;
color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
background-color: inherit;
margin-bottom: 30px;
/* padding-right:2px; */
margin-left: auto; 
border-radius: 5px;
padding-left: 150px; /* Reset padding */
/* padding-right: 150px; */
/* padding-top: -15px; */
font-size: 15px;
/* line-height: 1.7em; */
border: 1px solid #606770;
&:hover {
  border: 1px solid #bb5a7d;
  cursor: pointer;
}
div{
  margin-left:100px;
padding-left:0px;    width:180px;
  /* border:2px solid yellow; */
}

a {
  padding-left:0px;
  /* border:3px solid yellow; */
  display: flex;
  flex-direction: row;
  text-decoration: none;
  color: #bb5a7d;
  font-size: 17px;
  font-weight: bold;
  /* margin-right:-20px; */
  /* padding-right:0; */
}


@media screen and (max-width: 480px) {
  max-width: 170px;  
   height: 90px;
  div{
    margin-left:-127px;
    /* padding-left:0px;  */
  }
  a {
       }}
`;

const EmailLink = styled.a`
  text-decoration: none;
  color:rgb(187, 90, 125);
width:100%;

  &:hover {
    color:rgb(187, 90, 125);;
    text-decoration: underline;
  }

`;