import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "./TeamMembers.module.css";

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
        imgUrl: require("./profile-pictures/EmadShihab.jpg").default,
      },
      {
        name: "Dr. Tanja Tajmel",
        affiliation: "Concordia University",
        // twitter: "",
        website: "https://www.concordia.ca/faculty/tanja-tajmel.html",
        imgUrl: require("./profile-pictures/TanjaTajmel.jpg").default,
      },
      {
        name: "Dr. Jinqiu Yang",
        affiliation: "Concordia University",
        // twitter: "",
        website: "https://jinqiuyang.github.io",
        imgUrl: require("./profile-pictures/JinqiuYang.png").default,
      },
      {
        name: "Dr. Foutse Khomh",
        affiliation: "Polytechnique Montréal",
        twitter: "SWATLab",
        website: "http://swat.polymtl.ca/~foutsekh/about/index.html",
        imgUrl: require("./profile-pictures/FoutseKhomh.jpg").default,
      },
      {
        name: "Dr. Ying (Jenny) Zou",
        affiliation: "Queen’s University",
        // twitter: "",
        website: "https://www.ece.queensu.ca/people/Y-Zou/",
        imgUrl: require("./profile-pictures/JennyZou.jpg").default,
      },
      {
        name: "Dr. Sarah Nadi",
        affiliation: "University of Alberta",
        twitter: "sarahnadi",
        website: "https://sarahnadi.org/",
        imgUrl: require("./profile-pictures/SarahNadi.png").default,
      },
      {
        name: "Dr. Ahmed E. Hassan",
        affiliation: "Queen’s University",
        // twitter: "",
        website: "https://research.cs.queensu.ca/home/ahmed/home/",
        imgUrl: require("./profile-pictures/AhmedHassan.jpg").default,
      },
    ],
  },
  {
    title: "Academic Collaborators",
    members: [
      {
        name: "Dr. Gerd Oberleitner",
        affiliation: "University of Graz",
        // department:"",
        position: "UNESCO Chair in Human Rights and Human Security",
        // twitter: "",
        // website: "",
        // imgUrl: "",
      },
      {
        name: "Dr. Klaus Starl",
        affiliation: "University of Graz",
        // department:"",
        position: "UNESCO Chair in Human Rights and Human Security",
        // twitter: "",
        // website: "",
        // imgUrl: "",
      },
      {
        name: "Dr. Renji Butalid",
        affiliation: "Montreal AI Ethics Institute",
        // department:"",
        position: "Co-founder",
        // twitter: "",
        // website: "",
        // imgUrl: "",
      },
      {
        name: "Dr. Lyse Langlois",
        affiliation: "OBVIA",
        // department:"",
        position: "Executive Director",
        // twitter: "",
        // website: "",
        // imgUrl: "",
      },
    ],
  },
  {
    title: "Industrial Collaborators",
    members: [
      {
        name: "Dr. Gilles Savard",
        affiliation: "IVADO",
        // department:"",
        // position: "Senior Manager",
        // twitter: "",
        // website: "",
        imgUrl: "https://ivado.ca/wp-content/uploads/2020/01/Gilles-Savard.jpg",
      },
      {
        name: "Dr. Julien Crowe",
        affiliation: "National Bank of Canada",
        // department:"",
        // position: "Senior Manager",
        // twitter: "",
        // website: "",
        imgUrl:
          "https://media-exp1.licdn.com/dms/image/C4E03AQHW_h3OCS2cwg/profile-displayphoto-shrink_200_200/0/1574779688019?e=1627516800&v=beta&t=y1Zw-TeKlsTw7hk7ZW_BpVn0irDFMsguP3_wH_xvtyc",
      },
      {
        name: "Prasad Garigipati",
        affiliation: "Ericsson",
        // department:"",
        // position: "Program Director",
        // twitter: "",
        // website: "",
        // imgUrl: "",
      },
      {
        name: "Patrick Whelan",
        affiliation: "TD Bank Group",
        // department:"",
        // position: "Program Director",
        // twitter: "",
        // website: "",
        // imgUrl: "",
      },
      {
        name: "Katherine Heighington",
        affiliation: "TD Bank Group",
        // department:"",
        // position: "Program Director",
        // twitter: "",
        // website: "",
        // imgUrl: "",
      },
      {
        name: "Stephane Caron",
        affiliation: "Radio Canada",
        // department:"",
        // position: "Program Director",
        // twitter: "",
        // website: "",
        // imgUrl: "",
      },
      {
        name: "Mohamed El-Geish",
        affiliation: "Cisco",
        // department:"",
        // position: "Program Director",
        // twitter: "",
        // website: "",
        // imgUrl: "",
      },
      {
        name: "Derek Truong",
        affiliation: "IBM",
        // department:"",
        // position: "Program Director",
        // twitter: "",
        // website: "",
        imgUrl:
          "https://media-exp1.licdn.com/dms/image/C4E03AQFWME64GYWEIQ/profile-displayphoto-shrink_800_800/0/1537710336087?e=1627516800&v=beta&t=NaWy8MBiOZqXGwvgP5r_myUogHDqnhkYFnEWxHTxQ-Q",
      },
      {
        name: "Pape Wade",
        affiliation: "Airudi",
        // department:"",
        // position: "Program Director",
        // twitter: "",
        // website: "",
        // imgUrl: "",
      },
      {
        name: "David Fab",
        affiliation: "GIRO Inc.",
        // department:"",
        // position: "Program Director",
        // twitter: "",
        // website: "",
        // imgUrl: "",
      },
    ],
  },
];

const TeamMemberLarge = ({ name, imgUrl, affiliation, twitter, website }) => {
  return (
    <div className="col col--3 margin-bottom--lg">
      <div className="card">
        <div className="card__image">
          <img src={imgUrl} alt={name} />
        </div>
        <div className="card__body">
          <h3>{name}</h3>
          {affiliation}
        </div>
        <div className="card__footer">
          <a
            className="button button--outline button--secondary margin-right--sm"
            target="_blank"
            href={website}
          >
            <FontAwesomeIcon icon={faExternalLinkAlt} /> Know more
          </a>
          {twitter && (
            <a
              className="button button--outline button--secondary "
              target="_blank"
              href={`https://twitter.com/${twitter}`}
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const TeamMemberMedium = ({ name, imgUrl, affiliation, twitter, website }) => {
  return (
    <div className="col col--3 margin-bottom--xl">
      <div className="avatar avatar--vertical">
        <img
          className="avatar__photo avatar__photo--xl"
          alt={name}
          src={imgUrl || "https://suhaib.ca/images/profile.png"}
        />
        <div className="avatar__intro">
          <h4 className="avatar__name">{name}</h4>
          <small className="avatar__subtitle">{affiliation}</small>
        </div>
        {website && (
          <a
            className="button button--outline button--secondary margin-right--sm"
            target="_blank"
            href={website}
          >
            <FontAwesomeIcon icon={faExternalLinkAlt} /> Know more
          </a>
        )}
        {twitter && (
          <a
            className="button button--outline button--secondary "
            target="_blank"
            href={`https://twitter.com/${twitter}`}
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        )}
      </div>
    </div>
  );
};

const TeamMembers = () => {
  return (
    <section>
      <div className="container">
        {TeamMemberList.map((category, idx) => (
          <div className="row margin-bottom--xl">
            <h2 className="padding-bottom--lg col col--12">{category.title}</h2>
            {category.members.map((props: any, idx) =>
              category.size == "large" ? (
                <TeamMemberLarge key={idx} {...props} />
              ) : (
                <TeamMemberMedium key={idx} {...props} />
              )
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamMembers;
