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
        has_page: true,
        id: "julien-crowe"
      },
      {
        name: "Dr. Marie-Pierre Habas Gerard",
        affiliation: "CGI",
        linkedin: "marie-pierre-habas-gerard-ph-d-92316111",
        email: "marie-pierre.gerard@cgi.com",
        has_page: true,
        id: "marie-pierre-habas-gerard"
      },
      {
        name: "Mr. Pierre Dumouchel",
        affiliation: "Ivado",
        linkedin: "pierre-dumouchel-472110",
        email: "pierre.dumouchel@ivado.ca",
        website: "https://ivado.ca/en/persons/pierre-dumouchel/",
        id: "pierre-dumouchel",
        has_page: false,
      },
      {
        name: "Mr. Jesse Vincent-Herscovici",
        affiliation: "Mitacs",
        linkedin: "jesse-vincent-herscovici-8b15538",
        email: "jvh@mitacs.ca",
        id: "jesse-vincent-herscovici",
        has_page: true,
      },
      {
        name: "Dr. Lata Narayanan",
        affiliation: "Concordia University",
        email: "lata.narayanan@concordia.ca",
        website: "http://explore.concordia.ca/lata-narayanan",
        has_page: false,
      },
    ],
  },
  {
    title: "Steering Committee",
    size: "large",
    members: [
      {
        name: "Mr. Derek Truong",
        affiliation: "IBM",
        linkedin: "derek-truong-7233b85",
        email: "trong@ca.ibm.com",
        has_page: true,
        id: "derek-truong"
      },
      {
        name: "Mr. Serge Oligny",
        //role: "TBD",
        affiliation: "Desjardins",
        linkedin: "serge-oligny-0778031",
        //twitter: "TBD",
        //email: "TBD",
        has_page: true,
        id: "serge-oligny",
        //website: "TBD",
      },
      {
        name: "Dr. Stefan Wagner",
        //role: "TBD",
        affiliation: "University of Stuttgart",
        //linkedin: "TBD",
        //twitter: "TBD",
        email: "stefan.wagner@iste.uni-stuttgart.de",
        website: "https://www.iste.uni-stuttgart.de/institute/team/Wagner-00017/",
      },
      {
        name: "Dr. Liming Zhu",
        affiliation: "CSIRO Data61",
        linkedin: "limingzhu",
        twitter: "limingz",
        email: "liming.Zhu@data61.csiro.au",
        website: "https://cgi.cse.unsw.edu.au/~limingz/home/?About_Me:Bios",
        has_page: false,
      },
      // {
      //   name: "Dr. Jean-Samuel Chenard",
      //   role: "TBD",
      //   affiliation: "TBD",
      //   linkedin: "TBD",
      //   twitter: "TBD",
      //   email: "TBD",
      //   website: "TBD",
      // },
      // {
      //   name: "Dr. Amanda Rossi",
      //   role: "TBD",
      //   affiliation: "TBD",
      //   linkedin: "TBD",
      //   twitter: "TBD",
      //   email: "TBD",
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
