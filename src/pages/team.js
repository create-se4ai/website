import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import TeamMembers from "../components/TeamMembers";
import PageHeader from "../components/PageHeader";
import students from "../../team/students.csv";

const TeamMemberList = [
  {
    title: "Program Leadership",
    size: "large",
    members: [
      {
        name: "Dr. Emad Shihab",
        role: "Director",
        affiliation: "Concordia University",
        linkedin: "emad-shihab-8099523",
        twitter: "EmadShihab",
        email: "emad.shihab@concordia.ca",
        website: "http://das.encs.concordia.ca/members/emad-shihab/",
      },
      {
        name: "Dr. Foutse Khomh",
        affiliation: "Polytechnique Montréal",
        linkedin: "khomh",
        twitter: "SWATLab",
        website: "http://swat.polymtl.ca/~foutsekh/about/index.html",
      },
      {
        name: "Dr. Tanja Tajmel",
        affiliation: "Concordia University",
        // twitter: "",
        website: "https://www.concordia.ca/faculty/tanja-tajmel.html",
      },
      {
        name: "Dr. Jinqiu Yang",
        affiliation: "Concordia University",
        linkedin: "jinqiu-yang-69767220",
        twitter: "JinqiuYang",
        website: "https://jinqiuyang.github.io",
      },
      {
        name: "Dr. Ying (Jenny) Zou",
        affiliation: "Queen’s University",
        linkedin: "ying-zou-624501159",
        twitter: "YingZou8",
        website: "https://www.ece.queensu.ca/people/Y-Zou/",
      },
      {
        name: "Dr. Sarah Nadi",
        affiliation: "University of Alberta",
        linkedin: "sarah-nadi-b312b665",
        twitter: "sarahnadi",
        website: "https://sarahnadi.org/",
      },
      {
        name: "Dr. Ahmed E. Hassan",
        affiliation: "Queen’s University",
        linkedin: "ahmed-e-hassan",
        twitter: "sail_lab",
        website: "https://research.cs.queensu.ca/home/ahmed/home/",
      },
      {
        name: "Dr. Bram Adams",
        email: "bram.adams@queensu.ca",
        affiliation: "Queen’s University",
        twitter: "mcis_lab",
        website: "https://mcis.cs.queensu.ca/bram.html",
      },
      {
        name: "Dr. Diego Costa",
        affiliation: "Concordia University",
        position: "Assistant Professor",
        linkedin: "diego-elias-costa",
        twitter: "DiegoEliasCosta",
        website: "https://diegoeliascosta.github.io/",
      },
    ],
  },
  {
    title: "Administration",
    size: "large",
    members: [
      {
        name: "Lori Akiyama",
        affiliation: "Concordia University",
        role: "Program Coordinator",
        linkedin: "loriakiyama",
        email: "lori.akiyama@concordia.ca",
      },
    ],
  },
  {
    title: "Postdocs",
    size: "large",
    members: [
      {
        name: "Dr. Hassan Khatoonabadi",
        affiliation: "Concordia University",
        position: "Post Doctoral Researcher",
        linkedin: "shassankhatoonabadi",
        twitter: "HKhatoonabadi",
        website: "https://das.encs.concordia.ca/members/hassan-khatoonabadi",
      },
    ],
  },
  // {
  //   title: "Academic Collaborators",
  //   members: [
  //     {
  //       name: "Dr. Gerd Oberleitner",
  //       affiliation: "University of Graz",
  //       position: "UNESCO Chair in Human Rights and Human Security",
  //       imgURL: defaultProfile,
  //     },
  //     {
  //       name: "Dr. Klaus Starl",
  //       affiliation: "University of Graz",
  //       position: "UNESCO Chair in Human Rights and Human Security",
  //       imgURL: defaultProfile,
  //     },
  //     {
  //       name: "Dr. Renji Butalid",
  //       affiliation: "Montreal AI Ethics Institute",
  //       position: "Co-founder",
  //     },
  //     {
  //       name: "Dr. Lyse Langlois",
  //       affiliation: "OBVIA",
  //       position: "Executive Director",
  //     },
  //   ],
  // },
  // {
  //   title: "Industrial Collaborators",
  //   members: [
  //     {
  //       name: "Dr. Gilles Savard",
  //       affiliation: "IVADO",
  //     },
  //     {
  //       name: "Dr. Julien Crowe",
  //       affiliation: "National Bank of Canada",
  //     },
  //     {
  //       name: "Prasad Garigipati",
  //       affiliation: "Ericsson",
  //     },
  //     {
  //       name: "Patrick Whelan",
  //       affiliation: "TD Bank Group",
  //       imgURL: defaultProfile,
  //     },
  //     {
  //       name: "Katherine Heighington",
  //       affiliation: "TD Bank Group",
  //     },
  //     {
  //       name: "Stephane Caron",
  //       affiliation: "Radio Canada",
  //     },
  //     {
  //       name: "Mohamed El-Geish",
  //       affiliation: "Cisco",
  //     },
  //     {
  //       name: "Derek Truong",
  //       affiliation: "IBM",
  //     },
  //     {
  //       name: "Pape Wade",
  //       affiliation: "Airudi",
  //     },
  //     {
  //       name: "David Fab",
  //       affiliation: "GIRO Inc.",
  //     },
  //   ],
  // },
  {
    title: "Alumni",
    size: "large",
    members: [
      {
        name: "Khaled Badran, MSc",
        affiliation: "Concordia University",
        twitter: "khaled_badran9",
        linkedin: "khaled-badran-6b0908174",
      },
      {
        name: "Rached Bouchoucha, MSc",
        // affiliation: "Polytechnique Montréal",
        place:"polytechnique",
        position:"Winner Best Master's Thesis Award in Software Engineering and Computer Science 2023 ",
        link:"https://www.polymtl.ca/",
        linkedin: "rached-bouchoucha-1061997",
      },
      {
        name: "Ahmed Haj Yahmed, MSc ",   
           place:"polytechnique",
        position:"Winner Best Master's Thesis Award in Software Engineering and Computer Science 2023 ",
        link:"https://www.polymtl.ca/",
        // affiliation: "Polytechnique Montréal",
        linkedin: "ahmed-haj-yahmed",
      },
      {
        name: "Divya Kamath, MSc  ",
        place:"McGill University",
        position:"Currently PhD student ",
        link:"https://www.mcgill.ca/",
        // affiliation: "Queen's University",
        linkedin: "divyamkamath",
      },
      {
        name: "Pierre-Olivier Côté, MSc ",
        // affiliation: "Polytechnique Montréal",
        place:"polytechnique",
        position:"Winner Best Master's Thesis Award in Software Engineering and Computer Science 2023 ",
        link:"https://www.polymtl.ca/",
        linkedin: "pierre-olivier-côté",
      },
      {
        name: "Dr. Ahmad Abdellatif, Assistant Professor",
        // affiliation: "University of Calgary",
        place:"University of Calgary",
        position: "Currently Assistant Professor ",
        link:"https://ucalgary.ca/",
        linkedin: "ahmad-abdellatif-8ab82a29",
        twitter: "AhmadAbdellatf",
        website: "https://profiles.ucalgary.ca/ahmad-abdellatif",
      },
      {
        name: "Ernesto Lang Oreamuno, MSc",
        affiliation: "Queen's University",
      },
  
   
  
  
   
  
    ]
  },
  {
    title: "Students",
    placeholder: (
      <h3
        style={{
          textAlign: "center",
          fontSize: "4rem",
          padding: "5rem 0",
          color: "var(--ifm-color-emphasis-400)",
        }}
      >
        Coming Soon ...
      </h3>
    ),
    size: "large",
    members: students,
  },
];

export default function Team() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Team" description="The project's team.">
      <PageHeader title="Our Team" />
      <main>
        <TeamMembers list={TeamMemberList} />
      </main>
    </Layout>
  );
}
