import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'

const NovoTweet = ({ onPost }) => {
    const [conteudo, setConteudo] = useState('')
    const { user } = useAuth()

    const handlePost = () => {
        if (conteudo.trim() === '') return

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

            <div className="flex justify-end mt-2">
                <button
                    onClick={handlePost}
                    className="bg-blue-500 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-600 transition"
                >
                    Postar
                </button>
            </div>
            
        </div>
    )
}

export default NovoTweet
