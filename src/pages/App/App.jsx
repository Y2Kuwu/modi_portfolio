import React from "react";
import { Routes, Route } from "react-router-dom";
import {HomePage} from "../../components/HomePage/HomePage";
import Nav from "../../components/Nav/Nav";
//import './App.css';
import '../../index.css';
import {ContextAwareToggle} from "../../components/MyLinks/MyLinks";
import { Links } from "../../components/MyLinks/MyLinks";
import Contact from "../../components/Contact/Contact";
// import Hide from "../../components/Funk/Funk";
import { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';



function App(props)
{
    const [hide, setHide] = useState(false);
    // const onClick = () => setHide(true);
   
    return(
       
        <main>
            
            
        <>
        <Nav/>
        <HomePage/>
        
        
        <Routes>
        {/* <Route path = "/HomePage" element={<HomePage/>}/> */}
        <Route path = "/ContextAwareToggle" element={<ContextAwareToggle/>}/> 
        <Route path = "/Links" onclick={hide} element={<Links/>} /> 
        <Route path = "/Contact" onclick={hide} element={<Contact/>} /> 
        <Route path = "/Game"/>
        {console.log(hide)}

        </Routes>
        {/* <Hide/> */}
     
             
        </>
        {/* {hide ? <HomePage hide={hide} setHide = {setHide}/> : null} */}
       
        </main>
    );
}
export default App;