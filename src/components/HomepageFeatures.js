import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Engineering AI Systems",
    Svg: require("../../static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Provide trainees with the <b>technical</b> background while exercising
        software engineering concepts in the context of AI-based software
        systems.
      </>
    ),
  },
  {
    title: "Social Aspects for AI Systems",
    Svg: require("../../static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Provides trainees with all the <b>social</b> criteria that AI-based
        systems need to consider, e.g., privacy, ethics, equity, diversity,
        inclusion (EDI), guided by human rights and sustainable development
        goals (SDG).
      </>
    ),
  },
  {
    title: "Professional Development",
    Svg: require("../../static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Provides training modules on professional skills in the context of
        AI-Software Systems.
      </>
    ),
  },

  {
    title: "Industrial Embedding",
    Svg: require("../../static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Graduate trainees will be offered the opportunity to serve one or more
        internships with our industrial partners.
      </>
    ),
  },
  {
    title: "Present to Industrial Partners",
    Svg: require("../../static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Trainees will present an online webinar or an on-site seminar to one or
        more industrial partners on their research topic related to AI-based
        software systems. Also, trainees will be able to attend industry
        webinars and on-site seminars.
      </>
    ),
  },
  // {
  //   title: "Specialization courses",
  //   Svg: require("../../static/img/undraw_docusaurus_react.svg").default,
  //   description: (
  //     <>
  //       A curated set of existing SE, AI, and social aspects courses that will
  //       be of relevance to our trainees. Based on the aspirations of the
  //       trained, they will have the freedom to select the courses that best fit.
  //     </>
  //   ),
  // },
  {
    title: "Leadership and Mentorship Training",
    Svg: require("../../static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Trainees will be coached on how to critically evaluate AI-based software
        systems and related publications.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
