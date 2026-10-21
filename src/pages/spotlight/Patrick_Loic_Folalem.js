import React from 'react';
import Layout from "@theme/Layout";
import PageHeader from "../../components/PageHeader";

import clsx from "clsx";
import PatrickLoicFoalem from '../spotlight/imgs/PatrickLoicFoalem.jpg';

const PatrickLoicFolalemSpotlight = () => {
  return (
  <Layout title="Trainee Spotlight" description="The project's spotlights.">
      <PageHeader title="Trainee Spotlight" />


    <div style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.6' }}>
      {/* <h2 className="col col--12 section">Rachna Raj</h2> */}

      <img
        src={PatrickLoicFoalem}
        alt="PatrickLoicFoalem.jpg"
        style={{ width: '700px', display: 'block', margin: '20px 0' ,hight:'400px'}}
      />

     <h3><strong>1. Congratulations on recently completing your PhD studies and receiving the jury's commendation of excellence. I am sure this journey has tested your capacity as a researcher in many ways.  Beyond the sheer academic work, what did you learn about yourself in the process?</strong></h3>

     <p>
      My PhD taught me to accept criticism and rejection as part of learning, without taking them personally. I still remember how devastated I felt when my first journal paper was rejected after four or five months of waiting. Back then, I thought such a long wait must mean it would be accepted HAHAHA! After that first rejection, I gradually learned to see feedback as an opportunity to improve.
      One experience really tested this lesson. After revising a paper, I expected another round of minor changes, but received a rejection instead—about eight months into the process. I think my supervisor was more upset than I was! I used the reviewers’ comments to improve the paper and submitted it to a more highly regarded journal, where it was eventually accepted after two rounds of major revisions. The process took roughly two years and taught me patience and perseverance.
      I also learned that I can move forward without having all the answers. Rather than waiting for a decision on one paper, I kept working on the next. Today, I handle criticism better, take rejection less personally, and spend less time worrying about the outcome before taking the next step.
     </p>

      <h3><strong>2. In what ways did the CREATE program help you to grow as a researcher? </strong></h3>

     <p>
        The CREATE program helped me grow beyond the technical aspects of my research through excellent courses and supportive mentors. It taught me to communicate my ideas more clearly, give and receive constructive feedback, and learn from researchers with different perspectives. These experiences strengthened my confidence and shaped my approach to collaboration, teaching, and sharing research with broader audiences. I learned a lot, truly enjoyed my time in CREATE, and found inspiration to establish GAMA Institute.
     </p>

     <h3><strpng>3. You recently founded the GAMA Institute here in Montreal.  Can you tell us a bit more about your motivation behind launching a research institute and who it will benefit?
     </strpng></h3>

     <p>
       I founded GAMA Institute to make research more accessible and help young people discover their potential as researchers, especially French-speaking students. This motivation comes directly from my experiences as a student and teacher in Cameroon and Canada.
     </p>

     <p>I grew up in Cameroon and was introduced to research during my master’s at Université des Montagnes by my supervisor, Professor Foutse Khomh. I still remember the first research paper he shared with me. Reading it, understanding it, and explaining its ideas in simple terms took me a very long time. Research felt unfamiliar and difficult to approach.</p>

     <p>During my PhD, I taught software engineering courses at Polytechnique Montréal and continued teaching master’s students at Université des Montagnes. In Cameroon, I began incorporating research papers into my teaching and realized that, for many students, this was their first experience reading one—just as it had been for me. They faced similar difficulties, including language barriers and limited access to publications. It reminded me how much difference early guidance and mentorship can make.</p>

     <p>In Montreal, my conversations with undergraduate students revealed another concern: uncertainty about their future in software engineering as AI advances. Many worry that AI will take their jobs. I believe making research more accessible can help them understand how our field is changing, identify the skills they need, and see where they can contribute. If university students are worried about their future, we also need to consider how students who are still choosing a career perceive our discipline.</p>

     <p>These experiences showed me both the talent that exists and the need for stronger connections between students, research, and practice. Based in Montreal, GAMA aims to connect Quebec and Francophone Africa through research projects, practical training, mentorship, and science communication in AI and software engineering. We particularly want to support undergraduate students in Quebec and graduate students—especially master’s students—in Francophone Africa, whether they plan to pursue further studies or enter industry.</p>

     <p>We have already launched GAMA WeekPaper, where we explain research papers in French. I currently lead these presentations, but we plan to invite students to prepare and share their own. We are also developing a research summary initiative, supported by a template to help students communicate a paper’s key ideas. Our upcoming research bootcamps will introduce participants to different areas of computer science, with opportunities to continue through longer-term projects and mentorship in our Research Fellow program.</p>
      
      <p>Ultimately, we want to make that first step into research easier. Our goal is to help students learn by doing research, build confidence, develop their own ideas, and turn those ideas into solutions that serve their communities.</p>

     <h3><strong>4. What advice would you give to future software engineering students who aspire to make a real difference in society, especially given the speed at which AI-powered systems are advancing?
     </strong></h3>

      <p>
       Stay curious, build strong foundations, and learn to question what AI produces. Tools will change quickly, but understanding software, evaluating evidence, and recognizing people’s needs will help you adapt.
      </p>

      <p>You do not need to wait until you have all the answers to contribute. Read research papers, find mentors, and work on real problems in your community. Your contribution might be making a system more reliable, protecting someone’s privacy, or making technology accessible in an underserved language.</p>
       
      <p>Learn to use AI, but keep developing your own judgment.</p>
    
    
    </div>
        </Layout>
  );
};

export default PatrickLoicFolalemSpotlight;
