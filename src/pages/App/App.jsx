import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../components/HomePage/HomePage";
import Nav from "../../components/Nav/Nav";
//import './App.css';
import '../../index.css';
import {ContextAwareToggle} from "../../components/MyLinks/MyLinks";
import { Links } from "../../components/MyLinks/MyLinks";
// import 'bootstrap/dist/css/bootstrap.min.css';


function App()
{
    return(
        <>
        <main>
        <Nav/>
        <Routes>
        <Route path = "/HomePage" element={<HomePage/>}/>
        <Route path = "/ContextAwareToggle" element={<ContextAwareToggle/>}/> 
        <Route path = "/Links" element={<Links/>} /> 
        <Route path = "/Game"/>


        </Routes>
        
        
        </main>
        </>
    );
}
export default App;