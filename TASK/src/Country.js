import React from 'react'


function Country({id,image,country,title,description,gender,A,B,text,link,handleShow}){
    

     
    return(
        <>
      
        <div className="catalog_caption">

            <div className="catalog_item_img" ><img src={image} /></div>   
            <div className="catalog_caption_country">{country}</div>
        </div>
        
            <div className="catalog_caption_title"> {title}</div>
            <div className="catalog_caption_description">{description}</div>
            <div className="catalog_caption_gender">{gender}</div>
            <div className="catalog_caption_priceA">{A} </div>
            <div className="catalog_caption_priceB">{B} </div>
            <div className="catalog_caption_text">{text} </div>
            <div className="catalog_caption_btn" data-id={id} 
            onClick={(event)=>{handleShow(event)}}><a>{link}</a></div>
           
      
    </>)
}

export default Country