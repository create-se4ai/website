import React ,{useContext,useEffect}from "react";
import styled from "styled-components";
import sumon_biswasImage from "../2022-09-21-past/sumon_biswas.jpg";
import {Grid} from "@mui/material";
import Intllectual_PropertyImage from "../2022-09-21-past/Intllectual_Property.jpg";

import { DarkModeContext } from "../DarkModeContext";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
const Intellectual_Property_Seminar=()=>{
    const { isDarkMode } = useContext(DarkModeContext);
    useEffect(() => {
      // Scroll to the top of the page when the component mounts
      window.scrollTo(0, 0);
    }, []);
    return(
        <Container > <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ flex: 1, padding: "15px" }}
        
      >     <Grid item xs={12} md={12} lg={12} xl={12}>
            <Main isDarkMode={isDarkMode}>
            <Subtitle  isDarkMode={isDarkMode}
        >
             Intellectual Property: How to Protect your Code
        </Subtitle>
        <Img src={Intllectual_PropertyImage} alt=" Intllectual_Property.jpg" />

        <Bold isDarkMode={isDarkMode}>Date: Jan. 18, 2024 </Bold>
        <Bold2 isDarkMode={isDarkMode}>Time: 10:00am – 12:00pm EST </Bold2>

        <Details2 isDarkMode={isDarkMode}>
        Join us as we dive into the fascinating world of intellectual property (IP) in
the realm of AI-based software systems. Gain valuable insights from industry
experts on how you can protect your software and build a strong IP
portfolio, including different valorisation paths available.
        </Details2>
        <Bold2>Join the seminar in person:</Bold2>
        <Details2>Concordia ER Building, 2155 rue Guy, 10 th Floor (Room 1072)</Details2>
        <Bold2>Join the seminar virtually via Zoom:</Bold2><Details2><a href="https://concordia-
ca.zoom.us/j/87066146082?pwd=Y1d3VlVyQjI2d2V6Z21xeUY5TmRsdz09/">https://concordia-
ca.zoom.us/j/87066146082?pwd=Y1d3VlVyQjI2d2V6Z21xeUY5TmRsdz09</a></Details2>
<Details><Bold2>Meeting ID: </Bold2> 870 6614 6082</Details>
<Details><Bold2>Passcode: </Bold2> 041569</Details>
        <Button isDarkMode={isDarkMode}>
     
         <div>  <a href="/blog">
       
            <Icon>
              <MdKeyboardDoubleArrowLeft />
            </Icon>
           <div> Past Events</div>
          </a></div>
        
        </Button>{" "}
        </Main></Grid>
      </Grid>
        </Container>
    )

} 

export default Intellectual_Property_Seminar;

const Container = styled.div`
   display: flex;
   flex-direction: column;
  font-family: "Open Sans", sans-serif;
  /* border: ${(props) =>
    props.isDarkMode ? "  0px solid #404040" : "  2px solid #f4f0ec"}; */
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
    height:100%;
    margin-left:350px;

  width: 100%;  
  @media screen and (max-width: 480px) {margin-left:-3px;
  /* border:2px solid green; */
  max-width:387px;}
  @media screen and (min-width: 1700px) {
    /* align-items: center; */
    margin-left: calc(27% - 150px); 
    /* margin-bottom:calc(13% - 150px); */

  }`;
  const Img = styled.img`
  width:100%;
  text-align:center;
   max-width: 765px; 
   height:450px;
    /* height: 200px; */
    padding-top: 20px;
    padding-bottom:20px;
    @media screen and (max-width: 480px){height:200px;}
  `;
const Main =styled.div`
margin-left:0px;
max-width:750px;`
const Button = styled.button`
display: flex;
flex-wrap: wrap;
max-width: 370px;
border:2px solid orange;
height: 70px;
background-color: inherit;
margin-bottom: 35px;
margin-left: 2px;
padding-right: 200px;
border-radius: 5px;
/* padding-left: 270px; */
margin-top: 45px;
font-size: 13px;
font-weight: bold;
line-height: 1.7em;
border: ${(props) => (props.isDarkMode ? "1px solid #606770":"1px solid #dadde1")};
color: ${(props) => (props.isDarkMode ? "white" : "#484848")};

&:hover {
  border: 1px solid #bb5a7d;
  cursor: pointer;
}
div{
  margin-left:0;
  padding-left:0;
  /* display:flex;
  margin-left:0;
  padding-left:0;    width:100%;
  /* width:400px; */
  margin-top:7px;
  /* border:5px solid orange; */
}
a {
  display: flex;
  flex-direction: row;
  max-width:400px;
  margin-left:0;
  padding-left:0;
  /* border:5px solid yellow; */
  /* padding-right:200px; */
  text-decoration: none;
  color: #bb5a7d;
  font-size: 17px;
  font-weight: bold;
}
`;
const Subtitle = styled.div`
display: flex;
font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";

  flex-wrap: wrap;
  margin-top: 55px;
width:100%;
  font-size: 32px;
  font-weight: bold;
  color: ${(props) => (props.isDarkMode ? "white" : "black")}; `
  const Img3 = styled.img`
  width: 200px;
  height: 160px;
  padding-left: 2px;
  padding-top: 4px;
  transition: transform 0.3s;
  z-index: 0;
`;
const Bold = styled.div`
  font-weight: bold;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
display:flex ; 
padding-top:20px;
  font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
flex-direction:row;
`;
const Details =  styled.div`display :flex;
flex-direction:row;
font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";

`
const Bold2 = styled.div`
  font-weight: bold;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
/* width:100%;   */
/* padding-top:500px; */
  font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
/* a{
  margin-left:15px;
  } */
`;
const Details2 = styled.div`
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
  width:100%; 
max-width: 738px;
  line-height: 1.8em;
  font-size: 16px;
  margin-top: 20px;
  margin-bottom:20px;
  font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  a {
    width:100%;
    color: #bb5a7d;
    text-decoration: none;
    margin-left:5px
  }
  a:hover {
    text-decoration: underline;
  }
`;

const Icon = styled.div`
  padding-top: 3px;
  color: #bb5a7d;
`;

