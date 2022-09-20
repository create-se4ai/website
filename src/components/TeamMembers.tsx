import React from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./TeamMembers.module.css";

function importProfilePicture(name: string) {
  try {
    return require(`../../team/photos/${name}.jpg`).default;
  } catch {
    return require("../../team/photos/default.png").default;
  }
}

const SocialButtons = ({ id, twitter, linkedin, website, email, has_page }) => (
  <ul className="pills">
    {has_page && (
      <li className={clsx("pills__item", styles.website)}>
        <a href={`/members/${id}`}>
          <FontAwesomeIcon icon={faExternalLinkAlt} /> Know More
        </a>
      </li>
    )}
    {website && (
      <li className={clsx("pills__item", styles.website)}>
        <a target="_blank" href={website}>
          <FontAwesomeIcon icon={faExternalLinkAlt} /> Know more
        </a>
      </li>
    )}
    {linkedin && (
      <li className="pills__item">
        <a target="_blank" href={`https://www.linkedin.com/in/${linkedin}`}>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </li>
    )}
    {twitter && (
      <li className="pills__item">
        <a target="_blank" href={`https://twitter.com/${twitter}`}>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </li>
    )}
    {email && (
      <li className="pills__item">
        <a target="_blank" href={`mailto:${email}`}>
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </li>
    )}
  </ul>
);

const TeamMemberLarge = ({ name, role, imgURL, affiliation, ...props }) => {
  return (
    <div
      className={clsx(
        "col col--3 margin-bottom--lg",
        styles.member,
        styles.memberLarge
      )}
    >
      <div className="card">
        <div className="card__image">
          <img src={imgURL || importProfilePicture(name)} alt={name} />
        </div>
        <div className="card__body">
          <h3>
            {name}
            {role && (
              <>
                {" "}
                <span className="badge badge--primary">{role}</span>
              </>
            )}
          </h3>
          {affiliation}
        </div>
        <div className="card__footer">
          <SocialButtons {...(props as any)} />
        </div>
      </div>
    </div>
  );
};

const TeamMemberMedium = ({
  name,
  imgURL,
  affiliation,
  position,
  ...props
}) => {
  return (
    <div className={clsx("col col--3 margin-bottom--xl", styles.member)}>
      <div className="avatar avatar--vertical">
        <img
          className="avatar__photo avatar__photo--xl"
          alt={name}
          src={imgURL || importProfilePicture(name)}
        />
        <div className="avatar__intro">
          <div className="avatar__name">{name}</div>
          <div className="avatar__subtitle">{position}</div>
          <small className="avatar__subtitle">{affiliation}</small>
        </div>
        <SocialButtons {...(props as any)} />
      </div>
    </div>
  );
};

const TeamMembers = ({ list }) => {
  return (
    <section>
      <div className="container">
        {list.map((category) => (
          <div key={category.title} className="row">
            <h2 className="col col--12 section">{category.title}</h2>
            {category.members?.length ? (
              category.members.map((props: any) =>
                category.size == "large" ? (
                  <TeamMemberLarge key={props.name} {...props} />
                ) : (
                  <TeamMemberMedium key={props.name} {...props} />
                )
              )
            ) : (
              <div className="col col--12 margin-bottom--xl">
                {category.placeholder}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamMembers;
