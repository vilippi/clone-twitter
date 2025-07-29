import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Login from '../pages/Login'
import { AuthProvider } from '../context/AuthContext'
import Configuracao from '../pages/Configuracao'
import Conta from '../components/configuracao/conta/Conta'
import AlterarSenha from '../components/configuracao/conta/AlterarSenha'
import DesativarConta from '../components/configuracao/conta/ExcluirConta'
import AlterarInformacoes from '../components/configuracao/conta/AlterarInformacoes'
import Tela from '../components/configuracao/acessibilidade/Tela'

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/login" element={<Login />} />

                    <Route path="/" element={<Home />} />
                    <Route path="/profile/:username" element={<Profile />} />

                    {/* Configuração com layout persistente em COnfigurações */}
                    <Route path="/configuracao" element={<Configuracao />}>

                        {/* Rota da Conta */}
                        <Route path="conta" element={<Conta />} />
                        {/* Sub Rotas de  Conta*/}
                        <Route path="conta/alterar-senha" element={<AlterarSenha />} />
                        <Route path="conta/excluir-conta" element={<DesativarConta />} />
                        <Route path="conta/alterar-informacoes" element={<AlterarInformacoes />} />

                        <Route path="acessibilidade" element={<Tela />}></Route>
                    </Route>

                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}
