import React from 'react';
import Layout from "@theme/Layout";
import PageHeader from "../../components/PageHeader";

import clsx from "clsx";
import GideonPeters from '../spotlight/imgs/GideonPeters.jpg';

const RachnaRajSpotlight = () => {
  return (
  <Layout title="Trainee Spotlight" description="The project's spotlights.">
      <PageHeader title="Trainee Spotlight" />


    <div style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.6' }}>
      {/* <h2 className="col col--12 section">Rachna Raj</h2> */}

      <img
        src={GideonPeters}
        alt="GideonPeters.jpg"
        style={{ width: '700px', display: 'block', margin: '20px 0' ,hight:'400px'}}
      />

      <p>
        <strong>Gideon Peters,</strong> obtained his MASc in Software Engineering from Concordia University in 2025.  His work explores the intersection of web performance engineering and large language models (LLMs), with a focus on automating complex development workflows. Prior to obtaining his master's degree, Gideon acquired industry experience as a Frontend Engineer, where he encountered firsthand the challenges of building fast, scalable web applications. Currently, Gideon works as a Senior Software Engineer at MedeloopAI in Montreal.  We caught up with him recently to learn more about his transition from academia to industry.
      </p>

      <h3>You recently started working as a Senior Software Engineer at MedeloopAI in Montreal.  How have you managed the transition from graduate studies to full time employment? </h3>

      <p>
        Honestly, it’s been a very rewarding transition.
         I was already comfortable executing and building systems before graduate school,
          but my graduate studies refined how I think — especially around problem framing, tradeoffs,
           and evaluating complex approaches more rigorously.
      </p>

   

      <p>
      At MedeloopAI, particularly with the rise of agentic workflows in modern software systems,
       that research mindset has been directly applicable.
        There have been several situations where I’ve drawn from academic
         literature or research-driven techniques to design more reliable, thoughtful systems.
       Graduate school didn’t change my ability to execute — it sharpened it.
      </p>
       
      <p>
        What has made the transition especially meaningful is working in healthcare.
         Unlike many other domains, you can see the real-world impact of your work almost immediately.
          Knowing that the systems we build are used by clinicians and patients in everyday settings adds a level of responsibility and motivation that’s incredibly rewarding.
           It pushes me to think not just about technical correctness,
         but about trust, reliability, and user experience in a very tangible way.
      </p>

       <p>
        Overall, the shift has been less about moving from theory to practice,
         and more about integrating deeper thinking into fast-moving, high-impact execution.
       </p>



      <h3>What would you say was the most practical aspect of the CREATE training you received and why?
</h3>
     <p>
      I would say the most practical aspect of the CREATE training was the industry talks.
       They grounded everything we were learning in real-world applications.
        Hearing directly from professionals who were building and deploying systems at scale made the research feel tangible and relevant.
       It reinforced that the concepts we were studying weren’t just theoretical exercises — they had direct industry impact.
     </p>
<p>
Those talks also created a sense of urgency and motivation for me. 
They made me eager to apply what I was learning beyond academia and to think about how research translates into production environments.

</p>
<p>
The mentorship component was equally valuable. Guidance from fellow CREATE members, my postdoc Dr. Khatoonabadi, and my supervisor Prof. Emad Shihab, gave me different perspectives — from peers navigating similar paths to experienced researchers who understood both academic and industry landscapes. 
That mentorship helped me refine not just my technical skills, but also my professional direction.
</p>
<p>
  Together, those elements made the training practical because they connected theory, application, and career development in a very cohesive way.
</p>



      <h3>Congratulations on your recent paper acceptance at MSR.  Can you tell us a bit about this achievement and what it symbolizes for you?</h3>
     <p>
      Thank you — it was a deeply meaningful milestone for me.
     </p>
<p>
  The topic I explored was fairly novel, and bringing it to life was far more challenging than I initially anticipated. There were moments of doubt and uncertainty — especially when working in an area without a well-defined roadmap. That made the acceptance even more rewarding.
</p>
<p>
Having the work validated through peer review at MSR was both humbling and affirming. It felt like months of persistence, iteration, and refinement were recognized by experts in the field. Beyond the publication itself, it symbolized resilience — the ability to push through ambiguity and trust the process even when the outcome isn’t guaranteed.
</p>
<p>
  For me, it represents more than just an academic achievement. It reinforced the belief that with focus, discipline, and conviction, I can take on ambitious ideas and bring them to fruition. That realization has been incredibly empowering.
</p>



     <h3>
      As an artist who has produced over 10 singles, 1 EP and an upcoming album, it is clear that your talent extends beyond the academic realm.  What advice do you have for people who have big dreams but may be afraid to pursue them?
     </h3>

     <p>
      Haha — that’s very kind of you.
     </p>
    <p>
      Music has always been a part of who I am, just as much as software engineering. One of the highlights of my master’s was meeting Dr. Abram Hindle, who explores the intersection between software engineering and music. It’s a niche space, but it reminded me that we don’t have to choose between our passions — sometimes the most interesting paths come from combining them. Our program coordinator, Lori, consistently encouraged me to embrace that mindset and to see my interests as complementary rather than conflicting. That perspective has stayed with me, and it’s something I hope to explore more deeply in the future.
    </p>
   
   <p>
    For anyone with big dreams but afraid to pursue them, I truly believe we only get one shot at life. No one has it fully figured out — everyone is navigating it for the first time. People can offer advice, but ultimately, no one else gets to live your life for you.
   </p>
   <p>
    If there’s something you deeply care about, I think it’s worth pursuing — even if there’s risk involved. Failure is temporary, but regret can last much longer. At least if you try, you’ll know you honored what mattered to you.
   </p>
   <p>
    And often, the “worst-case scenario” is far less catastrophic than we imagine. Growth usually lives on the other side of discomfort.
   </p>
    </div>
        </Layout>
  );
};

export default RachnaRajSpotlight;
