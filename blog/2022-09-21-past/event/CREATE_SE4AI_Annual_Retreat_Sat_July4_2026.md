---
title:  CREATE SE4AI Annual Retreat - July 4th, 2026 
---

import foodBrigeImage from '../foodBridge.jpeg'
import AccessibilityAssistantImage from '../AccessibilityAssistant.jpeg'
import AEGISImage from '../AEGIS.jpg'
import CareWithYouImage from '../CareWithYou.jpg'
import JobSearchandCareerTransitionImage from '../JobSearchandCareerTransition.jpg'
import SmartScheduleHealthImage from '../SmartScheduleHealth.jpg'

import hackathon1Image from '../hackathon1.jpeg'
import Retreat2026Image from '../Retreat2026.jpeg'
import hackathon2Image from '../hackathon2.jpeg'


<p class="sep252023">
<img src={hackathon1Image} width="245"/>
<img src={Retreat2026Image} width="245"/>
<img src={hackathon2Image} width="245"/>
</p>

**The 5th annual CREATE SE4AI Retreat** was held **on Saturday, July 4, 2026,** at the Concordia University Conference Centre, bringing together software engineering graduate students from Concordia University, Polytechnique Montréal, and Queen's University for a full day of learning, collaboration, and networking.

The retreat began with a keynote presentation by Prof. Benoit Baudry on Dependency Hell Redux, followed by program updates from the CREATE SE4AI leadership team. Participants then took part in **the CREATE-a-Thon,** a hackathon-style activity where student teams developed proof-of-concept solutions to real community challenges using agentic AI. The event showcased the creativity and technical skills of the participating teams, with solutions addressing topics such as food waste reduction and care coordination for seniors.

The day also included opportunities to connect with fellow trainees and invited guests from industry and academia.

# Student Projects
<style>
{`
.student-projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 2rem;
}

@media (max-width: 900px) {
  .student-projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .student-projects-grid {
    grid-template-columns: 1fr;
  }
}

.student-project-card {
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,.08);
  background-color: #fff;
}

.student-project-card img {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 15px;
}
`}
</style>

<div className="student-projects-grid">

<div className="student-project-card">
<h2>FoodBridge</h2>
<h4><strong>Social Problem: </strong>Food Waste Redistribution</h4>
<img src={foodBrigeImage} />
  <p><strong>Mohamad Salim, Kawsar Bhuiyan, Sharon Ho, Patrick Foalem, Adekunle Ajibode</strong></p>
<p>
      FoodBridge is a proof-of-concept agentic AI system that tackles the
      problem of food waste by connecting surplus food from restaurants and
      grocers with community kitchens and shelters.
</p>
<a href="https://github.com/kawsarahmedbhuiyan/food-bridge">
      View GitHub →
</a>
</div>



<div className="student-project-card">
<h2>CareWithYou: Human-Centered Support for Independent Aging</h2>
<h4><strong>Social Problem: </strong>Senior Care Coordination</h4>
<img src={CareWithYouImage} />
  <p>
    <strong>Jasmine Latendresse, Yasmine Drissi, Jean Carlors Paul, Sylvain Kouemo, Yu Shi</strong>
  </p>
<p>
      CareWithYou uses multiple AI agents to coordinate structured senior care through assessing medical needs, safety risks and lifestyle habits. CareWithYou supports care planning without replacing clinical judgement, using only necessary patient information and protecting sensitive medical records.
</p>
<a href="https://github.com/ThomasShiyu/TEAM2-CareAgent">View GitHub →</a>
</div>



<div className="student-project-card">
<h2>EzAccess</h2>
<h4><strong>Social Problem: </strong>Accessibility Assistant for Public Services</h4>
<img src={AccessibilityAssistantImage} />
  <p>
    <strong>Samuel Abedu, Gideon Peters, Anthony Forgetta, Yvan-Marcel Carré, Mahi Begoug</strong>
  </p>
<p>EzAccess presents a proof-of-concept agentic AI system that connects users to over 2,400 public places in Montreal such as parks, libraries, community centres, etc.</p>
<a href="https://github.com/MahiBegoug/group_3_accessiblity_assistant_public_services">View GitHub →</a>
</div>


<div className="student-project-card">
<h2>AEGIS: 
Agentic Emergency Guidance and Incident Support</h2>
<h4><strong>Social Problem: </strong>Climate Emergency - Flood Response Assistant</h4>
<img src={AEGISImage} />
 <p>
    <strong>Alor Ebube, Ghada Abushaqra, Khandaker Rifah Tasnia, Yasmine Ben Braiek, Aroh Sunday Melitus</strong>
  </p>
<p>AEGIS is a working proof-of-concept (POC) agentic solution to help flood-affected individuals request urgent aid, find safe shelters, and connect with local volunteers and NGOs in real time.  AEGIS converts fragmented reports into prioritized requests, verified resource matches, live routes, public guidance and an auditable human authorized response.</p>
<a href="https://github.com/rifahtasnia/Team04_Climate-Emergency-Response-Assistant">View GitHub →</a>
</div>



<div className="student-project-card">
<h2>Job-Fit Gap Analyzer</h2>
<h4><strong>Social Problem: </strong>Job Search and Career Transition Support</h4>
<img src={JobSearchandCareerTransitionImage} />
 <p>
    <strong>Musfiqur Rahman, Rachna Raj, Fazle Rabbi, Minh Nguyen</strong>
  </p>
<p>The Job-Fit Gap Analyzer is a static browser-based tool that evaluates a user's career fit by comparing their CV against aggregated real-world job posting data. It allows users to benchmark themselves against general market trends, analyze their suitability for specific job postings, or utilize a "Career Pathfinder" to find optimal transition routes between different roles. All analysis, including CV parsing and skill matching, runs entirely client-side, ensuring privacy without the need for a backend server. The tool relies on data compiled from Hugging Face datasets, which users can regenerate or customize using provided Python scripts. Ultimately, it provides actionable insights into skill gaps, experience alignment, and market demand for six core career paths.</p>
 <a href="https://github.com/Lumiere-ngn/TEAM-05---Job-Search-and-Career-Transition-Support">View GitHub →</a>
  </div>



<div className="student-project-card">
<h2>Smart Schedule Health</h2>
<h4><strong>Social Problem: </strong>Medical Appointment Coordination</h4>
<img src={SmartScheduleHealthImage} />
 <p>
    <strong>Antonio Collante, Lucas Armand, Junjie Li, Aurel Honey, Gen Caumartin</strong>
  </p>
<p>An agentic AI proof-of-concept solution that uses on-device AI agents to help patients and caregivers organize, reuse, and streamline their information across the medical scheduling process, reducing the repetitive and stressful back-and-forth of booking appointments while keeping sensitive data local and humans in control.</p>
<a href="https://github.com/acollant/team06-Medical-Appointment-Coordination">View GitHub →</a>
  </div>

</div>
