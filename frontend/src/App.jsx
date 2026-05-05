import { useState } from "react";
import axios from "axios";

const API = axios.create({
  baseURL: "/api"
});

function App() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const login = async ()=>{
    const res = await API.post("/auth/login",{email,password});
    localStorage.setItem("token", res.data.token);
    alert("Logged in");
  };

  return (
    <div style={{padding:"20px"}}>
      <h1>Team Task Manager</h1>

      <input placeholder="Email" onChange={e=>setEmail(e.target.value)} />
      <br/>
      <input placeholder="Password" onChange={e=>setPassword(e.target.value)} />
      <br/>

      <button onClick={login}>Login</button>
    </div>
  );
}

export default App;
