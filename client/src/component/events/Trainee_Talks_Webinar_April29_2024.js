import React ,{useContext,useEffect}from "react";
import styled from "@emotion/styled";
import Trainee_Talks_April29_2024Image from "../2022-09-21-past/Trainee_Talks_April29_2024.jpg";


import { DarkModeContext } from "../DarkModeContext";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import {Grid} from "@mui/material";

const Trainee_Talks_Webinar_April29_2024 =()=>{
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
Trainee Talks Webinar - April 29, 2024
       </Subtitle>
       <Img src={Trainee_Talks_April29_2024Image} alt=" Trainee_Talks_April29_2024Image" />
                <Details isDarkMode={isDarkMode}>
                We hosted our Trainee Talks webinar<Bold isDarkMode={isDarkMode}> on Monday, April 29th, 2024.</Bold> During the session, we had the privilege of hearing from<Bold isDarkMode={isDarkMode}> Amanda Kolopanis,</Bold> a Software Engineering Master's student at Concordia University,
     and<Bold isDarkMode={isDarkMode}> Jaskirat Singh,</Bold> a Software Engineering Master's student at Queen's University.
        </Details>
        <Details>Amanda's talk focused on “Decoding Bias: Exploring Sexism in Software Development through Online Narratives and AI Analysis”.
</Details>
  <Details>Jaskirat's presentation was titled “Empirical Evaluation of Edge AI Deployment Strategies Involving Black-Box and White-Box Operators”.

</Details>

<YoutubeChannel isDarkMode={isDarkMode}>
         The video is now available to view on our
          <a
            href="https://www.youtube.com/watch?v=kwetv1WroWk"
            target="_blank"
            rel="noreferrer"
          >
            CREATE SE4AI YouTube channel
          </a>
        </YoutubeChannel>



        </Main></Grid>
      </Grid>
        </Container>
    )

}
export default  Trainee_Talks_Webinar_April29_2024;


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
    margin-bottom:calc(30% - 200px);

  }
`;





const Img = styled.img`
width:100%;
text-align:center;
width:950px;
height:450px;
/* border:2px solid red; */
  /* height: 200px; */
  /* padding-top: 20px; */
  /* padding-bottom:20px; */
  @media screen and (max-width: 480px){
    width:370px;
    height:200px;
  }
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