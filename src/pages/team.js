import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import TeamMembers from "../components/TeamMembers";
import PageHeader from "../components/PageHeader";

export default function Team() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Team" description="The project's team.">

         <PageHeader title="Our Team"/>
      <main>
   
        <TeamMembers />
      </main>
    </Layout>
  );
}
