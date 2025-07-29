import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'

const MAX_CHARS = 280

const NovoTweet = ({ onPost }) => {
    const [conteudo, setConteudo] = useState('')
    const { user } = useAuth()

    const charsRestantes = MAX_CHARS - conteudo.length
    const corContador =
        charsRestantes < 0
            ? 'text-red-500'
            : charsRestantes <= 20
            ? 'text-yellow-500'
            : 'text-gray-500'


    const handlePost = () => {
        if (conteudo.trim() === '' || conteudo.length > MAX_CHARS) return

        const novoTweet = {
            username: user.username,
            name: user.name,
            avatar: user.avatar,
            content: conteudo,
            timestamp: 'agora',
        }

        onPost(novoTweet)
        setConteudo('')
    }

    return (
        <div className="bg-white border border-gray-300 rounded-xl p-4 mb-6">

            <textarea
                className="w-full resize-none border-none focus:ring-0 outline-none text-gray-800"
                rows={3}
                placeholder="O que está acontecendo?"
                value={conteudo}
                onChange={(e) => setConteudo(e.target.value)}
            />

            <hr className="my-3 border-t border-gray-300" />

            <div className="flex justify-between items-center mt-2">
                <span className={`text-sm ${corContador}`}>
                    {charsRestantes} caracteres restantes
                </span>

                <button
                    onClick={handlePost}
                    disabled={conteudo.trim() === '' || conteudo.length > MAX_CHARS}
                    className="bg-blue-500 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-600 transition disabled:bg-gray-400"
                >
                    Postar
                </button>
            </div>
            
        </div>
    )
}

export default NovoTweet
