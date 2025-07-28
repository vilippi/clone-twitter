import Tweet from '../components/common/Tweet'
import MainLayout from '../layout/MainLayout'

// Tweets mockados
const tweets = [
    {
        username: 'vilippi',
        name: 'Vitor Lippi',
        avatar: 'https://i.pravatar.cc/150?img=1',
        content: 'Acabei de lançar meu novo projeto! 🚀 #Wapp',
        timestamp: '2h',
    },
    {
        username: 'kayquemb',
        name: 'Kayque Miqueias',
        avatar: 'https://i.pravatar.cc/150?img=2',
        content: 'Acordei inspirado(a) hoje! Bora codar! 💻',
        timestamp: '4h',
    },
    {
        username: 'guiba',
        name: 'Guilherme Carvalho',
        avatar: 'https://i.pravatar.cc/150?img=3',
        content: 'Primeira versão do Wapp no ar 🔥🔥',
        timestamp: '6h',
    },
]

const Home = () => {
    return (
        <MainLayout>
            <h1 className="text-2xl font-bold mb-6">Página Inicial</h1>

            <div className="max-w-xl">
                {tweets.map((tweet, index) => (
                    <Tweet key={index} {...tweet} />
                ))}
            </div>
        </MainLayout>
    )
}

export default Home
