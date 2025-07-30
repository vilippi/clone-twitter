import { House } from 'lucide-react';
import { User } from 'lucide-react';
import { Settings } from 'lucide-react';
import { Origami } from 'lucide-react';
import { LogOut } from 'lucide-react';
import { PencilLine } from 'lucide-react';

import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import MobileNav from '../components/common/MobileNav';

const MainLayout = ({ children }) => {

    const { user, logout } = useAuth()

    return (

        // Div que engloba tudo
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-12">
            
            {/* Sidebar Fixa a esquerda (Menu) */}
            <aside className="hidden md:block md:col-span-3 p-4 sticky top-0 h-screen dark:bg-neutral-700">
                <nav className="flex flex-col justify-between h-full">

                    {/* Topo: logo + links */}
                    <div className="flex flex-col">
                        <h1 className="text-3xl font-bold mb-6 flex items-center gap-2 dark:text-white">
                            <Origami size={35} /> Wapp
                        </h1>
                        <a href="/" className="w-fit inline-flex items-center font-semibold gap-2 px-4 py-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition dark:text-white">
                            <House /> Início
                        </a>
                        <Link to={`/profile/${user?.username}`} className="w-fit inline-flex items-center font-semibold gap-2 px-4 py-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition dark:text-white">
                            <User /> Perfil
                        </Link>
                        <a href="/configuracao" className="w-fit inline-flex items-center font-semibold gap-2 px-4 py-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition dark:text-white">
                            <Settings /> Configurações
                        </a>
                        <button
                            className="mt-4 inline-flex items-center justify-center gap-2 bg-blue-100 dark:bg-neutral-100 text-blue-600 dark:text-neutral-700 p-2 rounded-full font-medium hover:bg-blue-200 dark:hover:bg-blue-100 transition"
                        >
                            <PencilLine /> Postar
                        </button>
                    </div>

                    {/* Base: botão sair */}
                    <div>
                        <button
                            onClick={logout}
                            className="w-full mt-4 inline-flex items-center justify-center gap-2 bg-red-100 dark:bg-neutral-100 text-red-600 px-4 py-2 rounded-full font-medium hover:bg-red-200 transition"
                        >
                            <LogOut /> Sair
                        </button>
                    </div>

                </nav>
            </aside>

            {/* TimeLine (Conteudo Principal) */}
            <main className="col-span-1 md:col-span-6 p-4 bg-white dark:bg-neutral-700">
                {children}
            </main>

            <MobileNav />

            {/* Sidebar Fixa a esquerda (Trends) */}
            <aside className="hidden md:block md:col-span-3 p-4 dark:bg-neutral-700">
                <div className="space-y-4">
                    <h1 className="text-2xl font-bold mb-6 dark:text-white">Em breve</h1>
                    <p className=" dark:text-white">
                        Busca, tendências e sugestões de quem seguir serão adicionadas aqui.
                    </p>
                </div>
            </aside>

        </div>
    )
}

export default MainLayout
