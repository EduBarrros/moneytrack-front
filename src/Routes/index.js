import React from "react";
import { Routes ,Route, Navigate } from 'react-router-dom';

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { CreateUser } from "../pages/CreateUser";

export const MainRoutes = () => {

    const auth = true

   return(
       <Routes>
           <Route path='/' exact element={<Login/>} />
           <Route path='/Home' element={auth ? <Home/> : <Navigate to="/" />} />
           <Route path='/CreateUser' element={<CreateUser/>} />
       </Routes>
   )
}   