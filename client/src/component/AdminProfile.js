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
    fetch("/api/forms")
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
      <Header>{admin.Name}</Header>

 {admin && (
   <MiniContainer className="emadContainer" isDarkMode={isDarkMode} >
          <Header>TRAINEE NAME </Header>

     <Div>
     <SmallDiv isDarkMode={isDarkMode}>
  
      <table>
        <tbody>
    
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
     <table>
     
      <Course       isDarkMode={isDarkMode}
> C1 - Engineering AI-based Software Systems</Course>
      <tr>    <th>Required Course</th>
</tr>
  <tr> 
    <th>SOEN 691 </th>
    <th>Start Date</th>
   <th>Finish Date</th>
   <th>Pass/Fail</th>
   </tr><tr><td></td>
 <td>{form.startDate1}

</td>
<td>{form.finishDate1}
</td>
<td>
{ form.passFail1}
    </td>
  </tr>


  {/*Course-2*/ }
 <Course isDarkMode={isDarkMode}>
      C2 - Social Aspects for AI-based Software Systems</Course>
      <tr><th>Required Course</th></tr>
<tr>
  <th>ENCS 691</th>
  <th>Start Date</th>
   <th>Finish Date</th>
   <th>Pass/Fail</th>
</tr>
<tr>
    <td></td>
    <td>{form.startDate2}</td>
    <td>{form. finishDate2} </td>
    <td>{form.passFail2}</td>
  </tr>





 {/*Course-3 */}

 <Course isDarkMode={isDarkMode}>C3 - Professional Development Modules</Course>
<tr>    
<th>Minimum 2 PD modules required</th> 

<th>Start Date</th>
<th>Finish Date</th>
<th>Pass/Fail</th>  
</tr>
  
<tr>
 <td>{form.Module1[0].selectedOption} </td>
 <td>{form.Module1[0].startDate}</td>
 <td>{form.Module1[0].finishDate}</td>
 <td>{form.Module1[0].passFail} </td>
  </tr>

<tr>
  <td>{form.Module2[0].selectedOption}</td>
  <td>{form.Module2[0].startDate}</td>
  <td>{form.Module2[0].finishDate}</td> 
  <td>{form.Module2[0].passFail}</td>
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
<th>Pass/Fail</th>
   </tr> 


<tr>
<th>{form.specializationCourses1[0].title} 
</th>
<th> {form.specializationCourses1[0].startDat}</th>
<th> {form.specializationCourses1[0].finishDate}</th>
<th>{form.specializationCourses1[0].passFail}</th>
</tr>

<tr>
<th> {form.specializationCourses2[0].title}</th>
<th>{form.specializationCourses2[0].startDate} </th>
<th> {form.specializationCourses2[0].finishDate}</th>
<th>{form.specializationCourses2[0].passFail}</th>
</tr>

<Course isDarkMode={isDarkMode}>C7 - Leadership and mentorship training</Course>
<tr>
<th>Trainees must take 2 specialization courses</th>
<th>Start Date</th>
<th>Finish Date</th>
<th>Pass/Fail</th></tr>


<tr>
<th>{form.LMActivity1[0].title} </th>
    <th> {form.LMActivity1[0].startDate}</th>
    <th> {form.LMActivity1[0].finishDate}</th>
    <th>{form.LMActivity1[0].passFail}</th>
  </tr> 
  
  <tr>
<th>{form.LMActivity2[0].title} </th>
    <th> {form.LMActivity2[0].startDate}</th>
    <th> {form.LMActivity2[0].finishDate}</th>
    <th>{form.LMActivity2[0].passFail}</th>
  </tr> 


  <Course isDarkMode={isDarkMode}>Other Activity 1</Course>
<tr><th>Ex:  Conferences attended</th>
<th>Details</th></tr>
<tr>
  <td>{form.OtherActivity1.title}</td>
<td>{form.OtherActivity1.details}</td>
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


  </table>
                                </div>
                              ))}
                        
                        </tr>
                      )}
                    </Container>
                  ))}
            </tbody>
            </table>
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
/* border:2px solid pink; */


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
margin-top:15px;
display:flex; 
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
  
  width:25%; // Display 4 students in a row
  box-sizing: border-box;
  padding: 10px; // Add padding between cards for better spacing
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

`;
