import React, { useState, Form } from 'react';
import './App.css';
import UserForm from './Components/UserForm';
import Results from './Components/Results';



function App() {
  const [state, setState] = useState({
    firstName: (""),
    lastName: (""),
    email: (""),
    password: (""),
    confirm: ("")
  });
    return (
    <div className="container">
      <div className="jumbotron bg-info text-light text-center"></div>
        <UserForm inputs={state} setInputs={setState} />
        <Results data={state} />
    </div>
  
 
      //newUser = {newUser}/>

   
    
    
    );
}


export default App;
