import React, { useState } from 'react';
import './LoginAdmin.css';
import axios from "axios"
import Cookies from "js-cookies"

const LoginAdmin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process login logic here
    let req={
      url:"http://localhost:3001/AdminLogin",
      method:"POST",
      data:{username,password}
    }
    axios(req).then((res)=>{
      console.log(res.data.token)
      Cookies.set("token",res.data.token,{expires:2});
    }).catch((err)=>{
        console.log("errorr")
    })
    console.log('Admin login submitted:', { username, password });
  };

  return (
    <div className="admin-login-container">
      <form className="admin-login-form" onSubmit={handleSubmit}>
        <h2>Admin Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginAdmin;
