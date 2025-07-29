import { useEffect, useState } from 'react'

const Tela = () => {

    // Função Dark Mode
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const saved = localStorage.getItem("darkMode");
        if (saved !== null) return saved === "true";
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("darkMode", "true");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("darkMode", "false");
        }
    }, [isDarkMode]);

    return (
        <div className="space-y-6 dark:bg-neutral-800">
            <h2 className="text-xl font-bold mb-2 dark:text-white">Acessibilidade</h2>
            <p className="text-md mb-6 text-black dark:text-white ">
                Personalize o modo de exibição do Wapp.
            </p>

            <div className="flex items-center justify-between bg-gray-100 dark:bg-neutral-800 p-4 rounded-lg">
                <span className="text-sm font-medium text-black dark:text-white">
                    Modo escuro
                </span>

                <button
                    onClick={() => setIsDarkMode(!isDarkMode)} 
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
