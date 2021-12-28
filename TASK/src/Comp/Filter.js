import React, { useContext,useEffect } from 'react'
import UnionContext from './UnionContext'


function Filter({setFilter}){
    const {radio, setRadio} =useContext (UnionContext)
 
    console.log(radio)

    /*useEffect(()=>{
        if(radio =='GBR'){
            contries.sort((a)=>{
            return a.country
          })
          setContries([...contries])
        }else if(radio =='USA'){
            contries.sort((a)=>{
                return a.country
         })
         setContries([...contries])
        }else if(radio == 'UKR'){
            contries.sort((a)=>{
                return a.country
         })
            
        }
      },[radio])*/
  

    return(
        <div className="filter_module" onClick={()=>{setFilter(false)}}>
            <div className="filter_body" onClick={(event)=>{event.stopPropagation()}}>
            
                <label className='filter_input'><input type="radio"  defaultChecked={radio == 'GBR' ?true:false}  name="filter" value="GBR" onClick={()=>{setRadio('GBR')}}/><img className='filter_item_img' src='../img/gbr.jpg'></img><span>GBR</span></label>
                <label className='filter_input'><input type="radio"  defaultChecked={radio == 'USA' ?true:false}  name="filter" value="USA" onClick={()=>{setRadio('USA')}}/><img className='filter_item_img' src='../img/usa.jpg'></img><span>USA</span></label>
                <label className='filter_input'><input type="radio"  defaultChecked={radio == 'UKR' ?true:false}  name="filter" value="UKR" onClick={()=>{setRadio('UKR')}}/><img className='filter_item_img' src='../img/ukr.jpg'></img><span>UKR</span></label>
                <label className='filter_input'><input type="radio"  defaultChecked={radio == 'ITA' ?true:false}  name="filter" value="ITA" onClick={()=>{setRadio('ITA')}}/><img className='filter_item_img' src='../img/ita.jpg'></img><span>ITA</span></label>
                <label className='filter_input'><input type="radio"  defaultChecked={radio == 'SVN' ?true:false}  name="filter" value="SVN" onClick={()=>{setRadio('SVN')}}/><img className='filter_item_img' src='../img/svn.jpg'></img><span>SVN</span></label>
                <label className='filter_input'><input type="radio"  defaultChecked={radio == 'ETH' ?true:false}  name="filter" value="ETH" onClick={()=>{setRadio('ETH')}}/><img className='filter_item_img' src='../img/eth.jpg'></img><span>ETH</span></label>
                <label className='filter_input'><input type="radio"  defaultChecked={radio == 'FRA' ?true:false}  name="filter" value="FRA" onClick={()=>{setRadio('FRA')}}/><img className='filter_item_img' src='../img/fra.jpg'></img><span>FRA</span></label>
            </div>
        </div>
    )
}

export default Filter