import React from 'react';
import Layout from '@theme/Layout';
import PageHeader from '../components/PageHeader'; // Import PageHeader component if needed
import GEMinAI from './GEMinAI.png'; // Import images if needed
import AIinstitute from './AIinstitute.png'; // Import images if needed
import se4ai from './se4ai.png'; // Import images if needed
import styled from "styled-components";

const GEMinAIProgramPage = () => {
  return (
    <Layout title="GEMinAI Program" description="The project's GEMinAI Program.">
      <PageHeader title="GEMinAI Program" />
  <Container>
     <Img src={GEMinAI} alt="GEMinAI" />
      <P>
        The <strong>GEMinAI (Gender Equity Mentoring in AI)</strong> Program addresses gender inequity within artificial intelligence fields, where women make up only 25% of AI specialists (World Economic Forum, 2021). <strong>GEMinAI</strong> aims to narrow this gap by connecting women and gender non-conforming undergraduate and graduate students with AI industry professionals for support, encouragement, and assistance along their career journey.
      </P>
      <P>
        Mentors and mentees commit to at least 4 one-hour sessions across 2 semesters (2 in Fall and 2 in Winter) with a recommended 6 sessions. Meetings can be in person at the mentor’s workplace, a nearby location, or virtually based on mutual agreement and convenience.
      </P>
      <P>
        Read more about <strong>GEMinAI</strong> <a href="https://www.concordia.ca/news/stories/2023/11/28/new-concordia-mentoring-project-geminai-addresses-gender-inequity-in-artificial-intelligence.html?c=/research/applied-ai-institute">here</a>.
      </P>
      <P>
        To apply to be a Mentor, please fill out the application form: <a href="https://docs.google.com/forms/d/e/1FAIpQLScae8M_3FXMUVmUMzf5w1zszdiOVdilnyf6amOghfcmYOE9IQ/viewform">here</a>.
      </P>
      <P>
        To apply to be a Mentee, please fill out the application form: <a href="https://forms.gle/8YnTNPFHoEcSqGxy8">here</a>.
      </P>
      <P>
        For more information on the <strong>GEMinAI</strong> Program, please contact us:
        <br />
        Lori Akiyama, CREATE SE4AI <a href="mailto:lori.akiyama@concordia.ca">lori.akiyama@concordia.ca</a>.
        <br />
        Lindsay Rodgers, Applied AI Institute <a href="mailto:lindsay.rodgers@concordia.ca">lindsay.rodgers@concordia.ca</a>.
        <br />
        Mitali Ruths, Applied AI Institute <a href="mailto:mitali.ruths@concordia.ca">mitali.ruths@concordia.ca</a>.
      </P>
        <Div className="AIinstitute">
          <img src={AIinstitute} alt="AI Institute"  style={{background:'white' }}/>
          <img src={se4ai} alt="CREATE SE4AI" className="logo-light" style={{ width: '80px', marginLeft:'20px' ,marginTop:'5px'}} />

        </Div>
        <div className="logo">
</div>

      </Container>
    </Layout>
  );
};

export default GEMinAIProgramPage;
const Container=styled.div`
/* border:2px solid red; */
max-width:80%;
    margin-left:120px;
    @media screen and (max-width: 480px) {
        margin-left:5px;
  /* border:2px solid green; */
  max-width:370px;
}
  @media screen and (min-width: 1700px) {
    /* align-items: center; */
    margin-left: calc(37% - 150px); 
max-width:1500px;
  }

  `
const Img=styled.img `
background-color:white;/* max-height:60%; */
width:80%;`
const P= styled.p``
const Div=styled.div``