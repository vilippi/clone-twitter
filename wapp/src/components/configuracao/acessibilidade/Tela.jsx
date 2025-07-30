import { useTheme } from "../../../context/ThemeContext";

const Tela = () => {

    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <div className="space-y-6 dark:bg-neutral-700">
            <h2 className="text-xl font-bold mb-2 dark:text-white">
                Acessibilidade
            </h2>
            <p className="text-md mb-6 text-black dark:text-white ">
                Personalize o modo de exibição do Wapp.
            </p>

            <div className="flex items-center justify-between bg-gray-100 dark:bg-neutral-800 p-4 rounded-lg">
                <span className="text-sm font-medium text-black dark:text-white">
                    Modo escuro
                </span>

                <button
                    onClick={toggleTheme}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition
                        ${isDarkMode
                            ? 'bg-blue-600 text-white hover:bg-blue-700'
                            : 'bg-white border text-gray-800 hover:bg-gray-100'}`}
                >
                    {isDarkMode ? 'Ativado' : 'Desativado'}
                </button>
            </div>
        </div>
    )
}

export default Tela
