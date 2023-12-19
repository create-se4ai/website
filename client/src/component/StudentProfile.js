import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { DarkModeContext } from "./DarkModeContext";
//import  icons


const StudentProfile = () => {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedDegree, setSelectedDegree] = useState("");
  const [selectedSupervisor, setSelectedSupervisor] = useState("");
  const [selectedFinish, setSelectedFinish] = useState('');

    const { isDarkMode } = useContext(DarkModeContext);







  const { studentId } = useParams();
  console.log("studentId",studentId)
  useEffect(() => {
    // Fetch the Student information from the backend


    // Fetch the Student information from the backend
    fetch(`/api/students/${studentId}`)
          .then((response) => response.json())
      .then((data) => {
        console.log("data.data", data.data);
        if (data.data) {
          setStudent(data.data);
          setLoading(false);
        } else if (data.message === "Student not found") {
          setError("Student not found");
          setLoading(false);
        } else {
          setError("Failed to fetch student's information");
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to fetch student's information");
        setLoading(false);
      });

  }, [studentId]);



  const handleDegreeChange = (event) => {
    setSelectedDegree(event.target.value);
  };

  const handleSupervisorChange = (event) => {
    setSelectedSupervisor(event.target.value);
  };


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Handler function for finish change
  const handleFinishChange = (event) => {
    setSelectedFinish(event.target.value);
  };

  
//   const imageData = `${student.img}`; // Assuming student.img is the URL of the image

//   console.log("imageData",imageData)
  return (
    <Profile>
      <Header>NSERC CREATE SE4AI Activity Tracker</Header>
      {student && (
        <MiniContainer  isDarkMode={isDarkMode}>
          {/* <Img src={student.ImageBase64} alt={student.name} /> */}
          {/* <Name>{student.name}</Name> */}
          {/* <Job>{admin.Job}</Job> */}
          {/* <University>{student.University}</University> */}
          
          <Div >
<SmallDiv isDarkMode={isDarkMode}>
{/* <CardImage>
<Image src={`data:image/jpeg;base64,${student.ImageBase64}`} // Update the MIME type if needed
 />

              </CardImage> */}
              <PersonalInformation>
    <CardBody><h4>TRAINEE NAME :{student.name}</h4>        <h4>DEGREE PROGRAM AND YEAR:
       <select
                  value={selectedDegree}
                                  onChange={handleDegreeChange}
 // Use the state handler for dropdown change
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
          <RedText>T</RedText>raining Component
        </Subtitle>
       
     <table>
      <th>
      <Course>
  C1 - Engineering AI-based Software Systems</Course></th>
  <tr> SOEN 691 
    <td>Required Course</td>
    <td>Finish</td>
  <tr>
    <select
      value={selectedFinish}
      onChange={handleFinishChange}
    >
      <option value="">Select an option</option>
      <option value="YES">Yes</option>
      <option value="NO">No</option>
    </select>
  </tr>
  </tr>
<td>
  
</td>



<Course>C2 - Social Aspects for AI-based Software Systems</Course>
<Course>C3 - Professional Development Modules</Course>
<Course>C4 - Industrial Embedding</Course>
<Course>C5 -  Industry webinar & seminar</Course>
<Course>C6 -  Professional development modules</Course>
<Course>C7 - Leadership and mentorship training</Course>

</table>
 
    
</SmallDiv2>
</Div2>
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

`;
const Group=styled.div`display :flex; 
/* flex-wrap:wrap; */
flex-direction :row;`
const Header = styled.div`
  padding-left: 3px;
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
  tr{
  /* border:2px solid orange; */
  font-weight:500;

}
tr:hover {background-color:#bb5a7d}

th{
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
textarea{
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
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
border:2px solid red ; 
margin-bottom:10px;
font-weight:700;
/* width:100%; */
&:hover{
  color: #bb5a7d;
cursor:pointer;
}
div{
  display:flex; 
  flex-direction:row;
}

`
const Table=styled.table`  
border-collapse: collapse;
border:2px solid blue;
/* border-collapse: collapse; */
  width: 100%;

th, td {
text-align: left;
padding: 8px;
}

`
const Details=styled.div`
font-weight:700; 
margin-top :20px;
margin-right:20px;`
const Dates=styled.div``
const Input=styled.input`
margin-top:20px;
width: 600px;
height: 100px;
border-radius:5px;
border: 1px solid #ccc;
background-color: white;
&:disabled {
   background-color: gray;
}

/* padding: 5px; */
font-Size: 16px;`
const Activity=styled.div`
display:flex; 
flex-direction:row;`
const Label=styled.label`display:flex; 
flex-direction:column;
font-weight:500; 
font-size:15px;  
color:black;
max-width:600px;`


const Details2=styled.div`
font-weight:700; 
/* margin-top :20px; */
margin-right:20px;
display :flex;

 
flex-direction:column;
label{
}
/* In your CSS file or style block */
input{
  display: flex;
  align-items: center;
  width: 100%; /* Adjust the width as needed to make labels uniform */
  margin-bottom: 5px; /* Add margin to separate each checkbox and label */
}
`

