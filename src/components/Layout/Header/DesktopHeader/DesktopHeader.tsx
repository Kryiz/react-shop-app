import { Link, NavLink } from "react-router-dom"
import { ROUTES } from "../../../../lib/routes"
import { ICartItem } from "../../../../lib/interfaces";
import { Search } from "../Search/Search"
import { AuthModal } from "../../../Modal/AuthModal/AuthModal";
import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/solid"
import RPlogo from '../../../../assets/logo.png';

interface IDesktopHeaderProps {
    cart: ICartItem[]
    image: string
    isAdmin: boolean | undefined
    isOpenAuth: boolean
    setIsOpenAuth: (value: boolean) => void
}

export const DesktopHeader: React.FC<IDesktopHeaderProps> = ({ cart, image, isAdmin, isOpenAuth, setIsOpenAuth }) => {
    return (
        <div className='hidden md:flex irems-center justify-between gap-3 py-3'>
            <Link to={ROUTES.base}>
                <img src={RPlogo} className="w-28" alt='ReactPizza' />
            </Link>
            <Search />
            <div className='flex items-center gap-x-3 text-xl'>
                <NavLink
                    to={ROUTES.pizzas}
                    className={({ isActive, isPending }) =>
                        isPending ? 'font-medium' : isActive ? 'font-semibold' : ''}>Пицца
                </NavLink>
                <NavLink
                    to={ROUTES.sushi}
                    className={({ isActive, isPending }) =>
                        isPending ? 'font-medium' : isActive ? 'font-semibold' : ''}>Суши
                </NavLink>
                {isAdmin && <NavLink
                    to="todo"
                    className='flex items-center rounded-lg px-2 py-1 ms-4 h-[38px]'>
                    <HeartIcon className='w-8 h-8' />
                </NavLink>}
                <NavLink
                    to={ROUTES.cart}
                    className='flex items-center gap-2 rounded-lg px-2 py-1 h-[38px] relative'>
                    {'Корзина' + cart.length ?
                        <span className='absolute w-6 h-6 -top-2 -right-2 rounded-full text-sm font-bold bg-white text-amber-800 grid place-items-center pt-0.5'>
                            {cart.reduce((acc, item) => acc + item.count, 0)}
                        </span> : 0}
                    <ShoppingCartIcon className='w-8 h-8' />
                </NavLink>
                <button
                    onClick={() => setIsOpenAuth(!isOpenAuth)}
                    className='pb-2 ml-3 w-12'>
                    <img src={image} alt="" className='border-2 rounded-xl shadow-lg hover:shadow-sm' />
                </button>
                {isOpenAuth && <AuthModal onClose={() => setIsOpenAuth(false)} />}
            </div>
        </div>
    )
}