import { ShoppingCartIcon } from "@heroicons/react/24/solid"

interface ICartButton {
    onClick: () => void
    message?: string
}

export const CartButton: React.FC<ICartButton> = ({ onClick, message }) => {
    return (
        <button
            onClick={onClick}
            className="w-full sm:w-fit flex items-center justify-center text-white bg-amber-600 transition-all border rounded-lg py-2 px-4 hover:bg-amber-700 shadow-md hover:shadow-sm duration-500">{message}
            <ShoppingCartIcon className={"w-6 h-6 " + (message ? 'ml-2' : '')} />
        </button>
    )
}