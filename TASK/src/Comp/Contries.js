import React, { Fragment, useContext, useEffect,useState } from 'react'
import Context from './Context'
import Country from '../Country'



function Contries(){
    const {contries,handleShow} = useContext(Context);
   
    return(
    
        <Fragment> 
            {contries.map((contry, index)=>{    
            return(
                <li className="catalog_item" key={index+new Date().getMilliseconds()}>
                    <Country
                        id={contry.id}
                        image ={contry.image}
                        country={contry.country}
                        title ={contry.title}
                        description ={contry.description}
                        gender={contry.gender}
                        A={contry.A}
                        B={contry.B}
                        text = {contry.text}
                        link= {contry.link}
                        handleShow={handleShow} 
                    />
                </li>)
             })}
        </Fragment>    
    )
    
}
export default Contries