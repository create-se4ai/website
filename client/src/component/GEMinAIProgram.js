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
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ flex: 1
         }}
      >
        <Grid item xs={12} md={12} lg={12} xl={12}>

      <MainContent isDarkMode={isDarkMode}>
      <Title isDarkMode={isDarkMode}>GEMinAI Program</Title>

      <Grid item xs={12} md={12} lg={12} xl={12}>


</Grid>
<Box>
      <Img2 src={AIinstituteImage} alt="AIAIinstitute" />
      <Img src={ GEMinAIImage} alt=" GEMinAI.jpg" />

      <Img3 src={isDarkMode ? logoDark : logo} alt="CREATE SE4AI" />{" "}
      </Box>
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

</Details>
<Details isDarkMode={isDarkMode}>Read more about 
<Bold2 isDarkMode={isDarkMode}> GEMinAI </Bold2> 
<a href="https://www.concordia.ca/news/stories/2023/11/28/new-concordia-mentoring-project-geminai-addresses-gender-inequity-in-artificial-intelligence.html?c=/research/applied-ai-institute">
  here</a></Details>


    <Details isDarkMode={isDarkMode}>
To apply to be a Mentor, please fill out the application form:
 <a href="https://docs.google.com/forms/d/e/1FAIpQLScae8M_3FXMUVmUMzf5w1zszdiOVdilnyf6amOghfcmYOE9IQ/viewform"> here</a>
</Details>
<Details isDarkMode={isDarkMode}>
To apply to be a Mentee, please fill out the application form:   <a href="https://docs.google.com/forms/d/e/1FAIpQLScPffttgJ27oAhuNewL228pRWQxnQqBvDGOGfrT9P95Kzv7Cw/viewform" >  here</a>
</Details>

<Details isDarkMode={isDarkMode}>
For more information on the <Bold isDarkMode={isDarkMode}>GEMinAI</Bold> Program, please contact us:
<p>Lori Akiyama, CREATE SE4AI <EmailLink href="mailto:lori.akiyama@concordia.ca">lori.akiyama@concordia.ca</EmailLink>{" "}</p>
<p>Lindsay Rodgers, Applied AI Institute <EmailLink href="mailto:lindsay.rodgers@concordia.ca">lindsay.rodgers@concordia.ca</EmailLink></p>
<p>Mitali Ruths, Applied AI Institute <EmailLink href="mailto:mitali.ruths@concordia.ca">mitali.ruths@concordia.ca</EmailLink></p>
        </Details>


   
    


    

 


       
      
      
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
   font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Ubuntu, Cantarell, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Helvetica', 'Arial', sans-serif, BlinkMacSystemFont;
  /* border: ${(props) =>
    props.isDarkMode ? "  0px solid #404040" : "  2px solid #f4f0ec"}; */
  color: ${(props) => (props.isDarkMode ? "#EBEDF0" : "#484848")};
margin-left:75px;
  height: 100%;
  width: 100%;
@media screen and (max-width: 768px) {
    /* margin-left: 150px; */
    /* Adjust margin for screens up to 768px wide */
  }


  @media screen and (min-width: 1700px) {
    /* align-items: center; */
    margin-left: calc(30%-20px); 
    margin-bottom:calc(50% - 250px);
    margin-top:370px;

  }

`;


const MainContent = styled.div`

width: 100%;
 margin-bottom:80px;
/* border:2px solid red; */
  max-width: 1500px;
  /* padding-top: -50px; */
  color: ${(props) => (props.isDarkMode ? "#EBEDF0" : "#484848")};
  /* margin: 10 auto; */
height:100%;
  background-color: ${(props) => (props.isDarkMode ? "#181818" : "#ffffff")};



 @media screen and (max-width: 768px) {
  margin-left:-65px;
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
/* width:100%; */
/* text-align:center; */
 max-width: 1700px; 
 max-height:270px;
 margin-left:40px;
/* border:2px solid black; */
/* padding:0px 30px; */
/* padding-top:-45px; */
  /* padding-bottom:20px; */
  margin-top:-20px;
  background-color: ${(props) => (props.isDarkMode ? "" : "white")};

  @media screen and (max-width: 480px){
margin-left:0px;
    max-width: 280px; 
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
/* border:2px solid orange; */
margin-left:10px;
/* padding-top :-20px; */
max-width:1200px;
margin-bottom:10px;
@media screen and (max-width: 480px){
  display:flex; 
flex-wrap:wrap;  
max-width:480px;
margin-left:0px;
    } 
/* margin-left:-250px; */
/* margin-top:10px; */
/* border:2px solid black; */
`
const Img2 = styled.img`
/* border:2px solid green; */
/* text-align:center; */
max-width: 300px; 
 max-height:70px;
/* align-items:center; */
padding-left:5px;
margin-top:70px;
background-color: ${(props) => (props.isDarkMode ? "#242526" : "#ffffff")};
  @media screen and (max-width: 480px){
 margin-bottom:100px;
 /* max-height:300px; */
}
`;

const Img3 = styled.img`
/* width:100%; */
/* color:black ;  */
max-width: 150px; 
margin-left:120px;
 height:200px;
/* padding-left:55px; */
/* margin-top:-15px; */
/* padding-top:-175px; */
 /* padding:-75px 45px; */
  /* border:2px solid green; */
  @media screen and (max-width: 480px){height:100px;}
`;

const Title = styled.h1`
  font-weight: 700;
  display: flex;
  flex-wrap: wrap;
 margin-top:0.7px;
  padding-top:60px;
  font-size: 48px;
  padding-bottom: 78px;
  border-bottom: 2px solid ${(props) => (props.isDarkMode ? "#212529" : "#f0f0f0")};
  color: ${(props) => (props.isDarkMode ? "#ffffff" : "#484848")};
  background-color: ${(props) => (props.isDarkMode ? "#242526" : "#ffffff")};
  width: 100%; /* Set the width to 100% */
  min-width:100vw;
  /* margin-right:-750px; */
  margin-left:-600px;
padding-left:550px;
/* border:2px solid orange; */

  /* color: ${(props) => (props.isDarkMode ? "white" : "black")};   */
  @media screen and (max-width: 480px) {
    margin-left:-525px;
  /* padding-left:-750px; */
 margin-bottom:35px;

} 
`;

const Details = styled.div`
  padding-top:20px;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
/* margin-top:-25px; */
  /* display:flex;
  flex-direction:row; 
  flex-wrap:wrap; */
  max-width: 1220px;
  line-height: 1.65em;
  font-size: 16px; 
/* border:2px solid blue; */
a{
  color:#bb5a7d;
text-decoration:none;
&:hover {
    cursor: pointer;
    color:#bb5a7d;
    text-decoration:underline;

  }
}

`;

const Details2 = styled.div`
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
  margin-top:5px;  
 /* max-width: 890px;  */
   /* line-height: 1.7em; */
  font-size: 16px;
  margin-bottom: 50px;
  /* border:2px solid green; */
  /* font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"; */
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
