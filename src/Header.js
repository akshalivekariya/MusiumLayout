function Header() {
    return(
      <>
            <div className="fheader">
                <div className="fhader1">
                <div className="container">
                    <div className="fhader">
                        <div className="fcontent">
                            <p>Look at the Calender for the Upcoming Exhibitions.</p>
                        </div>
                        <div className="scontent">
                            <div><p>444-546-8765</p></div>
                            <div><p className="time">Mon - Fri: 8AM - 5PM</p></div>
                        </div>
                        </div>
                        </div>
                    </div>
                    <div className="container">                    
                    <div className="flex main_header">
                        <div className="main_logo a img">
                        <a href="#"><img src={require('./images/logo.png')}></img></a>
                        </div>
                        <div className="menu">
                        <ul class="main_menu">
                         <li><a href="#"><i class="fa-solid fa-house"></i> Home</a></li>
                       <li><a href="#">Pges</a></li>
                         <li>
                             <a href="#">Blog <i class="fa-solid fa-chevron-down side_icon"></i></a>
                            
                         </li>
                         <li><a href="#">About</a></li>
                         <li>
                             <a href="#">Work</a>
                            
                        </li>
                         <li><a href="#">Contact</a></li>
                     </ul>
                        </div>
                    </div>
                </div>
                </div>

           
      </>  
    )
}
export default Header;