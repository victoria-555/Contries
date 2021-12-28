import React ,{ useState } from 'react'
import Header from './Comp/Header'
import Main from './Comp/Main'
import './style/style.css'
import Footer from './Comp/Footer'
import UnionContext from './Comp/UnionContext'


function App() {
  const [radio, setRadio] = useState('')
 
  
  return (
    <div className="App">
     <UnionContext.Provider value={{radio, setRadio}}>
        <Header />  
        <Main />
        <Footer />
      </UnionContext.Provider>
      
    </div>
  );
}

export default App;
