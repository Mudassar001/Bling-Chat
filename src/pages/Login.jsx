// src/components/Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { apiClient } from '../lib/api-client';
import { LOGIN_ROUTE } from '../utils/constants';
import { useAppStore } from '../store';

const Login = ({ switchToSignup }) => {
    const navigate = useNavigate();
    const { setUserInfo} = useAppStore();
    const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const validateLogin =(e)=> {
    
    // Prevent default form submission behavior
   e.preventDefault();

   
   if(!email.length){
     //console.log(email.length);
     alert("Email is required!");
     return false;
   }
   if(!password.length){
     //console.log(password.length);
     alert("Password is required!");
     return false;
   }
   
   return true;
 }
  
  const  handleSignIn = async(e) => {
    // Perform sign-in logic here (e.g., authentication, form validation)

    // Navigate to the main chat page upon successful sign-in
    try{
      if(validateLogin(e)){
        const response= await apiClient.post(LOGIN_ROUTE, {email, password}, {withCredentials: true});
        const {data} = response;
        if(response.data.user.id){
          setUserInfo(response.data.user);
          alert("Login successful!");
          navigate('/chat');
        }
        else{
          alert("Incorrect Email or Password");
        }
  
      }
    } catch(error){
      alert(error.response?.data || "An error occurred.");
    }
    
  };
  return (
    <div className="auth-form">
     <div className='texttt'>
                <h1 className='signIn'>Sign In</h1>
                <p className='community'>Join the Community</p>
                </div>
      <div className='form'>

      <form >
            <input className='inpstyle'  
                name="username"   
                type="text" 
                placeholder="Enter your username" 
                id ="username" 
                value={email} 
                style={{ fontSize: '16px', color: 'white', fontFamily: 'serif' }}
                onChange={(e) => setEmail(e.target.value)}>

            </input>
            <br />
            <input 
                className='inpstyle'  
                name="password" 
                type="password"  
                id="password" 
                placeholder="Enter your password" 
                value={password} 
                style={{ fontSize: '16px', color: 'white', fontFamily: 'serif' }}
                onChange={(e) =>setPassword(e.target.value)}>

            </input>
            <br /><br/>
        <button className='btn' type="submit" onClick={handleSignIn}>Login</button>
      </form>
      <div className='signup' onClick={switchToSignup}>Create new account</div>
      
      </div>
      
    </div>
  );
};

export default Login;
