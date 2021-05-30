import React from "react";
import clsx from "clsx";
import styles from "./HomepageCollaborators.module.css";
import { Link } from "@docusaurus/router";

const CollaboratorList = [
  {
    name: "Natural Sciences and Engineering Research Council of Canada (NSERC)",
    log: require("./logos/NSERC_RGB.png").default,
    url: "https://www.nserc-crsng.gc.ca/index_eng.asp",
  },
  {
    name: "National Bank of Canada",
    log: require("./logos/NBC.png").default,
    url: "https://www.nbc.ca",
  },
  {
    name: "IBM",
    log: require("./logos/IBM.png").default,
    url: "https://www.ibm.com/ca-en",
  },
  {
    name: "Cisco",
    log: require("./logos/Cisco.png").default,
    url: "https://www.cisco.com",
  },
  {
    name: "Montreal AI Ethics Institute (MAIEI)",
    log: require("./logos/MAIEI.png").default,
    url: "https://montrealethics.ai",
  },
  {
    name: "IVADO",
    log: require("./logos/IVADO.png").default,
    url: "https://ivado.ca/en/",
  },
  {
    name: "TD Bank Group",
    log: require("./logos/TD.png").default,
    url: "https://www.td.com/ca/en/",
  },
  {
    name: "Ericsson",
    log: require("./logos/Ericsson.png").default,
    url: "https://www.ericsson.com/en",
  },
  {
    name: "Radio Canada",
    log: require("./logos/Radio-Canada.png").default,
    url: "https://cbc.radio-canada.ca",
  },

  {
    name: "Airudi",
    log: require("./logos/Airudi.png").default,
    url: "https://airudi.com/en/",
  },
  {
    name: "GIRO Inc",
    log: require("./logos/GIRO.png").default,
    url: "https://www.giro.ca/en-ca/",
  },
  {
    name: "International Observatory on the Societal Impacts of AI and Digital Technology (OBVIA)",
    log: require("./logos/OBVIA.png").default,
    url: "https://observatoire-ia.ulaval.ca/en/",
  },
  {
    name: "University of Graz",
    log: require("./logos/Graz.png").default,
    url: "https://www.uni-graz.at/en/",
  },

  {
    name: "Polytechnique Montréal",
    log: require("./logos/PolyMTL.png").default,
    url: "https://www.polymtl.ca/en/",
  },
  {
    name: "Queen's University",
    log: require("./logos/Queens.png").default,
    url: "https://www.queensu.ca",
  },
  {
    name: "University of Alberta",
    log: require("./logos/Alberta.png").default,
    url: "https://www.ualberta.ca",
  },
  {
    name: "Concordia University",
    log: require("./logos/Concordia.png").default,
    url: "https://www.concordia.ca",
  },
];

function Collaborator({ log, name, url }) {
  return (
    <div className={clsx("col col--2", styles.collaborator)}>
      <a href={url} target="_blank">
        <img className={styles.imgLogo} src={log} alt={name} />
      </a>
    </div>
  );
}

export default function HomepageCollaborators() {
  return (
    <section className={styles.collaborators}>
      <div className={clsx("container",styles.collaborators_container)}>
        <p className={styles.collaborator__title}>
          In Collaboration with <b>Researchers</b> and <b>Technology Leaders</b>
        </p>
        <div className="row">
          {CollaboratorList.map((props, idx) => (
            <Collaborator key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
