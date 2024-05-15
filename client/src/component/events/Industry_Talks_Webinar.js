import React ,{useContext,useEffect}from "react";
import styled from "@emotion/styled";
import apr252023Image from "../2022-09-21-past/apr252023.jpg";
import { DarkModeContext } from "../DarkModeContext";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import {Grid} from "@mui/material";
const Industry_Talks_Webinar=()=>{
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
            <Subtitle  isDarkMode={isDarkMode}
        >
Industry Talks Webinar - April 25, 2023​
   
        </Subtitle>
        <Img src={apr252023Image} alt=" apr252023.jpg" />
        <Details isDarkMode={isDarkMode}>
          CREATE SE4AI is pleased to present Patrick Mesana, Consultant at
          National Bank of Canada and PhD Candidate at HEC, who spoke
          <Bold isDarkMode={isDarkMode}>
            {" "}
            on Balancing Data Valorization and Privacy: Industry Challenges and
            Opportunities.
          </Bold>{" "}</Details>
          <Details2 isDarkMode={isDarkMode}>
          In his talk, Patrick delved into the distinct characteristics of data
          as a digital asset and examined the challenges of striking a balance
          between data valorization and privacy. Emphasizing the importance of
          data management in large organizations, such as financial
          institutions, he addressed the emerging challenges posed by privacy
          laws and the rapid growth of AI. Through a discussion of evolving
          practices like privacy-by-design, advances in privacy engineering, and
          innovative privacy technologies such as data synthesis, he offered
          valuable insights for navigating the intricate future of data privacy
          within organizations. Furthermore, he brought to light potential
          future disruptors, such as open banking in Canada, particularly
          relevant to the finance sector.
        </Details2>
        <Bold2 isDarkMode={isDarkMode}>About the Speaker:</Bold2>
        <Details isDarkMode={isDarkMode}>
          Patrick Mesana began his career as a software engineer, gaining
          experience with consulting companies and startups before transitioning
          into the field of Data Science. As a former manager in the Data Office
          of National Bank of Canada (NBC), Patrick encountered numerous data
          management challenges. He is currently pursuing a PhD in decision
          science to explore the tradeoffs between data privacy and data value.
          In addition, Patrick serves as a researcher and scientific lead on
          these topics for the AI Factory at NBC.
        </Details>
        <YoutubeChannel isDarkMode={isDarkMode}>
          The webinar recording is available to view on our{" "}
          <a
            href="https://www.youtube.com/watch?v=EEDTbt3Y3Lk&feature=youtu.be"
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
export default Industry_Talks_Webinar;


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
max-width:1000px;
 height:700px;
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
max-width: 980px;
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





const Bold2 = styled.span`
  font-weight: bold;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
  /* line-height: 2em; */
  margin-bottom: -15px;
  font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";


`;