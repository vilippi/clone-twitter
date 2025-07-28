import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Login from '../pages/Login'
import { AuthProvider } from '../context/AuthContext'

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile/:username" element={<Profile />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}
