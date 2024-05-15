import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import { DarkModeContext } from "./DarkModeContext";
import traineeSeptemberImage from "./2022-09-21-past/traineeSeptember.jpg"
import apr252023Image from "./2022-09-21-past/apr252023.jpg";
import april32023Image from "./2022-09-21-past/april32023.jpg";
import wie1Image from "./2022-09-21-past/wie1.jpg";
import feb102023Image from "./2022-09-21-past/feb102023.jpg"
import trainee_talk_2Image from "./2022-09-21-past/trainee_talk_2.jpg"
import telecom2Image from "./2022-09-21-past/telecom2.jpg";
import trainee_talk_1Image from "./2022-09-21-past/trainee_talk_1.jpg"
import retreat_groupImage from "./2022-09-21-past/retreat_group.jpg";
import olivierImage from "./2022-09-21-past/olivier.jpg"
import sumon_biswasImage from "./2022-09-21-past/sumon_biswas.jpg";
import Trainee_Talks_Mar25_2024Image from "./2022-09-21-past/Trainee_Talks_Mar25_2024.jpg";
import pasteventImage from "./2022-09-21-past/pastevents.jpg";
import pasteventsImage from "./2022-09-21-past/pastevent.jpg";
import Intllectual_PropertyImage from "./2022-09-21-past/Intllectual_Property.jpg";
import GEMinAIImage from "./2022-09-21-past/GEMinAI.jpg"
import CAN_CWICImage from "./2022-09-21-past/CAN_CWIC.jpg"
import FMSE2Image from "./2022-09-21-past/FMSE2.jpg"
import future_aiImage from "./2022-09-21-past/future_ai.jpg";
import diversity_inclusion_activitiesImage from "./2022-09-21-past/diversity_inclusion_activities.png";
import Trainee_Talks_April29_2024Image from "./2022-09-21-past/Trainee_Talks_April29_2024.jpg";
import manuel_cosentino_n_CMLApjfI_unsplashImage from "./2022-09-21-past/manuel_cosentino_n_CMLApjfI_unsplash.jpg";

import wie2Image from "./2022-09-21-past/wie2.jpg";
import wie3Image from "./2022-09-21-past/wie3.jpg";
import feb272023Image from "./2022-09-21-past/feb272023.jpg"
import {Grid} from "@mui/material";
import { Link } from "react-router-dom";
const Events=()=>{
    const { isDarkMode } = useContext(DarkModeContext);

    return( 
 <Container isDarkMode={isDarkMode}>
      <Grid container justifyContent="center" alignItems="center">
        <Main isDarkMode={isDarkMode}>
          <Grid item xs={6} md={6} lg={12} xl={12}>
     </Grid>
    

<Head>Past Events</Head>
<Group>
<Title>Trainee Talks Webinar - April 29, 2024</Title>
 <PastEvent isDarkMode={isDarkMode}> 
    <Img src={Trainee_Talks_April29_2024Image} alt=" Trainee_Talks_April29_2024Image" style={{ height: "100px" }}/>

<Event isDarkMode={isDarkMode}>

   <h5>  We hosted our Trainee Talks webinar<Bold isDarkMode={isDarkMode}> on Monday, April 29th, 2024.</Bold> During the session, we had the privilege of hearing from<Bold isDarkMode={isDarkMode}> Amanda Kolopanis,</Bold> a Software Engineering Master's student at Concordia University,
     and<Bold isDarkMode={isDarkMode}> Jaskirat Singh,</Bold> a Software Engineering Master's student at Queen's University.
  <a  href="/blog/Trainee_Talks_Webinar_April29_2024" className="read-more-link"> Read More
      </a></h5> 
             </Event>
</PastEvent> 
</Group>



<Group>
<Title isDarkMode={isDarkMode}>Trainee Talks Webinar - March 25, 2024
</Title>
 <PastEvent isDarkMode={isDarkMode}> 
    <Img src={Trainee_Talks_Mar25_2024Image} alt=" Trainee_Talks_Mar25_2024Image" style={{ height: "100px" }} />

<Event isDarkMode={isDarkMode}>

   <h5>  We hosted our Trainee Talks webinar <Bold isDarkMode={isDarkMode}>on Monday, March 25th, 2024. </Bold> It was a great session where we had the opportunity to hear from talented individuals.
  <a  href="/blog/Trainee_Talks_Webinar_March25_2024" className="read-more-link"> Read More
      </a></h5> 
             </Event>
</PastEvent> 
</Group>

<Group>
<Title isDarkMode={isDarkMode}>Trainee Talks Webinar - February 27, 2024
</Title>
 <PastEvent isDarkMode={isDarkMode}> 
    <Img src={manuel_cosentino_n_CMLApjfI_unsplashImage} alt=" manuel_cosentino_n_CMLApjfI_unsplash"  style={{ height: "100px" }} />

<Event isDarkMode={isDarkMode}>

   <h5> Our first Trainee Talks of 2024 was held on Tuesday, February 27th. We welcomed Queen's University Master's student Akshat Malik, who presented his work on Empirical Evaluation of Graph-Anonymized Metrics for JIT Defect Prediction.
  <a  href="/blog/Trainee_Talks_Webinar_February27_2024" className="read-more-link"> Read More
      </a></h5> 
             </Event>
</PastEvent> 
</Group>





{/* -Event*/ } 
<Group>
<Title isDarkMode={isDarkMode}>Future of AI Networking Event - November 30, 2023</Title>   

<PastEvent isDarkMode={isDarkMode}> 
    <Img src={future_aiImage} alt=" future_aiImage" style={{ height: "100px" }}/>
    {/* <Month>Past Event</Month>
        <Day> SE4AI</Day> */}
<Event isDarkMode={isDarkMode}>

   <h5>  
   <a
            href="/"
            target="_blank"
            rel="noreferrer"
          >CREATE SE4AI </a>has partnered with the Montréal chapter of       <a
          href="https://www.womeninairobotics.de/"
          target="_blank"
          rel="noreferrer"
        > Women in AI & Robotics </a>and <a
        href="https://www.concordia.ca/research/applied-ai-institute.html"
        target="_blank"
        rel="noreferrer"
      >Concordia's Applied
                 AI Institute </a>to host a speaker and networking
                  event on the Future of AI <Bold isDarkMode={isDarkMode}>on Thursday Nov. 30th.</Bold><a  href="/blog/Future_of_AI_Networking_Event" className="read-more-link"> Read More
      </a></h5> 
             </Event>
</PastEvent></Group>

{/**-1  Event*/}
<Group>
<Title isDarkMode={isDarkMode}>FM + SE School in Mexico City November 16-17, 2023 </Title>

<PastEvent isDarkMode={isDarkMode}> 
    <Img src={FMSE2Image} alt=" FMSE2.jpg"  style={{ height: "100px" }}/>

<Event isDarkMode={isDarkMode}>

   <h5>Professors Hassan, Khomh and Adams hosted a 2-day conference in Mexico City on Foundational Models and Software Engineering. 
    <a href="/blog/FM_SE_School_in_Mexico_City " className="read-more-link"> Read More
      </a></h5> 
             </Event>
</PastEvent>
</Group>

{/*new event */}
<Group>
<Title isDarkMode={isDarkMode}>CAN-CWIC Conference in Toronto October 20-21, 2023</Title>   

<PastEvent isDarkMode={isDarkMode}> 

    <Img src={CAN_CWICImage} alt=" GEMinAI.jpg"  style={{ height: "120px" }}/>
   
<Event isDarkMode={isDarkMode}>
   <h5> 4 CREATE students attended the annual Canadian Women in Computing Conference in Toronto. This annual conference provides career-oriented workshops.<a href="/blog/CAN_CWIC_Conference_in_Toronto" className="read-more-link"> Read More
      </a></h5> 
             </Event>
</PastEvent>

</Group>



{/*0  Event*/}
<Group>
<Title isDarkMode={isDarkMode}>GEMinAI Mentoring Program Launch October 19, 2023 </Title>
<PastEvent isDarkMode={isDarkMode}> 
    <Img src={GEMinAIImage} alt=" GEMinAI.jpg" style={{ height: "120px",width:"140px" }}/>
<Event isDarkMode={isDarkMode}>

   <h5> 
The Gender Equity Mentoring in AI (GEMinAI) program was launched on Oct. 19, 2023 as a joint initiative between CREATE SE4AI and Concordia’s Applied AI Institute.<a href="/blog/GEMinAI_Mentoring_Program_Launch" className="read-more-link"> Read More
      </a></h5> 
             </Event>
</PastEvent>
</Group>


{/*first Event*/}
<Group1 >
<Title isDarkMode={isDarkMode}>Trainee Talks Webinar - September 25, 2023</Title>
<PastEvent isDarkMode={isDarkMode}>
    <Img src={traineeSeptemberImage} alt=" traineeSeptemberImage" style={{ height: "120px" }} />
<Event isDarkMode={isDarkMode}>
   <h5>    Our CREATE SE4AI community came together on September 25th, 2023 for the first Trainee Talks of the fall semester. We heard Queen's Master's candidate Divya Kamath present her thesis research on Pragmatic Approaches to Schedule Less Builds in Continuous Integration. Then, Mohayeminul Islam, PhD student from University of Alberta shared his work on Characterizing Python Library Migrations. <a href="/blog/Trainee_Talks_Webinar_sptemper25" className="read-more-link"> Read More
      </a></h5> 
             </Event>

</PastEvent></Group1>
{/*second Event*/}
<Group>
<Title isDarkMode={isDarkMode}>Industry Talks Webinar - April 25, 2023</Title>
<PastEvent isDarkMode={isDarkMode}>
    <Img src={apr252023Image} alt=" apr252023.jpg" style={{ height: "100px" }} />
<Event isDarkMode={isDarkMode}>
   <h5>    CREATE SE4AI is pleased to present Patrick Mesana, Consultant at National Bank of Canada and PhD Candidate at HEC, who spoke on <Bold isDarkMode={isDarkMode} >Balancing Data Valorization and Privacy: Industry Challenges and Opportunities.</Bold><a href="/blog/Industry_Talks_Webinar_April25" className="read-more-link"> Read More
      </a></h5> </Event>

</PastEvent></Group>

{/*Third Event*/}
<Group>
<Title isDarkMode={isDarkMode}>Trainee Talks Webinar - April 3rd, 2023</Title>
<PastEvent isDarkMode={isDarkMode}>
    <Img src={april32023Image} alt=" april32023.jpg" style={{ height: "120px" }}/>

<Event isDarkMode={isDarkMode}>
   <h5>  The Spring Trainee Talks webinar was a huge success and we were pleased to have 27 participants join!.<a href="/blog/Trainee_Talks_Webinar_April3rd" className="read-more-link"> Read More
      </a></h5> </Event>
</PastEvent>
</Group>
{/*Forth Event*/}
<Group>
<Title isDarkMode={isDarkMode}>Women in Engineering (WIE) - March 18, 2023</Title>

<PastEvent isDarkMode={isDarkMode}>
    <Img src={wie1Image} alt="wie1Image" style={{ height: "120px" ,width:"150px"}}   />
<Event isDarkMode={isDarkMode}>
   <h5>  On March 18th , CREATE SE4AI took part in WIE Inspire WIE Empower, an
          annual event hosted by the
          <a href="https://www.womeninengineeringconcordia.com/ ">
            {" "}
            Women in Engineering (WIE)
          </a>{" "}
          student association at the
          <a href="https://www.concordia.ca/ginacody.html">
            {" "}
            Gina Cody School of Engineering and Computer Science at Concordia
            University.
          </a>{" "}
          <a href="/blog/Women_in_Engineering" className="read-more-link"> Read More
      </a></h5> </Event>

</PastEvent>
</Group>
{/*Fifth Event*/}
{/* <PastEvent isDarkMode={isDarkMode}>
    <Calinder isDarkMode={isDarkMode}>
    <Month>Sep</Month>
        <Day>25</Day>
   </Calinder>
<Event isDarkMode={isDarkMode}>
    <a href="/blog/Trainee_Talks_Webinar_sptemper25">Trainee Talks Webinar - September 25, 2023</a>
   <h5>    Our CREATE SE4AI community came together on 
              September 25th, 2023 for the first Trainee </h5> </Event>
</PastEvent> */}
{/*Sixth Event*/}
<Group>
<Title isDarkMode={isDarkMode}>Trainee Talks Webinar - February 27, 2023</Title>

<PastEvent isDarkMode={isDarkMode}>

    <Img src={feb272023Image} alt=" feb272023.jpg" style={{ height: "100px" }} />

  
<Event isDarkMode={isDarkMode}>
   <h5> In the first Trainee Talks webinar of 2023, Pierre-Olivier Côté, a Master's student at Polytechnique Montréal spoke about Quality Issues in Machine Learning Software Systems. Immediately following, University of Alberta PhD student Akalanka Galappaththi presented his work.     <a href="/blog/Trainee_Talks_Webinar_February27" className="read-more-link"> Read More
      </a> </h5> </Event>

</PastEvent></Group>
{/*Seventh Event*/}
<Group>
<Title isDarkMode={isDarkMode}>Industry Talks Webinar - February 10, 2023</Title>
<PastEvent isDarkMode={isDarkMode}>
    <Img src={feb102023Image} alt="feb102023.jpg" style={{ height: "100px" }}/>
<Event isDarkMode={isDarkMode}>
   <h5>  
Dr. Gabor Melli, VP of Engineering, AI/ML at San Francisco-based Medable joined us for our first industry talk webinar of 2023! Gabor Melli is a seasoned professional with a proven track record of leading teams and driving positive change. <a href="/blog/Industry_Talks_Webinar_February10" className="read-more-link"> Read More
      </a> </h5> </Event>

</PastEvent></Group>
{/*8th Event*/}
<Group>
<Title isDarkMode={isDarkMode}>Trainee Talks Webinar - December 13, 2022</Title>
<PastEvent isDarkMode={isDarkMode}>
    {/* <Month>Dec</Month>
        <Day>13</Day> */}
    <Img src={trainee_talk_2Image} alt=" trainee_talk_2.jpg" style={{ height: "100px" }}/>
<Event isDarkMode={isDarkMode}>
   <h5>       Trainee Talks is a monthly webinar series featuring <a href="https://se4ai.org/">CREATE SE4AI </a>
          trainees sharing their research topics in software engineering and AI.<a href="/blog/Trainee_Talks_Webinar_December13" className="read-more-link"> Read More
      </a> </h5> </Event>

</PastEvent></Group>
{/*9th  Event*/}
<Group>
<Title isDarkMode={isDarkMode}>Industry Talks Webinar - November 18, 2022</Title>

<PastEvent isDarkMode={isDarkMode}>

    <Img src={telecom2Image} alt=" telecom2.jpg" style={{ height: "100px" }}/>


<Event isDarkMode={isDarkMode}>
   <h5>    CREATE SE4AI is pleased to present <Bold isDarkMode={isDarkMode}> AI Adoption in Telecom Networks </Bold> as part of our Industry Talks webinar series.<a href="/blog/Industry_Talks_Webinar_November18" className="read-more-link"> Read More
      </a></h5> </Event>

</PastEvent></Group>
{/*10th Event*/}
<Group>   
   <Title isDarkMode={isDarkMode}>Trainee Talks Webinar - November 4, 2022</Title>
<PastEvent isDarkMode={isDarkMode}>
    {/* <Month>Nov</Month>
        <Day>4</Day> */}
    <Img src={trainee_talk_1Image} alt="trainee_talk_1.jpg" style={{ height: "100px" }} />
<Event isDarkMode={isDarkMode}>
   <h5> <Bold isDarkMode={isDarkMode}>Topics: Dependency Management and
          Testing of AI-based Software Systems </Bold>
          Our monthly <Bold isDarkMode={isDarkMode}>  CREATE SE4AI Trainee Talks</Bold> webinar series
          kicked off with 2 graduate Software Engineering students presenting
          their research.
      <a href="/blog/Trainee_Talks_Webinar_November4" className="read-more-link"> Read More
      </a></h5> </Event>

</PastEvent></Group>
{/*11th Event*/}
<Group>
<Title isDarkMode={isDarkMode}>CREATE SE4AI Retreat - June 3, 2022</Title>
<PastEvent isDarkMode={isDarkMode}>
    <Img src={retreat_groupImage} alt="retreat_group.jpg" style={{ height: "120px" }}/>
<Event isDarkMode={isDarkMode}>
    <a href="/blog/CREATE_SE4AI_Retreat_June3"></a>
   <h5>  Our 1st annual CREATE SE4AI Program Retreat is a wrap! It was an inspiring day of celebrating our collective accomplishments and exchanging ideas amongst an amazing team of students, professors and industry partners, live and in person at the Chateau Vaudreuil. The future is so bright for this group of talented trainees, they’re gonna need shades.        
           <a href="/blog/CREATE_SE4AI_Retreat_June3" className="read-more-link"> Read More
      </a>  </h5> </Event>

</PastEvent></Group>
{/*12th Event*/}
<Group>
<Title isDarkMode={isDarkMode}>Guest Speaker Webinar - April 12, 2022</Title>

<PastEvent isDarkMode={isDarkMode}>

    <Img src={olivierImage} alt="olivier.jpg" style={{ height: "120px",width:"160px" }} />
<Event isDarkMode={isDarkMode}>
    <a href="/blog/Guest_Speaker_Webinar_April12"></a>
   <h5>   CREATE SE4AI trainees, profs and partners enjoyed a webinar presented by Olivier Blais, co-founder and VP of Decision Science at Moov AI in Montréal. Olivier spoke about "Delivering High Quality Machine Learning Models".<a href="/blog/Guest_Speaker_Webinar_April12 " className="read-more-link"> Read More
      </a></h5> </Event>

</PastEvent></Group>
{/*13th Event*/}
<Group>
<Title isDarkMode={isDarkMode}>Guest Speaker Webinar - February 3, 2022</Title>

<PastEvent isDarkMode={isDarkMode}>
    {/* <Month>Feb</Month>
        <Day>03</Day> */}
<Img
  src={sumon_biswasImage}
  alt="sumon_biswas.jpg"
  style={{
    height: "120px",width:"180px",
    '@media screen and (max-width: 480px)': {
      height: "300px"
    }
  }}
/>



<Event isDarkMode={isDarkMode}>
    <a href="/blog/Guest_Speaker_Webinar_February3"></a>
   <h5>     CREATE SE4AI hosted a webinar by Sumon Biswas, PhD Candidate at Iowa State University on "Understanding and Reasoning Fairness of Machine Learning Pipeline".<a href="/blog/Guest_Speaker_Webinar_February3"  className="read-more-link"> Read More</a> </h5> </Event>

</PastEvent></Group>
</Main>
</Grid>
    </Container>
    )

}
export default Events
const Container = styled.div`
   margin-top: 3px;
/* border:2px solid red; */
font-family: "Open Sans", sans-serif;
/* padding-bottom: 20px; */
/* border:2px solid blue ;  */
display: flex;
font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Ubuntu, Cantarell, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Helvetica', 'Arial', sans-serif, BlinkMacSystemFont;
  /* border: ${(props) =>
    props.isDarkMode ? "  0px solid #404040" : "  2px solid #f4f0ec"}; */
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
    height:100%;

  /* width: 100%; */
  /* @media screen and (max-width: 768px) {
  margin-left:0px;
  display:flex; 
  flex-wrap:wrap;

} */


`;

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
width:300px;
height:200px;
text-align:center;
margin-left:5px;
}
`;

// const Image = styled.div`
// flex-wrap: wrap;
// width:100%;
// height:120px;

//  max-width: 150px;  

// `;
const Main = styled.div`
  width: 100%;
margin-top:5px;  
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
  /* margin: 0 auto; */
height:100%;
  /* background-color: ${(props) => (props.isDarkMode ? "#181818" : "#ffffff")};  */
/* border:2px solid pink; */
/* padding-left:600px; */
@media screen and (max-width: 480px) {
  /* margin-left:-350px; */
  /* padding-left:-500px; */
  max-width:480px;
  
}
@media screen and (min-width: 1700px) {
/* border:2px solid green; */
align-items: center;
    margin-left: calc(27% - 150px); 
  

}
`
const Title = styled.h3`
  /* font-weight: 700; */
  display: flex;
  /* flex-wrap: wrap; */
 /* margin-top:-18px;
  padding-top:50px; */
  font-size: 15px;
  /* padding-bottom: 80px; */
  /* border-bottom: 2px solid ${(props) => (props.isDarkMode ? "#212529" : "#f0f0f0")}; */
  color: ${(props) => (props.isDarkMode ? "#ffffff" : "black")};
  background-color: ${(props) => (props.isDarkMode ? "#242526" : "#ffffff")};
  width: 100%; /* Set the width to 100% */
h2{
  /* border:2px solid yellow;  */
/* margin-left:220px; */


}
@media screen and (max-width: 480px) {
  margin-left:5px;
}
`;
  



const PastEvent=styled.div`
display : flex; 
flex-direction:row;
/* max-width:750px; */
height:160px;
/* border:2px solid green; */
/* border:2px solid green; */
@media screen and (max-width: 480px) {
margin-left:0;
  max-width:360px;
  display : flex; 
/* margin-top:5px; */
flex-wrap:wrap;
/* height:620px; */
margin-bottom:-90px;


}
 `

 const Event=styled.div`
margin-left:15px
; /* border:2px solid orange; */
line-height:1.5;
font-size:16px;
 /* flex-direction:column; */
 /* flex-wrap:wrap; */
 height:120px ;
 /* margin-left:20px; */
 /* border:5px solid blue; */
 width:750px;
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
    font-size: 16px;
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
  /* margin-top:-75px; */
max-width:380px;
height:170px ;
margin-left:5px;
}
 `


const Linka=styled.a`  
 color: ${(props) => (props.isDarkMode ? "white" : "black")};
 text-decoration: none;
    font-weight: bold;
    font-size: 19px;
    letter-spacing: .4px; 
    &:hover {
    color: #bb5a7d;
    cursor: pointer;
    text-decoration:underline;
  }
  h1{
    margin-left:200px;
    color: #bb5a7d;
font-weight:bold;
font-size:2.5em;
@media screen and (max-width: 480px) {
/* max-width:480px; */
/* border:4px solid blue; */
margin-left:0;
margin-top:30px;
/* padding-top:25px; */
  
    
  }
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
height:340px;
margin-left:0;
margin-bottom:10px;
  
    
  }
  `

  const Bold=styled.span`
  font-weight:bold;
  color: ${(props) => (props.isDarkMode ? "white" : "black")};

  `
  const Group1=styled.div`
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
