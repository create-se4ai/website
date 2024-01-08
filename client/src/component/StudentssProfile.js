import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { DarkModeContext } from "./DarkModeContext";
//import  icons
const StudentProfile = ({setFormId}) => {
  // console.log("formId in students profile", formId);
  // setFormId(formId);
  const { isDarkMode } = useContext(DarkModeContext);

  const { studentId } = useParams();
  const [student, setStudent] = useState(null);
  const [loadingStudent, setLoadingStudent] = useState(true);
  const [errorStudent, setErrorStudent] = useState("");
  const [form, setForm] = useState(null);
  const [loadingForm, setLoadingForm] = useState(true);
  const [errorForm, setErrorForm] = useState("");

  useEffect(() => {
    // Fetch Student Profile
    fetch(`/api/students/${studentId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.data) {
          setStudent(data.data);
          setLoadingStudent(false);
          // setFormId(formId);

        } else if (data.message === "Student not found") {
          setErrorStudent("Student not found");
          setLoadingStudent(false);
        } else {
          setErrorStudent("Failed to fetch student's information");
          setLoadingStudent(false);
        }
      })
      .catch((error) => {
        console.error(error);
        setErrorStudent("Failed to fetch student's information");
        setLoadingStudent(false);
      });

    // Fetch Form Data
    fetch(`/api/forms/${studentId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.data) {
          setForm(data.data);
          setLoadingForm(false);
        } else if (data.message === "Form not found") {
          setForm({});
          setLoadingForm(false);
        } else {
          setErrorForm("Failed to fetch form data");
          setLoadingForm(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching form data:", error);
        setErrorForm("Failed to fetch form data");
        setLoadingForm(false);
      });
  }, [studentId]);

  const handleUpdateForm = async () => {
    try {
      const response = await fetch(`/api/forms/${formId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Form update failed");
      }

      console.log("Form updated successfully");

      // Optionally, you can refetch the form data to update the local state
      // fetch(`/api/forms/${studentId}`)
      //   .then((response) => response.json())
      //   .then((data) => {
      //     setForm(data.data);
      //   });

    } catch (error) {
      console.error("Error updating form:", error.message);
      // Handle errors (e.g., display an error message to the user)
    }
  };

  if (loadingStudent || loadingForm) {
    return <div>Loading...</div>;
  }

  if (errorStudent || errorForm) {
    return <div>{errorStudent || errorForm}</div>;
  }

// const StudentProfile = () => {
//   const [student, setStudent] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [selectedDegree, setSelectedDegree] = useState("");
//   const [selectedSupervisor, setSelectedSupervisor] = useState("");
//   const [selectedPass, setSelectedPass] = useState('');
//   const [formData, setFormData] = useState({
//     degreeProgram: "",
//     supervisorName: "",
//     startDate1: "",
//     finishDate1: "",
//     passFail1: "",
//     startDate2: "",
//     finishDate2: "",
//     passFail2: "",
//     Module1: [
//       {
//         selectedOption: "",
//         startDate: "",
//         finishDate: "",
//         passFail: "",
//       },
//     ],
//     Module2: [
//       {
//         selectedOption: "",
//         startDate: "",
//         finishDate: "",
//         passFail: "",
//       },
//     ],
//     internship1: [
//       { organizationName: "", supervisorName: "" },
//     ],
//     internship2: [
//       { organizationName: "", supervisorName: "" },
//     ],
//     webinarsAndSeminars1: [
//       {
//         title: "",
//         eventType: "",
//         eventLocation: "",
//         date: "",
//         location: "",
//       },
//     ],
//     webinarsAndSeminars2: [
//       {
//         title: "",
//         eventType: "",
//         eventLocation: "",
//         date: "",
//         location: "",
//       },
//     ],
//     webinarsAndSeminars3: [
//       {
//         title: "",
//         eventType: "",
//         eventLocation: "",
//         date: "",
//         location: "",
//       },
//     ],
//     webinarsAndSeminars4: [
//       {
//         title: "",
//         eventType: "",
//         eventLocation: "",
//         date: "",
//         location: "",
//       },
//     ],
//     webinarsAndSeminars5: [
//       {
//         title: "",
//         eventType: "",
//         eventLocation: "",
//         date: "",
//         location: "",
//       },
//     ],
//     specializationCourses1: [
//       {
//         title: "",
//         startDate: "",
//         finishDate: "",
//         passFail: "",
//       },
//     ],
//     specializationCourses2: [
//       {
//         title: "",
//         startDate: "",
//         finishDate: "",
//         passFail: "",
//       },
//     ],
//     LMActivity1: [
//       {
//         title: "",
//         startDate: "",
//         finishDate: "",
//         passFail: "",
//       },
//     ],
//     LMActivity2: [
//       {
//         title: "",
//         startDate: "",
//         finishDate: "",
//         passFail: "",
//       },
//     ],
//     OtherActivity1: {
//       title: "",
//       details: "",
//     },
//     OtherActivity2: {
//       title: "",
//       details: "",
//     },
//     OtherActivity3: {
//       title: "",
//       details: "",
//     },
//   });
  
  
//   const handleInputChange = (field, value) => {
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [field]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(`/api/forms/${studentId}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error("Form submission failed");
//       }

//       console.log("Form submitted successfully");

//     } catch (error) {
//       console.error("Error submitting form:", error.message);
//       // Handle errors (e.g., display an error message to the user)
//     }
//   };
  
    
    

//   const initialOptions = [
//     "Select an option",
//     "Commercialization and Entrepreneurship",
//     "Engagement and Relation-building with Communities and Diverse Stakeholders",
//     "Communication and Explainability",
//   " Dissemination and Presentation Skills" ,
//   "Technical Writing and Critiquing"
//    ];
//   const [module1, setModule1] = useState('');
//    const [module2, setModule2] = useState('');
//    const [previousOption1, setPreviousOption1] = useState('');
//    const [previousOption2, setPreviousOption2] = useState('');
//    const [availableOptions1, setAvailableOptions1] = useState([...initialOptions]);
//    const [availableOptions2, setAvailableOptions2] = useState([...initialOptions]);
//     const { isDarkMode } = useContext(DarkModeContext);







//   const { studentId } = useParams();
//   console.log("studentId",studentId)
//   useEffect(() => {
//     // Fetch the Student information from the backend


//     // Fetch the Student information from the backend
//     fetch(`/api/students/${studentId}`)
//           .then((response) => response.json())
//       .then((data) => {
//         console.log("data.data", data.data);
//         if (data.data) {
//           setStudent(data.data);
//           setLoading(false);
//         } else if (data.message === "Student not found") {
//           setError("Student not found");
//           setLoading(false);
//         } else {
//           setError("Failed to fetch student's information");
//           setLoading(false);
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//         setError("Failed to fetch student's information");
//         setLoading(false);
//       });

//   }, [studentId]);

// ///// Fetch the Form 



// ///////////////////////

//   const handleDegreeChange = (event) => {
//     setSelectedDegree(event.target.value);
//   };

//   const handleSupervisorChange = (event) => {
//     setSelectedSupervisor(event.target.value);
//   };


//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   // Handler function for finish change
//   const handlePassFailChange = (e) => {
//     setSelectedPass(e.target.value);
//   };
  






//   const handleModuleChange = (moduleNumber, selectedOption) => {
//     if (moduleNumber === 1) {
//       setPreviousOption1(module1);
//       setModule1(selectedOption);
//       setAvailableOptions2(prevOptions => [...prevOptions, previousOption1]);
//       setAvailableOptions2(prevOptions => prevOptions.filter(option => option !== selectedOption));
//     } else {
//       setPreviousOption2(module2);
//       setModule2(selectedOption);
//       setAvailableOptions1(prevOptions => [...prevOptions, previousOption2]);
//       setAvailableOptions1(prevOptions => prevOptions.filter(option => option !== selectedOption));
//     }
//   };
  
// //   const imageData = `${student.img}`; // Assuming student.img is the URL of the image

// //   console.log("imageData",imageData)
  return (
    <Profile>
      <Header> <RedText>N</RedText>SERC <RedText>C</RedText>REATE <RedText>S</RedText>E4AI <RedText>A</RedText>ctivity <RedText></RedText>racker</Header>
      {student && (
        <MiniContainer  isDarkMode={isDarkMode}>
        
        <form onSubmit={handleSubmit}>
        <Div >
        <SmallDiv isDarkMode={isDarkMode}>
        <PersonalInformation>
        <CardBody>
          <h4>TRAINEE NAME :{student.name}</h4> 
        <h4>DEGREE PROGRAM AND YEAR:
           <select
            value={selectedDegree}
           onChange={handleDegreeChange}
                >
                  <option value="">Select an option</option>
                  <option value="MA">MA</option>
                  <option value="PhD">PhD</option>
                  <option value="PDF">PDF</option>

           </select></h4>
                </CardBody>
<CardBodyRight ><h4>HOME INSTITUTION : {student.University}
</h4>
<h4>SUPERVISOR NAME: <select
                  value={selectedSupervisor}
                  onChange={handleSupervisorChange} // Use the state handler for dropdown change
                >
                  <option value="">Select an option</option>
                  <option value="Dr. Emad Shihab">Dr. Emad Shihab</option>
                  <option value="Dr. Foutse Khomh">Dr. Foutse Khomh </option>
                  <option value="Dr. Tanja Tajmel">Dr. Tanja Tajmel</option>
                  <option value="Dr. Jinqiu Yang">Dr. Jinqiu Yang</option>
                  <option value="Dr. Ying (Jenny) Zou">Dr. Ying (Jenny) Zou</option>
                  <option value="Dr. Sarah Nadi">Dr. Sarah Nadi</option>
                  <option value="Dr. Ahmed E. Hassan">Dr. Ahmed E. Hassan</option>
                  <option value="Dr. Bram Adams">Dr. Bram Adams</option>
                  <option value="Dr. Diego Costa">Dr. Diego Costa</option>
                </select></h4></CardBodyRight>
</PersonalInformation></SmallDiv>
</Div>
<Div2>
<SmallDiv2>


  <Subtitle isDarkMode={isDarkMode}>
          <RedText>T</RedText>raining  <RedText> C</RedText>omponent
        </Subtitle>
       
     <table>
     
      <Course> C1 - Engineering AI-based Software Systems</Course>
      <tr>    <th>Required Course</th>
</tr>
  <tr> 
    <th>SOEN 691 </th>
    <th>Start Date</th>
   <th>Finish Date</th>
   <th>Pass/Fail</th>
   </tr><tr><td></td>
 <td>
 <input
      type="date"
      id="startDate"
      value={formData.courses.C1.electiveCourse.startDate}
      onChange={(e) =>
        handleCourseInputChange('C1', 'electiveCourse', 0, 'startDate', e.target.value)
      }
    /></td>
    <td>
      <input    type="date"
      id="finishDate"
      value={formData.courses.C1.requiredCourse.finishDate}
      onChange={(e) => handleCourseInputChange('C1', 'requiredCourse', 0, 'finishDate', e.target.value)} />
    </td>
    <td>
      <select id="passFail" value={selectedPass} onChange={(e) => handlePassFailChange(e)}>
        <option value="">Select an option</option>
        <option value="pass">Pass</option>
        <option value="fail">Fail</option>
      </select>
    </td>
  </tr>



      {/* <Course>
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
    <td><input type="date" id="startDate" /></td>
    <td><input type="date" id="finishDate" /></td>
    <td>
      <select id="passFail" onchange="handlePassFailChange()">
        <option value="">Select an option</option>
        <option value="pass">Pass</option>
        <option value="fail">Fail</option>
      </select>
    </td>
  </tr> */}



{/* 
<Course>C3 - Professional Development Modules</Course>
<tr>    
<th>Minimum 2 PD modules required</th> 

<th>Start Date</th>
<th>Finish Date</th>
<th>Pass/Fail</th>  
</tr>
  
<tr>
            <td>
              <select
                value={module1}
                onChange={(e) => handleModuleChange(1, e.target.value)}
              >
                {availableOptions1.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </td>
       


   
 
 <td><input type="date" id="startDate" /></td>
    <td><input type="date" id="finishDate" /></td>
    <td>
      <select id="passFail" onchange="handlePassFailChange()">
        <option value="">Select an option</option>
        <option value="pass">Pass</option>
        <option value="fail">Fail</option>
      </select>
    </td>
  </tr>

         
          <tr>
            <td>
              <select
                value={module2}
                onChange={(e) => handleModuleChange(2, e.target.value)}
              >
                {availableOptions2.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </td>
     
        

 <td><input type="date" id="startDate" /></td>
    <td><input type="date" id="finishDate" /></td>
    <td>
      <select id="passFail" onchange="handlePassFailChange()">
        <option value="">Select an option</option>
        <option value="pass">Pass</option>
        <option value="fail">Fail</option>
      </select>
    </td>
  </tr>  */}







  
{/* <Course>C4 - Industrial Embedding</Course>
<tr>
  <th>MA trainees will typically serve a 4-month internship</th></tr>
  <tr><th> PhD trainees will complete 2 x 4-month internships
  </th></tr> */}


{/* <tr>
  <th>1. Organization Name</th>

  <td><input type="text"  name="Oname"/></td>
   </tr>


<tr>

<th>2. Supervisor/Host Name</th>

<td><input type="text"  name="Hname"/></td> 
</tr>

{selectedDegree === 'PhD' && (
  <>
<tr>
  <th>3.Organization Name</th>

  <td><input type="text"  name="Oname"/></td>
   </tr>


<tr>

<th>4.Supervisor/Host Name</th>

<td><input type="text"  name="Hname"/></td> 
</tr>
</>)} */}





{/* <Course>C5 -  Industry webinar & seminar</Course>
<tr>
  <th>Webinars and Seminars</th>
  <th>Event Type</th>
  <th>Event Location</th>
  <th>Date</th>
  <th>Location</th>
  
  </tr> */}

  {/* <tr>
<th>1. <input type="text" id="Seminar1"  defaultValue=" Webinar/Seminar 1 Title or Research Topic" size="50" maxLength="100"/>
</th>

<th>
<select id="eventType" name="eventType">
<option value="">Event Type</option>
<option value="Industry Speaker ">Industry Speaker  </option>
<option value=" Trainee-led">Trainee-led</option>
</select>
</th> */}


{/* 
<th>
<select id="eventLocation" name="eventLocation">
<option value="">Event Location</option>
<option value="Virtual">Virtual</option>
<option value="In-person">In-person</option>
</select>
</th>

<th><input type="date" id="startDate" /></th>
<th><input type="text" id="location" /></th>
</tr> */}



{/* <tr>
<th>2. <input type="text" id="Seminar2"  defaultValue=" Webinar/Seminar 2 Title or Research Topic" size="50" maxLength="100"/></th>

<th>
<select id="eventType" name="eventType">
<option value="">Event Type</option>
<option value="Industry Speaker ">Industry Speaker  </option>
<option value=" Trainee-led">Trainee-led</option>
</select>
</th> */}



{/* <th>
<select id="eventLocation" name="eventLocation">
<option value="">Event Location</option>
<option value="Virtual">Virtual</option>
<option value="In-person">In-person</option>
</select>
</th> */}

{/* <th><input type="date" id="startDate" /></th>
<th><input type="text" id="location" /></th>
</tr>

<tr>
<th>3. <input type="text" id="Seminar3"  defaultValue=" Webinar/Seminar 3 Title or Research Topic" size="50" maxLength="100"/></th>

<th>
<select id="eventType" name="eventType">
<option value="">Event Type</option>
<option value="Industry Speaker ">Industry Speaker  </option>
<option value=" Trainee-led">Trainee-led</option>
</select>
</th> */}



{/* <th>
<select id="eventLocation" name="eventLocation">
<option value="">Event Location</option>
<option value="Virtual">Virtual</option>
<option value="In-person">In-person</option>
</select>
</th>

<th><input type="date" id="startDate" /></th>
<th><input type="text" id="location" /></th>
</tr> */}

{/* 
<tr>
<th>4. <input type="text" id="Seminar4"  defaultValue=" Webinar/Seminar 4 Title or Research Topic" size="50" maxLength="100"/></th>

<th>
<select id="eventType" name="eventType">
<option value="">Event Type</option>
<option value="Industry Speaker ">Industry Speaker  </option>
<option value=" Trainee-led">Trainee-led</option>
</select>
</th> */}



{/* <th>
<select id="eventLocation" name="eventLocation">
<option value="">Event Location</option>
<option value="Virtual">Virtual</option>
<option value="In-person">In-person</option>
</select>
</th> */}



{/* <th><input type="date" id="startDate" /></th>
<th><input type="text" id="location" /></th>
</tr> */}


{/* <tr>
<th>5. <input type="text" id="Seminar5"  defaultValue=" Webinar/Seminar 5 Title or Research Topic" size="50" maxLength="100"/></th>

<th>
<select id="eventType" name="eventType">
<option value="">Event Type</option>
<option value="Industry Speaker ">Industry Speaker  </option>
<option value=" Trainee-led">Trainee-led</option>
</select>
</th> */}



{/* <th>
<select id="eventLocation" name="eventLocation">
<option value="">Event Location</option>
<option value="Virtual">Virtual</option>
<option value="In-person">In-person</option>
</select>
</th>

<th><input type="date" id="startDate" /></th>
<th><input type="text" id="location" /></th>
</tr> */}




  




{/* <Course>C6 -  Professional development modules</Course>
<tr>
  <th>Trainees must take 2 specialization courses</th>
  <th>Start Date</th>
<th>Finish Date</th>
<th>Pass/Fail</th>
   </tr> */}


{/* <tr>
<th><input type="text" id="Specialization1"  defaultValue=" Specialization Course 1" size="50" maxLength="100"/>
</th>
<th><input type="date" id="startDate" /></th>
<th><input type="date" id="finishDate" /></th>
<th><select id="passFail" onchange="handlePassFailChange()">
        <option value="">Select an option</option>
        <option value="pass">Pass</option>
        <option value="fail">Fail</option>
      </select></th>
</tr> */}
{/* 
<tr>
<th><input type="text" id="Specialization2"  defaultValue=" Specialization Course 2" size="50" maxLength="100"/></th>
<th><input type="date" id="startDate" /></th>
<th><input type="date" id="finishDate" /></th>
<th> <select id="passFail" onchange="handlePassFailChange()">
        <option value="">Select an option</option>
        <option value="pass">Pass</option>
        <option value="fail">Fail</option>
      </select></th>
</tr> */}

     
  
  






{/* <Course>C7 - Leadership and mentorship training</Course>
<tr>
<th>Trainees must take 2 specialization courses</th>
<th>Start Date</th>
<th>Finish Date</th>
<th>Pass/Fail</th></tr> */}


{/* <tr>
<th><input type="text" id="L&MActivity1"  defaultValue=" L&M Activity 1" size="50" maxLength="100"/></th>
    <th><input type="date" id="startDate" /></th>
    <th><input type="date" id="finishDate" /></th>
    <th>
      <select id="passFail" onchange="handlePassFailChange()">
        <option value="">Select an option</option>
        <option value="pass">Pass</option>
        <option value="fail">Fail</option>
      </select>
    </th>
  </tr>  */}
  
  {/* <tr>
<th><input type="text" id="L&MActivity2"  defaultValue=" L&M Activity 2" size="50" maxLength="100"/></th>
<th><input type="date" id="startDate" /></th>
<th><input type="date" id="finishDate" /></th>
<th><select id="passFail" onchange="handlePassFailChange()">
        <option value="">Select an option</option>
        <option value="pass">Pass</option>
        <option value="fail">Fail</option>
      </select></th>
</tr> */}

{/* <Course>Other Activity 1</Course>
<tr><th>Ex:  Conferences attended</th>
<th>Details</th></tr>
<tr>
  <td><input type="text" id="Conference" /></td>
<td><input type="text" id="DetailsActivity1" /></td>
  </tr> */}


  {/* <Course>Other Activity 2</Course>
<tr><th>Ex:  Publications, Awards
</th>
<th>Details</th></tr>
<tr>
  <td><input type="text" id="Conference" /></td>
<td><input type="text" id="DetailsActivity2" /></td>
  </tr> */}


{/* <Course>Other Activity 3</Course>
<tr><th>Ex:  Other Stipends or Scholarships 

</th>
</tr> */}
{/* <tr>
  <th>If the trainee has received other stipends or scholarships outside of CREATE, note details here
</th>
<th>Details</th></tr>
<tr>
  <td></td>
<td><input type="text" id="DetailsActivity2" /></td>
  </tr> */}

<tr> <th> <button onClick={handleUpdateForm}>Submit</button></th>
</tr>
</table>
 
    

</SmallDiv2>
</Div2>
</form>
        </MiniContainer>
      )}
    </Profile>
  );
};

export default StudentProfile;

const Profile = styled.div`
  margin-top: 50px;
  margin-left: 50px;
  font-family: "Open Sans", sans-serif;
/* border:1px solid  green; */
`;

const Header = styled.div`
  padding-left: 20px;
  padding-top:30px;
  font-weight: bold;
  font-size: 30px;
  /* width: 200px; */
`;


const MiniContainer = styled.div`
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
  /* border:2px solid green; */
margin-bottom:120px;
  &.emadContainer {
    height: 450px;
  }
`;

const Div=styled.div`
/* max-width: 25%; */
text-align: left;
margin-top:15px;
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

background-color: ${(props) => (props.isDarkMode ? "#282828" : "#ffffff")};
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
border-radius:20px;
box-shadow:0 1 2 0 rgb(0 0 0 1);
/* margin-top:20px;
margin-left:100px;  */
display:flex; 
/* flex-direction:row; */
@media (max-width: 1000px) {
    margin-right: 0; /* Remove right margin for mobile screens */
  width:358.4px;
}
`
const PersonalInformation=styled.div`
display :flex; 
flex-direction:row;

`

  const CardBodyRight=styled.div`
  margin-left:200px;
  /* border:2px solid red; */
  width:600px;`
 
const CardBody=styled.div`
  /* padding:0.25rem 1rem 0px; */
/* display:flex;  */
width:600px;
/* border:2px solid orange; */
h3{
  font-size:1.25rem;
  font-weight:700px;
  margin-bottom :0;
}  
span{
  margin-left:7px;
  display: inline-block;
  background-color:#bb5a7d;
  border:1px solid #bb5a7d;
  border-radius:0.4rem;
  color:#fff;
  font-size:75%;
  font-weight:700;
  padding:calc( 1rem *0.25) calc( 1rem *0.5);
  line-height: 1;
}  
padding-bottom: 0;
`

const SmallDiv2=styled.div`
/* border:2px solid red; */
width:1300px;
 /* width:1150px; */
/* width:298px;  */
background-color: ${(props) => (props.isDarkMode ? "#282828" : "#ffffff")};
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
border-radius:20px;
box-shadow:0 1 2 0 rgb(0 0 0 1);
/* margin-top:20px;
margin-left:100px;  */
/* display:flex;  */
/* padding-left:50px; */
table{
  /* border:2px solid blue; */
  /* border-collapse: collapse; */
  /* width:100px; */

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
/* max-width: 25%; */
text-align: left;
margin-top:15px;
/* margin-left:-165px; */
margin-right:2rem;
border-bottom:1px solid #f4f0ec;
@media (max-width: 1000px) {
  max-width:358.4px;
}
`

const RedText = styled.span`
  color: #bb5a7d;
`;

const Subtitle = styled.div`
display: flex; 
   flex-wrap: wrap;
   /* width:100%; */
  margin-top: 40px;
  margin-bottom:10px;
  /* margin-left:120px; */
  font-size: 2em;  font-weight: bold;
  color: ${(props) => (props.isDarkMode ? "#ffffff" : "#484848")};

;
`
const Course=styled.div`
margin-top:20px; 
display:flex;
flex-direction:column;
  border-bottom: 1px solid #ddd;
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
const Select=styled.select`
border:1px solid red;
`

const Option=styled.option`
color:red;`






