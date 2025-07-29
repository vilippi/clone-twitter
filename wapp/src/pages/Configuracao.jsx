import { NavLink, Outlet } from 'react-router-dom'
import SidebarLayout from '../layout/SidebarLayout'

const Configuracao = () => {

    return (
        <SidebarLayout>
            <div className="min-h-screen grid grid-cols-[250px_1fr]">

                {/* Sidebar esquerda */}
                <aside className="bg-white border-r border-l border-gray-300 p-4">
                    <h2 className="text-xl font-bold mb-6">Configurações</h2>

                    <nav className="flex flex-col gap-2 text-md font-medium">
                        <NavLink
                            to="/configuracao/conta"
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-lg transition ${
                                    isActive ? 'bg-gray-200 text-black' : 'hover:bg-gray-100'
                                }`
                            }
                        >
                            Sua conta
                        </NavLink>

                        <NavLink
                            to="/configuracao/acessibilidade"
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-lg transition ${
                                    isActive ? 'bg-gray-200 text-black' : 'hover:bg-gray-100'
                                }`
                            }
                        >
                            Acessibilidade e idiomas
                        </NavLink>

                        <NavLink
                            to="/configuracao/recursos-adicionais"
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-lg transition ${
                                    isActive ? 'bg-gray-200 text-black' : 'hover:bg-gray-100'
                                }`
                            }
                        >
                            Recursos adicionais
                        </NavLink>

                        <NavLink
                            to="/configuracao/ajuda"
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-lg transition ${
                                    isActive ? 'bg-gray-200 text-black' : 'hover:bg-gray-100'
                                }`
                            }
                        >
                            Central de Ajuda
                        </NavLink>
                    </nav>
                </aside>

                {/* Conteúdo à direita */}
                <main className="p-4">
                    <Outlet />
                </main>

            </div>
        </SidebarLayout>
    )
}

export default Configuracao
