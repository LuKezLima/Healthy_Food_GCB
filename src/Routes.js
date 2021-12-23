import React from "react";
import {Routes, Route} from 'react-router-dom'

import LandingPage from "./views/LandingPage";
import Register from "./views/Register";

export default () => {
    return (
        <Routes>

        <Route exact path="/" element={<LandingPage/>}/>
  
        <Route exact path="/register" element={<Register/>}/>
       
        </Routes>
    )
}