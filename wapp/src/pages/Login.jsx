import { useState } from 'react'
import { useAuth } from '../context/AuthContext'

const Login = () => {
    const [username, setUsername] = useState('')
    const { login } = useAuth()

    const handleSubmit = (e) => {
        e.preventDefault()
        login(username)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Entrar no Wapp</h2>

                <input
                    type="text"
                    placeholder="Nome de usuário"
                    className="w-full border border-gray-300 p-2 rounded mb-4"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600"
                >
                    Entrar
                </button>
            </form>
        </div>
    )
    }

export default Login
