import { SmallButton } from "../../UI/Buttons/SmallButton"
import { XMarkIcon } from '@heroicons/react/24/outline'

interface ICartCard {
    id: number
    name: string
    image: string
    price: number
    count: number
    incrementQuantity: (id: number) => void
    decrementQuantity: (params: { scenario: string, id: number }) => void
    removeItemFromCart: (id: number) => void
}

export const CartCard: React.FC<ICartCard> = ({ id, name, image, price, count, incrementQuantity, decrementQuantity, removeItemFromCart }) => {
    return (
        <div className="bg-gray-50 hover:bg-gray-100 rounded-lg px-7 py-3 flex flex-wrap items-center justify-between gap-4 shadow relative">
            <div className="flex items-center gap-2 grow-0">
                <img src={image} className="w-14 h-10 object-cover rounded-lg" alt={name} />
                <a href={`/product/${id}`} className="font-bold text-sm text-wrap hover:text-amber-600">{name}</a>
            </div>
            <div className="flex items-center gap-3 ml-auto">
                <div className="font-semibold">
                    {count * price + ' ₽'}
                </div>
                <div className="flex items-center gap-1">
                    <SmallButton onClick={() => decrementQuantity({ scenario: 'remove', id })} disabled={count === 1}>-</SmallButton>
                    <div className="flex flex-col text-center">
                        <span className="font-semibold w-8 leading-4">{count}</span>
                        <span className="text-xs leading-3">шт.</span>
                    </div>
                    <SmallButton onClick={() => incrementQuantity(id)}>+</SmallButton>
                </div>
            </div>
            <button
                onClick={() => removeItemFromCart(id)}
                className="absolute top-5 -left-3 bg-white hover:bg-red-300 hover:border-white border border-gray-100 p-1 rounded-3xl lh-1 cursor-pointer shadow-md hover:shadow-sm">
                <XMarkIcon className="w-4 h-4" />
            </button>
        </div>
    )
}