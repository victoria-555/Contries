import React from 'react'
import { Fragment } from 'react'
import {NavLink} from 'react-router-dom'


function Navigation(){
  
    return(
    <Fragment>  
        <nav className="nav-wrapper nav-small">
      <ul className='nav-ul'>
        <li><NavLink to="/contacts/info">Info</NavLink></li>
        <li><NavLink to="/contacts/images">Images</NavLink></li>
        <li><NavLink to="/contacts/faq">Faq</NavLink></li> 
      </ul>
    </nav>     
    </Fragment>
    )

}

export default Navigation