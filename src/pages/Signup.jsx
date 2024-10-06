// src/components/Login.js
import React from 'react';
import { Await, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { apiClient} from '../lib/api-client';
import { SIGNUP_ROUTE } from '../utils/constants';
import { useAppStore } from '../store';

const Signup = ({ switchToLogin }) => {
    const navigate = useNavigate();
    const { setUserInfo} = useAppStore();
    const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");
  const [name,setName]=useState("");

  const validateSignUp =(e)=> {
    
     // Prevent default form submission behavior
    e.preventDefault();

    if(!name.length){
      //console.log(email.length);
      alert("Name is required!");
      return false;
    }
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
    if(password !== confirmPassword){
      //console.log(email.length);
      alert("Password and Confirm-Password must be same!");
      return false;
    }
    return true;
  }
  
   const  handleSignUp = async(e) => {
    // Perform sign-in logic here (e.g., authentication, form validation)
    try{
      let ans=validateSignUp(e);
      console.log(ans);
      if(ans){
        
        
        const response = await apiClient.post(SIGNUP_ROUTE, {email, password}, {withCredentials: true});
        console.log({response});
        if(response.status === 201){
          setUserInfo(response.data.user);
          alert("Welcome to Bling!");
          navigate('/chat');
        }
        else{
          alert("Email already linked with another account!")
        }
    } 

    }catch(error){
      alert(error.response?.data || "An error occurred.");
    
      
        
      

      // Navigate to the main chat page upon successful SignUp!
      
    }
    
    
    
  };
  return (
    <div className="auth-form-signup">
     <div className='texttt'>
                <h1 className='signIn'>Sign Up</h1>
                <p className='community'>Join the Community</p>
                </div>
      <div className='form'>

      <form >
            <input 
                className='inpstyle'  
                name="username" 
                type="text" 
                placeholder="Enter your name" 
                id ="username"
                value={name}
                onChange={(e)=> setName(e.target.value)}
                style={{ fontSize: '16px', color: 'white', fontFamily: 'serif' }}
                >
                
                
            </input>
            <br />
            <input 
                className='inpstyle' 
                name="password" 
                type="text"   
                id="email" 
                placeholder="Enter your email"
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                style={{ fontSize: '16px', color: 'white', fontFamily: 'serif' }}
                >

            </input>
            <br />
            <input 
                className='inpstyle' 
                name="password" 
                type="password"  
                id="password" 
                placeholder="Create your password"
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                style={{ fontSize: '16px', color: 'white', fontFamily: 'serif' }}
                >

            </input>
            <br />
            <input 
                className='inpstyle' 
                name="password" 
                type="password"  
                id="confirmPassword" 
                placeholder="Confirm password"
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)}
                style={{ fontSize: '16px', color: 'white', fontFamily: 'serif' }}
                >

            </input>
            <br />
        <button className='btn' type="submit" onClick={handleSignUp}>Create new Account</button>
      </form>
      <div className='signup' onClick={switchToLogin}>Already have an account?</div>
      
      </div>
      
    </div>
  );
};

export default Signup;
