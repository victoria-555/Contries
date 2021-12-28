import React from 'react'
import {NavLink} from 'react-router-dom'


function Header(){

    return(
        <header className="header">
            <nav className="nav-wrapper">
      
              <ul className='nav-ul'>
                <li><NavLink to ="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/price">Price</NavLink></li>
                <li><NavLink to="/contacts">Contacts</NavLink></li>
              </ul>

              <div>  
                  <button className='nav-button' value='userName'>
                    <span>userName </span> 
                     <span className="icon-excel"></span>
                  </button> 
              </div>
            </nav>

            <div className='br'></div>

            <div className='nav-logo' >
              <div className='logo' data-title="Pepsi_logo"></div>
              <p>Pepsi</p>
            </div>
        
      </header>
    )
}

export default Header