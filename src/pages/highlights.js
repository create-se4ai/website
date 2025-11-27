import React from "react";
import Layout from "@theme/Layout";
import clsx from "clsx";
import styles from "../components/TeamMembers.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import TeamMembers from "../components/TeamMembers";
import PageHeader from "../components/PageHeader";




import RachnaRaj from './spotlight/imgs/RachnaRaj2.jpg'


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
{/* <h2
  className="container2"
  style={{
    marginLeft: '15px',  
  }}
>
    Rachna Raj

</h2> */}
<div class="events " style={{ 
    marginLeft: '12px' ,
    '@media screen and (max-width: 966px)': {
        maxHeight: '100%',
        flexWrap: 'wrap',
        maxWidth: '350px'
    }
}}>
<div class="manuel_cosentino_n_CMLApjfI_unsplash1" >
<img src={RachnaRaj} style={{   width:'450px',hight:'400px'
 }}
/>
</div>
<div class="text"> 
Every month, we highlight the research of a CREATE SE4AI trainee and their impact in the field of software engineering for AI.  In this Trainee Spotlight, we meet <strong>Rachna Raj,</strong> MASc student in the REALISE Lab at Concordia University.
<a href="/spotlight/Rachna_Raj"> <strong>Read More</strong></a>
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



{/* <h2
  className="container2"
  style={{
    marginLeft: '12px',  
  }}
>
Akshat Malik & Lorena Pacheco  </h2>

<div class="events " style={{ 
    marginLeft: '12px' ,
    '@media screen and (max-width: 966px)': {
        maxHeight: '100%',
        flexWrap: 'wrap',
        maxWidth: '250px'
    }
}}>
<div class="manuel_cosentino_n_CMLApjfI_unsplash1" >
<iframe
  width="90%"
  height="150"
 src="https://www.youtube.com/embed/ekNLo0BjrPo?start=7"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>


</div>
<div class="text"> 
In this video, CREATE SE4AI alumni Lorena and Akshat share how the program gave them the technical and professional skills, training and confidence to successfully transition from graduate studies to exciting roles in industry.<a href="https://www.youtube.com/watch?v=ekNLo0BjrPo&t=1s"> <strong>Watch Video</strong></a></div>
</div>  */}





      </div>
      </div>
      </section>
      
      {/* <section>
        <div className="container text-center">
          <div className="row">
            {SuccessList.map((item, index) => (
              <div key={index} className="col col--6 margin-bottom--xl">
<h2 class="col col--12 section"></h2>     
           <video width="400" controls>
                  <source src={item.video} type="video/mp4" />
                </video>
                                <h5>{item.text}</h5>

              
              </div>
            ))}
          </div>
        </div>
      </section> */}


    </Layout>
  );
}
