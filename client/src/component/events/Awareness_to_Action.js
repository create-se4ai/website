import React ,{useContext,useEffect}from "react";
import styled from "@emotion/styled";
import diversity_inclusion_activitiesImage from "../2022-09-21-past/diversity_inclusion_activities.png";


import { DarkModeContext } from "../DarkModeContext";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import {Grid} from "@mui/material";

const Awareness_to_Action =()=>{
    const { isDarkMode } = useContext(DarkModeContext);
    useEffect(() => {
      // Scroll to the top of the page when the component mounts
      window.scrollTo(0, 0);
    }, []);
    return(
        <Container isDarkMode={isDarkMode}>
                <Grid
    container
    justifyContent="center"
    alignItems="center"
    style={{ flex: 1, padding: "15px" }}
    
  >     <Grid item xs={12} md={12} lg={12} xl={12}>

            <Main>
            <Subtitle isDarkMode={isDarkMode}
        >
Awareness to Action: Integrating Equity, Inclusion, and Accessibility in Research        </Subtitle>
<Img src={diversity_inclusion_activitiesImage} alt=" diversity_inclusion_activitiesImage" />
                <Details isDarkMode={isDarkMode}>
                Join us for a 2-part workshop series “Awareness to Action: Integrating Equity, Inclusion and Accessibility in Research” <Bold isDarkMode={isDarkMode}> on May 9th and 16th at 10:00AM EDT. </Bold> Through open and interactive discussions, we will explore equity concepts and principles and provide tools to help foster a research environment that is both enriching and accessible to diverse perspectives.
        </Details>
  <Details><Bold isDarkMode={isDarkMode}>Awareness to Action: Integrating Equity, Inclusion, and Accessibility in Research

</Bold></Details>
<Details><Bold isDarkMode={isDarkMode}>May 9th and 16th from 10:00 am to 11:30 am EDT
</Bold></Details>
<Details><Bold isDarkMode={isDarkMode}>Join via Zoom:
</Bold><a href="https://concordia-ca.zoom.us/j/81002128613?pwd=djMxeDlMV3FhWUNBbnpEWlJGcDZ6Zz09"> https://concordia-ca.zoom.us/j/81002128613?pwd=djMxeDlMV3FhWUNBbnpEWlJGcDZ6Zz09</a></Details>
<Details isDarkMode={isDarkMode}><Bold isDarkMode={isDarkMode}>Meeting ID:
</Bold> 810 0212 8613</Details>
<Details isDarkMode={isDarkMode}><Bold isDarkMode={isDarkMode}>Passcode:
</Bold> 088220</Details>



        </Main></Grid>
      </Grid>
        </Container>
    )

}
export default  Awareness_to_Action;


const Container = styled.div`
   display: flex;
   flex-direction: column;
  font-family: "Open Sans", sans-serif;
  /* border: ${(props) =>
    props.isDarkMode ? "  0px solid #404040" : "  2px solid #f4f0ec"}; */
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
    height:100%;
/* text-align:center;
align-items:center; */
  width: 100%;  
  @media screen and (max-width: 480px) {
    /* margin-left:-3px; */
  /* border:2px solid green; */
  max-width:350px;
}
  @media screen and (min-width: 1700px) {
    /* align-items: center; */
    margin-left: calc(27% - 150px); 
    margin-bottom:calc(13% - 150px);

  }
`;





const Img = styled.img`
width:100%;
text-align:center;
max-width:1000px;
 height:400px;
  /* height: 200px; */
  padding-top: 20px;
  padding-bottom:20px;
  @media screen and (max-width: 480px){height:200px;}
`;
const Details = styled.div`
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
width:100%; 
max-width: 980px;
  line-height: 1.7em;
  font-size: 16px;  
padding-top:20px;
/* font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"; */

  a {  

    color: #bb5a7d;
    text-decoration: none;  

  }

  a:hover {
    text-decoration: underline;
  }
`;




const YoutubeChannel = styled.div`
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
margin-top:15px;
/* border:2px solid green; */

/* max-width:900px; */
  a {
    margin-left:6px;
    /* width:105%; */
/* width:100%; */
    color: #bb5a7d;
    text-decoration: none;
  line-height: 2em;
    /* @media screen and (max-width: 500px){margin-top:30px;} */
}

 
  a:hover {
    text-decoration: underline;
  }
`;
const Main =styled.div`
margin-left:0px;
/* border:2px solid red;  */
max-width:1200px;
margin-left:170px;
font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
@media screen and (max-width: 480px) {
    max-width:350px;
    margin-left:-12px;

    /* border:2px solid red; */

}
`


const Subtitle = styled.h1`
display: flex;
/* font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"; */
font-size:3rem;
  flex-wrap: wrap;
  margin-top: 55px;
width:100%;
height:100%;
  font-weight: 700;
  color: ${(props) => (props.isDarkMode ? "white" : "black")}; `
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
const Bold = styled.span`
  font-weight: bold;
  color: ${(props) => (props.isDarkMode ? "white" : "black")};
/* width:100%;   */

/* margin-top:30px; */
/* border:2px solid green; */
/* padding-top:500px; */
  font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
/* a{
  margin-left:15px;
  } */
`;
const Img2 = styled.img`
  width: 240px;
  height: 250px;
  margin-left: 4px;
  margin-top: 10px;
`;
const Image = styled.div`
flex-wrap: wrap;
width:100%;

 max-width: 740px;  

`;