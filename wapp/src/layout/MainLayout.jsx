import { House } from 'lucide-react';
import { User } from 'lucide-react';
import { Settings } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const MainLayout = ({ children }) => {

    const { user, logout } = useAuth()

    return (

        // Div que engloba tudo
        <div className="min-h-screen grid grid-cols-12">
            
            {/* Sidebar Fixa a esquerda (Menu) */}
            <aside className="col-span-3 p-4">
                <nav className="flex flex-col gap-4 sticky">
                    <h1 className="text-2xl font-bold mb-6">Wapp</h1>
                    <a href="/" className="flex items-center gap-2"> <House /> Inicío</a>
                    <Link to={`/profile/${user?.username}`} className="flex items-center gap-2"> <User/> perfil</Link>
                    <a href="/configuracao" className="flex items-center gap-2"> <Settings /> Configurações</a>
                    <button onClick={logout} className="mt-2 text-red-500 underline">Sair</button>
                </nav>
            </aside>

            {/* TimeLine (Conteudo Principal) */}
            <main className="col-span-6 p-4">
                {children}
            </main>

            {/* Sidebar Fixa a esquerda (Trends) */}
            <aside className="col-span-3 p-4">
                <div className="space-y-4">
                    <h1 className="text-2xl font-bold mb-6">Em breve</h1>
                    <p>
                        Busca, tendências e sugestões de quem seguir serão adicionadas aqui.
                    </p>
                </div>
            </aside>

        </div>
    )
}

export default MainLayout
