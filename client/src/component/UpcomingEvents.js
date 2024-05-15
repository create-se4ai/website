import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import { DarkModeContext } from "./DarkModeContext";
import {Grid} from "@mui/material";
import { Link } from "react-router-dom";
import diversity_inclusion_activitiesImage from "./2022-09-21-past/diversity_inclusion_activities.png";

const UpcomingEvents=()=>{
    const { isDarkMode } = useContext(DarkModeContext);

    return(
  
      <Container isDarkMode={isDarkMode}>
      <Grid container justifyContent="center" alignItems="center">
        <Main isDarkMode={isDarkMode}>
          <Grid item xs={6} md={6} lg={12} xl={12}>
     </Grid>
     <Head isDarkMode={isDarkMode}>Upcoming Events</Head>

<Group>


     <Title isDarkMode={isDarkMode}>Awareness to Action: Integrating Equity, Inclusion, and Accessibility in Research
</Title>
<PastEvent isDarkMode={isDarkMode}> 
    <Img src={diversity_inclusion_activitiesImage} alt=" diversity_inclusion_activitiesImage" />
   {/* </Calinder> */}
<Event isDarkMode={isDarkMode}>


Join us for a 2-part workshop series “Awareness to Action: Integrating Equity, Inclusion and Accessibility in Research” <Bold isDarkMode={isDarkMode}> on May 9th and 16th at 10:00AM EDT. </Bold>Through open and interactive discussions, we will explore equity concepts and principles and provide tools tools to help foster a research environment that is both enriching and accessible to diverse perspectives.
  <a href="/blog/Awareness_to_Action"> Read More
      </a>
             </Event>
</PastEvent> 
</Group>
 </Main>
 </Grid>
 </Container>
 )
}
export default UpcomingEvents
const Container = styled.div`
   margin-top: 0px;
   /* margin-left:70px;  */
/* border:2px solid red; */
font-family: "Open Sans", sans-serif;
/* padding-bottom: 20px; */
/* width: 100%; */
display: flex;
font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Ubuntu, Cantarell, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Helvetica', 'Arial', sans-serif, BlinkMacSystemFont;
  /* border: ${(props) =>
    props.isDarkMode ? "  0px solid #404040" : "  2px solid #f4f0ec"}; */
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
    height:100%;
    @media screen and (min-width: 1700px) {
    align-items: center;
    margin-left: calc(30% - 140px); 
    margin-bottom:calc(50% - 140px);

  }
  @media screen and (max-width: 768px) {
    margin-top:15px;
  }

  @media screen and (max-width: 480px) {
    margin-top:20px;
  }
`;


const Main = styled.div`
/* width: 100%; */
margin-top:16px;  
color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
height:100%;
@media screen and (max-width: 480px) {
max-width:350px;

}
@media screen and (min-width: 1700px) {
/* border:2px solid green; */
align-items: center;
  margin-left: calc(27% - 150px); 


}
`
const Head=styled.h1`  
display:flex; 
flex-wrap:wrap;
/* border:2px solid red; */
color: ${(props) => (props.isDarkMode ? "white" : "black")};
margin-left:200px;
   /* color: #bb5a7d; */
font-weight:bold;
font-size:2.5em;
@media screen and (max-width: 480px) {
margin-left:0;

  
    
  }
`
  const Group=styled.div`
  /* border:2px solid orange;  */
  margin-left:200px;
  max-width:950px;
  height:170px;
  margin-bottom:10px;
  @media screen and (max-width: 480px) {
max-width:380px;
height:500px;
margin-left:0;
margin-bottom:10px;
  
    
  }
  `
const Lina=styled(Link)`
border:2px solid red;
/* width:15px; */
color: ${(props) => (props.isDarkMode ? "white" : "black")};
text-decoration: none;
   /* color: #bb5a7d; */
   /* font-size: 17px; */
   font-weight: bold;
   font-size: 19px;

   letter-spacing: .4px; 
   &:hover {
   color: #bb5a7d;
   cursor: pointer;
   text-decoration:underline;
 }`
 const Event=styled.div`
 /* border:2px solid black ; */
 /* border:2px solid orange; */
 /* display :flex;  */
 /* flex-direction:column; */
 /* flex-wrap:wrap; */
 height:120px ;
 /* margin-left:20px; */
 /* border:2px solid blue; */
 max-width:750px;
  a{
  /* display: flex; */
 /* font-size:25px;  */
/* border:2px solid red; */
 color: ${(props) => (props.isDarkMode ? "white" : "black")};
 text-decoration: none;
 color: #bb5a7d;
    /* font-size: 17px; */
    font-weight: bold;
    /* font-family: 'GillSansMTProBoldCondensed',sans-serif; */
    /* font-size: 19px; */
    /* line-height: 23px; */
    letter-spacing: .4px; 
    &:hover {
    color: #bb5a7d;
    cursor: pointer;
    text-decoration:underline;
  }
}
  h5{
    margin-top: -5px;
    font-size: 15px;
    /* line-height:6px; */
    letter-spacing: 0;
    font-weight: normal;
    padding: 10px 0 0 0;
    /* font-family: 'GillSansMTProBoldCondensed',sans-serif; */
    /* border:2px solid red; */
    /* height:20px; */
  }

  @media screen and (max-width: 480px) {
  /* margin-left:350px; */
  margin-top:-75px;
max-width:380px;
/* display :flex;  */
margin-left:5px;
}
 `
 const Title = styled.h3`
 display: flex;
 /* flex-wrap: wrap; */
/* margin-top:-18px;
 padding-top:50px; */
 font-size: 15px;
 /* padding-bottom: 80px; */
 /* border-bottom: 2px solid ${(props) => (props.isDarkMode ? "#212529" : "#f0f0f0")}; */
 color: ${(props) => (props.isDarkMode ? "#ffffff" : "black")};
 /* background-color: ${(props) => (props.isDarkMode ? "#242526" : "#ffffff")}; */
/* Set the width to 100% */
h2{
 /* border:2px solid yellow;  */
/* margin-left:220px; */


}
@media screen and (max-width: 480px) {
 /* margin-left:5px; */
 max-width:300px;

}
`;
 



const PastEvent=styled.div`
display : flex; 
flex-direction:row;
margin-left:15px; /* border:2px solid orange; */
line-height:1.5;
font-size:16px;
height:160px;
/* border:2px solid green; */
/* padding-left:280px; */
@media screen and (max-width: 480px) {
/* padding-left:15px; */
 max-width:360px;
 display : flex; 
/* margin-top:5px; */
flex-wrap:wrap;
height:400px;
margin-bottom:-90px;

}
`
const Img = styled.img`
width:180px;
height:80px;
/* text-align:center; */
/* width: 150px;  */
 /* height:100%; */
/* border:2px solid orange; */
  /* padding-top: 20px; */
  /* padding-bottom:20px; */
  @media screen and (max-width: 480px) {
/* height:500px; */
width:200px;
height:200px;
/* text-align:center; */
/* margin-left:5px; */
}
`;
const Bold=styled.span`
font-weight:bold;
color: ${(props) => (props.isDarkMode ? "white" : "black")};

`
