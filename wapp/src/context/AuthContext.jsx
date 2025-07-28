import { createContext, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

// Criação do contexto
const AuthContext = createContext()

// Provedor de autenticação
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    const login = (username) => {
        const mockUser = {
            name: username === 'guiba' ? 'Guiba Limpezas' : 'Usuário Genérico',
            username: username,
            avatar: 'https://i.pravatar.cc/150?img=3',
        }
        setUser(mockUser)
        navigate('/')
    }

    const logout = () => {
        setUser(null)
        navigate('/login')
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

// Hook para acessar o contexto
export const useAuth = () => useContext(AuthContext)
