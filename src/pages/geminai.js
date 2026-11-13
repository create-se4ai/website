import React from 'react';
import Layout from '@theme/Layout';
import PageHeader from '../components/PageHeader'; // Import PageHeader component if needed
import BannerGEMinAI from "./BannerGEMinAI.jpg";
import AI_mentorship from './news/AI_mentorship.png';

// import styles from "../css/custom.css"
import IMG_3070 from "./IMG_3070.jpg";

import styles from "./index.module.css";
import Link from "@docusaurus/Link";


// export function Institutions({ list }) {
//   return (
//     <section >
//       <div >
//         {list.map((category) => (
//           <div key={category.title} className="row margin-bottom--lg"  >

//             <h2 className="col col--2 "  >{category.title}</h2>
//             {category.members.map((props) => (
//                    <a href={props.url} target="_blank" rel="noopener noreferrer">
//                    <img className="institutionsa-image"

//                      src={props.log}
//                      alt={props.name}

//                    />
//                  </a>      


//               // <Institution key={props.name} {...props}   />
         
//             ))}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

const GEMinAIProgramPage = () => {
  return (
    <Layout title="GEMinAI Program" description="The project's GEMinAI Program.">

<PageHeader title=" GEMinAI Program " />

<main >
<section>

<div className='container'>



    <h2 className="col col--12 section">News</h2>

 <div className="col col--12 section">
  <h3><strong>Finding their place in AI through mentorship
  </strong></h3>

<div class="events " style={{ 
    marginLeft: '12px' ,
    '@media screen and (max-width: 966px)': {
        maxHeight: '100%',
        flexWrap: 'wrap',
        maxWidth: '300px'
    }
}}>

<div class="manuel_cosentino_n_CMLApjfI_unsplash1" >

 <img src={AI_mentorship}
 style={{   width:'150px',hight:'110px'
  }}
  />
</div>
<div class="text"> 
  Concordia’s GEMinAI program connects women and gender-diverse students and professionals with mentors working across the artificial intelligence field. 
<a href="https://hub.concordia.ca/cunews/stories/2026/11/11/finding-their-place-in-ai-through-mentorship.html?site_identifier=hub"> <strong>Read More</strong></a>
</div>
</div>
</div>




  <div class="row margin-bottom--md">
    
  <h2 class="col col--12 section">Applications for the next cohort will re-open in September 2027

  </h2>


<div style={{ alignItems: "center" }}>
  <img
    src={BannerGEMinAI}
    alt="BannerGEMinAI.jpg"
    height="300"
  />
</div>

        <p className='GEMI'>  
          Together with the <a href="https://www.concordia.ca/research/applied-ai-institute/initiatives/geminai.html">Applied AI Institute at Concordia</a>, we offer support to women and gender diverse individuals who will engage with AI in their careers through the <strong>Gender Equity Mentoring in AI (GEMinAI)</strong> Program. The GEMinAI Program was established in 2023 as a response to gender inequality within artificial intelligence fields, where women make up only 25% of AI specialists. GEMinAI works to narrow this gap by connecting women and gender diverse Concordia University students with AI professionals for support, encouragement, and assistance along their career journey. By facilitating mentorship opportunities, we aim to create an environment where aspiring AI professionals can thrive, ultimately contributing to a more diverse and inclusive AI landscape.</p>
<p className='GEMI'>Since its inception, the GEMinAI Program has matched over 90 student mentees across Concordia’s four faculty with experienced mentors from industry, government and non-profit organizations. 

</p>
<div>

     {/* <p className="GEMI">
  <strong>Mentee Application</strong>{" "}
  (for Concordia students and CREATE SE4AI trainees){" "}
  <a
    href="https://airtable.com/appRSDpicOuCifPPL/pagXMD1mzMjercOMk/form"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      marginLeft: "15px",
      padding: "8px 18px",
      borderRadius: "6px",
      backgroundColor: "#6F2DA8",
      color: "#FFFFFF",
      textDecoration: "none",
      fontWeight: "600",
    }}
  >
    Apply Now
  </a>
</p>

<p className="GEMI">
  <strong>Mentor Application</strong>{" "}
  (for professionals){" "}
  <a
    href="https://airtable.com/appRSDpicOuCifPPL/pagHgBZA0QBgbKRyk/form"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      marginLeft: "15px",
      padding: "8px 18px",
      borderRadius: "6px",
      backgroundColor: "#6F2DA8",
      color: "#FFFFFF",
      textDecoration: "none",
      fontWeight: "600",
    }}
  >
    Apply Now
  </a>
</p> */}


<p className='GEMI'>
For more information on the GEMinAI Program, please visit our sister website at <a href="https://www.concordia.ca/research/applied-ai-institute/initiatives/geminai.html">https://www.concordia.ca/research/applied-ai-institute/initiatives/geminai.html</a>


     </p>   
    </div>    
</div>
   
   

       



  </div>
  <div class="row margin-bottom--lg">
</div> 
{/* <main  className="geminAI-prtner">
    <Institutions list={InstitutionList}   />
    </main> */}
 </section>
          </main>
    </Layout>
  );
};

export default GEMinAIProgramPage;

