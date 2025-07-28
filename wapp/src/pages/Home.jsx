import { useState } from 'react'
import Tweet from '../components/common/Tweet'
import NovoTweet from '../components/home/NovoTweet'
import MainLayout from '../layout/MainLayout'

const Home = () => {

    const [tweets, setTweets] = useState([
        {
            username: 'guiba',
            name: 'Guiba Limpezas',
            avatar: 'https://i.pravatar.cc/150?img=3',
            content: 'Primeira versão do Wapp no ar 🔥🔥',
            timestamp: '1d',
        },
        {
            username: 'janesmith',
            name: 'Jane Smith',
            avatar: 'https://i.pravatar.cc/150?img=2',
            content: 'Curtindo esse novo app social 😎',
            timestamp: '2d',
        },
    ])

    const handleNovoTweet = (novoTweet) => {
        setTweets([novoTweet, ...tweets])
    }

    return (
        <MainLayout>
            <h1 className="text-2xl font-bold mb-6">Página Inicial</h1>

            <NovoTweet onPost={handleNovoTweet} />

            <div className="max-w-xl">
                {tweets.map((tweet, index) => (
                    <Tweet key={index} {...tweet} />
                ))}
            </div>
        </MainLayout>
    )
}

export default Home
