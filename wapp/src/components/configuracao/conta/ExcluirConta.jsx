import { useState } from 'react'

const ExcluirConta = () => {
    const [confirmado, setConfirmado] = useState(false)
    const [mensagem, setMensagem] = useState('')

    const handleExcluirConta = () => {
        if (!confirmado) {
            setMensagem('Você precisa marcar a opção para confirmar.')
            return
        }

        // Aqui futuramente entra o envio real para excluir a conta
        setMensagem('Conta excluída com sucesso. (mock)')
    }

    return (
        <div className="space-y-6">
            <h2 className="text-xl font-bold mb-4 dark:text-white">Excluir conta</h2>
            <p className="text-md text-gray-700 mb-6 dark:text-white">
                Esta ação <strong>não pode ser desfeita</strong>. Isso excluirá permanentemente sua conta, tweets e dados associados ao Wapp.
            </p>

            <div className="space-y-4">
                <label className="inline-flex items-center dark:text-white">
                    <input
                        type="checkbox"
                        checked={confirmado}
                        onChange={() => setConfirmado(!confirmado)}
                        className="mr-2 "
                    />
                    Sim, desejo excluir minha conta permanentemente.
                </label>
            </div>

            {mensagem && (
                <div className="mb-4 text-sm font-medium text-red-600">{mensagem}</div>
            )}

            <button
                onClick={handleExcluirConta}
                className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 text-sm font-semibold transition"
            >
                Excluir conta
            </button>
        </div>
    )
}

export default ExcluirConta
