
import profile from './assets/pp.jpg';
import home from './assets/home.png';
import notification from './assets/notification.png';
import settings from './assets/settings.png';
import logout from './assets/logout.png';
import { useNavigate } from 'react-router-dom';
import './navbar.css'

import React , {useState} from 'react';



const Navbar = ({ setActiveComponent }) => {

  const [activeButton, setActiveButton] = useState('Dashboard');
  const navigate= useNavigate();
  const LogOut =()=>{
    navigate('/');
  }

   // Function to handle button clicks
   const handleButtonClick = (component) => {
    setActiveButton(component);  // Set the active button
    setActiveComponent(component);  // Set the component to render
  };


  return (
    <div style={{width: '100%'}}>
      <ul style={{ listStyleType: 'none', padding: 0 }}  className='nav-links'>
        
       {/* Profile Button (Image) */}
       <li style={{ marginBottom: '20px', borderRadius: '50%' }}  className='profile'>
          <br/>
          <img
            src={profile}
            alt="Profile"
            style={{ width: '100%', cursor: 'pointer' }}
            onClick={() => handleButtonClick('Profile')}
           
            
            
          />
        </li><br/><br/><br/><br/>
       
        {/* Dashboard Button (Image) */}
        <li style={{ marginBottom: '20px' }} className={`sidebar-icon ${activeButton === 'Dashboard' ? 'active' : ''}`} >
          <img
            src={home}
            alt="Dashboard"
            style={{ width: '100%', cursor: 'pointer'  }}
            onClick={() => handleButtonClick('Dashboard')}
            
          />
        </li><br/>

        {/* Notification Button (Image) */}
        <li style={{ marginBottom: '20px' }} className={`sidebar-icon ${activeButton === 'Dashboard' ? 'active' : ''}`}>
          <img
            src={notification}
            alt="Dashboard"
            style={{ width: '100%', cursor: 'pointer'  }}
            onClick={() => handleButtonClick('Dashboard')}
            
          />
        </li><br/>
        
        
        {/* Settings Button (Image) */}
        <li style={{ marginBottom: '20px' }} className={`sidebar-icon ${activeButton === 'Settings' ? 'active' : ''}`}>
          <img
            src={settings}
            alt="Settings"
            style={{ width: '100%', cursor: 'pointer' }}
            onClick={() => handleButtonClick('Settings')}
            
          />
        </li><br/><br/><br/><br/><br/><br/><br/><br/>
        <li style={{ marginBottom: '20px' }}>
          <img
            src={logout}
            alt="Logout"
            style={{ width: '100%', cursor: 'pointer' }}
            onClick={LogOut}
            className='logout'

          />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;