import './chat.css';
import profile from './assets/pp.jpg';
import vc from './assets/vc.png';
import vdc from './assets/vdc.png';
import mic from './assets/mic.png';
export default function ChatPage(){
    return(
        <div className="container-parent">
            <div className="contact-list">
            <div class="search-box">
                <input type="text" id="search-input" placeholder="Search..."/>
                
            </div>
            <div className='list'>
                Chats
            </div>
            
            </div>
            <div className="chat-area">
                <div className='header'>
                    <div className='profile-pic'><img  className='img' src={profile} alt='pic' ></img></div>
                    
                    <div className='name-area'>
                    <span className='name'>Mudassar</span><br/>
                    <span className='online-status'>Online</span>
                    </div>
                    <div className='calling'>
                        <a href='#' className='vc'><img src={vc} alt='vc'></img></a>
                        <a href='#' className='vc' id='vdc'><img src={vdc} alt='vdc'></img></a>

                    </div>
                </div>
                <div className='input-area'>
                    <input className='text' placeholder='     Type your message here....'></input>
                    <img className='mic' src={mic}></img>
            
                </div>

            </div>
        </div>

    )
}