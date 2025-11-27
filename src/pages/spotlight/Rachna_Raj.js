import React from 'react';
import Layout from "@theme/Layout";
import PageHeader from "../../components/PageHeader";

import clsx from "clsx";
import RachnaRaj from '../spotlight/imgs/RachnaRaj2.jpg';

const RachnaRajSpotlight = () => {
  return (
  <Layout title="Trainee spotlight" description="The project's spotlights.">
      <PageHeader title="Trainee spotlight" />


    <div style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.6' }}>
      <h2 className="col col--12 section">Rachna Raj</h2>

      <img
        src={RachnaRaj}
        alt="Rachna Raj"
        style={{ width: '700px', display: 'block', margin: '20px 0' ,hight:'400px'}}
      />

      <p>
        Rachna is a PhD student in Software Engineering at Concordia University’s DAS Lab
        under the supervision of Dr. Diego Elias Costa. Her research focuses on the
        sustainability of open-source software (OSS) supply chains, helping maintainers
        understand usage, risks, and predict failures before releases. She also explores
        the human, societal, and EDI aspects of AI-enabled software systems.
      </p>

      <h3>Describe your research area and its importance in software engineering</h3>
      <p>
        My research focuses on the sustainability of open-source software (OSS) supply
        chains. Open-source components such as libraries and frameworks are used in almost
        every modern software product, yet many of them are maintained by small teams while
        millions of applications and systems rely on them. This imbalance creates
        significant risks for the broader software ecosystem.
      </p>

   

      <p>
        Therefore, I study the dependent community, meaning the applications and systems
        that rely on specific OSS libraries, and use these data to build tools that provide
        maintainers with clear, actionable insights. My tools show maintainers which parts
        of their software are most used, how they are being used, and where emerging risks
        may lie. My work also aims to predict failures before a release, which reduces the
        chance of widespread outages and saves organizations significant time and cost.
      </p>

      <h3>How will the Google 2025 North America PhD Fellowship impact your research?</h3>
      <p>
        Thank you very much! What excites me about software engineering research is how
        closely it connects to real industry problems. This fellowship strengthens that
        connection for my work. I already receive excellent academic guidance from my
        supervisor, Dr. Diego Elias Costa, which is helping me grow as a researcher.
      </p>
      <p>
        The additional mentorship by a Google Research scientist through this fellowship
        will complement my academic training. Their insight into how my ideas work at
        industry scale, along with feedback on real-world relevance, will help shape my
        research. The funding also helps lighten the financial load, allowing me to focus
        fully on research. I truly appreciate Google for that.
      </p>

      <h3>How has the CREATE SE4AI program helped you as a PhD student?</h3>
      <p>
        The CREATE SE4AI program has helped me grow in ways I honestly didn't expect when I
        started my research journey. It doesn’t treat software engineering as just a
        technical discipline; it pushes us to think about human, societal, and EDI
        dimensions in AI-enabled systems. This has shaped how I think as a researcher.
      </p>
      <p>
        The Engineering AI-based Software Systems course gave me hands-on skills for
        designing and analyzing AI components within real software systems, which I use
        directly in my research. The Social Aspects of AI course opened my eyes to who is
        included or excluded by software systems, and why those questions matter as much as
        the technical ones. I even collaborated on this topic after the course with Prof.
        Tanja Tajmel, which has helped me grow into a more thoughtful researcher.
      </p>

      <h3>Advice for other women and under-represented groups in Software Engineering</h3>
      <p>
        I believe I am still too young to give definitive advice 😉, but here is what I’ve
        learned from my journey and advisors:
      </p>
      <ul>
        <li>Everyone’s path is different, so don't compare yourself to anyone else.</li>
        <li>Stay curious and keep moving, even when things feel unclear.</li>
        <li>Hard work often pays off because everyone is smart these days.</li>
        <li>Take help from your advisors when you feel unsure, and share your fears so they can guide you.</li>
        <li>Keep your technical foundations strong: stay up to date and revisit fundamentals like data structures and algorithms.</li>
        <li>Most importantly, enjoy the journey and trust the process. Not every phase will feel successful, but each step builds your growth.</li>
      </ul>

   
    </div>
        </Layout>
  );
};

export default RachnaRajSpotlight;
