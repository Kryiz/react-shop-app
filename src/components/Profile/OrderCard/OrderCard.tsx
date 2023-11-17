import { useState } from "react"
import { ICartItem, IUser } from "../../../lib/interfaces"

interface IOrderCardProps {
    user: IUser
    cart: ICartItem[]
    totalPrice: number
    timeStamp?: number
}

export const OrderCard: React.FC<IOrderCardProps> = ({ user, cart, totalPrice }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return (
        <div className="bg-gray-50 hover:bg-gray-100 rounded-lg px-7 py-3 shadow relative cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <div className="flex justify-between items-top gap-4">
                <div className="basis-1/3 font-semibold">
                    <div className="text-sm text-gray-400 mb-1">{'Оформлено на:'}</div>
                    <div>{user.name}</div>
                </div>
                <div className="basis-1/3 text-center font-semibold">
                    <div className="text-sm text-gray-400 mb-1">{'Товаров:'}</div>
                    <div>{cart.length + ' шт.'}</div>
                </div>
                <div className="basis-1/3 font-semibold text-end">
                    <div className="text-sm text-gray-400 mb-1">{'Сумма:'}</div>
                    <div>{totalPrice + ' ₽'}</div>
                </div>
            </div>
            {isOpen && <div>
                {cart.map(item =>
                    <div key={item.id} className="flex justify-between items-center gap-4 mt-2 mb-2">
                    <div className="basis-1/3">
                            {item.name}
                        </div>
                        <div className="basis-1/3 text-center">
                            {item.count + ' шт.'}
                        </div>
                        <div className="basis-1/3 text-end">
                            {item.price * item.count + ' ₽'}
                        </div>
                    </div>)}
            </div>}
        </div>
    )
}