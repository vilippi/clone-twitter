import { House, User, Plus, Settings } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const MobileNav = () => {
    const { user } = useAuth()

    return (
        <nav className="fixed bottom-0 left-0 w-full bg-white dark:bg-neutral-900 border-t border-gray-300 dark:border-neutral-700 flex justify-around items-center py-2 z-50 md:hidden">
            <Link to="/" className="text-gray-600 dark:text-white hover:text-primary">
                <House />
            </Link>
            <Link to="#" className="text-gray-600 dark:text-white hover:text-primary">
                <Plus />
            </Link>
            <Link to={`/profile/${user?.username}`} className="text-gray-600 dark:text-white hover:text-primary">
                <User />
            </Link>
            <Link to="/configuracao"  className="text-gray-600 dark:text-white hover:text-primary">
                <Settings />
            </Link>
        </nav>
    )
}

export default MobileNav
