import React from "react";
import Layout from "@theme/Layout";
import clsx from "clsx";
import styles from "../components/TeamMembers.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import TeamMembers from "../components/TeamMembers";
import PageHeader from "../components/PageHeader";

// const SuccessList = [
//   {
//     title: "Ahmad Abdellatif",
//     video: "/videos/success1.mp4",
//     text: "During my time there, I gained valuable experience in teaching, working with maintenance students, and exploring exciting research.", 
//   },

// ];
const TeamMemberList = [
    // {
    // title: "Trainee spotlight",
    // size: "large",
    // members: [
    //   {
    //     name: "XXXX",
     
      
    //   },]},
  {
    title: "Alumni Testimonials",
    size: "large",
    members: [
      {
        name: "Dr. Ahmad Abdellatif",
        degree:", Assistant Professor",
        // affiliation: "University of Calgary",
        place:"University of Calgary",
        position: "Assistant Professor ",
        link:"https://ucalgary.ca/",
        video:  "/videos/success.mp4",
      },
    //        {
    //    name: "Akshat Malik",
    //    degree:", MASc",
    //    place:"Microsoft",
    //     position:"Software Engineer",
    //     link:"https://www.microsoft.com",
    //     video: "/videos/success2.mp4",
    //   },
      
    //   {
    // name: "Lorena Pacheco",
    //     degree:", MASc",
    //     place:"Slalom Build",
    //      position:"Senior Engineer - Platform Engineering ",
    //      link:"https://www.linkedin.com/company/slalom-build/",
    //      video: "/videos/success2.mp4",
    //    },
 ]}]


export default function Highlights() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title="Highlights" description="The project's highlights.">
      <PageHeader title="Highlights" />
        <TeamMembers list={TeamMemberList} />
      {/* <section>
        <div className="container text-center">
          <div className="row">
            {SuccessList.map((item, index) => (
              <div key={index} className="col col--6 margin-bottom--xl">
<h2 class="col col--12 section"></h2>     
           <video width="400" controls>
                  <source src={item.video} type="video/mp4" />
                </video>
                                <h5>{item.text}</h5>

              
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </Layout>
  );
}
