import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';
import React, { useState } from 'react';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
//   } from "react-router-dom";


function App() {
  
  const [mode, setMode] = useState('light');//whether darkmode is enabled or not {it is state} hum light mode bhi kr skte h yahan
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000

    );
    

  }
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-grey')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
  }
  const toggleMode =(cls)=>{
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode is enabled","success");
      // ye title wala tb kaam karega jb enable darkmode wala button kaam karega
      // document.title='textutils1-Dark mode';
      setInterval(()=>{
        document.title='textutils1 is amazing';

      },2000);
      setInterval(()=>{
        document.title=' install textutils1 ';

      },1500);      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode is enabled","success");
      // document.title='textutils1-light mode';
    }
  }
  return (
    <>
  {/* <Router> */}
    
<Navbar title="textutils2" abouttext="about"  mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>

<div className="container my-3">
{/* <Switch> */}
  {/* write exact is a good idea */}
          {/* <Route exact path="/about">
          <About />
          </Route>
           */}
          {/* <Route  exact path="/"> */}
          <TextForm  showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
            
          {/* </Route> */}
{/* </Switch> */}

</div>
{/* </Router> */}

    </>
    
    
    
  )
    
}



export default App;
