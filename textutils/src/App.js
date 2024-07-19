import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{useState} from 'react';
import Alert from './Alert';

import{
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
   const[mode,setMode]=useState('light')
   const toggleMode=()=>{
    if(mode==='light'){
      setMode("dark")
      document.body.style.backgroundColor='#042743'
      // showAlert("dark mode has been enabled","success")
      // document.title='TextUtils Dark-mode'
    }
    else{
      setMode("light")
      document.body.style.backgroundColor='white'
      showAlert("light mode has been enabled","success")
      // document.title='Textutils-light-mode'
    }
   }
   const[alert,setAlert]=useState(null);
   const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type,
    })
    setTimeout(()=>{
        setAlert(null);
    },2000)
   }
  return (
    <>
<Router>
<Navbar title="Textutils" about="About" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
  
<Routes>
          <Route path="/about"
           element={<About mode={mode}/>}>
          </Route>
         
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter | Character Counter | Lowercase to Uppercase | Uppercase to Lowercase" mode={mode}/>} > 
           </Route>
</Routes> 
    
</div>
</Router>
</>
  );
}

export default App;
