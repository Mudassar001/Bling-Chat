import './dashboard.css';
import Navbar from './Navbar';// The left navbar component
import ChatPage from './CompChat';
import React, { useState } from 'react';
import Profile from './Profile'; // Component to display for "Profile"
import Settings from './Settings'; // Component to display for "Settings"


const DashBoard = () => {
    const [activeComponent, setActiveComponent] = useState('Dashboard');
  
    // Function to render components based on the state
    const renderComponent = () => {
      switch (activeComponent) {
        case 'ChatPage':
          return <ChatPage />;
        case 'Profile':
          return <Profile />;
        case 'Settings':
          return <Settings />;
        default:
          return <ChatPage />;
      }
    };
    return (
        <div className='frame-parent'>
            <div className='navbar'>
                <Navbar setActiveComponent={setActiveComponent}/>
               
            </div>
            <div className='component-main'>
                {renderComponent()}
             
                
            </div>

        </div>
    )
}

export default DashBoard;