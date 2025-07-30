import { useState } from 'react'

const AlterarInformacoes = () => {
    const [username, setUsername] = useState('guiba')         // Mock inicial
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        // Simulação de envio
        setMensagem('Informações atualizadas com sucesso!')
    }

    return (
        <div className="space-y-6">
            <h2 className="text-xl font-bold mb-2 dark:text-white">Alterar informações</h2>
            <p className="text-md text-gray-600 mb-4 dark:text-white">
                Atualize seus dados de perfil como nome de usuário, celular e email.
            </p>

            {mensagem && (
                <div className="mb-4 text-sm text-green-600 font-medium">{mensagem}</div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">

                <div>
                    <label className="block text-md font-medium mb-1 dark:text-white">Nome de usuário</label>
                    <div className="w-100 flex items-center border rounded px-3 py-2 bg-white dark:bg-neutral-800 dark:border-neutral-600 text-sm">
                        <span className="text-gray-400 dark:text-gray-300 mr-1">@</span>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="flex-1 outline-none dark:text-white"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-md font-medium mb-1 dark:text-white">Celular</label>
                    <input
                        type="tel"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                        className="w-100 px-3 py-2 border rounded bg-white dark:bg-neutral-800 dark:border-neutral-600 text-sm"
                    />
                </div>

                <div>
                    <label className="block text-md font-medium mb-1 dark:text-white">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-100 px-3 py-2 border rounded bg-white dark:bg-neutral-800 dark:border-neutral-600 text-sm"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 text-sm font-semibold transition"
                >
                    Salvar alterações
                </button>
            </form>
        </div>
    )
}

export default AlterarInformacoes
