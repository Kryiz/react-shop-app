import { Link } from "react-router-dom"
import { useActions } from "../../../hooks/action"
import { Portal } from "../Portal"
import { ROUTES } from "../../../lib/routes"

interface IAuthModalProps {
    onClose: () => void
}

export const AuthModal: React.FC<IAuthModalProps> = ({ onClose }) => {
    const { loginAsUser, loginAsAdmin, logout } = useActions()

    const handleClick = (fn: () => void) => {
        fn()
        onClose()
    }

    return (
        <Portal onClose={onClose}>
            <div
                onClick={onClose}
                className="fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-gray-800 opacity-50"></div>
            <div className={"fixed z-10 top-1/3 left-1/2 h-auto -translate-x-1/2 -translate-y-1/2 bg-white shadow-2xl transition-all duration-500 py-6 px-8 ease-linear rounded-lg"}>
                <h3 className="font-bold text-amber-700 text-2xl text-center mb-8">Авторизация</h3>
                <div className="flex flex-col gap-4">
                    <Link
                        to={ROUTES.profile}
                        onClick={() => handleClick(loginAsUser)}
                        className="text-center bg-amber-600 rounded-lg text-white shadow-md px-4 py-2 hover:bg-amber-700 hover:shadow transition-colors">
                        {'Зайти как Клиент'}
                    </Link>
                    <Link
                        to={ROUTES.profile}
                        onClick={() => handleClick(loginAsAdmin)}
                        className="text-center bg-amber-600 rounded-lg text-white shadow-md px-4 py-2 hover:bg-amber-700 hover:shadow transition-colors">
                        {'Зайти как Админ'}
                    </Link>
                    <Link
                        to={ROUTES.base}
                        onClick={() => handleClick(logout)}
                        className="text-center text-amber-600 rounded-lg bg-white shadow-md border border-amber-600 px-4 py-2 hover:shadow transition-colors">
                        {'Выйти'}
                    </Link>
                </div>
            </div>
        </Portal>
    )
}