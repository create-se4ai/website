import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Institutions } from "../components/Institutions";
import PageHeader from "../components/PageHeader";

export const InstitutionList = [
  {
    title: "Participating Universities",
    members: [
      {
        name: "Concordia University",
        log: require("../../logos/Concordia.png").default,
        url: "https://www.concordia.ca",
      },
      {
        name: "Polytechnique Montréal",
        log: require("../../logos/PolyMTL.png").default,
        url: "https://www.polymtl.ca/en/",
      },
      {
        name: "Queen's University",
        log: require("../../logos/Queens.png").default,
        url: "https://www.queensu.ca",
      },
      {
        name: "University of Alberta",
        log: require("../../logos/Alberta.png").default,
        url: "https://www.ualberta.ca",
      },
    ],
  },
  {
    title: "Industrial Partners",
    members: [
      {
        name: "National Bank of Canada",
        log: require("../../logos/NBC.png").default,
        url: "https://www.nbc.ca",
      },
      {
        name: "IBM",
        log: require("../../logos/IBM.png").default,
        url: "https://www.ibm.com/ca-en",
      },
      {
        name: "Cisco",
        log: require("../../logos/Cisco.png").default,
        url: "https://www.cisco.com",
      },
      {
        name: "TD Bank Group",
        log: require("../../logos/TD.png").default,
        url: "https://www.td.com/ca/en/",
      },
      {
        name: "Ericsson",
        log: require("../../logos/Ericsson.png").default,
        url: "https://www.ericsson.com/en",
      },
      {
        name: "Airudi",
        log: require("../../logos/Airudi.png").default,
        url: "https://airudi.com/en/",
      },
      {
        name: "GIRO Inc",
        log: require("../../logos/GIRO.png").default,
        url: "https://www.giro.ca/en-ca/",
      },
      {
        name: "Radio Canada",
        log: require("../../logos/Radio-Canada.png").default,
        url: "https://cbc.radio-canada.ca",
      },
    ],
  },
  {
    title: "Collaborators and Supporters",
    members: [
      {
        name: "Natural Sciences and Engineering Research Council of Canada (NSERC)",
        log: require("../../logos/NSERC_RGB.png").default,
        url: "https://www.nserc-crsng.gc.ca/index_eng.asp",
      },
      {
        name: "IVADO",
        log: require("../../logos/IVADO.png").default,
        url: "https://ivado.ca/en/",
      },

      {
        name: "International Observatory on the Societal Impacts of AI and Digital Technology (OBVIA)",
        log: require("../../logos/OBVIA.png").default,
        url: "https://observatoire-ia.ulaval.ca/en/",
      },
      {
        name: "Montreal AI Ethics Institute (MAIEI)",
        log: require("../../logos/MAIEI.png").default,
        url: "https://montrealethics.ai",
      },
      {
        name: "University of Graz",
        log: require("../../logos/Graz.png").default,
        url: "https://www.uni-graz.at/en/",
      },
    ],
  },
];

export default function Partners() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Partners" description="The project's partners.">
      <PageHeader title="Our Partners" />
      <main>
        <Institutions list={InstitutionList} />
      </main>
    </Layout>
  );
}
