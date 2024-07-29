import React from 'react';
import Layout from '@theme/Layout';
import PageHeader from '../components/PageHeader'; // Import PageHeader component if needed
import GEMinAI_Launch_Event170 from "./GEMinAI_Launch_Event170.jpg";
import GEMinAI_Launch_Event176 from "./GEMinAI_Launch_Event176.jpg";
import GEMinAI_Launch_Event179 from "./GEMinAI_Launch_Event179.jpg";
import GEMinAI_Launch_Event191 from "./GEMinAI_Launch_Event191.jpg";
import IMG_3070 from "./IMG_3070.jpg";

import styles from "./index.module.css";
import Link from "@docusaurus/Link";


export function Institutionsa({ list }) {
  return (
    <section >
      <div >
        {list.map((category) => (
          <div key={category.title} className="row margin-bottom--lg"  style={{           
          borderRadius:'8px',
           padding:'17px',
   
          }}
             
          >
            <h2 className="col col--2 "  >{category.title}</h2>
            {category.members.map((props) => (
                   <a href={props.url} target="_blank" rel="noopener noreferrer">
                   <img
                                     className="institutionsa-image"

                     src={props.log}
                     alt={props.name}
                     style={{

                      height:'100px',             
                    width: '185px',
                     borderRadius:'10px',
                      padding:'10px 45px',
                      margin:'25px' ,
                      backgroundColor:'  var(--ifm-color-gray-500)'
                     }}
                   />
                 </a>      


              // <Institution key={props.name} {...props}   />
         
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
export const InstitutionList = [
  {
    // title: "Participating Universities",
    members: [
      {
        name: "SE4AI",
        log: require("../../logos/se4ai_news.png").default,
        url: "https://se4ai.org/",
      },
      {
        name: "GEMinA",
        log: require("../../logos/GEMinA.png").default,
        url: "https://www.concordia.ca/research/applied-ai-institute/initiatives/geminai.html",
      },
      {
        name: "AIinstitute",
        log: require("../../logos/AI_Institute_magenta_EN.png").default,
        url: "https://www.concordia.ca/research/applied-ai-institute.html",
      },
      
      
      
    ]}]
const GEMinAIProgramPage = () => {
  return (
    <Layout title="2024-25 GEMinAI Program - Applications Now Open " description="The project's GEMinAI Program.">

<PageHeader title="2024-25 GEMinAI Program - Applications Now Open">

</PageHeader>

      <main style={{
        // border: '2px solid red',
        // maxWidth: '950px',
        // marginLeft:'300px',
        // marginTop:'15px'
        }} className='GEMinAIContainer'>
  <div  >
    <img src={IMG_3070} alt="IMG_3070" width="195 " />
  <img src={GEMinAI_Launch_Event176} alt="GEMinAI_Launch_Event176" width="220 "/>

  <img src={GEMinAI_Launch_Event191} alt="GEMinAI_Launch_Event191" width="220 "/>
  <img src={GEMinAI_Launch_Event170} alt="GEMinAI_Launch_Event170" width="220 "/>

  <img src={GEMinAI_Launch_Event179} alt="GEMinAI_Launch_Event179" width="220 "/>

  
         <p>
         Together with the Applied AI institute at Concordia,  we are excited to announce the launch of our recruitment campaign for the next cohort of the
<strong> Gender Equity Mentoring in AI (GEMinAI)</strong> Program.      </p>
      <p>
      If you are a professional working in the field of AI, please consider mentoring a student for 6 months during the 2024-25 academic year. For more information and to apply, please complete the 
    <strong> Mentor Application Form</strong> here:</p>

      {/* <p><a href="https://airtable.com/appRSDpicOuCifPPL/pag5pFp28pzutcEh1/form">https://airtable.com/appRSDpicOuCifPPL/pag5pFp28pzutcEh1/form </a></p> */}
      <p className={styles.buttons}>
    <Link className="button button--primary button--lg" to="https://airtable.com/appRSDpicOuCifPPL/pag5pFp28pzutcEh1/form">
      Apply Now
    </Link>
  </p>
      <p>Mentees must be currently enrolled as Concordia undergraduate or graduate students and identify as a woman or non-binary person.  CREATE SE4AI trainees from all institutions are eligible to join.  To apply, please complete the
<strong> Mentee Application Form</strong> here:</p>
      {/* <p><a href="https://airtable.com/appRSDpicOuCifPPL/pagQHgB1Re4kX97DA/form">https://airtable.com/appRSDpicOuCifPPL/pagQHgB1Re4kX97DA/form</a></p> */}
      <p className={styles.buttons}>
    <Link className="button button--primary button--lg" to="https://airtable.com/appRSDpicOuCifPPL/pagQHgB1Re4kX97DA/form">
      Apply Now
    </Link>
  </p>

 
      
      
      {/* <p>



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
      */}


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
<main  >
    <Institutionsa list={InstitutionList}  />
    </main>
          </main>
        {/* </div>    */}
    </Layout>
  );
};

export default GEMinAIProgramPage;

