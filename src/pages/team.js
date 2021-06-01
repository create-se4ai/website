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
        imgURL: defaultProfile,
      },
      {
        name: "Dr. Lyse Langlois",
        affiliation: "OBVIA",
        position: "Executive Director",
        imgURL: defaultProfile,
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
        imgURL:
          "https://media-exp1.licdn.com/dms/image/C4E03AQHW_h3OCS2cwg/profile-displayphoto-shrink_200_200/0/1574779688019?e=1627516800&v=beta&t=y1Zw-TeKlsTw7hk7ZW_BpVn0irDFMsguP3_wH_xvtyc",
      },
      {
        name: "Prasad Garigipati",
        affiliation: "Ericsson",
        imgURL: defaultProfile,
      },
      {
        name: "Patrick Whelan",
        affiliation: "TD Bank Group",
        imgURL: defaultProfile,
      },
      {
        name: "Katherine Heighington",
        affiliation: "TD Bank Group",
        imgURL: defaultProfile,
      },
      {
        name: "Stephane Caron",
        affiliation: "Radio Canada",
        imgURL: defaultProfile,
      },
      {
        name: "Mohamed El-Geish",
        affiliation: "Cisco",
        imgURL: defaultProfile,
      },
      {
        name: "Derek Truong",
        affiliation: "IBM",
        imgURL:
          "https://media-exp1.licdn.com/dms/image/C4E03AQFWME64GYWEIQ/profile-displayphoto-shrink_800_800/0/1537710336087?e=1627516800&v=beta&t=NaWy8MBiOZqXGwvgP5r_myUogHDqnhkYFnEWxHTxQ-Q",
      },
      {
        name: "Pape Wade",
        affiliation: "Airudi",
        imgURL: defaultProfile,
      },
      {
        name: "David Fab",
        affiliation: "GIRO Inc.",
        imgURL: defaultProfile,
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
