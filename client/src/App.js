import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter} from "react-router-dom";
import Rutas from "../src/Rutas"


function App() {
  return ( 
    <>
       
    <BrowserRouter>


        
        <Rutas/>
        
   
        

         

    </BrowserRouter>
  </> 
 
  );
}

export default App;
