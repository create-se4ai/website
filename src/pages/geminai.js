import React from 'react';
import Layout from '@theme/Layout';
import PageHeader from '../components/PageHeader'; // Import PageHeader component if needed
import GEMinAI_Launch_Event170 from "./GEMinAI_Launch_Event170.jpg";
import GEMinAI_Launch_Event176 from "./GEMinAI_Launch_Event176.jpg";
import GEMinAI_Launch_Event179 from "./GEMinAI_Launch_Event179.jpg";
import GEMinAI_Launch_Event191 from "./GEMinAI_Launch_Event191.jpg";
import group from "./group.jpg";
import { Institutions } from "../components/Institutions";
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
export const InstitutionList = [
  {
    // title: "Participating Universities",
    members: [
      {
        name: "SE4AI",
        log: require("../../logos/Create.png").default,
        url: "https://se4ai.org/",
      },
      {
        name: "GEMinA",
        log: require("../../logos/GEMin.png").default,
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

<PageHeader title=" GEMinAI Program " />

<main >
<section>

<div className='container'>
  <div class="row margin-bottom--md">
    
  <h2 class="col col--12 section">Applications for the 2025-26 GEMinAI Program will open in Summer 2025
  </h2>


  {/* <div 
  class="col col--3 margin-bottom--lg member_src-components-TeamMembers-module memberLarge_src-components-TeamMembers-module">
    
    <div class="card"><div class="card__image">


<img src={IMG_3070} alt="IMG_3070"  /></div></div></div> */}
{/* <div class="col col--3 margin-bottom--lg member_src-components-TeamMembers-module memberLarge_src-components-TeamMembers-module"><div class="card"><div class="card__image">
<img src={GEMinAI_Launch_Event176} alt="GEMinAI_Launch_Event176" height="217" /></div></div></div> */}
{/* <div class="col col--3 margin-bottom--lg member_src-components-TeamMembers-module memberLarge_src-components-TeamMembers-module"><div class="card"><div class="card__image">

<img src={group} alt="group" /></div></div></div> */}
{/* <div class="col col--3 margin-bottom--lg member_src-components-TeamMembers-module memberLarge_src-components-TeamMembers-module"><div class="card"><div class="card__image">

<img src={GEMinAI_Launch_Event179} alt="GEMinAI_Launch_Event179" height="217"  />
</div></div>
</div> */}
</div>
{/* <img src={GEMinAI_Launch_Event191} alt="GEMinAI_Launch_Event191" height="300"  /> */}
        <p className='GEMI'>   
         Together with the <a href="https://www.concordia.ca/research/applied-ai-institute/initiatives/geminai.html">Applied AI Institute at Concordia</a>, 
          we offer support to women and gender diverse individuals who will engage with AI in their careers through the <strong>Gender Equity Mentoring in AI (GEMinAI) </strong>Program. The GEMinAI Program seeks to address gender inequity within artificial intelligence fields, where women make up only 25% of AI specialists (World Economic Forum, 2021). GEMinAI aims to narrow this gap by connecting women and gender diverse graduate and undergraduate students with like-minded AI professionals for support, encouragement, and assistance along their career journey. </p>  
{/* <div className="card__image"> */}
<p className='GEMI'>
For more information about GEMinAI, please contact:

  <li>Lori Akiyama – <a href="mailto:lori.akiyama@concordia.ca">lori.akiyama@concordia.ca</a></li>
  <li>Lindsay Rodgers – <a href="mailto:lindsay.rodgers@concordia.ca">lindsay.rodgers@concordia.ca</a></li>


     </p>   
        

     GEMinAI_Launch_Event191

 


 

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

