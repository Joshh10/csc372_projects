import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css';


function LoginPage() {

    const[user, setUser] = useState("");
    const[pass, setPass] = useState("");
    const[error, setError] = useState("");
    const[msg, setMsg] = useState("");

    const navigate = useNavigate();

    const handleInputChange = (e, type) => {
      switch(type){
        case "user":
          setError("");
          setUser(e.target.value);
          if(e.target.value === ""){
            setError("Username cannot be blank!");
          }
          break;

          case "pass":
          setError("");
          setPass(e.target.value);
          if(e.target.value === ""){
            setError("Password cannot be blank!");
          }
          break;
        default:
      }
    }

    function loginSubmit(){
        if(user !== "" & pass !== ""){
          var url = "https://joshualawson.rhody.dev/login.php";
          var headers = {
            "Accept": "application/json",
            "Content-type": "application/json"
          };
          var Data = {
            user: user,
            pass: pass
          };
          fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(Data)

          }).then((response) => response.json())
          .then((response) => {
            setMsg(response[0].result)
            if (response[0].result === "Login successful!") {
              navigate("/dash", { state: { user: user } });
            }
          }).catch((err) => {
            setError(err);
            console.log(err);
          })
        }
        else{
          setError("All fields are required!")
        }
    }
    return (
      <div className="form">
        <label>Username</label>
        <input type="text" value={user} onChange={(e) => handleInputChange(e, "user")} />
        <label>Password</label>
        <input type="password" value={pass} onChange={(e) => handleInputChange(e, "pass")}/>
        <button onClick={loginSubmit}>Login</button>
        <p>
          {
            error !== "" ?
            <span className="error">{error}</span> :
            <span className="success">{msg}</span> 

          }
        </p>
      </div>
    );
  }
  
  
export default LoginPage;