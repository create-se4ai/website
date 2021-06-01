import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import TeamMembers from "../components/TeamMembers";
import PageHeader from "../components/PageHeader";
import defaultProfile from "../../profile_photos/default.png";

const TeamMemberList = [
  {
    title: "Program Leadership",
    size: "large",
    members: [
      {
        name: "Dr. Emad Shihab",
        affiliation: "Concordia University",
        twitter: "EmadShihab",
        website: "http://das.encs.concordia.ca/members/emad-shihab/",
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
        // twitter: "",
        website: "https://jinqiuyang.github.io",
      },
      {
        name: "Dr. Foutse Khomh",
        affiliation: "Polytechnique Montréal",
        twitter: "SWATLab",
        website: "http://swat.polymtl.ca/~foutsekh/about/index.html",
      },
      {
        name: "Dr. Ying (Jenny) Zou",
        affiliation: "Queen’s University",
        // twitter: "",
        website: "https://www.ece.queensu.ca/people/Y-Zou/",
      },
      {
        name: "Dr. Sarah Nadi",
        affiliation: "University of Alberta",
        twitter: "sarahnadi",
        website: "https://sarahnadi.org/",
      },
      {
        name: "Dr. Ahmed E. Hassan",
        affiliation: "Queen’s University",
        // twitter: "",
        website: "https://research.cs.queensu.ca/home/ahmed/home/",
      },
    ],
  },
  {
    title: "Academic Collaborators",
    members: [
      {
        name: "Dr. Gerd Oberleitner",
        affiliation: "University of Graz",
        position: "UNESCO Chair in Human Rights and Human Security",
        imgURL: defaultProfile,
      },
      {
        name: "Dr. Klaus Starl",
        affiliation: "University of Graz",
        position: "UNESCO Chair in Human Rights and Human Security",
        imgURL: defaultProfile,
      },
      {
        name: "Dr. Renji Butalid",
        affiliation: "Montreal AI Ethics Institute",
        position: "Co-founder",
      },
      {
        name: "Dr. Lyse Langlois",
        affiliation: "OBVIA",
        position: "Executive Director",
      },
    ],
  },
  {
    title: "Industrial Collaborators",
    members: [
      {
        name: "Dr. Gilles Savard",
        affiliation: "IVADO",
      },
      {
        name: "Dr. Julien Crowe",
        affiliation: "National Bank of Canada",
      },
      {
        name: "Prasad Garigipati",
        affiliation: "Ericsson",
      },
      {
        name: "Patrick Whelan",
        affiliation: "TD Bank Group",
        imgURL: defaultProfile,
      },
      {
        name: "Katherine Heighington",
        affiliation: "TD Bank Group",
      },
      {
        name: "Stephane Caron",
        affiliation: "Radio Canada",
      },
      {
        name: "Mohamed El-Geish",
        affiliation: "Cisco",
      },
      {
        name: "Derek Truong",
        affiliation: "IBM",
      },
      {
        name: "Pape Wade",
        affiliation: "Airudi",
      },
      {
        name: "David Fab",
        affiliation: "GIRO Inc.",
      },
    ],
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
