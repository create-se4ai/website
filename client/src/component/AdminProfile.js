import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { DarkModeContext } from "./DarkModeContext";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const AdminProfile = () => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { isDarkMode } = useContext(DarkModeContext);
  const [students, setStudents] = useState([]);
  const [forms, setForms] = useState([]);
  const [loadingStudents, setLoadingStudents] = useState(true);
  const [loadingForms, setLoadingForms] = useState(true);
  const [errorStudents, setErrorStudents] = useState("");
  const [errorForms, setErrorForms] = useState("");
  const { adminId } = useParams();
  const [expandedStudents, setExpandedStudents] = useState({});

  const toggleExpand = (studentId) => {
    setExpandedStudents((prevExpanded) => ({
      ...prevExpanded,
      [studentId]: !prevExpanded[studentId],
    }));
  };

  useEffect(() => {
    // Fetch the admin information from the backend
    fetch(`/api/admins/${adminId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.data) {
          setAdmin(data.data);
          setLoading(false);
        } else {
          setError("Admin not found");
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to fetch admin's information");
        setLoading(false);
      });
  }, [adminId]);

  useEffect(() => {
    // Fetch Students
    fetch("/api/students")
      .then((response) => response.json())
      .then((data) => {
        if (data.data) {
          setStudents(data.data);
          setLoadingStudents(false);
        } else {
          setErrorStudents("Failed to fetch students");
          setLoadingStudents(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching students:", error);
        setErrorStudents("Failed to fetch students");
        setLoadingStudents(false);
      });

    // Fetch Forms
    fetch("/api/formsnew")
      .then((response) => response.json())
      .then((data) => {
        if (data.data) {
          setForms(data.data);
          setLoadingForms(false);
        } else {
          setErrorForms("Failed to fetch forms");
          setLoadingForms(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching forms:", error);
        setErrorForms("Failed to fetch forms");
        setLoadingForms(false);
      });
  }, []);

  if (loading || loadingStudents || loadingForms) {
    return <div>Loading...</div>;
  }

  if (error || errorStudents || errorForms) {
    return <div>{error || errorStudents || errorForms}</div>;
  }

  return (
    <Profile isDarkMode={isDarkMode}
    >
            {/* <Admin>
            <Inf></Inf></Admin> */}

      <Div >
<SmallDiv isDarkMode={isDarkMode}>
    <CardImage><Image src={`data:image/jpeg;base64, ${admin.ImageBase64}`}     style={{ width: "298px", height: "auto" }}/>
</CardImage>
    <CardBody><h3> {admin.Name}<span>{admin.Job}</span></h3>{admin.University}</CardBody>
    <CardFooter isDarkMode={isDarkMode}><ul class="pills"    >
    {admin.website && (

    <li >
  <a href={admin.Website}>
    <svg overflow="visible"
    width="1em"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="external-link-alt"
      class="svg-inline--fa fa-external-link-alt fa-w-16"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"
      ></path>
    </svg>
    Know more
  </a>
</li>
)}
<li ><a target="_blank"  href={admin.LinkedIn} 
          
>
  <svg aria-hidden="true" 
  width=" 0.875em"
  focusable="false"
   data-prefix="fab" 
  data-icon="linkedin" 
  class="svg-inline--fa fa-linkedin fa-w-14 "
   role="img" 
   xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512">
  <path fill="currentColor" 
  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
    </path>
    </svg>
    </a>
    </li>
    {admin.Twitter && (
   
    <li>  <a href={admin.Twitter} target="blank">
      <svg aria-hidden="true" 
        width=" 0.875em"
      focusable="false" 
      data-prefix="fab"
       data-icon="twitter"
       class="svg-inline--fa fa-twitter fa-w-16 " 
       role="img" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"><path fill="currentColor"
         d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
      </path></svg>
      </a></li>)}
    <li>
      <a target="_blank" href={`mailto:${admin.Email}`}>
        <svg aria-hidden="true"
        width="1em"
         focusable="false"
          data-prefix="fas"
           data-icon="envelope"
            class="svg-inline--fa fa-envelope fa-w-16 " 
            role="img" xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 512 512"><path fill="currentColor"
             d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 
             48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg></a>
             </li>    
        
             </ul></CardFooter>
    </SmallDiv></Div>
    <Header>TRAINEE NAME </Header>
 {admin && (
   <MiniContainer className="emadContainer" isDarkMode={isDarkMode} >
          

     <Div >
     <SmallDiv isDarkMode={isDarkMode}>
  
     
    
                  {students.map((student) => (

                    <Container key={student._id}>
             
        
                      <Main>
                    
                        <Div1 >
                        <SmallDiv1 isDarkMode={isDarkMode}  onClick={() => toggleExpand(student._id)} // Toggle the expanded state on Div1 click
        style={{ cursor: "pointer" }}>
                        <CardImage>
                    
  <img
    src={`data:image/png;base64,${student.ImageBase64}`}
    alt={`Profile of ${student.name}`}
    style={{ width: "298px", height: "auto" }}
  />




</CardImage>

                      <CardBody><h3>{student.name}</h3>
                     
                         {/* Display the down arrow icon */}
                         {/* <FaChevronDown
                            onClick={() => toggleExpand(student._id)}
                            style={{ cursor: "pointer", fontSize: "14px", color: "#000"  }}
                            transform={{ rotate: expandedStudents[student._id] ? 180 : 0 }}
                          />  */}
                          </CardBody>
                          </SmallDiv1>
                      </Div1>
                      
                      </Main>
                      
                      {/* Display additional information if expanded */}
                      {expandedStudents[student._id] && (
                        
                        <tr>
                          
                            {/* Render additional information here */}
                            {forms
                              .filter((form) => form.studentId === student._id)
                              .map((form) => (
                                <div key={form._id}>
                                          <HeaderForm isDarkMode={isDarkMode}> <RedText>N</RedText>SERC <RedText>C</RedText>REATE <RedText>S</RedText>E4AI <RedText>A</RedText>ctivity <RedText></RedText>racker</HeaderForm>
                                          <Div isDarkMode={isDarkMode}>
        <SmallDiv isDarkMode={isDarkMode}>
                                          <PersonalInformation>
        <CardBody>
          <h4>TRAINEE NAME :{student.name}</h4> 
        <h4>DEGREE PROGRAM AND YEAR: {form.degreeProgram}</h4>
                </CardBody>
<CardBodyRight ><h4>HOME INSTITUTION : {student.University}
</h4>
<h4>SUPERVISOR NAME: {form.supervisorName}
                 </h4></CardBodyRight>
</PersonalInformation></SmallDiv></Div>

<Div2 isDarkMode={isDarkMode}>
<SmallDiv2 isDarkMode={isDarkMode}>


  <Subtitle isDarkMode={isDarkMode}>
          <RedText>T</RedText>raining  <RedText> C</RedText>omponent
        </Subtitle>
     </SmallDiv2></Div2>
  
     
      <Course       isDarkMode={isDarkMode}
> C1 - Engineering AI-based Software Systems</Course>

<tr>    
      <th>SOEN 691- Required Course</th>

    <th>Start Date</th>
   <th>Finish Date</th>
   <th>Completed</th>
 </tr><tr><td></td>
 <td>{form.startDate1}

</td>
<td>{form.finishDate1}
</td>
<td>
{ form.completed1}
    </td>
  </tr>


  {/*Course-2*/ }
 <Course isDarkMode={isDarkMode}>
      C2 - Social Aspects for AI-based Software Systems</Course>
      <tr>
        <th>ENCS 691 - Required Course</th>
       
  <th>Start Date</th>
   <th>Finish Date</th>
   <th>Completed</th>
</tr>
<tr>
    <td></td>
    <td>{form.startDate2}</td>
    <td>{form. finishDate2} </td>
    <td>{form.completed2}</td>
  </tr>





 {/*Course-3 */}

 <Course isDarkMode={isDarkMode}>C3 - Mitacs workshops </Course>
 <tr>Minimum 2 (Mitacs workshops or  Professional Development Modules) require</tr> 

  <tr>    
<th></th>

<th>Start Date</th>
<th>Finish Date</th>
<th>Completed</th>  

</tr>
<tr>
 <td>{form.Mitacsworkshop1[0].selectedOption} </td>
 <td>{form.Mitacsworkshop1[0].startDate}</td>
 <td>{form.Mitacsworkshop1[0].finishDate}</td>
 <td>{form.Mitacsworkshop1[0].completed} </td>
  </tr>

<tr>
  <td>{form.Mitacsworkshop2[0].selectedOption}</td>
  <td>{form.Mitacsworkshop2[0].startDate}</td>
  <td>{form.Mitacsworkshop2[0].finishDate}</td> 
  <td>{form.Mitacsworkshop2[0].completed}</td>
  </tr> 

  <Course isDarkMode={isDarkMode}>C3 - Professional Development Modules</Course>

  <tr> 

  <th></th>
  <th >Start Date</th>
<th>Finish Date</th>
<th>Completed</th></tr><tr></tr>

<tr>
 <td>{form.Module1[0].selectedOption} </td>
 <td>{form.Module1[0].startDate}</td>
 <td>{form.Module1[0].finishDate}</td>
 <td>{form.Module1[0].completed} </td>
  </tr>



<tr>
  <td>{form.Module2[0].selectedOption}</td>
  <td>{form.Module2[0].startDate}</td>
  <td>{form.Module2[0].finishDate}</td> 
  <td>{form.Module2[0].completed}</td>
  </tr>  


{/*Course-4 */}
<Course isDarkMode={isDarkMode}>C4 - Industrial Embedding</Course>
<tr>
  <th>MA trainees will typically serve a 4-month internship</th></tr>
  <tr><th> PhD trainees will complete 2 x 4-month internships
  </th></tr>

<tr>
  <th>1. Organization Name</th>
  <td>{form.internship1[0].organizationName}</td>
   </tr>


<tr>

<th>2. Supervisor/Host Name</th>

<td>{form.internship1[0].supervisorName }</td> 
</tr>
  
{form.internship2[0].organizationName && form.internship2[0].supervisorName && (
  <>
<tr>
<th>3. Organization Name</th>
<td>{form.internship2[0].organizationName}</td>
 </tr>
<tr>

<th>4. Supervisor/Host Name</th>
<td>{form.internship2[0].supervisorName}</td>  
 </tr> 
 </>
)}



{/* Course-5 */}
<Course isDarkMode={isDarkMode}>C5 -  Industry webinar & seminar</Course>
<tr>


  <th>Webinars and Seminars</th>
  <th>Event Type</th>
  <th>Event Location</th>
  <th>Date</th>
  <th>Location</th>
  
  </tr>

  <tr>
<th>1. {form.webinarsAndSeminars1[0].title}</th>
<th>{form.webinarsAndSeminars1[0].eventType}</th>
<th>{form.webinarsAndSeminars1[0].eventLocation}</th>
<th>{form.webinarsAndSeminars1[0].date}</th>
<th>{form.webinarsAndSeminars1[0].location}</th>
</tr>

<tr>
<th>2. {form.webinarsAndSeminars2[0].title}</th>
<th>{form.webinarsAndSeminars2[0].eventType}</th>
<th>{form.webinarsAndSeminars2[0].eventLocation}</th>
<th>{form.webinarsAndSeminars2[0].date}</th>
<th>{form.webinarsAndSeminars2[0].location}</th>
</tr>

<tr>
<th>3. {form.webinarsAndSeminars3[0].title}</th>
<th>{form.webinarsAndSeminars3[0].eventType}</th>
<th>{form.webinarsAndSeminars3[0].eventLocation}</th>
<th>{form.webinarsAndSeminars3[0].date}</th>
<th>{form.webinarsAndSeminars3[0].location}</th>
</tr>


<tr>
<th>4. {form.webinarsAndSeminars4[0].title}</th>
<th>{form.webinarsAndSeminars4[0].eventType}</th>
<th>{form.webinarsAndSeminars4[0].eventLocation}</th>
<th>{form.webinarsAndSeminars4[0].date}</th>
<th>{form.webinarsAndSeminars4[0].location}</th>
</tr>


<tr>
<th>5. {form.webinarsAndSeminars5[0].title}</th>
<th>{form.webinarsAndSeminars5[0].eventType}</th>
<th>{form.webinarsAndSeminars5[0].eventLocation}</th>
<th>{form.webinarsAndSeminars5[0].date}</th>
<th>{form.webinarsAndSeminars5[0].location}</th>
</tr>


<Course isDarkMode={isDarkMode}>C6 -  Professional development modules</Course>
<tr>
  <th>Trainees must take 2 specialization courses</th>
  <th>Start Date</th>
<th>Finish Date</th>
<th>Completed</th>   </tr> 


<tr>
<th>{form.specializationCourses1[0].title} 
</th>
<th> {form.specializationCourses1[0].startDat}</th>
<th> {form.specializationCourses1[0].finishDate}</th>
<th>{form.specializationCourses1[0].completed}</th>
</tr>

<tr>
<th> {form.specializationCourses2[0].title}</th>
<th>{form.specializationCourses2[0].startDate} </th>
<th> {form.specializationCourses2[0].finishDate}</th>
<th>{form.specializationCourses2[0].completed}</th>
</tr>

<Course isDarkMode={isDarkMode}>C7 - Leadership and mentorship training</Course>
<tr>
<th>Please describe any evidence of leadership or mentorship you have acquired or given during your time in CREATE:</th>
<th>Description</th>
<th>Date</th>
 {/* <th>Finish Date</th>
<th>Completed</th> */}
</tr> 

<tr>
<th>{form.LMActivity1[0].title} </th>
    <th> {form.LMActivity1[0].description}</th>
    <th> {form.LMActivity1[0].date}</th>
  </tr> 
  
  <tr>
<th>{form.LMActivity2[0].title} </th>
    <th> {form.LMActivity2[0].description}</th>
    <th> {form.LMActivity2[0].date}</th>
  </tr> 
  <tr>
<th>{form.LMActivity3[0].title} </th>
    <th> {form.LMActivity3[0].description}</th>
    <th> {form.LMActivity3[0].date}</th>
  </tr> 


  <Course isDarkMode={isDarkMode}>Other Activity 1</Course>
  <Course isDarkMode={isDarkMode}>Other Activity 1</Course>
<tr><th>Please mention if you have achieved any of the below milestones during your time in CREATE:</th>
<th> Quentity</th>
<th>Name Of Journal or Conference Name</th>
<th> Date Published</th>
<th>Location</th></tr>
<tr>Articles published in or accepted by a referreed journal	
  <td>{form.Articlespublishedinoracceptedbyareferreedjourna[0].quentity}</td>
<td>{form.Articlespublishedinoracceptedbyareferreedjourna[0].NameOfJournalorConferenceName}</td>
<td>{form.Articlespublishedinoracceptedbyareferreedjourna[0].datePublished}</td>
<td>{form.Articlespublishedinoracceptedbyareferreedjourna[0].Location}</td>

  </tr>



  <tr>Articles submitted to a referreed journal	
  <td>{form.Articlessubmittedtoareferreedjournal[0].quentity}</td>
<td>{form.Articlessubmittedtoareferreedjournal[0].NameOfJournalorConferenceName}</td>
<td>{form.Articlessubmittedtoareferreedjournal[0].datePublished}</td>
<td>{form.Articlessubmittedtoareferreedjournal[0].Location}</td>

  </tr>



  <tr>Other publications (technical reports, non-referreed articles, etc.)
  <td>{form.Otherpublicationstechnicalreports[0].quentity}</td>
<td>{form.Otherpublicationstechnicalreports[0].NameOfJournalorConferenceName}</td>
<td>{form.Otherpublicationstechnicalreports[0].datePublished}</td>
<td>{form.Otherpublicationstechnicalreports[0].Location}</td>

  </tr>



  <tr>Patents (filed or issued)
  <td>{form.Patents[0].quentity}</td>
<td>{form.Patents[0].NameOfJournalorConferenceName}</td>
<td>{form.Patents[0].datePublished}</td>
<td>{form.Patents[0].Location}</td>

  </tr>

  <tr>Conference presentations	
  <td>{form.Conferencepresentations[0].quentity}</td>
<td>{form.Conferencepresentations[0].NameOfJournalorConferenceName}</td>
<td>{form.Conferencepresentations[0].datePublished}</td>
<td>{form.Conferencepresentations[0].Location}</td>

  </tr>



  <tr>Conference posters
  <td>{form.Conferenceposters[0].quentity}</td>
<td>{form.Conferenceposters[0].NameOfJournalorConferenceName}</td>
<td>{form.Conferenceposters[0].datePublished}</td>
<td>{form.Conferenceposters[0].Location}</td>

  </tr>

  <tr>Creation, curation, sharing or reuse of datasets	
  <td>{form.Creationcurationsharingorreuseofdatasets[0].quentity}</td>
<td>{form.Creationcurationsharingorreuseofdatasets[0].NameOfJournalorConferenceName}</td>
<td>{form.Creationcurationsharingorreuseofdatasets[0].datePublished}</td>
<td>{form.Creationcurationsharingorreuseofdatasets[0].Location}</td>

  </tr>



  <tr>Creation of companies or organizations that promote research or the use of research results
  <td>{form.Creationofcompaniesororganizationsthatpromoteresearch[0].quentity}</td>
<td>{form.Creationofcompaniesororganizationsthatpromoteresearch[0].NameOfJournalorConferenceName}</td>
<td>{form.Creationofcompaniesororganizationsthatpromoteresearch[0].datePublished}</td>
<td>{form.Creationofcompaniesororganizationsthatpromoteresearch[0].Location}</td>

  </tr>


  <tr>Development of tools, including software, for use by researchers or by others in the public or private domain
  <td>{form.Developmentoftoolsincludingsoftware[0].quentity}</td>
<td>{form.Developmentoftoolsincludingsoftware[0].NameOfJournalorConferenceName}</td>
<td>{form.Developmentoftoolsincludingsoftware[0].datePublished}</td>
<td>{form.Developmentoftoolsincludingsoftware[0].Location}</td>

  </tr>

{/* Other Activity 2 */}
<Course isDarkMode={isDarkMode}>Other Activity 2</Course>
<tr>
  <th>Ex: Publications, Awards</th>
  <th>Details</th>
</tr>
<tr>
  <td>{form.OtherActivity2.title}</td>
  <td>{form.OtherActivity2.details}</td>
</tr>

{/* Other Activity 3 */}
<Course isDarkMode={isDarkMode}>Other Activity 3</Course>
<tr>
  <th>Ex: Other Stipends or Scholarships</th>
</tr>
<tr>
  <th>If the trainee has received other stipends or scholarships outside of CREATE, note details here</th>
  <td>{form.OtherActivity3.details}</td>
</tr>


  
                                </div>
                              ))}
                        
                        </tr>
                      )}
                    </Container>
                  ))}
       
            </SmallDiv>
          </Div>
        </MiniContainer>
      )}
    </Profile>
  );
};

// Define your styled components here...


export default AdminProfile;

const Profile = styled.div`
  margin-top: 50px;
  margin-left: 50px;
  font-family: "Open Sans", sans-serif;
/* height:7000px; */
/* border:1px solid  green; */
`;
const Header = styled.div`
  padding-left: 20px;
  padding-top:30px;
  font-weight: bold;
  font-size: 30px;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
`;

const RedText = styled.span`
  color: #bb5a7d;
`;
const MiniContainer = styled.div`
/* border:2px solid red; */
display:flex;
flex-wrap:wrap;
flex-direction:row;
/* width:100%; */
/* max-width:1500px; */
  margin-left: 20px;
  margin-top: 40px;
  border-radius: 10px;
  border: ${(props) =>
    props.isDarkMode ? "  0px solid #404040" : "  2px solid #f4f0ec"};
  background-color: ${(props) => (props.isDarkMode ? "#404040" : "white")};
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
  padding-top: 0px;
  /* width: 270px; */
  /* height: 400px; */
  /* border:2px solid orange; */
margin-bottom:120px;
  &.emadContainer {
    /* height: 450px; */
  }
`;
const Div1=styled.div`
display:flex;
flex-direction:row;
/* border:2px solid orange; */
text-align: left;
margin-top:15px;
/* border:2px solid blue ;  */
margin-right:2rem;
/* flex:0 0 100%; */
@media (max-width: 1000px) {

  max-width:358.4px;
}



`
const SmallDiv1=styled.div`
border:${(props) => (props.isDarkMode ? "": "2px solid #eef0f2")};

width:298px; 
/* height:438.2px; */
background-color: ${(props) => (props.isDarkMode ? "#282828" : "#ffffff")};
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
border-radius:20px;
box-shadow:0 1 2 0 rgb(0 0 0 1);
/* margin-top:20px;
margin-left:100px;  */
/* display:flex; 
flex-wrap:wrap; */
@media (max-width: 1000px) {
    margin-right: 0; /* Remove right margin for mobile screens */
  width:358.4px;
}
`
const Div=styled.div`
/* border:2px solid pink ; */
text-align: left;
width:1000px;
margin-top:15px;
/* display:flex;  */
flex-direction:row;
/* margin-left:-165px; */
margin-right:2rem;
border-bottom:2px solid #f4f0ec;
padding-left:50px;


@media (max-width: 1000px) {

  max-width:358.4px;
}
`
const SmallDiv=styled.div`
/* border:${(props) => (props.isDarkMode ? "": "2px solid #eef0f2")}; */
/* border:2px solid orangered; */
/* width:100%; */
width:1500px;
display:flex;
flex-direction:row;
flex-wrap:wrap;

background-color: ${(props) => (props.isDarkMode ? "#282828" : "#ffffff")};
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
border-radius:20px;
box-shadow:0 1 2 0 rgb(0 0 0 1);
/* margin-top:20px;
margin-left:100px;  */
/* display:flex;  */
/* flex-direction:row; */


table{
  width:1300px;}
th{
  border-bottom: 1px solid #ddd;

}
img{
  width:60px; 
  height:60px;
}
tr{
  font-weight:700;
    td{
      /* border:2px solid red; */
 
    }
  
}
@media (max-width: 1000px) {
    margin-right: 0; /* Remove right margin for mobile screens */
  width:358.4px;
}
`
const HeaderForm = styled.div`
  padding-left: 20px;
  padding-top:30px;
  font-weight: bold;
  font-size: 30px;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
`;
const PersonalInformation=styled.div`
display :flex; 
flex-direction:row;

`

  const CardBodyRight=styled.div`
  margin-left:200px;
  /* border:2px solid red; */
  width:600px;`
 
 const CardBody=styled.div`
 padding:0.15rem 1rem ;
width:100%;
h3{
 display: block;
   font-size: 1.17em;
   margin-block-start: 1em;
   margin-block-end: 1em;
   margin-inline-start: 0px;
   margin-inline-end: 0px;
   margin-bottom: 0;

}  
margin-bottom:0.25rem;
padding-bottom:0.75rem;

`

const SmallDiv2=styled.div`
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
width:1300px;
 /* width:1150px; */
/* width:298px;  */
/* background-color: ${(props) => (props.isDarkMode ? "#282828" : "#ffffff")}; */
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
border-radius:20px;
box-shadow:0 1 2 0 rgb(0 0 0 1);
/* margin-top:20px;
margin-left:100px;  */
/* display:flex;  */
/* padding-left:50px; */
table{
  /* border:2px solid yellow; */
  /* border-collapse: collapse; */
  width:100%;

/* tr:hover {background-color:#bb5a7d} */
tr{
  font-weight:500;

}
td{
 

}
th{
  padding: 8px;
  text-align: left;
  /* border-bottom: 1px solid red; */


}
textarea{
  height: 150px;
  padding: 12px 20px;
  /* box-sizing: border-box; */
  /* border: 2px solid red; */
  border-radius: 4px;
  /* background-color: #f8f8f8; */
  font-size: 16px;
  resize: none;


}
}

@media (max-width: 1000px) {
    margin-right: 0; /* Remove right margin for mobile screens */
  width:358.4px;
}`

const Div2=styled.div`
border:${(props) => (props.isDarkMode ? "2px solid 	#404040": "2px solid #eef0f2")};
text-align: left;
margin-top:15px;
/* margin-left:-165px; */
margin-right:2rem;
/* border-bottom:1px solid #f4f0ec; */
/* width:100%; */

/* @media (max-width: 1000px) {
  max-width:358.4px;
} */
`


const Subtitle = styled.div`
display: flex; 
   flex-wrap: wrap;
   /* background-color: ${(props) => (props.isDarkMode ? "#282828" : "#ffffff")}; */
  margin-top: 40px;
  margin-bottom:10px;
  /* margin-left:120px; */
  font-size: 2em;  font-weight: bold;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};

;
`
const Course=styled.div`
margin-top:20px; 
display:flex;
flex-direction:column;
border-bottom:${(props) => (props.isDarkMode ? "2px solid 	#404040": "2px solid #eef0f2")};
  margin-bottom:10px;
font-weight:700;
color: #bb5a7d;
width:100%;

&:hover{
  color: #bb5a7d;
cursor:pointer;
}
div{
  display:flex; 
  flex-direction:row;
}

`

const CardImage=styled.div`
/* border:2px solid green; */
@media (max-width: 1000px) {
  width:358.4px;
}`

const Image =styled.img`
width:358.4px;
height:298px; 
border-top-right-radius :15px; 
border-top-left-radius:15px;
@media (max-width: 1000px) {
 width:358.4px;
 height:358.4px;
 /* width:100%; */
 }
`
const Main = styled.div`
display :flex; 
flex-direction:row;
/* width:1500px; */
/* width:30%; */
  /* border:2px solid green; */
  /* width:25%; */
   // Display 4 students in a row
  /* box-sizing: border-box; */
  /* padding: 10px; */
   // Add padding between cards for better spacing
  /* border: 2px solid orange; */

  @media (max-width: 1200px) {
    width: 33.33%; // Display 3 students in a row on smaller screens
  }

  @media (max-width: 900px) {
    width: 50%; // Display 2 students in a row on even smaller screens
  }

  @media (max-width: 600px) {
    width: 100%; // Display 1 student in a row on the smallest screens
  }

  margin-bottom:80px;

  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
`;


const Container = styled.div`
display:flex;
flex-wrap:wrap;
flex-direction:row;
/* width:100%; */
/* width:1500px; */
/* border:2px solid yellow; */
`;
const Img =styled.img`
max-width:200px; 
max-height:200px;
`
const Admin=styled.div`
border:2px solid red;
margin-left:25px;
display:flex; 
flex-direction:row;`

const Inf= styled.div`
border:2px solid green;
height:30px;
margin-top:50px;
margin-left:15px;
/* padding-top:20px; */
font-size:15px;`



const CardFooter=styled.div` 
font-weight:700;
  margin-top: auto;
  padding:0.25rem 1rem;
ul{
  /* border:2px solid green; */
  margin-left:-0.75rem;
  padding-left:0.15rem;

}
li{
  border-radius: 0.5rem;
  /* border:2px solid yellow; */

    cursor: pointer;
    display: inline-block;
    margin-left:0rem;
    padding: 0.25rem 1rem;
    :hover {
 
    background-color: ${(props) => (props.isDarkMode ? "#484848" : "#f1f2f5")};

    border-radius: 0.5rem;
  }
}
a {
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
text-decoration:none;
  /* margin-left:-30px; */
 
}`
