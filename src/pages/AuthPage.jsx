import React, { useState } from 'react';
import './auth.css';
import Login from './Login';
import Signup from './signUp';
import BackgroundImage from "./assets/Illustration1.jpg"

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");

  const switchToSignup = () => setIsLogin(false);
  const switchToLogin = () => setIsLogin(true);

  return (
    <div className="auth-page">
     
      <div className="auth-left">
        <img src={BackgroundImage} alt="Logo" />
      </div>
      
  
      <div className="auth-right">
        {isLogin ? (
          <Login switchToSignup={switchToSignup} />
        ) : (
          <Signup switchToLogin={switchToLogin} />
        )}
      </div>
    </div>
  );
}

export default AuthPage;
