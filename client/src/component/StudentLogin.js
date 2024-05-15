import React, { useContext, useState,useRef } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { DarkModeContext } from "./DarkModeContext";
import ReCAPTCHA from "react-google-recaptcha";

function StudentLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);
  const [selectedRole, setSelectedRole] = useState("student"); // Default role is student

  const navigate = useNavigate();
  const { isDarkMode } = useContext(DarkModeContext);
  const recaptchaRef = useRef();

  const adminUsernames = ["Dr. Emad Shihab", "Lori Akiyama"];

  const handleLogin = async () => {
    try {
      // Check if the entered username is in the adminUsernames array
      const isAdmin = adminUsernames.includes(username);
      // const { formId } = useParams();

      if (isAdmin) {
        // If the username is in the adminUsernames array, treat as admin login
        const response = await fetch("/api/admins/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
          const data = await response.json();
          localStorage.setItem("token", data.data.token);
          navigate(`/adminlogin/${data.data.adminId}`);
        } else {
          throw new Error("Username or password is incorrect.");
        }
      } else {
        // If not an admin, treat as student login
        const response = await fetch("/api/students/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
          const data = await response.json();
          localStorage.setItem("token", data.data.token);
          navigate(`/login/${data.data.studentId}`);
        } else {
          throw new Error("Username or password is incorrect.");
        }
      }
    } catch (error) {
      console.error("Login error:", error.message);
      alert("An error occurred during login. Please try again.");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isRecaptchaVerified) {
      alert("Please complete the reCAPTCHA");
      return;
    }

    handleLogin();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Main>
      <Div>
        <Label isDarkMode={isDarkMode}>
          Username
          <Input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </Label>
      </Div>
      <Div>
        <Label isDarkMode={isDarkMode}>
          Password
          <Input
            style={{ marginLeft: "10px" }}
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Label>
      </Div>
      <Div2 >
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey="6LfpDhEpAAAAAPHh5nWOC-NnTIj_dYZ1oRd2Gr2u"
          onChange={() => setIsRecaptchaVerified(true)}
        />
      </Div2>
      <Button isDarkMode={isDarkMode} type="submit" disabled={!isRecaptchaVerified}>
        Sign In
      </Button>
      </Main>
    </Form>
  );
}

export default StudentLogin;
const Form = styled.form`
  padding: 200px;
  
  @media screen and (min-width: 1700px) {
    /* align-items: center; */
    margin-left: calc(30% - 150px); 
    /* margin-bottom:calc(13% - 150px); */

  }
 

`;
const Label = styled.label`
  width: 50%;
  color: ${(props) => (props.isDarkMode ? "#fff" : "#212529")};
  &:hover {
    color: #db7093;
  }
`;
const Main=styled.div` 
/* max-width:1900px;
width:100%; */
/* width: 1900px; */
/* border:2px solid red; */
margin-top:-40px;
/* margin:0px 16px ; */
color: ${(props) => (props.isDarkMode ? "white" : "#484848")}; 
 @media screen and (max-width: 900px) {
  margin-left:-450px;
  /* width: 1700px; */
/* padding-left:20px; */
  margin-top:-20px;
  /* margin-right:0px;
  padding-right:-500px; */

/* display:flex;
flex-direction:row; */

} 


`
const Input = styled.input`
  height: 20px;
width:290px;
  border: 2px solid #1e3d58;
  margin-top: 5px;
  margin-left: 5px;


`;
const Button = styled.button`
  width: 150px;
  height: 40px;
  font-size: 18px;
  cursor: pointer;
  text-align: center;
  padding: 5px;
  margin-left: 420px;
  border-radius: 4px;
  background-color: ${(props) => (props.isDarkMode ? "#bb5a7d" : "#bb5a7d")};
  color: ${(props) => (props.isDarkMode ? "black" : "white")};
  @media screen and (max-width: 900px) {
  /* margin-left:-5px; */
  align-items:center;
}

`;
const Div = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  margin-left: 280px;
  /* width:100%; */
/* border:2px solid green; */
`;
const Div2 = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  margin-left: 350px;
  /* width:100%; */
/* border:2px solid green; */
@media screen and (max-width: 900px) {
  margin-left:290px;


} 
`;
