import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import HomepageSectionTitle from "./HomepageSectionTitle";

const FeatureList = [
  {
    title: "Engineering AI Systems",
    Svg: require("../svg/component_engineering.svg").default,
    description: (
      <>
        Provides trainees with the technical software engineering background 
        in the context of AI-based software systems.
      </>
    ),
  },
  {
    title: "Social Aspects for AI Systems",
    Svg: require("../svg/component_social.svg").default,
    description: (
      <>
        Provides trainees with knowledge on various social aspects that AI-based
        systems need to consider, e.g., privacy, ethics, equity, diversity,
        inclusion (EDI), guided by human rights and sustainable development
        goals (SDG).
      </>
    ),
  },
  {
    title: "Specialization Courses",
    Svg: require("../svg/component_courses.svg").default,
    description: (
      <>
        A curated set of SE, AI, and social aspects courses to strengthen the 
        trainees's specialization. Trainees will select courses that best fit interests.
      </>
    ),
  },
  {
    title: "Professional Development",
    Svg: require("../svg/component_professional.svg").default,
    description: (
      <>
        Provides training modules on professional skills in the context of
        AI-Software Systems.
      </>
    ),
  },

  {
    title: "Industrial Engagement",
    Svg: require("../svg/component_engagement.svg").default,
    description: (
      <>
        Graduate trainees will be offered the opportunity to serve one or more
        internships with our industrial partners.
      </>
    ),
  },
  // {
  //   title: "Present to Industrial Partners",
  //   Svg: require("../svg/component_engineering.svg").default,
  //   description: (
  //     <>
  //       Trainees will present an online webinar or an on-site seminar to one or
  //       more industrial partners on their research topic related to AI-based
  //       software systems. Also, trainees will be able to attend industry
  //       webinars and on-site seminars.
  //     </>
  //   ),
  // },
  {
    title: "Leadership and Mentorship Training",
    Svg: require("../svg/component_leadership.svg").default,
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
        <HomepageSectionTitle>Our Program Components Focus on <b>Academic</b>,  <b>Technical</b>, and  <b>Professional</b> Skills</HomepageSectionTitle>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
