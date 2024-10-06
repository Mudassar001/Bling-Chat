import React from 'react';
import { useNavigate } from 'react-router-dom';

function SignInPage() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Perform sign-in logic here (e.g., authentication, form validation)

    // Navigate to the main chat page upon successful sign-in
    navigate('/chat');
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
}

export default SignInPage;
