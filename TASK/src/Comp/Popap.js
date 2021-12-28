import React, { useState } from 'react'
import Filter from './Filter'

function Popap({setSearch}){
    const [filter, setFilter] = useState(false)

 
    let today = new Date().toISOString().slice(0, 10)
  
    
   
        return(
            <div className="search_module" onClick={()=>{setSearch(false)}}>
                 
                
                <div className="search_body" onClick={(event)=>{event.stopPropagation()}}>
                    <p>Modal window</p>
                    <div className="search">
                
                        <label className='search_input'>
                            <p>Country:</p>
                        <input type="text"  
                             name="text" >
                        </input>
                        {filter == true? <button className="search_btn" onClick={()=>{setFilter(false)}}>&#710;</button>
               
               :<button className="search_btn" onClick={()=>{setFilter(true)}}>&#711;</button>}
                        {filter == true? <Filter setFilter={setFilter}/> :''}</label>
                    
                        <label className='search_input'>
                            <p>First name<sup>*</sup>:</p>
                            <input type="text"  
                            name="text"/></label>
                    
                        <label className='search_input'>
                            <p>Date of Birth:</p>
                            <input type="date"   id="start" name="trip-start" value={today} min="2000-01-01" max="2022-12-31" 
                         /></label>
                    
                        <label className='search_input'>
                            <p>Last name<sup>*</sup>:</p>
                            <input type="text"   
                        name="text" /></label>
                    
                    </div>
                    <div className="search_wrap_btn">
                        <button className="search_input_btn" name="serch_value" 
                        onClick={()=>{setSearch(false)}}>Cancel</button>

                        <button className="search_input_btn" name="serch_value" 
                        onClick={()=>{setSearch(false)}}>Save and close</button>
                    </div>
                    </div>
            </div>
        )
}
export default Popap