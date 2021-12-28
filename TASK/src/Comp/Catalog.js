import  React,{ Fragment , useContext, useEffect, useState  } from 'react'
import '../style/catalog.css'
import Context from './Context'
import Contries from './Contries'
import Filter from './Filter'

import TotalSum from './TotalSum'
import data from './Data'
import Popap from './Popap'






function Catalog(){
    const [contries, setContries] = useState(data); 
    const [filter, setFilter] = useState(false)
    const [search, setSearch] = useState(false)
   
    const ul = React.useRef();


    function handleShow (event){
        const id = +event.target.dataset.id
    }


function heandlerNextPrev(direction){
        const ulHeight = ul.current.offsetHeight;
        const li = [...ul.current.getElementsByTagName('li')];
        const liFirst = li[0].offsetHeight;
        const liFirstitem = li[0];
        const liFirst_mb = parseInt(window.getComputedStyle(li[0]).getPropertyValue('margin-bottom'))
        const liFirstFull_Height = liFirst_mb + liFirst
    
      let liFirst_mt = Math.abs(parseInt(window.getComputedStyle(li[0]).getPropertyValue('margin-top')))
    
      let mt = 70;
      let breakPoint = li.length*liFirstFull_Height - ulHeight
    
      if(liFirst_mt < breakPoint - liFirstFull_Height ){
        mt =  liFirst_mt + liFirstFull_Height*(direction == 'prev'? -1 : 1);
      } 
      
      liFirstitem.style.marginTop = `-${mt}px` ;
} 

 

  return(
    <Fragment>


        <div className="main_filter">
         
          <div className="main_filter_name">
            <p>Country:</p>
            {filter == true? <button className="main_filter_btn" onClick={()=>{setFilter(false)}}>&#710;</button>
               
              :<button className="main_filter_btn" onClick={()=>{setFilter(true)}}>&#711;</button>}
          </div>

          <button className="main_search_input" name="serch_value" onClick={()=>{setSearch(true)}}>Click me</button>
            
            {search == true?<Popap setSearch={setSearch}/>:""}
  
            {filter == true? <Filter setFilter={setFilter}/> :''}
        </div>


          <div className="catalog_header">
            <div>column</div><div>column</div><div>column</div><div>column</div><div>A</div><div>B</div><div>column</div><div></div>
          </div>

          <div className="catalog">
            <ul ref={ul} className="catalog_items">
              <Context.Provider value={{contries, handleShow , setContries}}>
                 <Contries/> 
              </Context.Provider>
            </ul>  

            <div className="totalSum" >
              <TotalSum contries={contries}/>
            </div>
            <div className="main_nav">
                <button className="btn_prev" onClick={()=>{heandlerNextPrev('prev')}} ><span className="btn_arrow">&#8593;</span></button> 
                <button className="btn_next" onClick={()=>{heandlerNextPrev('next')}}><span className="btn_arrow">&#8595;</span></button>             
            </div>              
          </div>
    </Fragment>
  )
}



export default Catalog 