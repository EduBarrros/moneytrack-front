import { Routes, Route, Navigate } from 'react-router-dom';

import { Login } from '../Pages/Login';
import { CreateUser } from '../Pages/CreateUser';
import { useAuthStore } from '../Store/auth';
import { Home } from '../Pages/Home';

export const MainRoutes = () => {
    
    const { isAuthenticated } = useAuthStore()

    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/Home' element={isAuthenticated ? <Home/> : <Navigate to="/" />} />
            <Route path='/CreateUser' element={<CreateUser />} />
        </Routes>
    )
}