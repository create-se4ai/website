import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import TeamMembers from "../components/TeamMembers";
import PageHeader from "../components/PageHeader";

const TeamMemberList = [
  {
    title: "Program Committee",
    size: "large",
    members: [
      {
        name: "Dr. Julien Crowe",
        affiliation: "National Bank of Canada",
        linkedin: "juliencrowe",
        email: "julien.crowe@bnc.ca",
        website: "/governance/julien-crowe"
      },
      {
        name: "Dr. Marie-Pierre Habas Gerard",
        affiliation: "CGI",
        linkedin: "marie-pierre-habas-gerard-ph-d-92316111",
        email: "marie-pierre.gerard@cgi.com",
      },
      {
        name: "Mr. Pierre Dumouchel",
        affiliation: "Ivado",
        linkedin: "pierre-dumouchel-472110",
        email: "pierre.dumouchel@ivado.ca",
        website: "https://ivado.ca/en/persons/pierre-dumouchel/",
      },
      {
        name: "Mr. Jesse Vincent-Herscovici",
        role: "TBD",
        affiliation: "Mitacs",
        linkedin: "jesse-vincent-herscovici-8b15538",
        email: "jvh@mitacs.ca",
      },
      // {
      //   name: "Dr. Lata Narayanan",
      //   role: "TBD",
      //   affiliation: "TBD",
      //   linkedin: "emad-shihab-8099523",
      //   twitter: "EmadShihab",
      //   email: "emad.shihab@concordia.ca",
      //   website: "TBD",
      // },
    ],
  },
  {
    title: "Steering Committee",
    size: "large",
    members: [
      // {
      //   name: "Mr. Derek Truong",
      //   role: "TBD",
      //   affiliation: "TBD",
      //   linkedin: "emad-shihab-8099523",
      //   twitter: "EmadShihab",
      //   email: "emad.shihab@concordia.ca",
      //   website: "TBD",
      // },
      // {
      //   name: "Mr. Serge Oligny",
      //   role: "TBD",
      //   affiliation: "TBD",
      //   linkedin: "emad-shihab-8099523",
      //   twitter: "EmadShihab",
      //   email: "emad.shihab@concordia.ca",
      //   website: "TBD",
      // },
      // {
      //   name: "Dr. Stefan Wagner",
      //   role: "TBD",
      //   affiliation: "TBD",
      //   linkedin: "emad-shihab-8099523",
      //   twitter: "EmadShihab",
      //   email: "emad.shihab@concordia.ca",
      //   website: "TBD",
      // },
      {
        name: "Dr. Liming Zhu",
        affiliation: "CSIRO Data61",
        linkedin: "limingzhu",
        twitter: "limingz",
        email: "liming.Zhu@data61.csiro.au",
        website: "https://cgi.cse.unsw.edu.au/~limingz/home/?About_Me:Bios",
      },
      // {
      //   name: "Dr. Jean-Samuel Chenard",
      //   role: "TBD",
      //   affiliation: "TBD",
      //   linkedin: "emad-shihab-8099523",
      //   twitter: "EmadShihab",
      //   email: "emad.shihab@concordia.ca",
      //   website: "TBD",
      // },
      // {
      //   name: "Dr. Amanda Rossi",
      //   role: "TBD",
      //   affiliation: "TBD",
      //   linkedin: "emad-shihab-8099523",
      //   twitter: "EmadShihab",
      //   email: "emad.shihab@concordia.ca",
      //   website: "TBD",
      // },
    ],
  },
];

export default function Governance() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Governance" description="The project's governance.">
      <PageHeader title="Governance" />
      <main>
        <TeamMembers list={TeamMemberList} />
      </main>
    </Layout>
  );
}
