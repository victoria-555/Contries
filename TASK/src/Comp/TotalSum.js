import React from 'react'



function TotalSum({contries}){
  let sum1 = 0;
  let sum2 = 0;
  function sum( obj ) {
    return Object.keys( obj )
                  .reduce( function( sum, key ){
                    return sum + parseFloat( obj[key] );
                  }, 0 );
  }
  contries.forEach((_) => {   
    sum1 += _.A;
    sum2 += _.B;
  })
  return(
   
    <>
        <div > </div>
        <div ><span>&#8721; </span><span>Total:</span> </div>
        <div >{sum1} </div>
        <div >{sum2} </div>
        <div >{sum1+sum2} </div>
  
    </>
  )
     
    
} 
export default TotalSum