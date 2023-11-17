import { useMemo } from "react"
import { NavLink } from "react-router-dom"
import { Icon } from "@iconify/react/dist/iconify.js"
import { ROUTES } from "../../../../lib/routes"
import { ICartItem } from "../../../../lib/interfaces"
import { ShoppingCartIcon } from "@heroicons/react/24/solid"
import { AuthModal } from "../../../Modal/AuthModal/AuthModal"


interface IMobileFooterProps {
    cart: ICartItem[]
    image: string
    isOpenAuth: boolean
    setIsOpenAuth: (value: boolean) => void
}

const activeCartStyle = 'flex items-center gap-2 rounded-lg px-2 py-1 h-[38px] relative'

export const MobileFooter: React.FC<IMobileFooterProps> = ({ cart, image, isOpenAuth, setIsOpenAuth }) => {
    const inCart = useMemo(() => cart.length > 0, [cart])

    return (
        <div className='flex sm:hidden items-center justify-between gap-4 fixed bottom-0 start-0 right-0 bg-amber-700 py-2 px-4 z-10'>
            <NavLink to={ROUTES.pizzas} className={({ isActive }) => isActive ? 'text-amber-400' : ''}>
                <Icon icon="game-icons:full-pizza" className="w-10 h-10" />
            </NavLink>
            <NavLink to={ROUTES.sushi} className={({ isActive }) => isActive ? 'text-amber-400' : ''}>
                <Icon icon="game-icons:sushis" className="w-10 h-10" />
            </NavLink>
            <NavLink
                to={ROUTES.cart}
                className={({ isActive }) =>
                    isActive ? activeCartStyle + ' text-amber-400' : activeCartStyle}>
                <ShoppingCartIcon className='w-8 h-8 -mb-2' />
                {inCart && <span className='absolute w-5 h-5 top-0 -right-1 rounded-full text-sm font-bold bg-white text-amber-800 grid place-items-center'>
                    {cart.reduce((acc, item) => acc + item.count, 0)}
                </span>}
            </NavLink>
            <button
                onClick={() => setIsOpenAuth(!isOpenAuth)}
                className='w-10'>
                <img src={image} alt={'cart'} className='border-2 rounded-full shadow-lg hover:shadow-sm' />
            </button>
            {isOpenAuth && <AuthModal onClose={() => setIsOpenAuth(false)} />}
        </div>
    )
}