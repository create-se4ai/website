import React from "react";
import Layout from "@theme/Layout";
import clsx from "clsx";
import styles from "../components/TeamMembers.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import TeamMembers from "../components/TeamMembers";
import PageHeader from "../components/PageHeader";




import RachnaRaj from './spotlight/imgs/RachnaRaj2.jpg'
import GideonPeters from './spotlight/imgs/GideonPeters.jpg';
import PouyaFathollahzadeh from './spotlight/imgs/PouyaFathollahzadeh.jpg';
import PatrickLoicFoalem from './spotlight/imgs/PatrickLoicFoalem.jpg';

export default function Highlights() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title="Highlights" description="The project's highlights.">
      <PageHeader title="Highlights" />


        {/* <TeamMembers list={TeamMemberList} /> */}
         <section>
      <div className="container">
        <div className="row">
          <h2 className="col col--12 section">Trainee Spotlight</h2>



 <div className="col col--12 section">
  <h3><strong>Trainee Spotlight - Patrick Foalem  </strong></h3>

<div class="events " style={{ 
    marginLeft: '12px' ,
    '@media screen and (max-width: 966px)': {
        maxHeight: '100%',
        flexWrap: 'wrap',
        maxWidth: '300px'
    }
}}>

<div class="manuel_cosentino_n_CMLApjfI_unsplash1" >

 <img src={PatrickLoicFoalem}
 style={{   width:'150px',hight:'110px'
  }}
  />
</div>
<div class="text"> 
Meet <strong>Patrick Loic Foalem</strong>, PhD and CREATE SE4AI alumnus. Patrick completed his PhD in Software Engineering at Polytechnique Montreal under the supervision of Prof. Foutse Khomh in 2026. We caught up with him recently to find out what's next.
<a href="/spotlight/Patrick_Folalem"> <strong>Read More</strong></a>
</div>
</div>
</div>




 <div className="col col--12 section">
  <h3><strong>Trainee Spotlight - Pouya Fathollahzadeh  </strong></h3>
<div class="events " style={{ 
    marginLeft: '12px' ,
    '@media screen and (max-width: 966px)': {
        maxHeight: '100%',
        flexWrap: 'wrap',
        maxWidth: '300px'
    }
}}>
<div class="manuel_cosentino_n_CMLApjfI_unsplash1" >
<img src={PouyaFathollahzadeh}
style={{   width:'150px',hight:'150px'
 }}
/>
</div>
<div class="text"> 
Meet <strong>Pouya Fathollahzadeh</strong>, PhD candidate in the Software Evolution and Analytics (SEAL) Lab at Queen's University under the supervision of Professor Ying Zou. Pouya's research focuses on applying AI and machine learning to software engineering, particularly to improve the quality and effectiveness of software development and maintenance activities.
<a href="/spotlight/Pouya_Fathollahzadeh"> <strong>Read More</strong></a>
</div>
</div>
</div>




 <div className="col col--12 section">
  <h3><strong>Trainee Spotlight - Gideon Peters  </strong></h3>
<div class="events " style={{ 
    marginLeft: '12px' ,
    '@media screen and (max-width: 966px)': {
        maxHeight: '100%',
        flexWrap: 'wrap',
        maxWidth: '300px'
    }
}}>
<div class="manuel_cosentino_n_CMLApjfI_unsplash1" >
<img src={GideonPeters}
style={{   width:'150px',hight:'150px'
 }}
/>
</div>
<div class="text"> 
This month, we introduce CREATE Alumnus <strong>
   Gideon Peters,
</strong> MASc in our Trainee Spotlight series.
<a href="/spotlight/Gideon_Peter"> <strong>Read More</strong></a>
</div>
</div>
</div>




 <div className="col col--12 section">
  <h3><strong>Trainee Spotlight - Rachna Raj  </strong></h3>
<div class="events " style={{ 
    marginLeft: '12px' ,
    '@media screen and (max-width: 966px)': {
        maxHeight: '100%',
        flexWrap: 'wrap',
        maxWidth: '350px'
    }
}}>
<div class="manuel_cosentino_n_CMLApjfI_unsplash1" >
<img src={RachnaRaj} style={{   width:'150px',hight:'250px'
 }}
/>
</div>
<div class="text"> 
Every month, we highlight the research of a CREATE SE4AI trainee and their impact in the field of software engineering for AI.  In this Trainee Spotlight, we meet <strong>Rachna Raj,</strong> MASc student in the REALISE Lab at Concordia University.
<a href="/spotlight/Rachna_Raj"> <strong>Read More</strong></a>
</div>
</div>
</div>












<h2 className="col col--12 section">Alumni Testimonials</h2>
      

{/* <h2
  className="container2"
  style={{
    marginLeft: '12px'
  }}
>
CREATE SE4AI ALUMNI TESTIMONIALS

</h2> */}

<div class="events " style={{ 
  
    marginLeft: '12px' ,
    '@media screen and (max-width: 966px)': {
        maxHeight: '100%',
        flexWrap: 'wrap',
        maxWidth: '350px'
    }
}}>
<div class="manuel_cosentino_n_CMLApjfI_unsplash1" style={{ width:'35%' }} >
<iframe
  width="100%"
  height="120"

  src="https://www.youtube.com/embed/1cX5uuhm6d0"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>


</div>
<div class="text" style={{marginLeft:'12px'}}> 
CREATE SE4AI alumni <strong>Ahmad Abdellatif,</strong> Assistant Professor at University of Calgary; <strong>Akshat Malik,</strong> Software Engineer at Microsoft; <strong>Lorena Pacheco,</strong> Senior Engineer in Platform Engineering at Slalom Build; and <strong>Khaled Badran,</strong> AI Engineer at KFH share how the program helped them gain technical skills, hands-on experience, and supportive networks to advance their careers.
<a href="https://www.youtube.com/watch?v=1cX5uuhm6d0"> <strong>Watch Video</strong></a>
</div>
</div> 









      </div>
      </div>
      </section>
      



    </Layout>
  );
}
