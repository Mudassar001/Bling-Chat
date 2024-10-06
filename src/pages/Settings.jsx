import './ssettings.css';


function Settings(){
    return(
        <div className='container-parent1'>
          
            <div className='setting'>
             
            <div className='container'>
            <div className='searchBox'>
            <form class="searchForm">
                <input className="search-input" type="search" placeholder="Search Setting...." aria-label="Search"/>
                <button className="search-btn" type="submit">Search</button>
            </form>
            </div>
            <div className='panel1'>
                <a href='' className='general'>
                    General
                </a>
                <div className='element'>
                    Language &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
                    <span className='eng'>English</span>
                </div>
                <div className='element'>
                    Privacy
                </div>
                <div className='element'>
                    Chat
                </div>
                <div className='element'>
                   Backup
                </div>
                <div className='element'>
                    Notification
                </div>
            </div>

            </div>
            
        </div>
        </div>
        
    )
}

export default Settings;