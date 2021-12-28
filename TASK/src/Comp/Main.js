import React, { Fragment} from 'react'
import Catalog from './Catalog'
import {Route} from 'react-router-dom'
import Navigation from './Navigation'




function Main(){
  return(
  <Fragment> 
    <div>
      <Route path="/contacts" exact component={Navigation} />  
      <Route path="/contacts/info"  exact component={Navigation} />
      <Route path="/contacts/images"  exact component={Navigation} /> 
      <Route path="/contacts/faq"  exact component={Navigation} />       
    </div> 
    
    <main className="main"> 
      <Route path="/contacts/images"  exact component={Catalog} />    
    </main>
  </Fragment >
  )

}

export default Main