import React from 'react';
import Layout from '@theme/Layout';
import PageHeader from '../components/PageHeader'; // Import PageHeader component if needed
import { Institutions } from "../components/Institutions";
import GEMinAI_Launch_Event170 from "./GEMinAI_Launch_Event170.jpg";
import GEMinAI_Launch_Event176 from "./GEMinAI_Launch_Event176.jpg";
import GEMinAI_Launch_Event179 from "./GEMinAI_Launch_Event179.jpg";
import GEMinAI_Launch_Event191 from "./GEMinAI_Launch_Event191.jpg";

export const InstitutionList = [
  {
    // title: "Participating Universities",
    members: [
      {
        name: "SE4AI",
        log: require("../../logos/se4ai.png").default,
        url: "https://se4ai.org/",
      },
      {
        name: "GEMinA",
        log: require("../../logos/GEMinA.png").default,
        url: "https://www.concordia.ca/research/applied-ai-institute/initiatives/geminai.html",
      },
      {
        name: "AIinstitute",
        log: require("../../logos/AIinstitute.png").default,
        url: "https://www.concordia.ca/research/applied-ai-institute.html",
      },
      
      
      
    ]}]
const GEMinAIProgramPage = () => {
  return (
    <Layout title="GEMinAI Program" description="The project's GEMinAI Program.">
      <PageHeader title="GEMinAI Program" />
      <main style={{
        // border: '2px solid red',
        // maxWidth: '950px',
        // marginLeft:'300px',
        // marginTop:'15px'
        }} className='GEMinAIContainer'>
  <div  >
  <img src={GEMinAI_Launch_Event176} alt="GEMinAI_Launch_Event176" width="220 "/>

  <img src={GEMinAI_Launch_Event191} alt="GEMinAI_Launch_Event191" width="220 "/>
  <img src={GEMinAI_Launch_Event170} alt="GEMinAI_Launch_Event170" width="220 "/>

  <img src={GEMinAI_Launch_Event179} alt="GEMinAI_Launch_Event179" width="220 "/>

  
         <p>
        The <strong>GEMinAI (Gender Equity Mentoring in AI)</strong> Program addresses gender inequity within artificial intelligence fields, where women make up only 25% of AI specialists (World Economic Forum, 2021). <strong>GEMinAI</strong> aims to narrow this gap by connecting women and gender non-conforming undergraduate and graduate students with AI industry professionals for support, encouragement, and assistance along their career journey.
      </p>
      <p>
        Mentors and mentees commit to at least 4 one-hour sessions across 2 semesters (2 in Fall and 2 in Winter) with a recommended 6 sessions. Meetings can be in person at the mentor’s workplace, a nearby location, or virtually based on mutual agreement and convenience.
      </p>
      <p>
        Read more about <strong>GEMinAI</strong> <a href="https://www.concordia.ca/news/stories/2023/11/28/new-concordia-mentoring-project-geminai-addresses-gender-inequity-in-artificial-intelligence.html?c=/research/applied-ai-institute">here</a>.
      </p>
      <p>
        To apply to be a Mentor, please fill out the application form: <a href="https://docs.google.com/forms/d/e/1FAIpQLScae8M_3FXMUVmUMzf5w1zszdiOVdilnyf6amOghfcmYOE9IQ/viewform">here</a>.
      </p>
      <p>
        To apply to be a Mentee, please fill out the application form: <a href="https://forms.gle/8YnTNPFHoEcSqGxy8">here</a>.
      </p>
      <p >
        For more information on the <strong>GEMinAI</strong> Program, please contact us:
        <br />
        Lori Akiyama, CREATE SE4AI <a href="mailto:lori.akiyama@concordia.ca">lori.akiyama@concordia.ca</a>.
        <br />
        Lindsay Rodgers, Applied AI Institute <a href="mailto:lindsay.rodgers@concordia.ca">lindsay.rodgers@concordia.ca</a>.
        <br />
        Mitali Ruths, Applied AI Institute <a href="mailto:mitali.ruths@concordia.ca">mitali.ruths@concordia.ca</a>.
      </p>
     


      </div >


      {/* <div className="Group"> */}

      {/* <img 
      src={GEMinA} 
      alt="GEMinAI"
      className="GEMinAI" 
      style={{
        backgroundColor: 'white',
        width: '33.3%',
        marginTop:'5px',
       marginBottom:'10px',
      }} 
    />   */}
          {/* <Institutions src={AIinstitute} alt="AI Institute"  className="AI" /> */}
    <main>
          <Institutions list={InstitutionList}  /></main>
          </main>
        {/* </div>    */}
    </Layout>
  );
};

export default GEMinAIProgramPage;

