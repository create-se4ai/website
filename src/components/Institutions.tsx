import React from "react";
import clsx from "clsx";
import styles from "./Institution.module.css";

function Institution({ log, name, url }) {
  return (
    <div className={clsx("col col--2", styles.institution)}>
      <a href={url} target="_blank">
        <img className={styles.imgLogo} src={log} alt={name} />
      </a>
    </div>
  );
}

export function Institutions({ list }) {
  return (
    <section>
      <div className="container">
        {list.map((category) => (
          <div key={category.title} className="row margin-bottom--xl">
            <h2 className="col col--12 section">{category.title}</h2>
            {category.members.map((props: any) => (
              <Institution key={props.name} {...props} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export function HomepageInstitutions({ list }) {
  return (
    <section className={styles.institutions}>
      <div className={clsx("container", styles.institutions_container)}>
        <p className={styles.institution__title}>
          In Collaboration with <b>Researchers</b> and <b>Technology Leaders</b>
        </p>
        <div className="row">
          {list.map((category) =>
            category.members.map((props) => (
              <Institution key={props.name} {...props} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
