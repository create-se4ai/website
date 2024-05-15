import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { DarkModeContext } from "./DarkModeContext";


const StudentProfile = () => {
    const { isDarkMode } = useContext(DarkModeContext);
    // const { studentId } = useParams();
  
    const [student, setStudent] = useState(null);
    const [loadingStudent, setLoadingStudent] = useState(true);
    const [errorStudent, setErrorStudent] = useState("");
    const [loadingForm, setLoadingForm] = useState(true);

    const [errorForm, setErrorForm] = useState("");





    const initialOptions = [
        "Select an option",
        "Commercialization and Entrepreneurship",
        "Engagement and Relation-building with Communities and Diverse Stakeholders",
        "Communication and Explainability",
      " Dissemination and Presentation Skills" ,
      "Technical Writing and Critiquing"
       ];
       const initialOptions1 = [
        "Select an option",
        "Networking Skills",
        "Project and Time Management",
        "Reconciliation and EDI",
        "Career Planning",
        "Leadership Skills",
        "Writing and Presentation Skills",
        "R&D Management",
        "Communication Skills"
       ];
    const [module1, setModule1] = useState('');
       const [module2, setModule2] = useState('');
       const [previousOption1, setPreviousOption1] = useState('');
       const [previousOption2, setPreviousOption2] = useState('');
       const [availableOptions1, setAvailableOptions1] = useState([...initialOptions]);
       const [availableOptions2, setAvailableOptions2] = useState([...initialOptions]);

       const [availableOptions3, setAvailableOptions3] = useState([...initialOptions1]);
       const [availableOptions4, setAvailableOptions4] = useState([...initialOptions1]);

////////////////////////////////////////////////////////////////////
const [formData, setFormData] = useState({
    studentId:"",
        degreeProgram: "",
        supervisorName: "",
        startDate1: "",
        finishDate1: "",
        completed1: "",
        startDate2: "",
        finishDate2: "",
        completed2: "",
        Mitacsworkshop1: [
          {
            selectedOption: "",
            startDate: "",
            finishDate: "",
            completed: "",
          },
        ],
        Mitacsworkshop2: [
          {
            selectedOption: "",
            startDate: "",
            finishDate: "",
            completed: "",
          },
        ],
        Module1: [
          {
            selectedOption: "",
            startDate: "",
            finishDate: "",
            passFail: "",
          },
        ],
        Module2: [
          {
            selectedOption: "",
            startDate: "",
            finishDate: "",
            passFail: "",
          },
        ],
        internship1: [
          { organizationName: "", supervisorName: "" },
        ],
        internship2: [
          { organizationName: "", supervisorName: "" },
        ],
        webinarsAndSeminars1: [
          {
            title: "",
            eventType: "",
            eventLocation: "",
            date: "",
            location: "",
          },
        ],
        webinarsAndSeminars2: [
          {
            title: "",
            eventType: "",
            eventLocation: "",
            date: "",
            location: "",
          },
        ],
        webinarsAndSeminars3: [
          {
            title: "",
            eventType: "",
            eventLocation: "",
            date: "",
            location: "",
          },
        ],
        webinarsAndSeminars4: [
          {
            title: "",
            eventType: "",
            eventLocation: "",
            date: "",
            location: "",
          },
        ],
        webinarsAndSeminars5: [
          {
            title: "",
            eventType: "",
            eventLocation: "",
            date: "",
            location: "",
          },
        ],
        specializationCourses1: [
          {
            title: "",
            startDate: "",
            finishDate: "",
            completed: "",
          },
        ],
        specializationCourses2: [
          {
            title: "",
            startDate: "",
            finishDate: "",
            completed: "",
          },
        ],
        LMActivity1: [
          {
            title: "",
            description: "",
            date: "",
           
          },
        ],
        LMActivity2: [
          {
            title: "",
            description: "",
            date: "",
          },
        ],
        LMActivity3: [
          {
            title: "",
            description: "",
            date: "",
          },
        ],
     
      Articlespublishedinoracceptedbyareferreedjourna:[
          {
          NameOfJournalorConferenceName: "",
          quentity: "",
          datePublished:"",
          Location:""
        }],
      Articlessubmittedtoareferreedjournal	:     
          [{  
       NameOfJournalorConferenceName: "",
        quentity: "",
        datePublished:"",
        Location:""   }],
        Otherpublicationstechnicalreports	:
        [{
        NameOfJournalorConferenceName: "",
        quentity: "",
        datePublished:"",
        Location:""
      }],
      Patents	:     
      [{  
     NameOfJournalorConferenceName: "",
      quentity: "",
      datePublished:"",
      Location:""   }],
      Conferencepresentations	:
      [{
      NameOfJournalorConferenceName: "",
      quentity: "",
      datePublished:"",
      Location:""
    }],
    Conferenceposters	:     
      [{  
   NameOfJournalorConferenceName: "",
    quentity: "",
    datePublished:"",
    Location:""   }],
    Notableawardsorscholarships		:     
   [{  
 NameOfJournalorConferenceName: "",
  quentity: "",
  datePublished:"",
  Location:""  
 }],
  Creationcurationsharingorreuseofdatasets		:
  [{
  NameOfJournalorConferenceName: "",
  quentity: "",
  datePublished:"",
  Location:""
}],
Creationofcompaniesororganizationsthatpromoteresearch	:     
  [{  
NameOfJournalorConferenceName: "",
quentity: "",
datePublished:"",
Location:""   }],
Developmentoftoolsincludingsoftware	:     
  [{  
NameOfJournalorConferenceName: "",
quentity: "",
datePublished:"",
Location:""   }],
       
        OtherActivity2: {
          title: "",
          details: "",
        },
        OtherActivity3: {
          title: "",
          details: "",
        },
      });
    //////////////////////////////////////////////////////////////////  
      const { studentId} = useParams();

///////////////////////////////////////////////////////////////
  
useEffect(() => {
    // Fetch Student Profile
    fetch(`/api/students/${studentId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("data.data.studentId",data.data._id)
        if (data.data) {
          setStudent(data.data);
          setLoadingStudent(false);
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
    fetch(`/api/formsnew/${studentId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.data) {
          setFormData(data.data);
          setLoadingForm(false);
        } else if (data.message === "Form not found") {
          setFormData({});
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
      const response = await fetch(`/api/formsnew/${studentId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        // If the request is successful, refetch the form data to update the local state
        await refetchFormData();
  
        // Display a success message to the user
        alert("Form submitted successfully!");
      } else {
        // Handle non-successful responses
        console.error("Form update failed:", response.statusText);
        setErrorForm("Failed to update form");
      }
    } catch (error) {
      // Handle network errors or other issues
      console.error("Error updating form:", error.message);
      setErrorForm("Failed to update form");
    }
  };
  
  const refetchFormData = async () => {
    try {
      const response = await fetch(`/api/formsnew/${studentId}`);
  
      if (response.ok) {
        const data = await response.json();
        setFormData(data.data);
  
        // Display the updated form data
        alert("Form data updated successfully!");
      } else {
        console.error("Failed to fetch updated form data:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching updated form data:", error.message);
    }
  };
  
  
 
  {/* This part for course -3 to choodel Module */}    
  const handleModuleChange = (moduleIndex, selectedOption) => {
    setFormData((prevFormData) => {
      const newFormData = { ...prevFormData };
  
      // Update selectedOption for the specified moduleIndex
      newFormData[`Module${moduleIndex + 1}`][0].selectedOption = selectedOption;
  
      // Filter out the selected option from availableOptions for other modules
      const selectedOptionModule1 = newFormData.Module1[0].selectedOption || "";
      const filteredOptions = initialOptions.filter(
        (option) => option !== selectedOptionModule1
      );
  
      // Update availableOptions for Module2
      newFormData.Module2[0].availableOptions = [...filteredOptions];
  
      // Ensure the state is properly updated before returning
      return { ...newFormData };
    });
  };
  
  const handleWorkshopsChange = (moduleIndex, selectedOption) => {
    setFormData((prevFormData) => {
      const newFormData = { ...prevFormData };
  
      // Update selectedOption for the specified moduleIndex
      const workshopKey = `Mitacsworkshop${moduleIndex + 1}`;
      if (!newFormData.hasOwnProperty(workshopKey)) {
        console.error(`Invalid workshop key: ${workshopKey}`);
        return prevFormData;
      }
      newFormData[workshopKey][0].selectedOption = selectedOption;
  
      // Filter out the selected option from availableOptions for other modules
      const selectedOptionThisModule = newFormData[workshopKey][0].selectedOption || "";
      const filteredOptions = initialOptions1.filter(option => option !== selectedOptionThisModule);
  
      // Update availableOptions for the next module (if it exists)
      const nextWorkshopKey = `Mitacsworkshop${moduleIndex + 2}`;
      if (newFormData.hasOwnProperty(nextWorkshopKey)) {
        newFormData[nextWorkshopKey][0].availableOptions = [...filteredOptions];
      }
  
      // Ensure the state is properly updated before returning
      return { ...newFormData };
    });
  };
  
  
  
  
  
  
  
  
  
    return (
      <Profile isDarkMode={isDarkMode}>
        <Header isDarkMode={isDarkMode}> <RedText>N</RedText>SERC <RedText>C</RedText>REATE <RedText>S</RedText>E4AI <RedText>A</RedText>ctivity <RedText>T</RedText>racker</Header>
  
      {student && (
        <MiniContainer  isDarkMode={isDarkMode}>
        
        <form >
        <Div isDarkMode={isDarkMode}>
        <SmallDiv isDarkMode={isDarkMode}>
        <PersonalInformation>
        <CardBody>
          <h4>TRAINEE NAME :{student.name}</h4> 
        <h4>DEGREE PROGRAM AND YEAR:
        <select
      value={formData.degreeProgram}
      isDarkMode={isDarkMode}
      onChange={(e) =>
        setFormData({
          ...formData,
          degreeProgram: e.target.value,
        })
      }
    >
                  <option value="">Select an option</option>
                  <option value="MA">MA</option>
                  <option value="PDF">MSc</option>
                  <option value="PhD">PhD</option>

           </select></h4>
                </CardBody>
<CardBodyRight ><h4>HOME INSTITUTION : {student.University}
</h4>
<h4>SUPERVISOR NAME: <select  value={formData.supervisorName}
                   
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        supervisorName: e.target.value,
                      })
                    }
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

<Div2 isDarkMode={isDarkMode}>
<SmallDiv2 isDarkMode={isDarkMode}>


  <Subtitle isDarkMode={isDarkMode}>
          <RedText>T</RedText>raining  <RedText> C</RedText>omponent
        </Subtitle>



        
        

<table>
     
      <Course       isDarkMode={isDarkMode}
> C1 - Engineering AI-based Software Systems</Course>

      <tr>    
      <th>SOEN 691- Required Course</th>

    <th>Start Date</th>
   <th>Finish Date</th>
   <th>Completed</th>
 </tr>

 


   <tr>
    <td></td>

 <td>
 <input
    type="date"
    id="startDate"
    value={formData.startDate1}
    onChange={(e) => setFormData({ ...formData, startDate1: e.target.value })}
  />
</td>
<td>
  <input
    type="date"
    id="finishDate"
    value={formData.finishDate1}
    onChange={(e) => setFormData({ ...formData, finishDate1: e.target.value })}

  />
</td>
<td>
  <select
    id="completed"
    value={formData.completed1}
    onChange={(e) =>setFormData({ ...formData, completed1: e.target.value })}
  >
    <option value="">Select an option</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
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

    <td>
    <input type="date" 
    id="startDate2"
     value={formData.startDate2}
    onChange={(e) => setFormData({ ...formData, startDate2: e.target.value })} /></td>
    <td>
        <input type="date" id="finishDate2" 
        value={formData.finishDate2}
    onChange={(e) => setFormData({ ...formData, finishDate2: e.target.value })} /></td>
    <td>
      <select id="completed2"
   value={formData.completed2}
   onChange={(e) =>setFormData({ ...formData, completed2: e.target.value })}>
        <option value="">Select an option</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </td>
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
<select
  value={formData.Mitacsworkshop1[0].selectedOption}
  onChange={(e) => handleWorkshopsChange(0, e.target.value)}
  >
  {availableOptions3.map((option, index) => (
    <option key={index} value={option}>
      {option}
    </option>
  ))}
</select>



           


 <td>
  <input
  type="date"
  id="startDateMitacsworkshop1"
  value={formData.Mitacsworkshop1[0].startDate}
  onChange={(e) =>
    setFormData((prevFormData) => {
      const newFormData = { ...prevFormData };
      newFormData.Mitacsworkshop1[0] = {
        ...newFormData.Mitacsworkshop1[0],
        startDate: e.target.value,
      };
      return newFormData;
    })
  }
/>
  </td>
  <td>
  <input
  type="date"
  id="FinishDateMitacsworkshop1"
  value={formData.Mitacsworkshop1[0].finishDate}
  onChange={(e) =>
    setFormData((prevFormData) => {
      const newFormData = { ...prevFormData };
      newFormData.Mitacsworkshop1[0] = {
        ...newFormData.Mitacsworkshop1[0],
       finishDate: e.target.value,
      };
      return newFormData;
    })
  }
/>
</td>

    <td>
      <select id="completed"value={formData.Mitacsworkshop1[0].completed}
     onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.Mitacsworkshop1[0] = {
            ...newFormData.Mitacsworkshop1[0],
           completed: e.target.value,
          };
          return newFormData;
        })
      }>
        <option value="">Select an option</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </td>
  </tr>

         
          <tr>
          <td>
          <select
  value={formData.Mitacsworkshop2[0].selectedOption}
  onChange={(e) => handleWorkshopsChange(1, e.target.value)}
>
  {availableOptions4.map((option, index) => (
    <option key={index} value={option}>
      {option}
    </option>
  ))}
</select>
</td>

<td>
  <input
  type="date"
  id="startDateMitacsworkshop2"
  value={formData.Mitacsworkshop2[0].startDate}
  onChange={(e) =>
    setFormData((prevFormData) => {
      const newFormData = { ...prevFormData };
      newFormData.Mitacsworkshop2[0] = {
        ...newFormData.Mitacsworkshop2[0],
        startDate: e.target.value,
      };
      return newFormData;
    })
  }
/>
  </td>

  <td>
  <input
  type="date"
  id="FinishDateMitacsworkshop2"
  value={formData.Mitacsworkshop2[0].finishDate}
  onChange={(e) =>
    setFormData((prevFormData) => {
      const newFormData = { ...prevFormData };
      newFormData.Mitacsworkshop2[0] = {
        ...newFormData.Mitacsworkshop2[0],
       finishDate: e.target.value,
      };
      return newFormData;
    })
  }
/>
</td> 

<td>
      <select id="completed"value={formData.Mitacsworkshop2[0].completed}
     onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.Mitacsworkshop2[0] = {
            ...newFormData.Mitacsworkshop2[0],
           completed: e.target.value,
          };
          return newFormData;
        })
      }>
        <option value="">Select an option</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </td></tr>




  <Course isDarkMode={isDarkMode}>C3 - Professional Development Modules</Course>

  <tr> 

  <th></th>
  <th >Start Date</th>
<th>Finish Date</th>
<th>Completed</th></tr><tr>

            <select
  value={formData.Module1[0].selectedOption}
  onChange={(e) => handleModuleChange(0, e.target.value)}
>
  {availableOptions1.map((option, index) => (
    <option key={index} value={option}>
      {option}
    </option>
  ))}
</select>



  <td>
  <input
  type="date"
  id="startDateModule1"
  value={formData.Module1[0].startDate}
  onChange={(e) =>
    setFormData((prevFormData) => {
      const newFormData = { ...prevFormData };
      newFormData.Module1[0] = {
        ...newFormData.Module1[0],
        startDate: e.target.value,
      };
      return newFormData;
    })
  }
/>
  </td>



  <td>
  <input
  type="date"
  id="FinishDateModule1"
  value={formData.Module1[0].finishDate}
  onChange={(e) =>
    setFormData((prevFormData) => {
      const newFormData = { ...prevFormData };
      newFormData.Module1[0] = {
        ...newFormData.Module1[0],
       finishDate: e.target.value,
      };
      return newFormData;
    })
  }
/>
</td>

    <td>
      <select id="completed"value={formData.Module1[0].completed}
     onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.Module1[0] = {
            ...newFormData.Module1[0],
           completed: e.target.value,
          };
          return newFormData;
        })
      }>
        <option value="">Select an option</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </td>
  </tr>

         
          <tr>
          <td>
          <select
  value={formData.Module2[0].selectedOption}
  onChange={(e) => handleModuleChange(1, e.target.value)}
>
  {availableOptions2.map((option, index) => (
    <option key={index} value={option}>
      {option}
    </option>
  ))}
</select>
</td>

<td>
  <input
  type="date"
  id="startDateModule2"
  value={formData.Module2[0].startDate}
  onChange={(e) =>
    setFormData((prevFormData) => {
      const newFormData = { ...prevFormData };
      newFormData.Module2[0] = {
        ...newFormData.Module2[0],
        startDate: e.target.value,
      };
      return newFormData;
    })
  }
/>
  </td>

  <td>
  <input
  type="date"
  id="FinishDateModule2"
  value={formData.Module2[0].finishDate}
  onChange={(e) =>
    setFormData((prevFormData) => {
      const newFormData = { ...prevFormData };
      newFormData.Module2[0] = {
        ...newFormData.Module2[0],
       finishDate: e.target.value,
      };
      return newFormData;
    })
  }
/>
</td> 

<td>
      <select id="completed"value={formData.Module2[0].completed}
     onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.Module2[0] = {
            ...newFormData.Module2[0],
           completed: e.target.value,
          };
          return newFormData;
        })
      }>
        <option value="">Select an option</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </td>
  </tr>  


{/*Course-4 */}
<Course isDarkMode={isDarkMode}>C4 - Industry Internship (Optional)</Course>
<tr>
  <th>MA trainees will typically serve a 4-month internship</th></tr>
  <tr><th> PhD trainees will complete 2 x 4-month internships
  </th></tr>

<tr>
  <th>1. Organization Name</th>

  <td><input type="text"  name="Oname"  
      value={formData.internship1 && formData.internship1[0] ? formData.internship1[0].organizationName : ""}
      onChange={(e) =>
        setFormData({
          ...formData,
          internship1: [
            {
              ...(formData.internship1 && formData.internship1[0]),
              organizationName: e.target.value,
            },
          ],
        })
      }
    /></td>
   </tr>


<tr>

<th>2. Supervisor/Host Name</th>

<td><input type="text"  name="Hname"  value={formData.internship1 && formData.internship1[0] ? formData.internship1[0].supervisorName : ""}
      onChange={(e) =>
        setFormData({
          ...formData,
          internship1: [
            {
              ...(formData.internship1 && formData.internship1[0]),
              supervisorName: e.target.value,
            },
          ],
        })
      }
    /></td> 
</tr>

{formData.degreeProgram === 'PhD' && (
  <>
<tr>
<th>3. Organization Name</th>

<td><input type="text"  name="Oname"  
    value={formData.internship2 && formData.internship2[0] ? formData.internship2[0].organizationName : ""}
    onChange={(e) =>
      setFormData({
        ...formData,
        internship2: [
          {
            ...(formData.internship2 && formData.internship2[0]),
            organizationName: e.target.value,
          },
        ],
      })
    }
  /></td>
 </tr>


<tr>

<th>4. Supervisor/Host Name</th>

<td><input type="text"  name="Hname"  value={formData.internship2 && formData.internship2[0] ? formData.internship2[0].supervisorName : ""}
    onChange={(e) =>
      setFormData({
        ...formData,
        internship2: [
          {
            ...(formData.internship2 && formData.internship2[0]),
            supervisorName: e.target.value,
          },
        ],
      })
    }
  /></td> 
</tr> 
 </>)}


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
<th>1. <input
    type="text"
    id="webinarsAndSeminars1"
    value={formData.webinarsAndSeminars1[0].title}
    placeholder="Webinar/Seminar 1 Title or Research Topic"
    size="50"
    maxLength="100"
    onChange={(e) => {
      // Handle the change and update the state accordingly
      setFormData((prevFormData) => {
        const newFormData = { ...prevFormData };
        newFormData.webinarsAndSeminars1[0].title = e.target.value;
        return newFormData;
      });
    }}
  />
</th>

<th>
<select
  id="eventType"
  name="eventType"
  value={formData.webinarsAndSeminars1[0].eventType}
  onChange={(e) =>
    setFormData((prevFormData) => {
      const newFormData = { ...prevFormData };
      newFormData.webinarsAndSeminars1[0].eventType = e.target.value;
      return newFormData;
    })
  }
>
<option value="">Event Type</option>
<option value="Industry Speaker ">Industry Speaker  </option>
<option value=" Trainee-led">Trainee-led</option>
</select>
</th>

<th>
<select id="eventLocation" name="eventLocation" 
 value={formData.webinarsAndSeminars1[0].eventLocation}
  onChange={(e) =>
    setFormData((prevFormData) => {
      const newFormData = { ...prevFormData };
      newFormData.webinarsAndSeminars1[0].eventLocation = e.target.value;
      return newFormData;
    })
}
>
<option value="">Event Location</option>
<option value="Virtual">Virtual</option>
<option value="In-person">In-person</option>
</select>
</th>

<th>
  <input
    type="date"
    id="startDate"
    value={formData.webinarsAndSeminars1[0].date}
    onChange={(e) =>
      setFormData((prevFormData) => {
        const newFormData = { ...prevFormData };
        newFormData.webinarsAndSeminars1[0].date = e.target.value;
        return newFormData;
      })
    }
  />
</th>

<th>
  <input
    type="text"
    id="location"
    value={formData.webinarsAndSeminars1[0].location}
    onChange={(e) =>
      setFormData((prevFormData) => {
        const newFormData = { ...prevFormData };
        newFormData.webinarsAndSeminars1[0].location = e.target.value;
        return newFormData;
      })
    }
  />
</th>

</tr>



<tr>
<th>2. <input
    type="text"
    id="webinarsAndSeminars1"
    value={formData.webinarsAndSeminars2[0].title}
    placeholder="Webinar/Seminar 2 Title or Research Topic"
    size="50"
    maxLength="100"
    onChange={(e) => {
      // Handle the change and update the state accordingly
      setFormData((prevFormData) => {
        const newFormData = { ...prevFormData };
        newFormData.webinarsAndSeminars2[0].title = e.target.value;
        return newFormData;
      });
    }}
  /></th>

<th>
<select
  id="eventType"
  name="eventType"
  value={formData.webinarsAndSeminars2[0].eventType}
  onChange={(e) =>
    setFormData((prevFormData) => {
      const newFormData = { ...prevFormData };
      newFormData.webinarsAndSeminars2[0].eventType = e.target.value;
      return newFormData;
    })
  }
>
<option value="">Event Type</option>
<option value="Industry Speaker ">Industry Speaker  </option>
<option value=" Trainee-led">Trainee-led</option>
</select>
</th>

<th>
<select id="eventLocation" name="eventLocation" 
 value={formData.webinarsAndSeminars2[0].eventLocation}
  onChange={(e) =>
    setFormData((prevFormData) => {
      const newFormData = { ...prevFormData };
      newFormData.webinarsAndSeminars2[0].eventLocation = e.target.value;
      return newFormData;
    })
}
>
<option value="">Event Location</option>
<option value="Virtual">Virtual</option>
<option value="In-person">In-person</option>
</select>
</th>

<th>
  <input
    type="date"
    id="startDate"
    value={formData.webinarsAndSeminars2[0].date}
    onChange={(e) =>
      setFormData((prevFormData) => {
        const newFormData = { ...prevFormData };
        newFormData.webinarsAndSeminars2[0].date = e.target.value;
        return newFormData;
      })
    }
  />
</th>

<th>
  <input
    type="text"
    id="location"
    value={formData.webinarsAndSeminars2[0].location}
    onChange={(e) =>
      setFormData((prevFormData) => {
        const newFormData = { ...prevFormData };
        newFormData.webinarsAndSeminars2[0].location = e.target.value;
        return newFormData;
      })
    }
  />
</th>
</tr>
<tr>
<th>3. <input
    type="text"
    id="webinarsAndSeminars3"
    value={formData.webinarsAndSeminars3[0].title}
    placeholder="Webinar/Seminar 3 Title or Research Topic"
    size="50"
    maxLength="100"
    
    onChange={(e) => {
      // Handle the change and update the state accordingly
      setFormData((prevFormData) => {
        const newFormData = { ...prevFormData };
        newFormData.webinarsAndSeminars3[0].title = e.target.value;
        return newFormData;
      });
    }}
  /></th>

<th>
<select
  id="eventType"
  name="eventType"
  value={formData.webinarsAndSeminars3[0].eventType}
  onChange={(e) =>
    setFormData((prevFormData) => {
      const newFormData = { ...prevFormData };
      newFormData.webinarsAndSeminars3[0].eventType = e.target.value;
      return newFormData;
    })
  }
>
<option value="">Event Type</option>
<option value="Industry Speaker ">Industry Speaker  </option>
<option value=" Trainee-led">Trainee-led</option>
</select>
</th>

<th>
<select id="eventLocation" name="eventLocation" 
 value={formData.webinarsAndSeminars3[0].eventLocation}
  onChange={(e) =>
    setFormData((prevFormData) => {
      const newFormData = { ...prevFormData };
      newFormData.webinarsAndSeminars3[0].eventLocation = e.target.value;
      return newFormData;
    })
}
>
<option value="">Event Location</option>
<option value="Virtual">Virtual</option>
<option value="In-person">In-person</option>
</select>
</th>

<th>
  <input
    type="date"
    id="startDate"
    value={formData.webinarsAndSeminars3[0].date}
    onChange={(e) =>
      setFormData((prevFormData) => {
        const newFormData = { ...prevFormData };
        newFormData.webinarsAndSeminars3[0].date = e.target.value;
        return newFormData;
      })
    }
  />
</th>

<th>
  <input
    type="text"
    id="location"
    value={formData.webinarsAndSeminars3[0].location}
    onChange={(e) =>
      setFormData((prevFormData) => {
        const newFormData = { ...prevFormData };
        newFormData.webinarsAndSeminars3[0].location = e.target.value;
        return newFormData;
      })
    }
  />
</th>
</tr>




<tr>
<th>4. <input
    type="text"
    id="webinarsAndSeminars4"
    value={formData.webinarsAndSeminars4[0].title}
    placeholder="Webinar/Seminar 4 Title or Research Topic"
    size="50"
    maxLength="100"
    onChange={(e) => {
      // Handle the change and update the state accordingly
      setFormData((prevFormData) => {
        const newFormData = { ...prevFormData };
        newFormData.webinarsAndSeminars4[0].title = e.target.value;
        return newFormData;
      });
    }}
  /></th>

<th>
<select
  id="eventType"
  name="eventType"
  value={formData.webinarsAndSeminars4[0].eventType}
  onChange={(e) =>
    setFormData((prevFormData) => {
      const newFormData = { ...prevFormData };
      newFormData.webinarsAndSeminars4[0].eventType = e.target.value;
      return newFormData;
    })
  }
>
<option value="">Event Type</option>
<option value="Industry Speaker ">Industry Speaker  </option>
<option value=" Trainee-led">Trainee-led</option>
</select>
</th>

<th>
<select id="eventLocation" name="eventLocation" 
 value={formData.webinarsAndSeminars4[0].eventLocation}
  onChange={(e) =>
    setFormData((prevFormData) => {
      const newFormData = { ...prevFormData };
      newFormData.webinarsAndSeminars4[0].eventLocation = e.target.value;
      return newFormData;
    })
}
>
<option value="">Event Location</option>
<option value="Virtual">Virtual</option>
<option value="In-person">In-person</option>
</select>
</th>

<th>
  <input
    type="date"
    id="startDate"
    value={formData.webinarsAndSeminars4[0].date}
    onChange={(e) =>
      setFormData((prevFormData) => {
        const newFormData = { ...prevFormData };
        newFormData.webinarsAndSeminars4[0].date = e.target.value;
        return newFormData;
      })
    }
  />
</th>

<th>
  <input
    type="text"
    id="location"
    value={formData.webinarsAndSeminars4[0].location}
    onChange={(e) =>
      setFormData((prevFormData) => {
        const newFormData = { ...prevFormData };
        newFormData.webinarsAndSeminars4[0].location = e.target.value;
        return newFormData;
      })
    }
  />
</th>
</tr>




<tr>
<th>5. <input
    type="text"
    id="webinarsAndSeminars5"
    value={formData.webinarsAndSeminars5[0].title}
    placeholder="Webinar/Seminar 5 Title or Research Topic"
    size="50"
    maxLength="100"
    onChange={(e) => {
      // Handle the change and update the state accordingly
      setFormData((prevFormData) => {
        const newFormData = { ...prevFormData };
        newFormData.webinarsAndSeminars5[0].title = e.target.value;
        return newFormData;
      });
    }}
  /></th>

<th>
<select
  id="eventType"
  name="eventType"
  value={formData.webinarsAndSeminars5[0].eventType}
  onChange={(e) =>
    setFormData((prevFormData) => {
      const newFormData = { ...prevFormData };
      newFormData.webinarsAndSeminars5[0].eventType = e.target.value;
      return newFormData;
    })
  }
>
<option value="">Event Type</option>
<option value="Industry Speaker ">Industry Speaker  </option>
<option value=" Trainee-led">Trainee-led</option>
</select>
</th>

<th>
<select id="eventLocation" name="eventLocation" 
 value={formData.webinarsAndSeminars5[0].eventLocation}
  onChange={(e) =>
    setFormData((prevFormData) => {
      const newFormData = { ...prevFormData };
      newFormData.webinarsAndSeminars5[0].eventLocation = e.target.value;
      return newFormData;
    })
}
>
<option value="">Event Location</option>
<option value="Virtual">Virtual</option>
<option value="In-person">In-person</option>
</select>
</th>

<th>
  <input
    type="date"
    id="startDate"
    value={formData.webinarsAndSeminars5[0].date}
    onChange={(e) =>
      setFormData((prevFormData) => {
        const newFormData = { ...prevFormData };
        newFormData.webinarsAndSeminars5[0].date = e.target.value;
        return newFormData;
      })
    }
  />
</th>

<th>
  <input
    type="text"
    id="location"
    value={formData.webinarsAndSeminars5[0].location}
    onChange={(e) =>
      setFormData((prevFormData) => {
        const newFormData = { ...prevFormData };
        newFormData.webinarsAndSeminars5[0].location = e.target.value;
        return newFormData;
      })
    }
  />
</th>
</tr>



 <Course isDarkMode={isDarkMode}>C6 - Specialization Courses </Course>
<tr>
  <th>Trainees must take 2 specialization courses</th>
  <th>Start Date</th>
<th>Finish Date</th>
<th>Completed</th>
   </tr> 


<tr>
<th> <input
      type="text"
      id="Specialization1"
      value={formData.specializationCourses1[0].title}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.specializationCourses1[0].title = e.target.value;
          return newFormData;
        })
      }
      placeholder="Specialization Course 1"
      size="50"
      maxLength="100"
    />
</th>
<th> <input
      type="date"
      id="startDateSpecialization1"
      value={formData.specializationCourses1[0].startDate}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.specializationCourses1[0].startDate = e.target.value;
          return newFormData;
        })
      }
    /></th>
<th> <input
      type="date"
      id="finishDateSpecialization1"
      value={formData.specializationCourses1[0].finishDate}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.specializationCourses1[0].finishDate = e.target.value;
          return newFormData;
        })
      }
    /></th>
<th><select
      id="completedSpecialization1"
      value={formData.specializationCourses1[0].completed}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.specializationCourses1[0].completed = e.target.value;
          return newFormData;
        })
      }
    >
        <option value="">Select an option</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select></th>
</tr>

<tr>
<th> <input
      type="text"
      id="Specialization2"
      value={formData.specializationCourses2[0].title}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.specializationCourses2[0].title = e.target.value;
          return newFormData;
        })
      }
      placeholder="Specialization Course 2"
      size="50"
      maxLength="100"
    />
</th>
<th> <input
      type="date"
      id="startDateSpecialization2"
      value={formData.specializationCourses2[0].startDate}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.specializationCourses2[0].startDate = e.target.value;
          return newFormData;
        })
      }
    /></th>
<th> <input
      type="date"
      id="finishDateSpecialization2"
      value={formData.specializationCourses2[0].finishDate}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.specializationCourses2[0].finishDate = e.target.value;
          return newFormData;
        })
      }
    /></th>
<th><select
      id="completedSpecialization2"
      value={formData.specializationCourses2[0].completed}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.specializationCourses2[0].completed = e.target.value;
          return newFormData;
        })
      }
    >
        <option value="">Select an option</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select></th>
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
<th> <input
      type="text"
      id="L&MActivity1"
      value={formData.LMActivity1[0].title}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.LMActivity1[0].title = e.target.value;
          return newFormData;
        })
      }
      placeholder="L&M Activity 1"
      size="50"
      maxLength="100"
    /></th>
    <th> <input
     type="text"
      id="descriptionLMActivity1"
      value={formData.LMActivity1[0].description}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.LMActivity1[0].description = e.target.value;
          return newFormData;
        })
      }
    /></th>
    <th> <input
      type="date"
      id="DateLMActivity1"
      value={formData.LMActivity1[0].date}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.LMActivity1[0].date = e.target.value;
          return newFormData;
        })
      }
    /></th>
  </tr> 
  


<tr>
<th> <input
      type="text"
      id="L&MActivity2"
      value={formData.LMActivity2[0].title}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.LMActivity2[0].title = e.target.value;
          return newFormData;
        })
      }
      placeholder="L&M Activity 2"
      size="50"
      maxLength="100"
    /></th>
    <th> <input
      type="text"
      id="descriptionLMActivity2"
      value={formData.LMActivity2[0].description}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.LMActivity2[0].description = e.target.value;
          return newFormData;
        })
      }
    /></th>
    <th> <input
      type="date"
      id="dateLMActivity2"
      value={formData.LMActivity2[0].date}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.LMActivity2[0].date = e.target.value;
          return newFormData;
        })
      }
    /></th>
    
  </tr> 
  <tr>
<th> <input
      type="text"
      id="L&MActivity3"
      value={formData.LMActivity3[0].title}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.LMActivity3[0].title = e.target.value;
          return newFormData;
        })
      }
      placeholder="L&M Activity 3"
      size="50"
      maxLength="100"
    /></th>
    <th> <input
      type="text"
      id="descriptionLMActivity3"
      value={formData.LMActivity3[0].description}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.LMActivity3[0].description = e.target.value;
          return newFormData;
        })
      }
    /></th>
    <th> <input
      type="date"
      id="dateLMActivity3"
      value={formData.LMActivity3[0].date}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.LMActivity3[0].date = e.target.value;
          return newFormData;
        })
      }
    /></th>
    
    
  </tr> 
  


<Course isDarkMode={isDarkMode}>Other Activity 1</Course>
<tr><th>Please mention if you have achieved any of the below milestones during your time in CREATE:</th>
<th> Quentity</th>
<th>Name Of Journal or Conference Name</th>
<th> Date Published</th>
<th>Location</th></tr>
<tr>Articles published in or accepted by a referreed journal	
 <td>
  <input
      type="number" id="quantity" min="0" max="10"
      value={formData.Articlespublishedinoracceptedbyareferreedjourna[0].quentity}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.Articlespublishedinoracceptedbyareferreedjourna[0].quentity = e.target.value;
          return newFormData;
        })
      }
      /></td>
      <td>
        <input
      type="text" id="NameOfJournalorConferenceName" 
      value={formData.Articlespublishedinoracceptedbyareferreedjourna[0].NameOfJournalorConferenceName}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.Articlespublishedinoracceptedbyareferreedjourna[0].NameOfJournalorConferenceName = e.target.value;
          return newFormData;
        })
      }
      />
</td>
<td>
        <input
      type="date" id="datePublished" 
      value={formData.Articlespublishedinoracceptedbyareferreedjourna[0].datePublished}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.Articlespublishedinoracceptedbyareferreedjourna[0].datePublished = e.target.value;
          return newFormData;
        })
      }
      />
</td>
<td>
        <input
      type="text" id="Location" 
      value={formData.Articlespublishedinoracceptedbyareferreedjourna[0].Location}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.Articlespublishedinoracceptedbyareferreedjourna[0].Location = e.target.value;
          return newFormData;
        })
      }
      />
</td>
</tr>
<tr>Articles submitted to a referreed journal	 <td>
  <input
      type="number" id="quantity" min="0" max="10"
      value={formData.Articlessubmittedtoareferreedjournal[0].quentity}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.Articlessubmittedtoareferreedjournal[0].quentity = e.target.value;
          return newFormData;
        })
      }
      /></td>
      <td>
        <input
      type="text" id="NameOfJournalorConferenceName" 
      value={formData.Articlessubmittedtoareferreedjournal[0].NameOfJournalorConferenceName}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.Articlessubmittedtoareferreedjournal[0].NameOfJournalorConferenceName = e.target.value;
          return newFormData;
        })
      }
      />
</td>
<td>
        <input
      type="date" id="datePublished" 
      value={formData.Articlessubmittedtoareferreedjournal[0].datePublished}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.Articlessubmittedtoareferreedjournal[0].datePublished = e.target.value;
          return newFormData;
        })
      }
      />
</td>
<td>
        <input
      type="text" id="Location" 
      value={formData.Articlessubmittedtoareferreedjournal[0].Location}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.Articlessubmittedtoareferreedjournal[0].Location = e.target.value;
          return newFormData;
        })
      }
      /></td></tr>
<tr>Other publications (technical reports, non-referreed articles, etc.)	 <td>
  <input
      type="number" id="quantity" min="0" max="10"
      value={formData.Otherpublicationstechnicalreports[0].quentity}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.Otherpublicationstechnicalreports[0].quentity = e.target.value;
          return newFormData;
        })
      }
      /></td>
      <td>
        <input
      type="text" id="NameOfJournalorConferenceName" 
      value={formData.Otherpublicationstechnicalreports[0].NameOfJournalorConferenceName}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.Otherpublicationstechnicalreports[0].NameOfJournalorConferenceName = e.target.value;
          return newFormData;
        })
      }
      />
</td>
<td>
        <input
      type="date" id="datePublished" 
      value={formData.Otherpublicationstechnicalreports[0].datePublished}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.Otherpublicationstechnicalreports[0].datePublished = e.target.value;
          return newFormData;
        })
      }
      />
</td>
<td>
        <input
      type="text" id="Location" 
      value={formData.Otherpublicationstechnicalreports[0].Location}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.Otherpublicationstechnicalreports[0].Location = e.target.value;
          return newFormData;
        })
      }
      /></td></tr>
<tr>Patents (filed or issued)	 <td>
  <input
      type="number" id="quantity" min="0" max="10"
      value={formData.Patents[0].quentity}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.Patents[0].quentity = e.target.value;
          return newFormData;
        })
      }
      /></td>
      <td>
        <input
      type="text" id="NameOfJournalorConferenceName" 
      value={formData.Patents[0].NameOfJournalorConferenceName}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.Patents[0].NameOfJournalorConferenceName = e.target.value;
          return newFormData;
        })
      }
      />
</td>
<td>
        <input
      type="date" id="datePublished" 
      value={formData.Patents[0].datePublished}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.Patents[0].datePublished = e.target.value;
          return newFormData;
        })
      }
      />
</td>
<td>
        <input
      type="text" id="Location" 
      value={formData.Patents[0].Location}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.Patents[0].Location = e.target.value;
          return newFormData;
        })
      }
      /></td></tr>
<tr>Conference presentations	 <td>
  <input
      type="number" id="quantity" min="0" max="10"
      value={formData.Conferencepresentations[0].quentity}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.Conferencepresentations[0].quentity = e.target.value;
          return newFormData;
        })
      }
      /></td>
      <td>
        <input
      type="text" id="NameOfJournalorConferenceName" 
      value={formData.Conferencepresentations[0].NameOfJournalorConferenceName}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.Conferencepresentations[0].NameOfJournalorConferenceName = e.target.value;
          return newFormData;
        })
      }
      />
</td>
<td>
        <input
      type="date" id="datePublished" 
      value={formData.Conferencepresentations[0].datePublished}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.Conferencepresentations[0].datePublished = e.target.value;
          return newFormData;
        })
      }
      />
</td>
<td>
        <input
      type="text" id="Location" 
      value={formData.Conferencepresentations[0].Location}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.Conferencepresentations[0].Location = e.target.value;
          return newFormData;
        })
      }
      /></td></tr>
<tr>Conference posters	 <td>
  <input
      type="number" id="quantity" min="0" max="10"
      value={formData.Conferenceposters[0].quentity}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.Conferenceposters[0].quentity = e.target.value;
          return newFormData;
        })
      }
      /></td>
      <td>
        <input
      type="text" id="NameOfJournalorConferenceName" 
      value={formData.Conferenceposters[0].NameOfJournalorConferenceName}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.Conferenceposters[0].NameOfJournalorConferenceName = e.target.value;
          return newFormData;
        })
      }
      />
</td>
<td>
        <input
      type="date" id="datePublished" 
      value={formData.Conferenceposters[0].datePublished}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.Conferenceposters[0].datePublished = e.target.value;
          return newFormData;
        })
      }
      />
</td>
<td>
        <input
      type="text" id="Location" 
      value={formData.Conferenceposters[0].Location}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.Conferenceposters[0].Location = e.target.value;
          return newFormData;
        })
      }
      /></td></tr>
<tr>Notable awards or scholarships	 <td>
  <input
      type="number" id="quantity" min="0" max="10"
      value={formData.Notableawardsorscholarships[0].quentity}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.Notableawardsorscholarships[0].quentity = e.target.value;
          return newFormData;
        })
      }
      /></td>
      <td>
        <input
      type="text" id="NameOfJournalorConferenceName" 
      value={formData.Notableawardsorscholarships[0].NameOfJournalorConferenceName}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.Notableawardsorscholarships[0].NameOfJournalorConferenceName = e.target.value;
          return newFormData;
        })
      }
      />
</td>
<td>
        <input
      type="date" id="datePublished" 
      value={formData.Notableawardsorscholarships[0].datePublished}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.Notableawardsorscholarships[0].datePublished = e.target.value;
          return newFormData;
        })
      }
      />
</td>
<td>
        <input
      type="text" id="Location" 
      value={formData.Notableawardsorscholarships[0].Location}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.Notableawardsorscholarships[0].Location = e.target.value;
          return newFormData;
        })
      }
      /></td></tr>
<tr>Creation, curation, sharing or reuse of datasets <td>
  <input
      type="number" id="quantity" min="0" max="10"
      value={formData.Creationcurationsharingorreuseofdatasets[0].quentity}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.Creationcurationsharingorreuseofdatasets[0].quentity = e.target.value;
          return newFormData;
        })
      }
      /></td>
      <td>
        <input
      type="text" id="NameOfJournalorConferenceName" 
      value={formData.Creationcurationsharingorreuseofdatasets[0].NameOfJournalorConferenceName}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.Creationcurationsharingorreuseofdatasets[0].NameOfJournalorConferenceName = e.target.value;
          return newFormData;
        })
      }
      />
</td>
<td>
        <input
      type="date" id="datePublished" 
      value={formData.Creationcurationsharingorreuseofdatasets[0].datePublished}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.Creationcurationsharingorreuseofdatasets[0].datePublished = e.target.value;
          return newFormData;
        })
      }
      />
</td>
<td>
        <input
      type="text" id="Location" 
      value={formData.Creationcurationsharingorreuseofdatasets[0].Location}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.Creationcurationsharingorreuseofdatasets[0].Location = e.target.value;
          return newFormData;
        })
      }
      /></td>	</tr>
<tr>Creation of companies or organizations that promote research or the use of research results <td>
  <input
      type="number" id="quantity" min="0" max="10"
      value={formData.Creationofcompaniesororganizationsthatpromoteresearch[0].quentity}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.Creationofcompaniesororganizationsthatpromoteresearch[0].quentity = e.target.value;
          return newFormData;
        })
      }
      /></td>
      <td>
        <input
      type="text" id="NameOfJournalorConferenceName" 
      value={formData.Creationofcompaniesororganizationsthatpromoteresearch[0].NameOfJournalorConferenceName}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.Creationofcompaniesororganizationsthatpromoteresearch[0].NameOfJournalorConferenceName = e.target.value;
          return newFormData;
        })
      }
      />
</td>
<td>
        <input
      type="date" id="datePublished" 
      value={formData.Creationofcompaniesororganizationsthatpromoteresearch[0].datePublished}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.Creationofcompaniesororganizationsthatpromoteresearch[0].datePublished = e.target.value;
          return newFormData;
        })
      }
      />
</td>
<td>
        <input
      type="text" id="Location" 
      value={formData.Creationofcompaniesororganizationsthatpromoteresearch[0].Location}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.Creationofcompaniesororganizationsthatpromoteresearch[0].Location = e.target.value;
          return newFormData;
        })
      }
      /></td></tr>
<tr>Development of tools, including software, for use by researchers or by others in the public or private domain
<td>
  <input
      type="number" id="quantity" min="0" max="10"
      value={formData.Developmentoftoolsincludingsoftware[0].quentity}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.Developmentoftoolsincludingsoftware[0].quentity = e.target.value;
          return newFormData;
        })
      }
      /></td>
      <td>
        <input
      type="text" id="NameOfJournalorConferenceName" 
      value={formData.Developmentoftoolsincludingsoftware[0].NameOfJournalorConferenceName}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.Developmentoftoolsincludingsoftware[0].NameOfJournalorConferenceName = e.target.value;
          return newFormData;
        })
      }
      />
</td>
<td>
        <input
      type="date" id="datePublished" 
      value={formData.Developmentoftoolsincludingsoftware[0].datePublished}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.Developmentoftoolsincludingsoftware[0].datePublished = e.target.value;
          return newFormData;
        })
      }
      />
</td>
<td>
        <input
      type="text" id="Location" 
      value={formData.Developmentoftoolsincludingsoftware[0].Location}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.Developmentoftoolsincludingsoftware[0].Location = e.target.value;
          return newFormData;
        })
      }
      /></td>
</tr>






{/* Other Activity 2 */}
<Course isDarkMode={isDarkMode}>Other Activity 2</Course>
<tr>
  <th>Ex: Publications, Awards</th>
  <th>Details</th>
</tr>
<tr>
  <td>
    <input
      type="text"
      id="Publication"
      value={formData.OtherActivity2.title}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.OtherActivity2.title = e.target.value;
          return newFormData;
        })
      }
      placeholder="Publication"
    />
  </td>
  <td>
    <input
      type="text"
      id="DetailsActivity2"
      value={formData.OtherActivity2.details}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.OtherActivity2.details = e.target.value;
          return newFormData;
        })
      }
      placeholder="Details"
    />
  </td>
</tr>

{/* Other Activity 3 */}
<Course isDarkMode={isDarkMode}>Other Activity 3</Course>
<tr>
  <th>Ex: Other Stipends or Scholarships</th>
</tr>
<tr>
  <th>If the trainee has received other stipends or scholarships outside of CREATE, note details here</th>
  <td>
    <input
      type="text"
      id="DetailsActivity3"
      value={formData.OtherActivity3.details}
      onChange={(e) =>
        setFormData((prevFormData) => {
          const newFormData = { ...prevFormData };
          newFormData.OtherActivity3.details = e.target.value;
          return newFormData;
        })
      }
      placeholder="Details"
    />
  </td>
</tr>


  </table>


  <Button onClick={handleUpdateForm}>Submit</Button>

  
</SmallDiv2>
</Div2>
        </form>
      
      </MiniContainer>
        )
                }
    </Profile>
  );
}
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
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
`;


const MiniContainer = styled.div`
  margin-left: 20px;
  margin-top: 40px;
  border-radius: 10px;
  /* border:${(props) => (props.isDarkMode ? "2px solid 	#404040": "2px solid #eef0f2")}; */

  /* background-color: ${(props) => (props.isDarkMode ? "#404040" : "white")}; */
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
  padding-top: 0px;
  /* width: 270px; */
  /* height: 400px; */
  /* border:2px solid orange; */
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
/* border-bottom:2px solid #f4f0ec; */
padding-left:50px;
border:${(props) => (props.isDarkMode ? "2px solid 	#404040": "2px solid #eef0f2")};


@media (max-width: 1000px) {

  max-width:358.4px;
}
`
const SmallDiv=styled.div`
/* border:${(props) => (props.isDarkMode ? "": "2px solid #eef0f2")}; */

/* background-color: ${(props) => (props.isDarkMode ? "#282828" : "#ffffff")}; */
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
select{
    background-color: ${(props) => (props.isDarkMode ? "	#404040" : "white")};
}
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

const RedText = styled.span`
  color: #bb5a7d;
`;
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
const Select=styled.select`
border:1px solid red;
`

const Option=styled.option`
color:red;`


const Button = styled.button`
  background-color: ${(props) => (props.isDarkMode ? "#BB5A7D" : "#BB5A7D")};
  color: ${(props) => (props.isDarkMode ? "black" : "white")};
  font-weight:500;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  padding: 12px 12px;
  font-size: 19px;
  border: none;
  border-radius: 8px;
  width: 120px;
  cursor: pointer;
text-align:center;
align-items:center;
  /* border :5px solid yellow; */
  text-decoration: none;
`