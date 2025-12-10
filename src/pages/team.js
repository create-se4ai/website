import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import TeamMembers from "../components/TeamMembers";
import PageHeader from "../components/PageHeader";
import students from "../../team/students.csv";

const TeamMemberList = [
  {
    title: "Program Leadership",
    size: "large",
    members: [
      {
        name: "Dr. Emad Shihab",
        role: "Director",
        affiliation: "Concordia University",
        linkedin: "emad-shihab-8099523",
        twitter: "EmadShihab",
        email: "emad.shihab@concordia.ca",
        website: "http://das.encs.concordia.ca/members/emad-shihab/",
      },
      {
        name: "Dr. Foutse Khomh",
        affiliation: "Polytechnique Montréal",
        linkedin: "khomh",
        twitter: "SWATLab",
        website: "http://swat.polymtl.ca/~foutsekh/about/index.html",
      },
      {
        name: "Dr. Tanja Tajmel",
        affiliation: "Concordia University",
        // twitter: "",
        website: "https://www.concordia.ca/faculty/tanja-tajmel.html",
      },
      {
        name: "Dr. Jinqiu Yang",
        affiliation: "Concordia University",
        linkedin: "jinqiu-yang-69767220",
        twitter: "JinqiuYang",
        website: "https://jinqiuyang.github.io",
      },
      {
        name: "Dr. Ying (Jenny) Zou",
        affiliation: "Queen’s University",
        linkedin: "ying-zou-624501159",
        twitter: "YingZou8",
        website: "https://www.ece.queensu.ca/people/Y-Zou/",
      },
      {
        name: "Dr. Sarah Nadi",
        affiliation: "New York University Abu Dhabi",
        linkedin: "sarah-nadi-b312b665",
        twitter: "sarahnadi",
        website: "https://sarahnadi.org/",
      },
      {
        name: "Dr. Ahmed E. Hassan",
        affiliation: "Queen’s University",
        linkedin: "ahmed-e-hassan",
        twitter: "sail_lab",
        website: "https://research.cs.queensu.ca/home/ahmed/home/",
      },
      {
        name: "Dr. Bram Adams",
        email: "bram.adams@queensu.ca",
        affiliation: "Queen’s University",
        twitter: "mcis_lab",
        website: "https://mcis.cs.queensu.ca/bram.html",
      }, {
        name: "Dr. Diego Costa",
        // affiliation: "Concordia University",
        place:"Concordia University",
        position: "Assistant Professor",
        link:"https://www.concordia.ca/",
        linkedin: "diego-elias-costa",
        twitter: "DiegoEliasCosta",
        website: "https://diegoeliascosta.github.io/",
      },
    ],
  },
  {
    title: "Administration",
    size: "large",
    members: [
      {
        name: "Lori Akiyama",
        affiliation: "Concordia University",
        role: "Program Coordinator",
        linkedin: "loriakiyama",
        email: "lori.akiyama@concordia.ca",
      },
    ],
  },

  {
    title: "Program Committee",
    size: "large",
    members: [
      {
        name: "Dr. Julien Crowe",
        position:"Senior Director, Artificial Intelligence Factory ",
        place:"National Bank of Canada",
        // affiliation: "National Bank of Canada.",
        link:"https://www.linkedin.com/company/banquenationaleducanada/",
        linkedin: "juliencrowe",
        // email: "julien.crowe@bnc.ca",
        has_page: true,
        id: "julien-crowe"
      },
      {
        name: "Dr. Marie-Pierre Habas Gerard",
        position:" Directrice Générale / Chief Executive ",
        place:"Confiance IA",
        link:"https://www.linkedin.com/company/confianceia/",
        // affiliation: "CGI",
        linkedin: "marie-pierre-habas-gerard-ph-d-92316111",
        // email: "marie-pierre.gerard@cgi.com",
        has_page: true,
        id: "marie-pierre-habas-gerard"
      },
      {
        name: "Dr. Pierre Dumouchel",
        position:" Professeur titulaire (ÉTS) et Directeur transfert technologique ",
        place:"Ivado",
        link:"https://ivado.ca/en/",
        // affiliation: "Ivado",
        linkedin: "pierre-dumouchel-472110",
        // email: "pierre.dumouchel@ivado.ca",
        // website: "https://ivado.ca/en/persons/pierre-dumouchel/",
        id: "pierre-dumouchel",
        has_page: false,
      },
      {
        name: "Mr. Jesse Vincent-Herscovici",
        position:" Chief Executive Officer",
        place:"Axelys",
        link:"https://www.linkedin.com/company/axelysqc/",
        // affiliation: "CEO Axelys",
        linkedin: "jesse-vincent-herscovici-8b15538",
        // email: "jvh@mitacs.ca",
        id: "jesse-vincent-herscovici",
        has_page: true,
      },
      {
        name: "Dr. Lata Narayanan",
        // affiliation: "Concordia University",
        position:" Professor, Computer Science and Software Engineering ",
        place:"Concordia University",
        link:"https://www.concordia.ca/",
        linkedin:"lata-narayanan-948547290/",
        // email: "lata.narayanan@concordia.ca",
        // website: "http://explore.concordia.ca/lata-narayanan",
        has_page: false,
      },
      {
        name: "Mr. Derek Truong",
        position:" Program Director",
        place:"IBM",
        link:"https://www.linkedin.com/company/ibm/posts/?feedView=all",
        // affiliation: "IBM",
        linkedin: "derek-truong-7233b85",
        // email: "trong@ca.ibm.com",
        has_page: true,
        id: "derek-truong"
      },
      {
        name: "Mr. Serge Oligny",
        position:" Strategist, Data Valuation",
        place:"Desjardins",
        link:"https://www.linkedin.com/company/desjardins/",
        // affiliation: "Desjardins",
        linkedin: "serge-oligny-0778031",
        // twitter: "TBD",
        //email: "TBD",
        has_page: true,
        id: "serge-oligny",
        //website: "TBD",
      },
      {
        name: "Dr. Stefan Wagner",
        position:" Professor",
        place:"Technical University of Munich",
        link:"https://www.tum.de/en/",
        // affiliation: "Technical University of Munich",
        linkedin: "stefan-wagner-05821384/",
        //twitter: "TBD",
        // email: "stefan.wagner@iste.uni-stuttgart.de",
        // website: "https://www.iste.uni-stuttgart.de/institute/team/Wagner-00017/",
      },
      {
        name: "Dr. Liming Zhu",
        position:" Research Director",
        place:"CSIRO's Data61",
        link:"https://www.linkedin.com/company/csiro'sdata61/",
        // affiliation: "",
        linkedin: "limingzhu",
        twitter: "limingz",
        // email: "liming.Zhu@data61.csiro.au",
        // website: "https://cgi.cse.unsw.edu.au/~limingz/home/?About_Me:Bios",
        has_page: false,
      },
      {
        name: "Dr. Jean-Samuel Chenard",
        positiona:" President",
         place:"  Motsai",
        link:"https://motsai.com/fr/",
        // affiliation: "",
        linkedin: "jsamch",
        // twitter: "",
        // email: "liming.Zhu@data61.csiro.au",
        // website: "https://cgi.cse.unsw.edu.au/~limingz/home/?About_Me:Bios",
        has_page: false,
      },     {
        name: "Dr. Amanda Rossi",
        position:"Director, Business Development Operations",
         place:" Mitacs",
        link:"https://www.linkedin.com/company/mitacs/",
        // affiliation: "",
        linkedin: "amandamrossi",
        // twitter: "",
        // email: "liming.Zhu@data61.csiro.au",
        // website: "https://cgi.cse.unsw.edu.au/~limingz/home/?About_Me:Bios",
        has_page: false,
      },
    ],
  },
  // {
  //   title: "Postdocs",
  //   size: "large",
  //   members: [
  //     {
  //       name: "Dr. Hassan Khatoonabadi",
  //      place:"Concordia University",
       
  //       place:"Forta",
  //       position: "Senior Data Scientist",
  //       link:"https://www.fortra.com/",
  //       position: "Post Doctoral Researcher",
  //       linkedin: "khatoonabadi",
  //       twitter: "HKhatoonabadi",
  //       website: "https://das.encs.concordia.ca/members/hassan-khatoonabadi",
  //     },
  //   ],
  // },
  // {
  //   title: "Academic Collaborators",
  //   members: [
  //     {
  //       name: "Dr. Gerd Oberleitner",
  //       affiliation: "University of Graz",
  //       position: "UNESCO Chair in Human Rights and Human Security",
  //       imgURL: defaultProfile,
  //     },
  //     {
  //       name: "Dr. Klaus Starl",
  //       affiliation: "University of Graz",
  //       position: "UNESCO Chair in Human Rights and Human Security",
  //       imgURL: defaultProfile,
  //     },
  //     {
  //       name: "Dr. Renji Butalid",
  //       affiliation: "Montreal AI Ethics Institute",
  //       position: "Co-founder",
  //     },
  //     {
  //       name: "Dr. Lyse Langlois",
  //       affiliation: "OBVIA",
  //       position: "Executive Director",
  //     },
  //   ],
  // },
  // {
  //   title: "Industrial Collaborators",
  //   members: [
  //     {
  //       name: "Dr. Gilles Savard",
  //       affiliation: "IVADO",
  //     },
  //     {
  //       name: "Dr. Julien Crowe",
  //       affiliation: "National Bank of Canada",
  //     },
  //     {
  //       name: "Prasad Garigipati",
  //       affiliation: "Ericsson",
  //     },
  //     {
  //       name: "Patrick Whelan",
  //       affiliation: "TD Bank Group",
  //       imgURL: defaultProfile,
  //     },
  //     {
  //       name: "Katherine Heighington",
  //       affiliation: "TD Bank Group",
  //     },
  //     {
  //       name: "Stephane Caron",
  //       affiliation: "Radio Canada",
  //     },
  //     {
  //       name: "Mohamed El-Geish",
  //       affiliation: "Cisco",
  //     },
  //     {
  //       name: "Derek Truong",
  //       affiliation: "IBM",
  //     },
  //     {
  //       name: "Pape Wade",
  //       affiliation: "Airudi",
  //     },
  //     {
  //       name: "David Fab",
  //       affiliation: "GIRO Inc.",
  //     },
  //   ],
  // },
  {
    title: "Alumni",
    size: "large",
    members: [
{
        name: "Mayra Ruiz",
       affiliation:"Concordia University",
       degree:", MASc ",
        website:"https://das.encs.concordia.ca/members/mayra-ruiz",
        linkedin:"mruiz27"
      },
      {
        name: "Mohamed Riahi",
       affiliation:"Polytechnique Montréal",
        degree:", MASc ",
        linkedin: "mohamed-riahi-51a6401b3",
     
      },{
        name: "Altaf Allah Abbassi",
      //  affiliation:"Polytechnique Montréal",
        degree:", MASc ",
        linkedin: "altafallahabbassi",
         place:"Olymel",
        position: "Data Analyst",
        link:"https://www.linkedin.com/company/olymel/",
     
      },
{
        name: "Mohayeminul Islam",
       affiliation:"University of Alberta",
       degree:", PhD",
        linkedin: "mohayemin",
     
      },
{
        name: "Akalanka Galappaththi",
       affiliation:"University of Alberta",
       degree:", PhD ",
        linkedin: "akalanka-galappaththi-67580719",
        email:"akalanka@ualberta.ca",
        twitter:"@boney_ag"
        
      },
{
        name: "Lin Ling",
        degree:", MASc",
        place:"Artlas",
        position: "Software Engineer",
        link:"https://www.artlas.art/",
        linkedin: "lin-ling-4705b0260/",
        
      },
            {
        name: "Hassan Khatoonabadi",
        degree:", PhD",
        place:"Fortra",
        position: "Senior Data Scientist",
        link:"https://www.fortra.com/",
        linkedin: "khatoonabadi",
        twitter: "HKhatoonabadi",
        website: "https://das.encs.concordia.ca/members/hassan-khatoonabadi",
      },
        {
        name: "Gideon Peters",
        degree:", MASc",
        place:"Medeloop AI",
        position:"Senior Software Engineer",
        link:"https://www.medeloop.ai/",
       website:"https://das.encs.concordia.ca/members/gideon-peters",
        linkedin:"gideonpeters",
      //  position:"Senior Software Engineer"
       },
          {
        name: "Lorena Pacheco",
        degree:", MASc",
        place:"Slalom Build",
         position:"Senior Engineer - Platform Engineering ",
         link:"https://www.linkedin.com/company/slalom-build/",
       //  affiliation:"Queen's University",
        linkedin:"lorenasimedo",
       //  position:""
       },

      {
        name: "Amanda Kolopanis",
        degree:", MASc",
                position: "Software Developer",
        link : "https://www.ericsson.com/en",
        place:"Ericsson AI Accelerator",
        // affiliation:"Concordia University  ",
        linkedin:"amanda-kolopanis"
       //  position:""
       }, 
      {
        name: "Afiya Fahmida Sarah",
        degree:", MASc",
        place:"Slalom Build",
        //  position:"Currently Senior Engineer - Platform Engineering ",
        //  link:"https://www.linkedin.com/company/slalom-build/",
        affiliation:"University of Alberta",
        linkedin:"afiya-fahmida-sarah-039007179",
       //  position:""
       },
       {
        name: "Jiawen Liu",
        degree:", MASc",
        affiliation:"Queen's University ",
        linkedin:"jiawen-liu-691906178",
       website:"https://seal-queensu.github.io/member-current.html",
       },
  
       {
        name: "Khouloud Oueslati",
        degree:", MASc",
        place:"Polytechnique Montréal   ",
         position:"PhD student",
         link:"https://www.polymtl.ca/",
       //  affiliation:"Queen's University",
        linkedin:"khouloud-ouesleti/",
       //  position:""
       },
      {
       name: "Akshat Malik",
       degree:", MASc",
       place:"Microsoft",
        position:"Software Engineer",
        link:"https://www.microsoft.com",
      //  affiliation:"Queen's University",
       linkedin:"akshat-malik",
      //  position:""
      },   {
        name: "Harsh Patel",
        degree:", MASc",
        // affiliation:"Queen's University",
        place:"Splunk",
        position:"Software Development Engineer",
        link:"https://www.splunk.com/",
        linkedin:"harsh8398/",
        website:"https://harsh8398.github.io"
  
       },
       {
        name: "Shenyu Zheng",
        degree:", MASc",
        affiliation:"Queen's University",
        // place:"Splunk",
        // position:"Currently Software Development Engineer",
        // link:"https://www.splunk.com/",
        linkedin:"shenyu-zheng-31146524b/"
  
       },
      {
        name: "Khaled Badran",
        degree:", MASc",
        place:"KFH",
        position:"AI Engineer",
        link:"https://www.kfh.com/en/home/Personal.html",
        twitter: "khaled_badran9",
        linkedin: "khaled-badran-6b0908174",
        //affilitaion: "Concordia"
      }, 
      {
        name: "Rached Bouchoucha",
        degree:", MASc",
        // affiliation: "Polytechnique Montréal",
        place:"Sycodal",
        position:"MLOps engineering",
        link:"https://sycodal.ca/fr/",
        linkedin: "rached-bouchoucha-1061997",
      },
      {
        name: "Ahmed Haj Yahmed", 
        degree:", MASc",  
           place:"IVADO",
        position:"Teaching Assistant for the MLOps upskilling Program",
        link:"https://ivado.ca/en/",
        // affiliation: "Polytechnique Montréal",
        linkedin: "ahmed-haj-yahmed",
      },
      {
        name: "Divya Kamath",
        degree:", MASc",
        place:"McGill University",
        position:"PhD student ",
        link:"https://www.mcgill.ca/",
        // affiliation: "Queen's University",
        linkedin: "divyamkamath",
      },
      {
        name: "Pierre-Olivier Côté",
        degree:", MASc",
        // affiliation: "Polytechnique Montréal",
        place:"DRW",
        position:"Machine Learning and Software Engineer ",
        link:"https://drw.com/",
        linkedin: "pierre-olivier-côté",
      },
      {
        name: "Ahmad Abdellatif",
        degree:", Assistant Professor",
        // affiliation: "University of Calgary",
        place:"University of Calgary",
        position: "Assistant Professor ",
        link:"https://ucalgary.ca/",
        linkedin: "ahmad-abdellatif-8ab82a29",
        twitter: "AhmadAbdellatf",
        website: "https://profiles.ucalgary.ca/ahmad-abdellatif",
      },
      ,
      {
        name: "Dr. Diego Costa",
        degree:", Assistant Professor",
        // affiliation: "Concordia University",
        place:"Concordia University",
        position: "Assistant Professor",
        link:"https://www.concordia.ca/",
        linkedin: "diego-elias-costa",
        twitter: "DiegoEliasCosta",
        website: "https://diegoeliascosta.github.io/",
      },
      {
        name: "Ernesto Lang Oreamuno",
        degree:", MASc",
        place:"Encircle        ",
        position: " Senior Software Developer ",
        link:"https://www.getencircle.com/"
        // affiliation: "Queen's University",
      },
  
   
  
  
   
  
    ]
  },
  {
    title: "Students",
    placeholder: (
      <h3
        style={{
          textAlign: "center",
          fontSize: "4rem",
          padding: "5rem 0",
          color: "var(--ifm-color-emphasis-400)",
        }}
      >
        Coming Soon ...
      </h3>
    ),
    size: "large",
    members: students,
  },
];

export default function Team() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Team" description="The project's team.">
      <PageHeader title="Our Team" />
      <main>
        <TeamMembers list={TeamMemberList} />
      </main>
    </Layout>
  );
}
