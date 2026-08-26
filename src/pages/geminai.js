import React from 'react';
import Layout from '@theme/Layout';
import PageHeader from '../components/PageHeader'; // Import PageHeader component if needed
import BannerGEMinAI from "./BannerGEMinAI.jpg";

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
  <div class="row margin-bottom--md">
    
  <h2 class="col col--12 section">Applications for the 2026-27 GEMinAI Program are now open!

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
<p className='GEMI'>Since its inception, the GEMinAI Program has matched over 75 student mentees across Concordia’s four faculty with experienced mentors from industry, government and non-profit organizations. Interested in joining the GEMinAI community? Applications are now open for 2026-27. 

</p>
<div>

     <p className="GEMI">
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
</p>


<p className='GEMI'>
For more information about GEMinAI, please email us at: <a href="mailto:GEMinAI@concordia.ca">GEMinAI@concordia.ca</a>


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

