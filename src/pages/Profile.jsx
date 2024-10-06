import React from "react";
import './profile.css'
import profile from './assets/pp.jpg';
import cover from './assets/cover2.jpg';
import edit from './assets/edit.png';

export default function Profile(){
    return(
        <div className="container-parent">

            
            <div className="container-profile">

            <div className="cover">
                <img src={cover}></img>
                

            </div>
            <div className="stats">

            </div>
                <div className="profile-picture">
                    <img src={profile}></img>

                </div>
                <div className="profile-name">
                     MD Mudasssir
                    <img src={edit}></img>
                    </div>
                <div className="about">
                  
                    
                    <div className="profile-bio">
                        <p >I am a student of BTECH CSE!</p>
                        <img src={edit}></img>
                    </div>
                    
                    

                </div>
            </div>

        </div>
    )
}