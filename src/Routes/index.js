import React, { useEffect } from "react";
import { Routes ,Route, Navigate } from 'react-router-dom';

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { CreateUser } from "../pages/CreateUser";
import { useStore } from "../store/auth";

export const MainRoutes = () => {

    const { isAuthenticated } = useStore()

   return(
       <Routes>
           <Route path='/' exact element={<Login/>} />
           <Route path='/Home' element={isAuthenticated ? <Home/> : <Navigate to="/" />} />
           <Route path='/CreateUser' element={<CreateUser/>} />
       </Routes>
   )
}   