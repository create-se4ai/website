import React from "react";
import clsx from "clsx";
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
        name: "Dr. Diego Costa",
        affiliation: "Concordia University",
        position: "Postdoctoral Researcher",
        linkedin: "diego-elias-costa",
        twitter: "DiegoEliasCosta",
        website: "https://diegoeliascosta.github.io/",
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
