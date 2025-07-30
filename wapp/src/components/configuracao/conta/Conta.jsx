import { Link } from 'react-router-dom'
import { Info, Key, Trash2 } from 'lucide-react'

const Conta = () => {
    return (
        <div className="space-y-6 dark:bg-neutral-700">
            <div>
                <h1 className="text-2xl font-bold mb-2 dark:text-white">Sua conta</h1>
                <p className="text-gray-600 text-sm max-w-2xl dark:text-white">
                    Veja informações sobre sua conta, edite seus dados, altere sua senha ou exclua sua conta permanentemente.
                </p>
            </div>

            <div className="space-y-4 dark:bg-neutral-700">

                <ItemLink
                    to="alterar-informacoes"
                    icon={<Info size={20} />}
                    title="Informações da conta"
                    description="Visualize e edite nome, e-mail ou telefone da sua conta."
                />

                <ItemLink
                    to="alterar-senha"
                    icon={<Key size={20} />}
                    title="Altere sua senha"
                    description="Altere sua senha a qualquer momento para manter sua conta segura."
                />

                <ItemLink
                    to="excluir-conta"
                    icon={<Trash2 size={20} />}
                    title="Excluir conta"
                    description="Descubra como excluir sua conta permanentemente do Wapp."
                />

            </div>
        </div>
    )
}

const ItemLink = ({ to, icon, title, description }) => (
    <Link
        to={`/configuracao/conta/${to}`}
        className="flex items-start gap-3 p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition dark:bg-neutral-800 dark:border-gray-800 dark:hover:bg-neutral-700"
    >
        <div className="text-gray-500 dark:text-white mt-1">{icon}</div>
        <div className="flex-1">
            <h3 className="font-semibold text-sm dark:text-white">{title}</h3>
            <p className="text-gray-600 dark:text-white text-xs">{description}</p>
        </div>
    </Link>
)

export default Conta