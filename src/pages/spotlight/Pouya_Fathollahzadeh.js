import React from 'react';
import Layout from "@theme/Layout";
import PageHeader from "../../components/PageHeader";

import clsx from "clsx";
import PouyaFathollahzadeh from '../spotlight/imgs/PouyaFathollahzadeh.jpg';

const PouyaFathollahzadehSpotlight = () => {
  return (
  <Layout title="Trainee Spotlight" description="The project's spotlights.">
      <PageHeader title="Trainee Spotlight" />


    <div style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.6' }}>
      {/* <h2 className="col col--12 section">Rachna Raj</h2> */}

      <img
        src={PouyaFathollahzadeh}
        alt="PouyaFathollahzadeh.jpg"
        style={{ width: '700px', display: 'block', margin: '20px 0' ,hight:'400px'}}
      />
<p>
  Meet <strong>Pouya Fathollahzadeh</strong>, PhD candidate in the Software Evolution and Analytics (SEAL) Lab at Queen's University under the supervision of Professor Ying Zou. Pouya's research focuses on applying AI and machine learning to software engineering, particularly to improve the quality and effectiveness of software development and maintenance activities.
</p>
<p>
    <h3>Congratulations on approaching the end of your PhD studies.  What have you learned about yourself during this journey, apart from pure academic knowledge?</h3>
The PhD journey has strengthened both my problem-solving mindset and my ability to work independently. I have learned how to take complex and often unstructured problems, break them down into manageable questions, and keep moving forward even when there is no obvious solution. I have learned the value of resilience and adaptability. Research does not always go as planned, and this journey has shown me that persistence can be just as important as technical expertise.
</p>

<p>
    <h3>What is your proudest achievement over the past 4 years as a full-time PhD student?
</h3>
My proudest achievement has been developing an interdisciplinary research profile that brings together software engineering and artificial intelligence while remaining actively engaged with the broader research community. Through my research, teaching, collaborations, and participation in the CREATE program, I have had opportunities not only to develop my own ideas but also to exchange knowledge with researchers from different backgrounds. Seeing my research mature and contribute to this rapidly evolving area has been particularly rewarding.
</p>
  
<p>
    <h3>Recently you spent a week visiting the DAS Lab at Concordia University as part of the CREATE Lab visits. How was the experience for you? Would you recommend it to other trainees?</h3>
The experience was both productive and very welcoming. I particularly enjoyed the opportunity to present my research to members of the DAS Lab and receive feedback from researchers outside my home lab. The discussions gave me new perspectives on my work and sparked several interesting ideas for potential future collaborations. I would definitely recommend the CREATE Lab visits to other trainees; they are a valuable opportunity to step outside your usual research environment, exchange ideas, and build professional relationships with researchers at other institutions.
</p>

<p>
    <h3>Finally, what's next for you?  Where would you like to apply the skills you have gained in your PhD program and through CREATE SE4AI in the real world?
</h3>
My experiences during my PhD and through CREATE have made me even more interested in continuing a research-oriented career at the intersection of software engineering and artificial intelligence. I also hope to share what I have learned with future students and researchers through collaboration, mentorship, and teaching.
</p>
    </div>
        </Layout>
  );
};

export default PouyaFathollahzadehSpotlight;
