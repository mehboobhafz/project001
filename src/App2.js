import React from 'react';
import './App.css'



function App2(props) {
    return(
        <div className = "App2Class">
            <h1>From App2 component using props </h1>
            <h2>My name is {props.myName} </h2>
        </div>
     
    )
    
}

export default App2;