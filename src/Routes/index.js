import React from "react";
import { Routes ,Route } from 'react-router-dom';

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

export const MainRoutes = () => {
   return(
       <Routes>
           <Route path='/' exact element={<Login/>} />
           <Route path='/Home' element={<Home/>} />
       </Routes>
   )
}