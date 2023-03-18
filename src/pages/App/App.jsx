import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../components/HomePage/HomePage";
import Nav from "../../components/Nav/Nav";
//import './App.css';
import '../../index.css';
import {ContextAwareToggle} from "../../components/MyLinks/MyLinks";
import { Links } from "../../components/MyLinks/MyLinks";
import Contact from "../../components/Contact/Contact";
// import Hide from "../../components/Funk/Funk";
import { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';



function App()
{
    const [hide, setHide] = useState(false);
    // const onClick = () => setHide(true);
   
    return(
       
        <main>
            
            
        <>
        <Nav />
        
       
        
        <Routes>
        <Route path = "/HomePage" element={<HomePage/>}/>
        <Route path = "/ContextAwareToggle" element={<ContextAwareToggle/>}/> 
        <Route path = "/Links" element={<Links/>} /> 
        <Route path = "/Contact" element={<Contact/>} /> 
        {/* <Route path = "/Game"/> */}
        

        </Routes>
        {/* <Hide/> */}
     
             
        </>
        {/* {hide ? <HomePage hide={hide} setHide = {setHide}/> : null} */}
       
        </main>
    );
}
export default App;