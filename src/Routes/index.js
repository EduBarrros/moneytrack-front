import React from "react";
import { Routes ,Route } from 'react-router-dom';

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { CreateUser } from "../pages/CreateUser";

export const MainRoutes = () => {
   return(
       <Routes>
           <Route path='/' exact element={<Login/>} />
           <Route path='/Home' element={<Home/>} />
           <Route path='/Create' element={<CreateUser/>} />
       </Routes>
   )
}   