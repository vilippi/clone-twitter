import { useParams } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import Tweet from '../components/common/Tweet'

// Dados mockados
const userData = {
    name: 'Guiba Limpezas',
    username: 'guiba',
    avatar: 'https://i.pravatar.cc/150?img=3',
    bio: 'Criador do Wapp. 🚀 Apaixonado por tecnologia.',
    following: 123,
    followers: 456,
}

const tweets = [
    {
        username: 'guiba',
        name: 'Guiba Limpezas',
        avatar: 'https://i.pravatar.cc/150?img=3',
        content: 'Iniciando o desenvolvimento do Wapp!',
        timestamp: '1d',
    },
    {
        username: 'guiba',
        name: 'Guiba Limpezas',
        avatar: 'https://i.pravatar.cc/150?img=3',
        content: 'Tailwind é perfeito pra esse projeto 🔥',
        timestamp: '2d',
    },
]

const Profile = () => {
    const { username } = useParams()

    return (
        <MainLayout>

            {/* Header do perfil */}
            <div className="border-b border-gray-300 pb-6 mb-6">
                <div className="flex items-center gap-4">
                    <img
                        src={userData.avatar}
                        alt={userData.name}
                        className="w-20 h-20 rounded-full object-cover"
                    />
                    <div>
                        <h2 className="text-2xl font-bold">{userData.name}</h2>
                        <p className="text-gray-600">@{username}</p>
                        <p className="mt-2 text-sm text-gray-700">{userData.bio}</p>
                        <div className="flex gap-4 mt-2 text-sm">
                            <span><strong>{userData.following}</strong> seguindo</span>
                            <span><strong>{userData.followers}</strong> seguidores</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lista de tweets */}
            {tweets.map((tweet, index) => (
                <Tweet key={index} {...tweet} />
            ))}
            
        </MainLayout>
    )
}

export default Profile
