import { Heart } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

const Tweet = ({ username, name, avatar, content, timestamp }) => {

    const { user } = useAuth()
    const [liked, setLiked] = useState(false)
    const [likes, setLikes] = useState(Math.floor(Math.random() * 100)) // mock de likes

    const toggleLike = () => {
        if (!user) return
        if (liked) {
            setLikes(likes - 1)
        } else {
            setLikes(likes + 1)
        }
        setLiked(!liked)
    }

    return (
        <div className="bg-white p-4 rounded-xl shadow-sm mb-4 flex gap-4">

            {/* Avatar */}
            <img
                src={avatar}
                alt={name}
                className="w-12 h-12 rounded-full object-cover"
            />

            {/* Conteúdo do tweet */}
            <div className="flex-1">
                <div className="flex items-center gap-2">
                    <span className="font-bold">{name}</span>
                    <span className="text-gray-500">@{username} · {timestamp}</span>
                </div>

                <p className="mt-1 text-gray-800">{content}</p>

                {/* Like */}
                <div className="mt-3 flex items-center gap-2 text-sm text-gray-600">
                    <button onClick={toggleLike} className="flex items-center gap-1 hover:text-red-500 transition">
                        <Heart size={18} fill={liked ? 'red' : 'none'} strokeWidth={2} />
                        {likes}
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Tweet