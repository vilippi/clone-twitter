import { useState } from 'react'

const AlterarSenha = () => {
    const [senhaAtual, setSenhaAtual] = useState('')
    const [novaSenha, setNovaSenha] = useState('')
    const [confirmacao, setConfirmacao] = useState('')
    const [mensagem, setMensagem] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (novaSenha !== confirmacao) {
            setMensagem('As senhas não coincidem.')
            return
        }

        // Simula envio
        setMensagem('Senha alterada com sucesso!')
        setSenhaAtual('')
        setNovaSenha('')
        setConfirmacao('')
    }

    return (
        <div className="space-y-6">
            <h2 className="text-xl font-bold mb-2 dark:text-white">Alterar senha</h2>
            <p className="text-md text-gray-600 mb-6 dark:text-white">Mantenha sua conta segura trocando sua senha regularmente.</p>

            {mensagem && (
                <div className="mb-4 text-sm text-green-600 font-medium">{mensagem}</div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">

                <div>
                    <label className="block text-md font-medium mb-1 dark:text-white">Senha atual</label>
                    <input
                        type="password"
                        value={senhaAtual}
                        onChange={(e) => setSenhaAtual(e.target.value)}
                        className="w-100 px-3 py-2 border rounded bg-white dark:bg-neutral-800 dark:border-neutral-600 text-sm"
                        required
                    />
                    <a className="block text-sm font-small mt-1 dark:text-white">Esqueceu a sua senha?</a>
                </div>

                <div>
                    <label className="block text-md font-medium mb-1 dark:text-white">Nova senha</label>
                    <input
                        type="password"
                        value={novaSenha}
                        onChange={(e) => setNovaSenha(e.target.value)}
                        className="w-100 px-3 py-2 border rounded bg-white dark:bg-neutral-800 dark:border-neutral-600 text-sm"
                        required
                    />
                </div>

                <div>
                    <label className="block text-md font-medium mb-1 dark:text-white">Confirmar nova senha</label>
                    <input
                        type="password"
                        value={confirmacao}
                        onChange={(e) => setConfirmacao(e.target.value)}
                        className="w-100 px-3 py-2 border rounded bg-white dark:bg-neutral-800 dark:border-neutral-600 text-sm"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 text-sm font-semibold transition"
                >
                    Alterar senha
                </button>
            </form>
        </div>
    )
}

export default AlterarSenha
